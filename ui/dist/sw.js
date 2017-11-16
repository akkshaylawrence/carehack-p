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
    url: "9af6116ea4a67d2db437.bundle.js",
    revision: "bf201f5f2dceb8c537771bb6d8f0bd21"
  },
  {
    url: "index.html",
    revision: "e5c24b3d614c110344ec38a14e9e45b5"
  },
  {
    url: "styles.css",
    revision: "18f01a2d8a39d0ed8d5d0fd8ea4306fc"
  },
  {
    url: "vendor.js",
    revision: "2eb17f8fda0c85d6935faedf85026ff2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
