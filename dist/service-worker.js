(()=>{"use strict";var e=null;try{e="6.7.2023/15:53:3"}catch(t){e=Date.now()}var t="belgrade.plus/"+e,a=["/","/map","/settings"],n=[{'revision':null,'url':'03279b9252cd001f20a2.png'},{'revision':null,'url':'2b3e1faf89f94a483539.png'},{'revision':null,'url':'300dd2646bba906a322f.woff2'},{'revision':null,'url':'416d91365b44e4b4f477.png'},{'revision':null,'url':'468893dc6cc99861e6fb.woff2'},{'revision':null,'url':'583cbe0cf35fc1181333.svg'},{'revision':null,'url':'6fe8e58a0d8392b8c499.woff2'},{'revision':null,'url':'716869dfd6fb2f8f5717.woff2'},{'revision':null,'url':'76d08677caaab46fcb44.woff2'},{'revision':null,'url':'8f2c4d11474275fbc161.png'},{'revision':null,'url':'busplus.bundle.297b126fd2096f950f00.js'},{'revision':null,'url':'busplus.bundle.d0e3e91b1a272f032649.js'},{'revision':null,'url':'e3cafd29639c4f19cbcb.png'},{'revision':'4d8858e46bcdee131a2d9e9c65cf328a','url':'favicon.ico'},{'revision':'45c7c5dfdd20b2dba5892d6efca1d391','url':'favicon.png'},{'revision':'9c72177c94c6783dd8001e0759fef46c','url':'icons/app-icon-any@192.png'},{'revision':'ac720780a9ea3ef17edab645d6b11fa2','url':'icons/app-icon-any@192.webp'},{'revision':'46bf88464e30df332b342f0203836c5d','url':'icons/app-icon-any@512.png'},{'revision':'7b63f34feddb8c9ae82c87d48f480ec1','url':'icons/app-icon-any@512.webp'},{'revision':'f5bae5032f94803d2d6ae57c05c5d010','url':'icons/app-icon-apple@180.png'},{'revision':'2a8a85f8dabbcea82b97306912e8b5a9','url':'icons/app-icon-maskable@512.png'},{'revision':'90e18ec4c2af7db929c461424e215ef5','url':'icons/app-icon-maskable@512.webp'},{'revision':'163dc4206deabeec49ec6a84a15a0d9e','url':'icons/app-icon@512.png'},{'revision':'ff3ce927dbffce9a8802e3208d93937a','url':'icons/app-icon@512.webp'},{'revision':null,'url':'main.a2f0bf28ed2636a7de01.css'},{'revision':'643d98b84262c2c238b8eb6e67713b64','url':'manifest.json'}];n&&n.forEach((e=>{a.push(e.url)})),self.addEventListener("install",(function(e){e.waitUntil(caches.open(t).then((function(e){return e.addAll(a)})))})),self.addEventListener("activate",(function(e){return e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==t&&"belgrade.plus/map-tiles"!==e)return caches.delete(e)})))}))),self.clients.claim()})),self.addEventListener("fetch",(async function(e){e.respondWith(async function(e){if(!e.url.includes("tileserver.memomaps.de"))return await caches.match(e,{ignoreSearch:!0})||await fetch(e);try{const t=await fetch(e),a=await caches.open("belgrade.plus/map-tiles");return await a.put(e,t.clone()),t}catch(t){return await caches.match(e)}}(e.request))}))})();