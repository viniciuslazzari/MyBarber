const BarberRoute = require('./BarberRoute');
const BarberAuthenticationRoute = require('./BarberAuthenticationRoute');
const ShopRoute = require('./ShopRoute');
const ClientRoute = require('./ClientRoute');
const ClientAuthenticationRoute = require('./ClientAuthenticationRoute');
const CatalogItemRoute = require('./CatalogItemRoute');
const OrderRoute = require('./OrderRoute');

module.exports = (app) => {
	BarberRoute(app)
	BarberAuthenticationRoute(app)
	ShopRoute(app)
	ClientRoute(app)
	ClientAuthenticationRoute(app)
	CatalogItemRoute(app)
	OrderRoute(app)
}