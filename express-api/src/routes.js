import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ExpenseTypeController from './app/controllers/ExpenseTypeController';
import IncomeTypeController from './app/controllers/IncomeTypeController';

import authMiddleware from './app/middlewares/auth';
import customHeaders from './app/middlewares/customHeader';
import IncomeType from './app/models/IncomeType';

const routes = new Router();

routes.use(customHeaders);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/expense_types', ExpenseTypeController.index);
routes.post('/expense_types', ExpenseTypeController.store);

routes.get('/income_types', IncomeTypeController.index);
routes.post('/income_types', IncomeTypeController.store);

export default routes;