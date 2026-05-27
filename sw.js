// TAK recovery service worker: delete old cache and go network-only
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request, {cache:'no-store'}).catch(() => fetch(event.request)));
});
