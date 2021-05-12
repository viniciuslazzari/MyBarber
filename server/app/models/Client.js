const bcrypt = require('bcrypt')
const config = require('../../config/default')

module.exports = (sequelize, Sequelize) => {
	const Client = sequelize.define("Clients", {
		ClientId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
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

	Client.addHook('beforeCreate', (client, options) => {
		return bcrypt.hash(client.Password, config.encryptsalt)
			.then(hash => {
				client.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	Client.addHook('beforeBulkUpdate', (client, options) => {
		return bcrypt.hash(client.attributes.Password, config.encryptsalt)
			.then(hash => {
				client.attributes.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	return Client;
};