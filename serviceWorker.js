const staticInePhlypo = "ine-phlypo-site-v1.1";
const assets = [
  "/",
  "/index.html",
  "/app.js",
  "/assets/ny_ine_zw.jpg",
  "/vendor/bootstrap/css/bootstrap.min.css",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
]

const fontUrls = [
  "https://fonts.googleapis.com/**",
  "https://fonts.gstatic.com/**"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticInePhlypo).then(cache => {
      cache.addAll(assets, fontUrls)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
