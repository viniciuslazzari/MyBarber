module.exports = (sequelize, Sequelize) => {
	const Shop = sequelize.define("Shops", {
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
		BarberId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Barbers',
				key: 'BarberId'
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

	return Shop;
};