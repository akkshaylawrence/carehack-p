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
    url: "a1044aaefb7964d74b7d.bundle.js",
    revision: "be32aa75682ef801392763c0861c3490"
  },
  {
    url: "index.html",
    revision: "507a63ae8f103f80fcca4898669c2911"
  },
  {
    url: "styles.css",
    revision: "e4d0cfc688565abc0d1256764f830ec8"
  },
  {
    url: "vendor.js",
    revision: "81d4b7c4ef481905cc33e1a24241aa6c"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
