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
    url: "235efd8fe84514d627a1.bundle.js",
    revision: "04d5ef21cf33827216c6ae7fd0991ffa"
  },
  {
    url: "index.html",
    revision: "5a0aba59b56594ce974c613719ed4893"
  },
  {
    url: "styles.css",
    revision: "18f01a2d8a39d0ed8d5d0fd8ea4306fc"
  },
  {
    url: "vendor.js",
    revision: "ef1ee9b65defb32fd1cfa7e34031c9ef"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
