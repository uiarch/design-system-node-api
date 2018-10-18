module.exports = function(api) {
  const presets = ['@babel/preset-env'];
  const plugins = ['@babel/plugin-transform-regenerator'];

  // api.cache(false);
  api.env(['development', 'test']);

  return {
    presets,
    plugins,
  };
};
