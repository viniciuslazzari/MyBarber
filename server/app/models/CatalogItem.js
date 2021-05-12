module.exports = (sequelize, Sequelize) => {
	const CatalogItem = sequelize.define("CatalogItens", {
		CatalogItemId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		Price: {
			type: Sequelize.DECIMAL(4, 2),
			allowNull: false
		},
		EstimatedTime: {
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
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		}
	});

	return CatalogItem;
};