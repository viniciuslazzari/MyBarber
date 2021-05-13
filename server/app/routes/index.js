const OwnerRoute = require('./OwnerRoute');
const OwnerAuthenticationRoute = require('./OwnerAuthenticationRoute');
const ShopRoute = require('./ShopRoute');
const ClientRoute = require('./ClientRoute');
const ClientAuthenticationRoute = require('./ClientAuthenticationRoute');
const CatalogItemRoute = require('./CatalogItemRoute');
const OrderRoute = require('./OrderRoute');
const OperationHoursRoute = require('./OperationHoursRoute');

module.exports = (app) => {
	OwnerRoute(app)
	OwnerAuthenticationRoute(app)
	ShopRoute(app)
	ClientRoute(app)
	ClientAuthenticationRoute(app)
	CatalogItemRoute(app)
	OrderRoute(app)
	OperationHoursRoute(app)
}