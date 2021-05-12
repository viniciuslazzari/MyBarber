const BarberRoute = require('./BarberRoute');
const ShopRoute = require('./ShopRoute');
const BarberAuthenticationRoute = require('./BarberAuthenticationRoute');
const ClientRoute = require('./ClientRoute');

module.exports = (app) => {
	BarberRoute(app)
	BarberAuthenticationRoute(app)
	ShopRoute(app)
	ClientRoute(app)
}