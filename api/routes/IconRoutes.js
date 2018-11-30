import {Router} from 'express';
import Icon from '../models/IconModel';
import IconController from '../controllers/IconController';

const routes = new Router();
const IconCtrl = new IconController(Icon);

routes.get('/', IconCtrl.getList);
routes.get('/:name', IconCtrl.getByName);
routes.post('/', IconCtrl.create);

export default routes;
