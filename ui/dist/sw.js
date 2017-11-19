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
    "url": "3acf77a25c97b4934715.bundle.js",
    "revision": "8f06793a8b52afbe4cd0b422fba5b2e7"
  },
  {
    "url": "index.html",
    "revision": "bf461c010aaac31abc4cb756e3de4390"
  },
  {
    "url": "styles.css",
    "revision": "4a04ad85eab3adb66431c618bea80041"
  },
  {
    "url": "vendor.js",
    "revision": "b000174b77729274ae741a160cce4967"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
