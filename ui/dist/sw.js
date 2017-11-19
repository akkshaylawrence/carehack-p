importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "a122ee8d39561b3cbbf7.bundle.js",
    "revision": "bae9444f424d2a2f9125fa1a8600d8b5"
  },
  {
    "url": "index.html",
    "revision": "7dc31716de9922664c70dbd13a888809"
  },
  {
    "url": "styles.css",
    "revision": "0911d5a7d49aac5cac05deac176fd7f1"
  },
  {
    "url": "vendor.js",
    "revision": "c61e690bdeb7140931f42921b7968a66"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
