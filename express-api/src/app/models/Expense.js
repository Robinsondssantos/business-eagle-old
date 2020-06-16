import Sequelize, { Model } from 'sequelize';


class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        date_to_pay: Sequelize.DATE,
        paid_in: Sequelize.DATE,
        value: Sequelize.DECIMAL(20, 2)
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Provider, { 
      foreignKey: 'provider_id', 
      as: 'provider' 
    });
    this.belongsTo(models.ExpenseType, { 
      foreignKey: 'type_id', 
      as: 'type' 
    });
  }
}

export default Expense;