if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let n={};const u=e=>i(e,t),a={module:{uri:t},exports:n,require:u};r[t]=Promise.all(s.map((e=>a[e]||u(e)))).then((e=>(o(...e),n)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"appvuepwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/aepereyra93.github.io/css/app.67bdcd46.css",revision:null},{url:"/aepereyra93.github.io/index.html",revision:"b3560fed562d713a3d73d043e695bbd2"},{url:"/aepereyra93.github.io/js/about.a77a106a.js",revision:null},{url:"/aepereyra93.github.io/js/app.d1d4369a.js",revision:null},{url:"/aepereyra93.github.io/js/chunk-vendors.ef648122.js",revision:null},{url:"/aepereyra93.github.io/manifest.json",revision:"151a5184f9729d70f329bb8a0b8d2d0d"},{url:"/aepereyra93.github.io/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
