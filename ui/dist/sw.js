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
    url: "62afa695f686984bfeae.bundle.js",
    revision: "f082191fdb63b8ba33affd574b7cace7"
  },
  {
    url: "index.html",
    revision: "a5f96467ac414871008b5efd401a0167"
  },
  {
    url: "styles.css",
    revision: "df9ba6558bd74d0832597a1c394c1586"
  },
  {
    url: "vendor.js",
    revision: "4f934a0fb9a2cf9ebbc255321d5a74d0"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
