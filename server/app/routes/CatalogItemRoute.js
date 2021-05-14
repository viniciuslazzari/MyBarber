const CatalogItemController = require('../controllers/CatalogItemController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/catalogitens', JWTAuthentication.verifyJWT, CatalogItemController.get);
	app.get('/shop/:ShopId/catalogitens', CatalogItemController.getByShopId)
	app.get('/catalogitem/:id', JWTAuthentication.verifyJWT, CatalogItemController.getById);
	app.post('/catalogitem', CatalogItemController.post);
	app.put('/catalogitem/:id', JWTAuthentication.verifyJWT, CatalogItemController.put);
	app.delete('/catalogitem/:id', JWTAuthentication.verifyJWT, CatalogItemController.delete);
}