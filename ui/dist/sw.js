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
    "url": "f64023205d57bcb84b41.bundle.js",
    "revision": "82e8c0d6a7ee1b3d0368a85bd9a3698d"
  },
  {
    "url": "index.html",
    "revision": "17292bdc196d9287bace64e0499d4923"
  },
  {
    "url": "styles.css",
    "revision": "f68f78ad9813f6f66e2db55d4174a615"
  },
  {
    "url": "vendor.js",
    "revision": "064f64b95f19dbe6ae63f482dce2af4d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
