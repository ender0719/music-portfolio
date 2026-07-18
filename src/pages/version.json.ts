import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => new Response(JSON.stringify({
  version: import.meta.env.PUBLIC_ASSET_VERSION || 'local',
}), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
