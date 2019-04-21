const withTM = require("next-transpile-modules");

module.exports = withTM({
  target: "serverless",
  webpack: (config, { dir, defaultLoaders, dev, isServer }) => {
    const rules = config.module.rules;
    // .mjs before .js (fixing failing now.sh deploy)
    config.resolve.extensions = [
      ".wasm",
      ".mjs",
      ".web.js",
      ".web.jsx",
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".json",
      ".bs.js"
    ];

    return config;
  },
  pageExtensions: ["jsx", "js", "web.js", "web.jsx", "ts", "tsx", "bs.js"],
  transpileModules: ["bs-platfor"]
});
