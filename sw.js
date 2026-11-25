// Skymaster QC offline cache — version 5
const CACHE='skymaster-qc-offline-v7';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 // For navigation always try the network: fixes old iPad Home Screen builds.
 // If offline, use previously cached entry point.
 if(req.mode==='navigate'){
   event.respondWith(fetch(req,{cache:'no-store'}).then(response=>{
     if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}
     return response;
   }).catch(()=>caches.match(req).then(cached=>cached||caches.match('./index.html'))));
   return;
 }
 // For app assets, refresh cache when online and fall back offline.
 event.respondWith(fetch(req).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}
   return response;
 }).catch(()=>caches.match(req)));
});
