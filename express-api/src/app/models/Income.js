import Sequelize, { Model } from 'sequelize';

class Income extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        date_to_receive: Sequelize.DATE,
        received_in: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer',
    });
    this.belongsTo(models.Type, {
      foreignKey: 'type_id',
      as: 'type',
    });
  }
}

export default Income;