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
    "url": "92de49e8af9479bfd1fa.bundle.js",
    "revision": "5a1aa23e585ff61c4c52fcd5e6223ae1"
  },
  {
    "url": "index.html",
    "revision": "5235926a6dc57c813dd59b10daea6a61"
  },
  {
    "url": "styles.css",
    "revision": "07ea3889a411d6e1d6904dd2aeb4dfef"
  },
  {
    "url": "vendor.js",
    "revision": "2e0416bdcbe0485f774106e8bac93eb6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
