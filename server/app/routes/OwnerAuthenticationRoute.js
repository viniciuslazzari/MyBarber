const OwnerAuthenticationController = require('../controllers/OwnerAuthenticationController');

module.exports = (app) => {
	app.post('/owner/login', OwnerAuthenticationController.login);
	app.post('/owner/logout', OwnerAuthenticationController.logout);
}