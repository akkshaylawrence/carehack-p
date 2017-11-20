importScripts('workbox-sw.prod.v2.1.2.js');

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
    "url": "29ae2dd603e1ab9715f1.bundle.js",
    "revision": "ddddf6a67c488364dffffc2c9f608470"
  },
  {
    "url": "index.html",
    "revision": "0f8c51c930cd563cdddb13f2020998f0"
  },
  {
    "url": "styles.css",
    "revision": "f68f78ad9813f6f66e2db55d4174a615"
  },
  {
    "url": "vendor.js",
    "revision": "b96b2d2b4db028800f79f9a6af831c11"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
