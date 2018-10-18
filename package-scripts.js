require('dotenv').config();

const npsUtils = require('nps-utils');

const {rimraf, crossEnv, series, concurrent} = npsUtils;

module.exports = {
  scripts: {
    build: {
      description: 'Building in production environment.',
      default: series.nps('clean', 'build.build'),
      build: 'webpack --config webpack.config.js',
    },
    clean: {
      description: 'Clean dist folder.',
      default: rimraf('dist'),
    },
    dev: {
      default: {
        script: concurrent.nps('dev.watch', 'dev.start'),
      },
      start: {
        description: 'Running on dev environment.',
        script: crossEnv('NODE_ENV=development') + ' node dist/main.bundle.js',
      },
      watch: {
        description: 'Webpack watch for change and compile.',
        script: 'webpack -w --mode=development',
      },
    },
  },
};
