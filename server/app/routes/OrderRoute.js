const OrderController = require('../controllers/OrderController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/orders', JWTAuthentication.verifyJWT, OrderController.get);
	app.get('/barber/:BarberId/orders', JWTAuthentication.verifyJWT, OrderController.getByBarberId)
	app.get('/shop/:ShopId/orders', OrderController.getByShopId)
	app.get('/client/:ClientId/orders', JWTAuthentication.verifyJWT, OrderController.getByClientId)
	app.get('/catalogitem/:CatalogItemId/orders', JWTAuthentication.verifyJWT, OrderController.getByCatalogItemId)
	app.get('/order/:id', JWTAuthentication.verifyJWT, OrderController.getById);
	app.post('/order', OrderController.post);
	app.put('/order/:id', JWTAuthentication.verifyJWT, OrderController.put);
	app.delete('/order/:id', JWTAuthentication.verifyJWT, OrderController.delete);
}