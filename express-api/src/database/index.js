import Sequelize from 'sequelize';
import User from '../app/models/User';
import Customer from '../app/models/Customer';
import Provider from '../app/models/Provider';
import ExpenseType from '../app/models/ExpenseType';
import IncomeType from '../app/models/IncomeType';
import Expense from '../app/models/Expense';
import Income from '../app/models/Income';

import databaseConfig from '../config/database';

const models = [
  Expense,
  ExpenseType,
  IncomeType,
  Customer,
  Provider,
  Income,
  User
];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();