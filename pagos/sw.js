self.addEventListener("install", (e) => {
  console.log("[Service Worker Pagos] Instalado");
});

self.addEventListener("fetch", (e) => {
  // Dejamos el fetch vacío para no interferir con tus llamadas a Google Apps Script
});
