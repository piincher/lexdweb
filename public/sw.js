/**
 * LEXD Service Worker
 * 
 * Provides offline caching, background sync, and push notification support.
 * Keeps navigations network-first so HTML never points at chunks from an older build.
 */

const CACHE_VERSION = 'v4-20260720';
const STATIC_CACHE = `lexd-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `lexd-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `lexd-images-${CACHE_VERSION}`;
const CURRENT_CACHES = new Set([STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE]);

// Critical pages to cache immediately
const PRECACHE_URLS = [
  '/',
  '/fr',
  '/en',
  '/fr/tarifs',
  '/fr/calculateur',
  '/fr/contact',
  '/fr/faq',
  '/offline',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Routes that should always try network first, then cache
const NETWORK_FIRST_ROUTES = [
  '/api/',
  '/calculateur',
  '/tarifs'
];

// Install event - Precache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Precaching static assets');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Precache failed:', err);
      })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return (name.startsWith('lexd-') || name.startsWith('chinalink-')) &&
                     !CURRENT_CACHES.has(name);
            })
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Helper function to check if URL is in network-first list
function isNetworkFirst(url) {
  return NETWORK_FIRST_ROUTES.some(route => url.includes(route));
}

// Helper function to check if request is for an image
function isImageRequest(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i);
}

// Helper function to check if request is for a static asset
function isStaticAsset(request) {
  return request.destination === 'script' || 
         request.destination === 'style' ||
         request.destination === 'font' ||
         request.url.includes('/_next/static/');
}

// Fetch event - Implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip caching in development (localhost)
  if (self.location.hostname === 'localhost') {
    return;
  }
  
  // Skip Chrome extensions and external analytics
  if (url.origin !== self.location.origin && 
      !url.hostname.includes('chinalinkexpress') &&
      !url.hostname.includes('digitaloceanspaces')) {
    return;
  }

  // HTML must come from the active deployment. Cached pages can reference
  // JavaScript chunks that no longer exist after a new Next.js build.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, response.clone()));
          }
          return response;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          return cachedResponse || caches.match('/offline');
        })
    );
    return;
  }
  
  // Strategy for static assets (Cache First)
  if (isStaticAsset(request)) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            // Return cached version but update in background
            fetch(request)
              .then((fetchResponse) => {
                if (fetchResponse.ok) {
                  caches.open(STATIC_CACHE)
                    .then((cache) => cache.put(request, fetchResponse));
                }
              })
              .catch(() => {});
            return response;
          }
          
          return fetch(request)
            .then((fetchResponse) => {
              if (!fetchResponse.ok) throw new Error('Fetch failed');
              
              const responseClone = fetchResponse.clone();
              caches.open(STATIC_CACHE)
                .then((cache) => cache.put(request, responseClone));
              
              return fetchResponse;
            });
        })
        .catch(() => {
          // Return offline fallback for navigation
          if (request.mode === 'navigate') {
            return caches.match('/offline');
          }
        })
    );
    return;
  }
  
  // Strategy for images (Stale While Revalidate)
  if (isImageRequest(request)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);
          
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }
  
  // Strategy for dynamic content (Network First with Cache Fallback)
  if (isNetworkFirst(url.pathname)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Return offline page for navigation requests
              if (request.mode === 'navigate') {
                return caches.match('/offline');
              }
              throw new Error('Network and cache both failed');
            });
        })
    );
    return;
  }
  
  // Default strategy: Network First with Cache Fallback. This also protects
  // Next.js RSC navigations from mixing responses across deployments.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, response.clone()));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

async function syncContactForms() {
  // Get pending form submissions from IndexedDB and retry
  // This is a placeholder - actual implementation would use IndexedDB
  console.log('[SW] Syncing contact forms...');
}

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data?.type === 'CACHE_URLS') {
    const urls = event.data.urls;
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then((cache) => cache.addAll(urls))
    );
  }
});

// Periodic background sync (for updates when app is not open)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-update') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  console.log('[SW] Periodic sync - updating content');
  // Update cached pricing, rates, etc.
}
