const CACHE = "mini-app-v1";

self.addEventListener("install", e=>{
 e.waitUntil(
   caches.open(CACHE).then(cache=>{
     return cache.addAll([
       "./",
       "./index.html",
       "./style.css",
       "./script.js",
       "./manifest.json",
       "./Cake.jpg",
       "./GiftBox.png",
       "./HappyBirthdayImage.png",
       "./music.mp3",
       "./icon-192.png",
       "./icon-512.png"
     ]);
   })
 );
});

self.addEventListener("fetch", e=>{
 e.respondWith(
   caches.match(e.request).then(res=>res||fetch(e.request))
 );
});
