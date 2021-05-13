'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Owners', {
      OwnerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      Phone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      Password: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      FirstName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      LastName: {
        type: Sequelize.STRING(255),
        allowNull: false
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
    await queryInterface.dropTable('Owners');
  }
};
