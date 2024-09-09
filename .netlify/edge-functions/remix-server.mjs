
    export { default } from "../../build/server/server.js";
    export const config = {
      name: "Remix server handler",
      generator: "@netlify/remix-edge-adapter@3.2.1",
      cache: "manual",
      path: "/*",
      excludedPath: ["/.vite/*","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/assets/*","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/og-image.jpg"],
    };