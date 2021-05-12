const BarberRoute = require('./BarberRoute');
const ShopRoute = require('./ShopRoute');
const BarberAuthenticationRoute = require('./BarberAuthenticationRoute');

module.exports = (app) => {
	BarberRoute(app)
	BarberAuthenticationRoute(app)
	ShopRoute(app)
}