importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'http://localhost:4000',
  suffix: '2022-07'
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
  { url: '/movie/thor-love-and-thunder-(2022)', revision: '2022-07-10' },
  { url: '/movie/jurasic-world-dominion-(2022)', revision: '2022-06-10' },
  { url: '/movie/Top-Gun-Maverick(2022)', revision: '2022-05-29' },
  { url: '/movie/doctor-strange-in-the-multiverse-of-madness-(2022)', revision: '2022-05-04' },
  { url: '/movie/memory-(2022)', revision: '2022-04-28' },
  { url: '/movie/ambulance-(2022)', revision: '2022-04-22' },
  { url: '/movie/fantastic-beasts-the-secrets-of-dumbledore-(2022)', revision: '2022-04-17' },
  { url: '/movie/the-lost-city-(2022)', revision: '2022-04-14' },
  { url: '/movie/morbius-(2022)', revision: '2022-04-03' },
  { url: '/movie/sonic-the-hedgehog-2-(2022)', revision: '2022-03-30' },
  { url: '/movie/the-cellar-(2022)', revision: '2022-03-25' },
  { url: '/movie/the-batman-(2022)', revision: '2022-03-13' },
  { url: '/movie/the-adam-project-(2022)', revision: '2022-03-12' },
  { url: '/movie/uncharted-(2022)', revision: '2022-02-20' },
  { url: '/', revision: '202207100811' },
  { url: '/login', revision: '202207100811' },
  { url: '/style.css', revision: '202207100811' }
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
