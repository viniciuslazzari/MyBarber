'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      OrderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      ScheduledTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      BarberFirstName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      BarberLastName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      BarberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Barbers',
          key: 'BarberId'
        },
      },
      ShopName: {
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
      },
      ClientFirstName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      ClientLastName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      ClientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'ClientId'
        },
      },
      CatalogItemName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      CatalogItemPrice: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false
      },
      CatalogItemEstimatedTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      CatalogItemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CatalogItens',
          key: 'CatalogItemId'
        },
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
    await queryInterface.dropTable('Orders');
  }
};