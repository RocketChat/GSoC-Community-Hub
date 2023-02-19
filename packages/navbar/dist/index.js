'use strict';

var v = require('react');
var a = require('@radix-ui/react-navigation-menu');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var v__namespace = /*#__PURE__*/_interopNamespaceDefault(v);
var a__namespace = /*#__PURE__*/_interopNamespaceDefault(a);

var M=Object.defineProperty,P=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var g=(t,e,i)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,s=(t,e)=>{for(var i in e||(e={}))p.call(e,i)&&g(t,i,e[i]);if(f)for(var i of f(e))c.call(e,i)&&g(t,i,e[i]);return t},u=(t,e)=>P(t,y(e));var d=(t,e)=>{var i={};for(var o in t)p.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&f)for(var o of f(t))e.indexOf(o)<0&&c.call(t,o)&&(i[o]=t[o]);return i};function r(...t){return tailwindMerge.twMerge(clsx.clsx(t))}var C=v__namespace.forwardRef((n,o)=>{var l=n,{className:t,children:e}=l,i=d(l,["className","children"]);return jsxRuntime.jsxs(a__namespace.Root,u(s({ref:o,className:r("relative z-10 flex flex-1 items-center justify-center",t)},i),{children:[e,jsxRuntime.jsx(N,{})]}))});C.displayName=a__namespace.Root.displayName;var k=v__namespace.forwardRef((o,i)=>{var n=o,{className:t}=n,e=d(n,["className"]);return jsxRuntime.jsx(a__namespace.List,s({ref:i,className:r("group flex flex-1 list-none items-center justify-center",t)},e))});k.displayName=a__namespace.List.displayName;var G=a__namespace.Item,I=classVarianceAuthority.cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 dark:focus:bg-slate-800 disabled:pointer-events-none bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800 data-[active]:bg-slate-50 dark:data-[active]:bg-slate-800 h-10 py-2 px-4 group w-max"),L=v__namespace.forwardRef((n,o)=>{var l=n,{className:t,children:e}=l,i=d(l,["className","children"]);return jsxRuntime.jsxs(a__namespace.Trigger,u(s({ref:o,className:r(I(),"group",t)},i),{children:[e," ",jsxRuntime.jsx(lucideReact.ChevronDown,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}))});L.displayName=a__namespace.Trigger.displayName;var T=v__namespace.forwardRef((o,i)=>{var n=o,{className:t}=n,e=d(n,["className"]);return jsxRuntime.jsx(a__namespace.Content,s({ref:i,className:r("top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 md:absolute md:w-auto ",t)},e))});T.displayName=a__namespace.Content.displayName;var H=a__namespace.Link,N=v__namespace.forwardRef((o,i)=>{var n=o,{className:t}=n,e=d(n,["className"]);return jsxRuntime.jsx("div",{className:r("absolute left-0 top-full flex justify-center"),children:jsxRuntime.jsx(a__namespace.Viewport,s({className:r("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95 dark:border-slate-700 dark:bg-slate-800 md:w-[var(--radix-navigation-menu-viewport-width)]",t),ref:i},e))})});N.displayName=a__namespace.Viewport.displayName;var V=v__namespace.forwardRef((o,i)=>{var n=o,{className:t}=n,e=d(n,["className"]);return jsxRuntime.jsx(a__namespace.Indicator,u(s({ref:i,className:r("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out",t)},e),{children:jsxRuntime.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800"})}))});V.displayName=a__namespace.Indicator.displayName;

exports.NavigationMenu = C;
exports.NavigationMenuContent = T;
exports.NavigationMenuIndicator = V;
exports.NavigationMenuItem = G;
exports.NavigationMenuLink = H;
exports.NavigationMenuList = k;
exports.NavigationMenuTrigger = L;
exports.NavigationMenuViewport = N;
exports.navigationMenuTriggerStyle = I;
