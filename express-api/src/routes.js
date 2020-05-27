import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ExpenseTypeController from './app/controllers/'

import authMiddleware from './app/middlewares/auth';
import customHeaders from './app/middlewares/customHeader';

const routes = new Router();

routes.use(customHeaders);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.post('expense_types', );
routes.post('income_types', );

export default routes;