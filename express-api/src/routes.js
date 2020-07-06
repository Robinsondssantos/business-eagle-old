import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

// import ExpenseController from './app/controllers/ExpenseController';

import ExpenseTypeController from './app/controllers/ExpenseTypeController';
import ExpenseController from './app/controllers/ExpenseController';

import IncomeTypeController from './app/controllers/IncomeTypeController';
import IncomeController from './app/controllers/IncomeTypeController';

import CustomerController from './app/controllers/CustomerController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';
import customHeaders from './app/middlewares/customHeader';


const routes = new Router();

routes.use(customHeaders);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

// routes.get('/expenses', ExpenseController.index);

routes.get('/expense_types', ExpenseTypeController.index);
routes.post('/expense_types', ExpenseTypeController.store);
routes.put('/expense_types/:expenseTypeId', ExpenseTypeController.update);
routes.delete('/expense_types/:expenseTypeId', ExpenseTypeController.delete);

routes.get('/income_types', IncomeTypeController.index);
routes.post('/income_types', IncomeTypeController.store);
routes.put('/income_types/:incomeTypeId', IncomeTypeController.update);
routes.delete('/income_types/:incomeTypeId', IncomeTypeController.delete);

routes.get('/expenses', ExpenseController.index);
routes.post('/expenses', ExpenseController.store);
routes.put('/expenses/:expenseId', ExpenseController.update);
routes.delete('/expenses/:expenseId', ExpenseController.delete);

routes.get('/incomes', IncomeController.index);
routes.post('/incomes', IncomeController.store);
routes.put('/incomes/:incomeId', IncomeController.update);
routes.delete('/incomes/:incomeId', IncomeController.delete);

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:customerId', CustomerController.update);
routes.delete('/customers/:customerId', CustomerController.delete);

routes.get('/providers', ProviderController.index);
routes.post('/providers', ProviderController.store);
routes.put('/providers/:providerId', ProviderController.update);
routes.delete('/providers/:providerId', ProviderController.delete);

export default routes;