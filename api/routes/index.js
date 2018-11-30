import {Router} from 'express';
import HTTPStatus from 'http-status';
import APIError from '../services/APIError';

import IconRoutes from './IconRoutes';
import UserRoutes from './UserRoutes';

const routes = new Router();

routes.use('/icons', IconRoutes);
routes.use('/users', UserRoutes);

routes.all('*', (req, res, next) => next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)));

export default routes;
