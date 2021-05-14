const OwnerAuthenticationController = require('../controllers/OwnerAuthenticationController');

module.exports = (app) => {
	app.post('/owner/login', OwnerAuthenticationController.login);
}