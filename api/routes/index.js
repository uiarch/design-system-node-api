import {Router} from 'express';
import IconRoutes from './icon.routes';
import UserRoutes from './user.routes';

const routes = new Router();

routes.use('/icons', IconRoutes);
routes.use('/users', UserRoutes);
export default routes;
