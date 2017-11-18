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
    "url": "6f2d42048fac3578afcb.bundle.js",
    "revision": "5612d06ded5edaff92802c4fefad0d24"
  },
  {
    "url": "index.html",
    "revision": "b14cb3305bbe879fcaf72da30986ab44"
  },
  {
    "url": "styles.css",
    "revision": "5dc185f30b813de58f07003f2491e33d"
  },
  {
    "url": "vendor.js",
    "revision": "3d3ec471a0eb74a29f1b5d737843a801"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
