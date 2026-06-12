const CACHE = 'novel-escape-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 安裝：快取所有靜態資源
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 啟用：清除舊快取
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// 攔截請求：優先使用快取（離線也能玩）
self.addEventListener('fetch', function(e) {
  // API 請求不快取
  if (e.request.url.includes('/api/')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(response) {
        // 成功拿到新資源就更新快取
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      });
    }).catch(function() {
      // 完全離線時回傳快取的 index.html
      return caches.match('./index.html');
    })
  );
});
