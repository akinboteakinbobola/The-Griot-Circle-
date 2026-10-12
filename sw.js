const CACHE_NAME="griot-circle-v1";
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(["/The-Griot-Circle-/","/The-Griot-Circle-/index.html"])))
});
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
});
