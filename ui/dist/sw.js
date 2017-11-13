importScripts("workbox-sw.prod.v2.1.1.js");

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
    url: "39f3d918086034b33bd4.bundle.js",
    revision: "867b78c795e7f9f8b82f53ba8fb7d6f9"
  },
  {
    url: "index.html",
    revision: "76f1b7243e3b7d09787b61ccd035eca1"
  },
  {
    url: "styles.css",
    revision: "725d7ff9cc25317a4da6272551658062"
  },
  {
    url: "vendor.js",
    revision: "2406409f31c24604a91d6a73e2e02d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
