const ShopController = require('../controllers/ShopController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/shops', ShopController.get);
	app.get('/owner/:OwnerId/shops', JWTAuthentication.verifyJWT, ShopController.getByOwnerId)
	app.get('/shop/:id', JWTAuthentication.verifyJWT, ShopController.getById);
	app.post('/shop', ShopController.post);
	app.post('/ownerhasshop', ShopController.ownerHasShop);
	app.put('/shop/:id', JWTAuthentication.verifyJWT, ShopController.put);
	app.delete('/shop/:id', JWTAuthentication.verifyJWT, ShopController.delete);
}