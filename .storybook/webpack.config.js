module.exports = async ({ config }) => {
  // get css modules working
  const cssLoaderOptions = config.module.rules[2].use[1].options;
  cssLoaderOptions.modules = true;

  // typescript
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
