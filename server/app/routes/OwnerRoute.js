const OwnerController = require('../controllers/OwnerController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/owners', JWTAuthentication.verifyJWT, OwnerController.get)
	app.get('/owner/:id', JWTAuthentication.verifyJWT, OwnerController.getById);
	app.post('/owner', OwnerController.post);
	app.put('/owner/:id', JWTAuthentication.verifyJWT, OwnerController.put);
	app.delete('/owner/:id', JWTAuthentication.verifyJWT, OwnerController.delete);
}