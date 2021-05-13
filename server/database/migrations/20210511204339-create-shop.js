'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shops', {
      ShopId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      OwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Owners',
          key: 'OwnerId'
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
    await queryInterface.dropTable('Shops');
  }
};
