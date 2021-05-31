import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import configs from './configs';
import Connect from './database/connect';
import ApiRoutes from './routes';
import Logger from './services/Logger';

const logger = new Logger();

// Connect our Database.
const dbConnect = new Connect(configs);
dbConnect.initialize();

const app = express();
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', ApiRoutes);

// We need this to make sure we don't run a second instance
if (!module.parent) {
  app.listen(configs.APP_CONFIG.APP_PORT, err => {
    if (err) {
      console.log('Server Cannot run!');
    } else {
      console.log('//========================================');
      console.log(`// Server running on port number: ${configs.APP_CONFIG.APP_PORT}`);
      console.log('// Environment Prod: ', configs.APP_CONFIG.PROD_ENV);
      console.log('//========================================');
    }
  });
}

export default app;
