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
    "url": "ada05bb16ced499af788.bundle.js",
    "revision": "3b8acc5507b0409857efc62b65c08829"
  },
  {
    "url": "index.html",
    "revision": "0c7436c67871ad411366dd232d18a6f4"
  },
  {
    "url": "styles.css",
    "revision": "5dc185f30b813de58f07003f2491e33d"
  },
  {
    "url": "vendor.js",
    "revision": "2a1b25178a1f35081ddc520f11812394"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
