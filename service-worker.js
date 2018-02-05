"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/weather-dashboard/index.html","d892c738f55ed98e24727a666c903db6"],["/weather-dashboard/static/css/main.164ee17f.css","00e8818dd1ce616148956e4dbde3cc03"],["/weather-dashboard/static/js/main.ed9249d7.js","7ebb25a8a09997e063ae308c702d01df"],["/weather-dashboard/static/media/_spritesheet.0f4fef32.png","0f4fef32829333266ae25ba62d5a52c1"],["/weather-dashboard/static/media/_spritesheet.1928b9fa.png","1928b9fa02802269b12809264319f7f5"],["/weather-dashboard/static/media/_spritesheet.1adbddee.png","1adbddeeb0d8ebfc93dd580fbae9a6ef"],["/weather-dashboard/static/media/_spritesheet.4d5c99c0.png","4d5c99c03244ab6b1c5486d912b4de67"],["/weather-dashboard/static/media/_spritesheet.5a995fea.png","5a995feac08cbbfc12296aec6f2587d4"],["/weather-dashboard/static/media/_spritesheet.d0440dc3.png","d0440dc32f09ede68f4ac8b91e2cc404"],["/weather-dashboard/static/media/chanceflurries.19e39c33.svg","19e39c33143d41f73497b610a5fb27ab"],["/weather-dashboard/static/media/chanceflurries.b79d37ff.svg","b79d37ff79df9ad0dc4db14386c2da9a"],["/weather-dashboard/static/media/chancerain.549ae4b6.svg","549ae4b63649900e8d0a208db4de5ccf"],["/weather-dashboard/static/media/chancerain.c2d0aafe.svg","c2d0aafe5356fbcf85f3c9d95392159b"],["/weather-dashboard/static/media/chancesleet.74994f64.svg","74994f6454d4e602435bfa6c3f91a7f9"],["/weather-dashboard/static/media/chancesleet.fb8ec881.svg","fb8ec8814418fcf2803a55ef29a52d6c"],["/weather-dashboard/static/media/chancesnow.467b104f.svg","467b104f39dd6a7086f33e663e4ffe84"],["/weather-dashboard/static/media/chancesnow.95051580.svg","95051580db34c1f4a6f99fe52413a0f4"],["/weather-dashboard/static/media/chancetstorms.af17c67f.svg","af17c67fbf2a4cadb69e6adca891f68e"],["/weather-dashboard/static/media/chancetstorms.c7939445.svg","c793944589c6965ada2cb01c753a16d0"],["/weather-dashboard/static/media/clear.6682d5dd.svg","6682d5dda9f35c9d82d690a834f6aa1d"],["/weather-dashboard/static/media/clear.a0404ecc.svg","a0404ecc88c32292dd3defd0e344cca0"],["/weather-dashboard/static/media/cloudy.321ca961.svg","321ca9614f9be7559e777cda7068f5e3"],["/weather-dashboard/static/media/cloudy.5a36734d.jpg","5a36734d3f44cb773b590566e62d9a9e"],["/weather-dashboard/static/media/cloudy.ce2b30bf.svg","ce2b30bf0a16dba8a9893c6af820751a"],["/weather-dashboard/static/media/flurries.5e579a66.svg","5e579a66c4580798640d145b2736021b"],["/weather-dashboard/static/media/flurries.bbe7fad6.svg","bbe7fad6b36c276a9b58fe62c935076b"],["/weather-dashboard/static/media/fog.25098222.svg","25098222ce824a7fbfa9ac45baa83fd9"],["/weather-dashboard/static/media/fog.d4db296d.svg","d4db296d45ad7137c9d3d9c298c0193c"],["/weather-dashboard/static/media/hazy.8e1575dd.svg","8e1575dd065159272994bfe805dac6c6"],["/weather-dashboard/static/media/hazy.f640a588.svg","f640a588313dd598f59b2a34f6c64a4e"],["/weather-dashboard/static/media/mostlycloudy.8df99d6b.svg","8df99d6b18eb24d2b54bf94f0341a25c"],["/weather-dashboard/static/media/mostlycloudy.8e5d988e.svg","8e5d988eea2cdf0eb2e6ed1b6d6e31a7"],["/weather-dashboard/static/media/mostlysunny.51512574.svg","51512574891481f04255fe4772c7c6d0"],["/weather-dashboard/static/media/mostlysunny.65db4c42.svg","65db4c4204ec8f19572b0f7731aa79f5"],["/weather-dashboard/static/media/partlycloudy.c6cc2220.svg","c6cc2220a66d93c202082c95251692e0"],["/weather-dashboard/static/media/partlycloudy.ed01f177.svg","ed01f1775524d8a7edd64a923cc42053"],["/weather-dashboard/static/media/partlysunny.149c2695.svg","149c26951a26f44d1644f87d46b223f3"],["/weather-dashboard/static/media/partlysunny.5423dd12.svg","5423dd120bb3db98ff23494085bec635"],["/weather-dashboard/static/media/rain.0266b78d.svg","0266b78d8466adfffb69ebea04eb163e"],["/weather-dashboard/static/media/rain.d6fe6255.svg","d6fe62553554d2249b3185873c28be3c"],["/weather-dashboard/static/media/sleet.6fcc45c7.svg","6fcc45c78d7fb5b790ef1bfb2aa06d60"],["/weather-dashboard/static/media/sleet.c50a5086.svg","c50a5086a5b67178a8ecb093bf9ce912"],["/weather-dashboard/static/media/snow.041ad5ed.svg","041ad5ed49d37fd746212b6ec596c359"],["/weather-dashboard/static/media/snow.ad26c4ed.svg","ad26c4ed67eeb5977d6eba70ae570594"],["/weather-dashboard/static/media/sunny.a5ae922a.svg","a5ae922a26c26ddbe118ee8a38b9aa37"],["/weather-dashboard/static/media/sunny.ad08fc8b.svg","ad08fc8bbfbc490eee151888de334888"],["/weather-dashboard/static/media/tstorms.319ef321.svg","319ef3216bfd2f5a625ae5e3ef997f3d"],["/weather-dashboard/static/media/tstorms.80c60763.svg","80c607638524750412e4c4510e0af1b7"],["/weather-dashboard/static/media/unknown.06cdd28b.svg","06cdd28b1fae35b20c730136ec0c9465"],["/weather-dashboard/static/media/unknown.aaa3d3bd.svg","aaa3d3bd87565d9fe84f8e67648f1797"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,d){var s=new URL(e);return d&&s.pathname.match(d)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],d=new URL(a,self.location),s=createCacheKey(d,hashParamName,t,/\.\w{8}\./);return[d.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var d=new Request(t,{credentials:"same-origin"});return fetch(d).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/weather-dashboard/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});