'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barber', {
      BarberId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING(255),
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barber');
  }
};
