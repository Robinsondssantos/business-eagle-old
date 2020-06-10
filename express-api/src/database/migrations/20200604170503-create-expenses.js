module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('expenses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'provider', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: { model: 'exepense_type', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      data_to_pay: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paid_in: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      value: {
        type: Sequelize.CURRENCY,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('expenses');
  }
};
