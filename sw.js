---
layout: none
---
importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: '{{site.url}}',
  suffix: '{{ site.time | date: "%Y-%m" }}'
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
  {% for post in site.posts limit:14 -%}
  { url: '{{ post.url }}', revision: '{{ post.date | date: "%Y-%m-%d"}}' },
  {% endfor -%}
  { url: '/', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
  { url: '/login', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
  { url: '/style.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' }
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
