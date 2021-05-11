const bcrypt = require('bcrypt')
const config = require('../../config/default')

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

	Barber.addHook('beforeCreate', (barber, options) => {
		return bcrypt.hash(barber.Password, config.encryptsalt)
			.then(hash => {
				barber.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	Barber.addHook('beforeBulkUpdate', (barber, options) => {
		return bcrypt.hash(barber.attributes.Password, config.encryptsalt)
			.then(hash => {
				barber.attributes.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	return Barber;
};