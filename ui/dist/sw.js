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
    url: "357a9a426332a89a8b7c.bundle.js",
    revision: "55e67e42d81f849f723f7d4af03e9244"
  },
  {
    url: "index.html",
    revision: "21cfc49ef04d5fd3da15d543d6089385"
  },
  {
    url: "styles.css",
    revision: "a927610bf49caae8d6ae7a57b196ada8"
  },
  {
    url: "vendor.js",
    revision: "f3ba4a096679f990e930f63725bc36fd"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
