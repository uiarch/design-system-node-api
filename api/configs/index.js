require('dotenv').config();

const DATABASE = {
  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_PORT: process.env.MONGO_PORT,
  CONNECT_URL: `mongodb://${process.env.MONGO_USER}:${encodeURIComponent(
    process.env.MONGO_PASSWORD,
  )}@ds163822.mlab.com:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
};

const APP_CONFIG = {
  ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.APP_PORT,
  PROD_ENV: process.env.PROD_ENV,
  MONGOOSE_DEBUG: process.env.MONGOOSE_DEBUG,
};

export default {
  DATABASE,
  APP_CONFIG,
};
