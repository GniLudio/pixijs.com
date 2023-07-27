"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={hide_table_of_contents:!0},i="Pointer Tracker",c={unversionedId:"examples/events/pointer-tracker",id:"examples/events/pointer-tracker",title:"Pointer Tracker",description:"",source:"@site/docs/examples/events/pointer-tracker.md",sourceDirName:"examples/events",slug:"/examples/events/pointer-tracker",permalink:"/examples/events/pointer-tracker",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/events/pointer-tracker.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Nested Boundary With Projection",permalink:"/examples/events/nested-boundary-with-projection"},next:{title:"Slider",permalink:"/examples/events/slider"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pointer-tracker"},"Pointer Tracker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\n// In this a example, a circle will follow the pointer wherever it\n// moves over the canvas.\n\nconst app = new PIXI.Application({\n    antialias: true,\n    background: '#1099bb',\n});\n\ndocument.body.appendChild(app.view);\n\n// Create the circle\nconst circle = app.stage.addChild(new PIXI.Graphics()\n    .beginFill(0xffffff)\n    .lineStyle({ color: 0x111111, alpha: 0.87, width: 1 })\n    .drawCircle(0, 0, 8)\n    .endFill());\n\ncircle.position.set(app.screen.width / 2, app.screen.height / 2);\n\n// Enable interactivity!\napp.stage.eventMode = 'static';\n\n// Make sure the whole canvas area is interactive, not just the circle.\napp.stage.hitArea = app.screen;\n\n// Follow the pointer\napp.stage.addEventListener('pointermove', (e) =>\n{\n    circle.position.copyFrom(e.global);\n});\n")))}u.isMDXComponent=!0}}]);