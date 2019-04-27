const withTM = require('next-transpile-modules');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');

const isDev = process.env.NODE_ENV !== 'production';
const isProd = process.env.NODE_ENV === 'production';
const disableServerless = Boolean(process.env.DISABLE_SERVERLESS);

const baseTarget = disableServerless ? {} : { target: 'serverless' };

const config = {
  env: {
    isDev,
    isProd,
  },
  ...baseTarget,
  crossOrigin: 'anonymous',
  webpack: config => {
    const rules = config.module.rules;

    // don't even ask my why
    config.node = {
      fs: 'empty',
    };

    // some react native library need this
    rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    });
    // .mjs before .js (fixing failing now.sh deploy)
    config.resolve.extensions = [
      '.wasm',
      '.mjs',
      '.web.js',
      '.web.jsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.bs.js',
      '.gen.tsx',
    ];

    return config;
  },
  dontAutoRegisterSw: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  pageExtensions: ['jsx', 'js', 'web.js', 'web.jsx', 'ts', 'tsx', 'bs.js'],
  transpileModules: ['bs-platform'],
  cssModules: true,
};

module.exports = withOffline(withCSS(withTM(config)));
