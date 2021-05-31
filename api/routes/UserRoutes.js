import {Router} from 'express';
import User from '../models/UserModel';
import UserController from '../controllers/UserController';

const routes = new Router();
const UserCtrl = new UserController(User);

routes.get('/', UserCtrl.getList);
routes.get('/:name', UserCtrl.getByName);
routes.post('/', UserCtrl.create);

export default routes;
