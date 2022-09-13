module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@pages', './src/app/pages'],
          ['@assets', './src/@assets'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
