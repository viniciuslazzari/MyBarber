const OrderController = require('../controllers/OrderController');

module.exports = (app) => {
	app.get('/orders', OrderController.get);
	app.get('/ordersbyshop/:ShopId', OrderController.getByShopId)
	app.get('/ordersbyclient/:ClientId', OrderController.getByClientId)
	app.get('/ordersbycatalogitem/:CatalogItemId', OrderController.getByCatalogItemId)
	app.get('/order/:id', OrderController.getById);
	app.post('/order', OrderController.post);
	app.put('/order/:id', OrderController.put);
	app.delete('/order/:id', OrderController.delete);
}