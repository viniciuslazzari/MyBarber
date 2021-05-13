module.exports = (sequelize, Sequelize) => {
	const OperationHours = sequelize.define("OperationHours", {
		OperationHoursId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		Day: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		OpenTime: {
			type: Sequelize.TIME,
			allowNull: false
		},
		CloseTime: {
			type: Sequelize.TIME,
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

	return OperationHours;
};