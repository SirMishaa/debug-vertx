### Vertx werid issue :(
```js
2:58:47 PM [vite] Internal server error: Failed to resolve import "vertx" from "node_modules/.vite/deps/auth0-js.js?v=3fedd2db". Does the file exist?
  Plugin: vite:import-analysis
  File: /home/mishaa/debug/debug-vertx/node_modules/.vite/deps/auth0-js.js?v=3fedd2db
  1  |  import * as __require_for_vite_kih7B2 from "vertx";
     |                                              ^
  2  |  // node_modules/auth0-js/dist/auth0.min.esm.js
  3  |  var commonjsGlobal = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
      at formatError (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:39055:46)
      at TransformContext.error (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:39051:19)
      at normalizeUrl (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:58329:26)
      at async TransformContext.transform (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:58478:57)
      at async Object.transform (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:39292:30)
      at async doTransform (/home/mishaa/debug/debug-vertx/node_modules/vite/dist/node/chunks/dep-8f5c9290.js:50012:29)
```

One coffee for someone who found the fix !
