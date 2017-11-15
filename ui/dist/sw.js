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
    url: "cde53cb88db950808605.bundle.js",
    revision: "b80a4cb5073b2c6fcf9f37bcd7117620"
  },
  {
    url: "index.html",
    revision: "985033d44460cb56f80b85c4be8dcd76"
  },
  {
    url: "styles.css",
    revision: "18f01a2d8a39d0ed8d5d0fd8ea4306fc"
  },
  {
    url: "vendor.js",
    revision: "1b497898909e6be8e61053177d3672d9"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
