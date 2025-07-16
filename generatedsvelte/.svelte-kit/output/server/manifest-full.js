export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alumni_summit_2025.png","cover-image-blog-11.jpg","favicon.png","frame-9.png","rocket-chat-funding.png","security-bundle-ilustra.jpg","whatsapp-safe-secure-message-blog.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Bzttpmjq.js",app:"_app/immutable/entry/app.ldeiOnK8.js",imports:["_app/immutable/entry/start.Bzttpmjq.js","_app/immutable/chunks/BrlrnhKv.js","_app/immutable/chunks/BiglnQXp.js","_app/immutable/chunks/Dv0Evytc.js","_app/immutable/entry/app.ldeiOnK8.js","_app/immutable/chunks/Dv0Evytc.js","_app/immutable/chunks/BiglnQXp.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/ElaJpk7g.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/alumni-summit",
				pattern: /^\/alumni-summit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/community",
				pattern: /^\/community\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/leaderboard",
				pattern: /^\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
