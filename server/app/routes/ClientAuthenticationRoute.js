const ClientAuthenticationController = require('../controllers/ClientAuthenticationController');

module.exports = (app) => {
	app.post('/client/login', ClientAuthenticationController.login);
}