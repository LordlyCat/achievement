"use strict";var precacheConfig=[["./index.html","66f778b5d6fd529589c736bd67a02081"],["./static/css/main.b6094569.css","d615b00985d5f528d4c9622015464b31"],["./static/js/main.b58ed775.js","747931031f4c55f79582d60ad3a6b033"],["./static/media/HYHeiLiZhiTiJ.adcd3086.ttf","adcd30863cd8fbab2059909773beb780"],["./static/media/back.5db880a7.png","5db880a7d8850ad2df6528a561e5196e"],["./static/media/background.6fb69d74.png","6fb69d7403fc2e27138c3c21d60dcf98"],["./static/media/border.d6f8ee38.png","d6f8ee38db179b9fe0239847d1af3199"],["./static/media/chooseBackground.dbd8e43a.png","dbd8e43ac2411447fb3e1f739de1896f"],["./static/media/class.d40e5591.png","d40e559128149e9cf1dcc03e4150dd68"],["./static/media/classBackground.cec09811.png","cec0981168c33fe72209dda54ef53fd1"],["./static/media/class_1.f1aa7d1e.png","f1aa7d1ed5fb0cf10965394fb2ca55d4"],["./static/media/congratulation_0.03b3ad56.png","03b3ad5634bf6ee9654c35bfb6c2261a"],["./static/media/congratulation_1.a51d7815.png","a51d78155a015ba8728c9f38789c5de1"],["./static/media/continue.1e5c45b2.png","1e5c45b28b43e7b8ce909ce04c742949"],["./static/media/course.7aabc119.png","7aabc119750133c59154c9ab45946b70"],["./static/media/courseBoard.c2eaece2.png","c2eaece2b5148ffc4a9b31133c25dd95"],["./static/media/gsdg.cfc07335.png","cfc073352b65444db0ec8b2a787b6424"],["./static/media/gsdgTitle.e0cc7524.png","e0cc7524b00746704d3e065ce0f581c8"],["./static/media/my.c740af14.png","c740af1434a55f893cf342a6578b052d"],["./static/media/myAchievementBackground.0df2a89d.png","0df2a89dfff90d3b41eeb8bb57dda232"],["./static/media/next.59a05aff.png","59a05aff9e33906079e41ab2c96c2dea"],["./static/media/personal.fa78022c.png","fa78022c8a677471b011869f95a9c630"],["./static/media/pop.e0419094.png","e04190940a44a0228fccf14a64b5ad1e"],["./static/media/qngz.334783a1.png","334783a16293dc69f87fb8f59c10c252"],["./static/media/qngzTitle.ff2aabad.png","ff2aabada6ccc783650a8a241bc68ff9"],["./static/media/sgqmTitle.f26eac36.png","f26eac362d966f870e7013cde75475c2"],["./static/media/sjdTitle.3e2df3d2.png","3e2df3d2e5ec3cae3c508fbc9853fddd"],["./static/media/sjdbg.b0e6c574.png","b0e6c574040f326d9cc5a5ba88e7f8cc"],["./static/media/yxty.b22c51ea.png","b22c51ead39f91b59d5d23c0d356faf0"],["./static/media/zgmTitle.4487f155.png","4487f155c8e5cced8ad62e4c0c9d4561"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});