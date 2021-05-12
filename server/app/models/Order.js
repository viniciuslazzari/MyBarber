module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define("Orders", {
		OrderId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		ScheduledTime: {
			type: Sequelize.TIME,
			allowNull: false
		},
		ShopId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Shops',
				key: 'ShopId'
			}
		},
		ClientId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Clients',
				key: 'ClientId'
			}
		},
		CatalogItemId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'CatalogItens',
				key: 'CatalogItemId'
			}
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

	return Order;
};