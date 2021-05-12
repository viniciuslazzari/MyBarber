var moment = require('moment-timezone');

module.exports = (sequelize, Sequelize) => {
	sequelize.addHook('beforeCreate', (model) => {
		moment = moment()

		model.updatedAt = moment;
		model.createAt = moment;
	});

	sequelize.addHook('beforeBulkUpdate', (model) => {
		model.updatedAt = moment()
	});

	return sequelize
};