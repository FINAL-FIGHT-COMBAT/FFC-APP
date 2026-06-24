import { Context, Next } from 'hono';
import { verify } from 'hono/jwt';
import { error } from '../utils/response';

/**
 * verifyRole - Middleware para Role-Based Access Control (RBAC)
 * @param allowedRoles Lista de cargos permitidos (ex: ['admin', 'partner'])
 */
export const verifyRole = (allowedRoles: string[]) => {
	return async (c: Context, next: Next) => {
		try {
			const authHeader = c.req.header('Authorization');
			if (!authHeader || !authHeader.startsWith('Bearer ')) {
				return error(c, 'Acesso negado: Token de autorização não fornecido.', null, 401);
			}

			const token = authHeader.split(' ')[1];
			const payload = await verify(token, c.env.JWT_SECRET, 'HS256');

			// Extrai o role do payload do JWT
			const userRole = (payload.role as string) || 'citizen';

			// Verifica se o role do usuário está na lista de permitidos
			if (!allowedRoles.includes(userRole)) {
				return error(
					c,
					`Acesso negado: Seu cargo (${userRole}) não tem permissão para realizar esta ação. Requerido: [${allowedRoles.join(
						', ',
					)}]`,
					null,
					403,
				);
			}

			// Injeta o payload no contexto para uso posterior (opcional)
			c.set('jwtPayload', payload);

			await next();
		} catch (err: any) {
			console.error('🚨 RBAC Auth Error:', err);
			return error(c, 'Sessão inválida ou expirada. Efetue login novamente.', null, 401);
		}
	};
};
