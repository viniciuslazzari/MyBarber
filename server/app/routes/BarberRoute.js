const BarberController = require('../controllers/BarberController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/barbers', JWTAuthentication.verifyJWT, BarberController.get);
	app.get('/shop/:ShopId/barbers', BarberController.getByShopId)
	app.get('/barber/:id', JWTAuthentication.verifyJWT, BarberController.getById);
	app.post('/barber', BarberController.post);
	app.put('/barber/:id', JWTAuthentication.verifyJWT, BarberController.put);
	app.delete('/barber/:id', JWTAuthentication.verifyJWT, BarberController.delete);
}