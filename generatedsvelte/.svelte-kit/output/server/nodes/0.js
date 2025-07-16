

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D-eUFdzF.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Dv0Evytc.js"];
export const stylesheets = ["_app/immutable/assets/0.cfHzFZMR.css"];
export const fonts = [];
