import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

// import ExpenseController from './app/controllers/ExpenseController';

import ExpenseTypeController from './app/controllers/ExpenseTypeController';
import IncomeTypeController from './app/controllers/IncomeTypeController';

import authMiddleware from './app/middlewares/auth';
import customHeaders from './app/middlewares/customHeader';
import IncomeType from './app/models/IncomeType';
import ExpenseType from './app/models/ExpenseType';

const routes = new Router();

routes.use(customHeaders);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

// routes.get('/expenses', ExpenseController.index);

routes.get('/expense_types', ExpenseTypeController.index);
routes.post('/expense_types', ExpenseTypeController.store);

routes.get('/income_types', IncomeTypeController.index);
routes.post('/income_types', IncomeTypeController.store);

export default routes;