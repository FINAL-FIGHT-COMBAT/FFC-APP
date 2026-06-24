import { Hono } from 'hono';
import { sql, desc } from 'drizzle-orm';
import { treasuryLedger } from '../../db/schema';
import { verifyRole } from '../../middleware/rbac';
import { Bindings } from '../../types/bindings';
import { success, error } from '../../utils/response';

type AppType = { Bindings: Bindings; Variables: { db: any; jwtPayload?: any } };

const treasury = new Hono<AppType>();

// 1. Métricas Globais da Tesouraria
treasury.get('/metrics', async (c) => {
	const db = c.get('db');
	try {
		// Computar saldo total (Inbound - Outbound)
		const stats = await db
			.select({
				totalInbound: sql<number>`SUM(CASE WHEN ${treasuryLedger.type} = 'inbound' THEN ${treasuryLedger.amountCents} ELSE 0 END)`,
				totalOutbound: sql<number>`SUM(CASE WHEN ${treasuryLedger.type} = 'outbound' THEN ${treasuryLedger.amountCents} ELSE 0 END)`,
			})
			.from(treasuryLedger);

		const result = stats[0];
		const balance = (result.totalInbound || 0) - (result.totalOutbound || 0);

		return success(c, 'Métricas da tesouraria computadas.', {
			tvl: balance / 100, // Converte centavos para reais
			monthlyFlow: (result.totalInbound || 0) / 100,
			currency: 'BRL',
		});
	} catch (err: any) {
		return error(c, 'Falha ao processar métricas financeiras.', err.message, 500);
	}
});

// 2. Histórico de Transações
treasury.get('/transactions', async (c) => {
	const db = c.get('db');
	try {
		const transactions = await db
			.select()
			.from(treasuryLedger)
			.orderBy(desc(treasuryLedger.createdAt))
			.limit(50);

		return success(c, 'Histórico de transações recuperado.', transactions);
	} catch (err: any) {
		return error(c, 'Falha ao buscar histórico financeiro.', err.message, 500);
	}
});

// 3. Registrar Movimentação (Admin Only)
treasury.post('/transactions', verifyRole(['admin']), async (c) => {
	const db = c.get('db');
	const { type, category, amountCents, description, txHash } = await c.req.json();

	if (!type || !amountCents || !description) {
		return error(c, 'Campos obrigatórios ausentes.', null, 400);
	}

	try {
		const [newTx] = await db
			.insert(treasuryLedger)
			.values({
				type,
				category,
				amountCents,
				description,
				txHash,
				status: 'completed',
			})
			.returning();

		return success(c, 'Transação registrada com sucesso.', newTx, 201);
	} catch (err: any) {
		return error(c, 'Erro ao persistir transação.', err.message, 500);
	}
});

