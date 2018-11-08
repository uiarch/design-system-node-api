require('dotenv').config();

const npsUtils = require('nps-utils');

const {rimraf, crossEnv, series, concurrent} = npsUtils;

module.exports = {
  scripts: {
    build: {
      description: 'Building in production environment.',
      default: series.nps('clean', 'build.build'),
      build: 'webpack --config webpack.config.js --mode=production',
    },
    clean: {
      description: 'Clean www folder.',
      default: rimraf('www'),
    },
    dev: {
      default: {
        script: concurrent.nps('dev.watch', 'dev.start'),
      },
      build: {
        description: 'Building in development environment.',
        script: 'webpack --config webpack.config.js --mode=development',
      },
      start: {
        description: 'Running on dev environment.',
        script: crossEnv('NODE_ENV=development') + ' node www/main.bundle.js',
      },
      watch: {
        description: 'Webpack watch for change and compile.',
        script: 'webpack -w --mode=development',
      },
    },
    lint: {
      default: 'eslint api',
      fix: 'eslint --fix api',
    },
    test: {
      default: 'jest --detectOpenHandles',
      coverage: 'jest --detectOpenHandles --coverage',
    },
    doc: {
      description: 'Documenting The API.',
      default: 'apidoc --debug -i api',
    },
  },
};
