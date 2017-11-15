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
    url: "35472b00e6a37cb7aa31.bundle.js",
    revision: "e4dad4fa26ad86cfd30c85f1be4e68dc"
  },
  {
    url: "index.html",
    revision: "622f7447feb1e5a78bd2faadc6b24725"
  },
  {
    url: "styles.css",
    revision: "609d8eae55973712cab48a4db59da393"
  },
  {
    url: "vendor.js",
    revision: "5723bfee833755c295dd4ca16cc65297"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
