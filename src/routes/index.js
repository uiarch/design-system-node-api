import {Router} from 'express';
import IconRoutes from './icon.routes';

const routes = new Router();

routes.use('/icons', IconRoutes);
export default routes;
