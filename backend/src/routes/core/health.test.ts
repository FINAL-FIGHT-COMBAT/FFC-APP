import { describe, it, expect } from 'vitest';
import { app } from '../../index';

describe('Backend Health Check', () => {
	it('should return 200 OK on /api/core/health', async () => {
		// Mocking Cloudflare Bindings for Hono
		const res = await app.fetch(
			new Request('http://localhost/api/core/health'),
			{
				DB: { prepare: () => ({ bind: () => ({ first: () => ({}) }) }) },
				KV_AUTH: {},
				KV_CACHE: {},
				STORAGE: {},
			} as any,
			{ waitUntil: () => {}, passThroughOnException: () => {} } as any,
		);

		expect(res.status).toBe(200);
		const body = await res.json();
		expect(body).toHaveProperty('status', 'ok');
	});
});
