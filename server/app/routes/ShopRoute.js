const ShopController = require('../controllers/ShopController');

module.exports = (app) => {
	app.get('/shops', ShopController.get);
	app.get('/shopsbybarber/:Barberid', ShopController.getByBarberId)
	app.get('/shop/:id', ShopController.getById);
	app.post('/shop', ShopController.post);
	app.put('/shop/:id', ShopController.put);
	app.delete('/shop/:id', ShopController.delete);
}