
// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './j-third-grade.html',
  './Seiga-festival.html',
  './css/style.css',
  './css/count.css',
  './images/スクリーンショット 2024-03-31 215924.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
