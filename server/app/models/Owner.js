const bcrypt = require('bcrypt')
const config = require('../../config/default')

module.exports = (sequelize, Sequelize) => {
	const Owner = sequelize.define("Owners", {
		OwnerId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		Email: {
			type: Sequelize.STRING(255),
			allowNull: false
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

	Owner.addHook('beforeCreate', (owner, options) => {
		return bcrypt.hash(owner.Password, config.encryptsalt)
			.then(hash => {
				owner.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	Owner.addHook('beforeBulkUpdate', (owner, options) => {
		return bcrypt.hash(owner.attributes.Password, config.encryptsalt)
			.then(hash => {
				owner.attributes.Password = hash;
			})
			.catch(err => {
				throw new Error();
			});
	});

	return Owner;
};