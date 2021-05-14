module.exports = (sequelize, Sequelize) => {
	const Barber = sequelize.define("Barbers", {
		BarberId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		FirstName: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		LastName: {
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

	return Barber;
};