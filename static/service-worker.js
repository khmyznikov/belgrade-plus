var buildTimestamp = null;
try {
	buildTimestamp = BUILD_TIMESTAMP;
} catch (error) {
	buildTimestamp = Date.now();
}

var cacheName = 'belgrade.plus/' + buildTimestamp;
var filesToCache = [
	'/',
	'/map',
	'/settings'
];

var bundleToCache = self.__WB_MANIFEST;
if (bundleToCache)
	bundleToCache.forEach((file) => {
		filesToCache.push(file.url);
	});

self.addEventListener('install', function (e) {
	console.log('[ServiceWorker] Install');

	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);

	// self.skipWaiting();
});


self.addEventListener('activate', function (e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map(function (key) {
				if (key !== cacheName && key !== 'belgrade.plus/map-tiles') {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

async function handleRequest(request) {
	if (request.url.includes('tileserver.memomaps.de')) {
		try {
			const response = await fetch(request);
			const cache = await caches.open('belgrade.plus/map-tiles')
			await cache.put(request, response.clone());
			
			return response
		}
		catch (e) {
			return await caches.match(request);
		}
	}
	else {
		return await caches.match(request, { ignoreSearch: true }) || await fetch(request);
	}
  }

self.addEventListener('fetch', async function (event) {
	event.respondWith(handleRequest(event.request));
});