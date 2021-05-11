module.exports = (sequelize, Sequelize) => {
	const Barber = sequelize.define("Barbers", {
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