'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barbers', {
      BarberId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      ShopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Shops',
          key: 'ShopId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barbers');
  }
};