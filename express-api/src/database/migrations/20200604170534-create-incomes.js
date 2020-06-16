module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('incomes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncoment: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: 'customers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: { model:  'income_types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      date_to_receive: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      received_in: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL(20, 2),
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
    return queryInterface.dropTable('incomes');
  }
};
