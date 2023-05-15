import {Router } from 'express';
import create from '../controllers/create';
import list from '../controllers/list';
import read from '../controllers/read';
import update from '../controllers/update';
import deleteUser from '../controllers/delete';

const routes = Router();

routes.post('/create', create);
routes.get('/list', list);
routes.get('/read/:id', read);
routes.post('/update/:id', update);
routes.delete('/delete/:id', deleteUser);

export default routes;