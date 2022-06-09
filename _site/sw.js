importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'http://localhost:4000',
  suffix: '2022-06'
});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  /page[0-99]/,
  new NetworkFirst()
)

registerRoute(
  new RegExp('/\\d{4}/\\d{2}/\\d{2}/.+'),
  new StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
  { url: '/Top-Gun-Maverick(2022)', revision: '2022-05-29' },
  { url: '/doctor-strange-in-the-multiverse-of-madness-(2022)', revision: '2022-05-04' },
  { url: '/memory-(2022)', revision: '2022-04-28' },
  { url: '/ambulance-(2022)', revision: '2022-04-22' },
  { url: '/fantastic-beasts-the-secrets-of-dumbledore-(2022)', revision: '2022-04-17' },
  { url: '/the-lost-city-(2022)', revision: '2022-04-14' },
  { url: '/morbius-(2022)', revision: '2022-04-03' },
  { url: '/sonic-the-hedgehog-2-(2022)', revision: '2022-03-30' },
  { url: '/the-cellar-(2022)', revision: '2022-03-25' },
  { url: '/the-batman-(2022)', revision: '2022-03-13' },
  { url: '/the-adam-project-(2022)', revision: '2022-03-12' },
  { url: '/uncharted-(2022)', revision: '2022-02-20' },
  { url: '/moonfall-(2022)', revision: '2022-02-06' },
  { url: '/spider-man-no-way-home-(2021)', revision: '2021-12-15' },
  { url: '/', revision: '202206091542' },
  { url: '/style.css', revision: '202206091542' }
])

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);

registerRoute(
  /\/(images|favicon|css)/,
  new CacheFirst()
);
