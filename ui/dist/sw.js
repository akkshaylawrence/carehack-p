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
    "url": "e752cc813cb520dae562.bundle.js",
    "revision": "05b7f35c83f3fe21fcbfc40a0a07dd13"
  },
  {
    "url": "index.html",
    "revision": "e4f8aa80ad85cfff3efe964dcfc6951e"
  },
  {
    "url": "styles.css",
    "revision": "7d280c3e9c08f4a96632189944c36f96"
  },
  {
    "url": "vendor.js",
    "revision": "fbd502df2e58ad44ca484bb7f911f7a3"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
