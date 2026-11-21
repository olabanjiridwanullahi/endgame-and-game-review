/* Profscience Endgame Mate Trainer: offline support. © 2026 Profscience. */
const CACHE='profscience-endgame-v39';
const SF_CACHE='profscience-stockfish17';   // big engine files: kept across app updates
const FILES=['./','./index.html','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==SF_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
 const url=new URL(r.url);if(url.origin!==location.origin)return;
 // the page itself: try the network first so updates arrive, fall back to the saved copy offline
 if(r.mode==='navigate'||url.pathname.endsWith('/')||url.pathname.endsWith('index.html')){
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return res;}).catch(()=>caches.match('./index.html')));return;}
 // Stockfish (about 7 MB): downloaded the first time Game review is used, then kept offline
 if(url.pathname.indexOf('/stockfish/')>=0){
  e.respondWith(caches.open(SF_CACHE).then(c=>c.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res;}))));return;}
 // icons and other files: saved copy first
 e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res;})));});
