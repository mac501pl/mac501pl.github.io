export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.ico","image.webp","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"start-9030b339.js","js":["start-9030b339.js","chunks/vendor-a1cd37bf.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio",
				pattern: /^\/portfolio\/?$/,
				names: [],
				types: [],
				path: "/portfolio",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "skills",
				pattern: /^\/skills\/?$/,
				names: [],
				types: [],
				path: "/skills",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
