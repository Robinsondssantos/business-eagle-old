import Sequelize from 'sequelize';
import User from '../app/models/User';
import ExpenseType from '../app/models/ExpenseType';
import IncomeType from '../app/models/IncomeType';

import databaseConfig from '../config/database';

const models = [
  ExpenseType,
  IncomeType,
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