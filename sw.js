const CACHE_NAME = 'bbc-time-machine-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Pass through all requests - we don't need offline support
    event.respondWith(fetch(event.request));
});
