const BarberAuthenticationController = require('../controllers/BarberAuthenticationController');

module.exports = (app) => {
	app.post('/barberauth', BarberAuthenticationController.authenticate);
}