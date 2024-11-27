module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@types': './src/types',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
};