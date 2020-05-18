import Sequelize from 'sequelize'

import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig)
  }
}

export default new Database();