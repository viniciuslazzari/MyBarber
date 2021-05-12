const CatalogItemController = require('../controllers/CatalogItemController');

module.exports = (app) => {
	app.get('/catalogitens', CatalogItemController.get);
	app.get('/catalogitem/:id', CatalogItemController.getById);
	app.post('/catalogitem', CatalogItemController.post);
	app.put('/catalogitem/:id', CatalogItemController.put);
	app.delete('/catalogitem/:id', CatalogItemController.delete);
}