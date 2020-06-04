import { Model } from 'sequelize';


class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        description: sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Expense;