import {Router} from 'express';
import * as IconController from '../controllers/icon.controller';

const routes = new Router();

routes.get('/', IconController.getList);
routes.get('/:name', IconController.get);
routes.post('/', IconController.create);

export default routes;
