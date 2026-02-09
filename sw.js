self.addEventListener('install', event => {
  self.skipWaiting()
})

self.addEventListener('fetch', event => {
})



// const CACHE_NAME = 'todo-v1'
// const ASSETS = [
//   './',
//   './index.html',
//   './style/components/todo.css',
//   './style/globals.css',
//   './script.js',
//   './manifest.json',
//   './icons/icon-192.png',
//   './icons/icon-512.png',
// ]

// // Встановлення: зберігаємо файли в кеш
// self.addEventListener('install', event => {
//   event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)))
//   self.skipWaiting()
// })

// // Робота з мережею: спочатку беремо з кешу, якщо немає — з мережі
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request)
//     }),
//   )
// })
