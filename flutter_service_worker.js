'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d9192c9152310fbb88cafa3d2ab9459",
"version.json": "f918d6709171a7704c616159c47da460",
"index.html": "427156420bed7a852739d2b60e806a14",
"/": "427156420bed7a852739d2b60e806a14",
"main.dart.js": "e6167446d2f27715ad669147c6bd3225",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "534d0edcede10fb43de08093f3cd7b81",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b8316680c4c12506b67c7b29dc3a05df",
"main.dart.wasm": "190b586795345c583241a0acab11f115",
".git/ORIG_HEAD": "05e6301766d93002933c8d91594277b3",
".git/config": "a37d2a78a5d3a9d6fe59cdc056a5112e",
".git/objects/0d/cccf8af089001c6cac4804cc8065bc54932405": "1647f7b6757c167d969f18aa81a4edf1",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/9b/87ff2a1400f0e75f55c8dcff622a3d0995b707": "e92ee38719a796d7fbde5b7021bba5bf",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/05/021b82642ba6631306bef3cc2620bc1c70338b": "a80d6275ac3ca4aaa1d908810c6eddb4",
".git/objects/a3/999566c06d0f400f2c8cecb6f01da9ae8b1f33": "35e78795b2dbccfd0c49ec3847d6beed",
".git/objects/b2/0a0c4744a44eb7adf54c38a25c2fe6a6569dd8": "2e8c5bfe7ec186a6cf65a80d8578e907",
".git/objects/d9/b289a30ecbe7bb81268d8a568490ef44d75eeb": "ae6fac148d0fba129ef97d633059c35d",
".git/objects/d9/d9c8cfa1ec22e2cda44b90dbcb380702fc6bef": "622d4722e9550e789b09784037903be4",
".git/objects/d0/8e334d20efa04bbb44d4175e82807bb8d3c22d": "d7f08edc7bb481543695e37ed30013d0",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/baf2c059344c6b9bfaffdeb7baf41575d4cf4b": "8528c54615d61f8a69871149147b3eca",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/4552852eaf3f055fc6d1985a772c2c523a8d98": "d47e5bb5d26cfd035e012e6b6121d670",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/52d3cb2aa7042a9c9e6ef9ea41896334b8f145": "a6092bf88ef8e8a931674fda0ec6fe75",
".git/objects/ee/bfe701964a3d5612d893b9de9e57bcccee00d3": "e06b03db940224ee6b325cb087b0a14b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/c8774f2be25fb574173648aae5b8ce5dcb9e20": "ced94a89a772a4b4b2ada4eb98af29c9",
".git/objects/c8/2fa695d1275e57121006a37d19c9ae9edf2174": "dbdf50865ff2da8cbd7c5ab7525fbd12",
".git/objects/c1/c447ebbb751e6cf36a227ef6b0be3e62a01c4c": "78a3cb7a2a68d721aa40f4f9143d48a3",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/f1867b5d9ae84d8260752f30b32f04b59748a4": "d62caf193875ded27c2543cbcf0166ed",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/c0f435bf2bd3b675a42f25b514b687d76e0e75": "27d6b5dc23b9d8be706195f3169b43f7",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/7d015301546bf7281f511ee3f996d9af9ada8a": "d5c586398306607281bed7c0c7a5d60b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/ba2d910d3754b0f1610317a94a79f05f4de1d8": "177765884e7287eb3db5f2faa3ac290c",
".git/objects/8f/a78b23f2a6566d29fdc4ae71db2349f05c6116": "bab29575c432e9b6d1c56ea250788e09",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3f5340f7b0c5cc65f13e12077c9adcfccf9415": "be8975afd5d7cd74acccb934a015ad8d",
".git/objects/2a/d5a78115acbef85a21b7aa7d0fe8351c74d8e1": "e357cd3d2bc1cd53b9f8e34b71ebdbb8",
".git/objects/43/bdefed2afa88b2df180fbd89ca773febe9cd4b": "9c7d68871f901f4c52ea44b5a24e2082",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f5087aba6e3a1a0019fafbf7b1f3b21a4ae71e": "021fcb380a476a3af31a1ee191198583",
".git/objects/07/d4fef2a4b82ff2777c2e71849f3998f0a97c02": "b2db5c8c8506ab6cf9cb0b2865315e4a",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/3f/279d4b2bbd6f36d05863f2fa625083dee6a5c1": "7953dd1a49b647366a21311539c36d1f",
".git/objects/5e/28bab8c9afa930ffc5cc1193e4f1ca67f6a377": "5632088be843e5095d35edc0966e80a2",
".git/objects/52/9552ebeee7b00eb42a75b7bcb6f7d372d266a8": "56a18d05fee6adf9a2f4c391d72c37c3",
".git/objects/90/8b8362b611e8eebc7b4ad647b19c262bfb320b": "ad1519f29c8d9a6300e4dfdfb7278431",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/e203c52e3599042264c5e86b2e3694b14bdecb": "bb97cc38c8e86f19e4423dca679c7fd0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/7fb685d43e93ee90e52ae91eecce23453134b6": "a92d1e5c29138e5354fb8e4e838ca8c2",
".git/objects/e1/3498beb655d9859ad9b96b016065f5cd0e85f3": "b6beed59bf0e4c78701ecea60e5c69d7",
".git/objects/e6/2eabf748fa45f9087c3d66cf806dfccd44ae9f": "c8ca7a21659421e8cf71b88efd3ef5c6",
".git/objects/f8/f425be4b8bab7d72e143f68570879eaa841e27": "7254458666ed575d30c3bdfe5bbf5a37",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1e/6583be13d0131bfd6e7166bbb5429244f1e38b": "d2910f7ece501c03e0f7e9a6d80b7c0d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/15acf20b90ed8dff10c0fa6043fb74d0ecadd7": "afc29df29e51e737f43d70b05ccd56cd",
".git/objects/82/4feabc104a57783e8ae0d7f4c33be581cc6f14": "f58a6017ce8fe7c667492b0d91b3d641",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/78/2c998c9dc207e755c45faa93da94779d0347f5": "7ba0390210ee6f4b3cc64c10e724aebc",
".git/objects/78/4e6451b6e039e239de339466781dd9bc91def7": "ba886751c642383274cb04ae31fb242f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5209dd51d49bffb2f93e2c118f88f839",
".git/logs/refs/heads/web": "6cd48e74d37f73f14e480804d7191b25",
".git/logs/refs/heads/main": "1fd9f32ce6daf120476a85b2bddf696a",
".git/logs/refs/remotes/origin/web": "b79c7573d286a79f04c334069b856e8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/web": "c264d98949cb9a9bfee96c508bfdac3e",
".git/refs/heads/main": "88b060ddffa43dd6c4b1d914687207d0",
".git/refs/remotes/origin/web": "c264d98949cb9a9bfee96c508bfdac3e",
".git/index": "28b27059b3098d65e8a7e250bb8c194d",
".git/COMMIT_EDITMSG": "ae494545831531f46e63558828a8827c",
".git/FETCH_HEAD": "3e616246ba914fd5f8a18eede6e36f97",
"assets/AssetManifest.json": "8ff6ebd54220eb60ef33eb52fa1105a4",
"assets/NOTICES": "a4abab27613f7a03873dd5444b4debc9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1b5ee3ab3b3ecfa9180bb6d9770cba11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f812bc88f9f2cceaa2b55e186e21a527",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/image/rope_skip_icon.jpg": "299da8f7ba63d5258b32d3473112fbff",
"assets/assets/image/push_up_icon.jpg": "9fd30deace01bf77e76cd542285b9c29",
"assets/assets/image/push_up_show_picture.png": "944070defc8651d9e846060a0cf1b5b6",
"assets/assets/image/sit_up_show_picture.png": "84a276b9b2056116548711861b7d0fa2",
"assets/assets/image/sit_up_icon.jpg": "4b032e3e1dc4bbd84bf8a0b1b5bc3a64",
"assets/assets/image/rope_skip_show_picture.png": "0472fee94df919eaff7f87221591302d",
"assets/assets/image/2.png": "371d7261fe836a40d7f0833ea03d9392",
"assets/assets/image/3.png": "ca13d5b72895b3a94ff337b828515922",
"assets/assets/image/1.png": "bfddcdfcb0f9a2e7e2cf6d3988f112a5",
"assets/assets/conf/default.yaml": "71e199cdb4815aed7b5cbb433e9a8138",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
