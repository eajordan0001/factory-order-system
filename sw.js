self.addEventListener('fetch', function(event) {
  // 保持預設連線，確保即時抓取 Google Sheets 資料
  event.respondWith(fetch(event.request));
});