require('dotenv').config();

const DATABASE = {
  CONNECT_URL: process.env.MONGO_CONNECTION_STRING,
};

const APP_CONFIG = {
  ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.APP_PORT,
  PROD_ENV: process.env.PROD_ENV,
  MONGOOSE_DEBUG: process.env.MONGOOSE_DEBUG,
};

const APP_LOGGING = {SENTRY_DSN: process.env.SENTRY_DSN};

export default {
  DATABASE,
  APP_CONFIG,
  APP_LOGGING,
};
