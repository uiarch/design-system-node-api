import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import './database/connect';
import configs from './configs';

// Imports routes for the icons
import ApiRoutes from './routes';

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