// 4. Analytics para o Dashboard Vincit Ledger
treasury.get('/analytics', async (c) => {
	const db = c.get('db');
	const { year } = c.req.query();
	
	try {
		// Filtro de data se fornecido
		const dateFilter = year && year !== 'Todos' 
			? sql`strftime('%Y', datetime(${treasuryLedger.createdAt}, 'unixepoch')) = ${year}` 
			: sql`1=1`;

		// A. Summary Stats (Inbound focus)
		const statsResult = await db
			.select({
				totalInflow: sql<number>`SUM(${treasuryLedger.amountCents})`,
				avgTicket: sql<number>`AVG(${treasuryLedger.amountCents})`,
				count: sql<number>`COUNT(*)`,
			})
			.from(treasuryLedger)
			.where(sql`${treasuryLedger.type} = 'inbound' AND ${dateFilter}`);

		const stats = statsResult[0];
		const monthExpr = sql`strftime('%m', datetime(${treasuryLedger.createdAt}, 'unixepoch'))`;

		// B. Website Visits (Monthly Trend - Inbound para visualização de faturamento)
		const monthlyTrend = await db
			.select({
				month: monthExpr,
				total: sql<number>`SUM(${treasuryLedger.amountCents})`,
			})
			.from(treasuryLedger)
			.where(sql`${treasuryLedger.type} = 'inbound' AND ${dateFilter}`)
			.groupBy(monthExpr)
			.orderBy(monthExpr);

		// D. Latest Transactions (Ledger) - Ordenação ASC conforme solicitado
		const latestTx = await db
			.select()
			.from(treasuryLedger)
			.where(dateFilter)
			.orderBy(sql`${treasuryLedger.createdAt} ASC`);

		// Buscar anos disponíveis
		const yearResults = await db
			.select({
				year: sql`strftime('%Y', datetime(${treasuryLedger.createdAt}, 'unixepoch'))`,
			})
			.from(treasuryLedger)
			.groupBy(sql`strftime('%Y', datetime(${treasuryLedger.createdAt}, 'unixepoch'))`)
			.orderBy(sql`strftime('%Y', datetime(${treasuryLedger.createdAt}, 'unixepoch')) DESC`);

		const availableYears = ['Todos', ...yearResults.map((y: any) => y.year)];

		// Processamento Dinâmico
		const recipientMap: Record<string, number> = {};
		
		const processedTransactions = latestTx.map((tx: any) => {
			const descText = tx.description || '';
			
			let favored = 'Sistema';
			let originBank = 'N/A';
			let destinationBank = 'N/A';

			if (descText.includes('|')) {
				const parts = descText.split('|');
				
				const payerPart = parts.find((p: string) => p.toLowerCase().includes('pagador:'));
				if (payerPart) {
					originBank = payerPart.match(/\(([^)]+)\)/)?.[1] || 'N/A';
				}

				const favoredPart = parts.find((p: string) => p.toLowerCase().includes('favorecido:'));
				if (favoredPart) {
					const rawFavored = favoredPart.replace(/favorecido:/i, '').trim();
					favored = rawFavored.split('(')[0]?.trim();
					destinationBank = rawFavored.match(/\(([^)]+)\)/)?.[1] || 'N/A';
				}
			}

			const refMatch = descText.match(/referencia:\s*([^\s|]+)/i) || descText.match(/ref:\s*([^\s|]+)/i);
			const documentName = refMatch ? refMatch[1] : null;

			// Computar Distribuição (Baseado em Inbound agora)
			if (tx.type === 'inbound' && favored !== 'Sistema') {
				recipientMap[favored] = (recipientMap[favored] || 0) + tx.amountCents;
			}

			const method = descText.toLowerCase().includes('pix') ? 'pix' : (descText.toLowerCase().includes('boleto') ? 'boleto' : 'ted');
			const isRecurring = descText.toLowerCase().includes('mensalidade') || descText.toLowerCase().includes('recorrente');

			// Correção da Data: SQLite strftime('%s') retorna segundos. JS precisa de milissegundos.
			const rawDate = tx.createdAt;
			let dateObj: Date;

			if (typeof rawDate === 'number') {
				const timestamp = rawDate < 100000000000 ? rawDate * 1000 : rawDate;
				dateObj = new Date(timestamp);
			} else {
				dateObj = new Date(rawDate);
			}

			return {
				id: tx.id.toString(),
				tenant_id: 'ffc',
				version: 1,
				created_at: dateObj.toISOString(),
				updated_at: dateObj.toISOString(),
				processed_at: tx.status === 'completed' ? dateObj.toISOString() : null,
				amount: tx.amountCents,
				currency: tx.currency || 'BRL',
				base_currency: 'BRL',
				base_amount: tx.amountCents,
				exchange_rate: 1,
				type: tx.type === 'inbound' ? 'income' : 'expense',
				direction: tx.type as 'inbound' | 'outbound',
				category: tx.category || 'other',
				tags: isRecurring ? ['recorrente', method] : [method],
				payer_id: tx.type === 'inbound' ? 'external' : 'ffc',
				recipient_id: tx.type === 'outbound' ? 'external' : 'ffc',
				counterparty_name: favored,
				origin_institution: originBank,
				destination_institution: destinationBank,
				payment_method: method,
				external_reference: tx.txHash,
				status: tx.status === 'completed' ? 'confirmed' : (tx.status === 'failed' ? 'failed' : 'pending'),
				reconciliation_status: 'matched',
				risk_score: {
					level: tx.amountCents > 1000000 ? 'medium' : 'low',
					score: tx.amountCents > 1000000 ? 45 : 10,
				},
				integrity_hash: `sha256:${tx.id}x${tx.createdAt}`,
				documents: documentName ? [{ id: `doc_${tx.id}`, type: 'receipt', name: documentName, verified: true }] : [],
				ai_flags: isRecurring ? [{ type: 'recurring', confidence: 0.98 }] : [],
				source_channel: 'ocr_import',
				notes: tx.description,
			};
		});

		const totalValue = Object.values(recipientMap).reduce((a, b) => a + b, 0);
		const distribution = Object.entries(recipientMap)
			.map(([label, value]) => ({
				label,
				value: totalValue > 0 ? Number(((value / totalValue) * 100).toFixed(1)) : 0
			}))
			.sort((a, b) => b.value - a.value)
			.slice(0, 4);

		const topRecipient = distribution.length > 0 ? distribution[0].label : 'N/A';

		return success(c, 'Dados de analytics recuperados.', {
			summary: {
				totalInflow: (stats.totalInflow || 0) / 100,
				avgTicket: (stats.avgTicket || 0) / 100,
				count: stats.count || 0,
				topRecipient,
			},
			monthlyTrend: monthlyTrend.map((m: any) => ({
				month: m.month,
				total: m.total / 100,
			})),
			distribution,
			availableYears,
			transactions: processedTransactions,
		});
	} catch (err: any) {
		return error(c, 'Falha ao processar analytics financeiro.', err.message, 500);
	}
});

export default treasury;
