var buildTimestamp = BUILD_TIMESTAMP;

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

	self.skipWaiting();
});


self.addEventListener('activate', function (e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function (keyList) {
			return Promise.all(keyList.map(function (key) {
				if (key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request, { ignoreSearch: true }).then(function (response) {
            return response || fetch(e.request);
        })
    );
});