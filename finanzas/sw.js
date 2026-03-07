self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
self.addEventListener("fetch", (e) => {
  // Por ahora solo permite instalar la app, no cacheamos para no complicar tus llamadas a la API
});
