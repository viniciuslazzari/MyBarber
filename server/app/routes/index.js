const BarberRoute = require('./BarberRoute');
const BarberAuthenticationRoute = require('./BarberAuthenticationRoute');

module.exports = (app) => {
	BarberRoute(app)
	BarberAuthenticationRoute(app)
}