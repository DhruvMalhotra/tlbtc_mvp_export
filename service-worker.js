const CACHE_NAME = 'your-app-v1';
const assetsToCache = [
    '/',
    '/tlbtc_mvp_export/godot_game.html',
    '/tlbtc_mvp_export/manifest.json',
    // Add paths to all your important files:
    '/tlbtc_mvp_export/service-worker.js',
    '/tlbtc_mvp_export/Icon-196.png',
    '/tlbtc_mvp_export/Icon-512.png'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});