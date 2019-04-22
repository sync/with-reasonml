module.exports = async ({ config }) => {
  // get css modules working
  const cssLoaderOptions = config.module.rules[2].use[1].options;
  cssLoaderOptions.modules = true;

  return config;
};
