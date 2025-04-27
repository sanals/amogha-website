/**
 * Service Worker for AMOGHA The Ayur Hub
 * Provides offline capabilities and caching for better performance
 */

const CACHE_NAME = 'amogha-cache-v1';

// Cache these assets on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/static/js/vendors.chunk.js',
  '/images/hero-image.webp',
  '/fonts/playfair-display-v30-latin-700.woff2',
  '/fonts/inter-v12-latin-regular.woff2'
];

// URLs to cache on first visit
const RUNTIME_CACHE_URLS = [
  '/about',
  '/treatments',
  '/doctors',
  '/contact'
];

// Install event: Cache essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event: Cache-first strategy with network fallback
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Handle API calls differently (network-first)
  if (event.request.url.includes('/api/')) {
    handleApiRequest(event);
    return;
  }
  
  // For HTML pages, use network-first
  if (event.request.headers.get('accept').includes('text/html')) {
    handleHtmlRequest(event);
    return;
  }
  
  // For everything else, use cache-first
  handleResourceRequest(event);
});

// Handle API requests with network-first strategy
function handleApiRequest(event) {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before returning it
        const responseToCache = response.clone();
        
        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));
        }
        
        return response;
      })
      .catch(() => {
        // If network fails, try to get from cache
        return caches.match(event.request);
      })
  );
}

// Handle HTML requests with network-first strategy
function handleHtmlRequest(event) {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before returning it
        const responseToCache = response.clone();
        
        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));
        }
        
        return response;
      })
      .catch(() => {
        // If network fails, try to get from cache
        return caches.match(event.request)
          .then(cachedResponse => {
            // Return cached response or offline page
            return cachedResponse || caches.match('/index.html');
          });
      })
  );
}

// Handle static resources with cache-first strategy
function handleResourceRequest(event) {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Clone the response before returning it
            const responseToCache = response.clone();
            
            // Cache successful responses
            if (response.status === 200) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
            }
            
            return response;
          });
      })
  );
} 