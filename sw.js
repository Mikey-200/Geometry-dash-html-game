self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("geometry-rush-v1").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/clicktone.wav",
                "/eatcointone.wav",
                "/backgroundmusic.mp3",
                "/collisiontone.wav",
                "/public/icon-192.png",
                "/public/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
