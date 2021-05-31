import {Router} from 'express';
import HTTPStatus from 'http-status';
import APIError from '../services/APIError';
import Raven from 'raven';
import configs from '../configs';

import IconRoutes from './IconRoutes';
import UserRoutes from './UserRoutes';

const routes = new Router();

routes.use('/icons', IconRoutes);
routes.use('/users', UserRoutes);

routes.all('*', (req, res, next) => {
  const raven = new Raven.Client(configs.APP_LOGGING.SENTRY_DSN);
  raven.captureException(new APIError('Not Found! ', HTTPStatus.NOT_FOUND, true));
  next(new APIError('Not Found! ', HTTPStatus.NOT_FOUND, true));
});

export default routes;
