import * as server from '../entries/pages/photos/_page.server.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/photos/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/photos/_page.svelte-a427934e.js';
export { server };
export const imports = ["_app/immutable/components/pages/photos/_page.svelte-a427934e.js","_app/immutable/chunks/index-e54d2aa0.js"];
export const stylesheets = ["_app/immutable/assets/_page-4fb6a46d.css"];
