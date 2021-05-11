const BarberAuthenticationController = require('../controllers/BarberAuthenticationController');

module.exports = (app) => {
	app.post('/barber/login', BarberAuthenticationController.login);
	app.post('/barber/logout', BarberAuthenticationController.logout);
}