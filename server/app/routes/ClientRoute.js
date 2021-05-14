const ClientController = require('../controllers/ClientController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/clients', ClientController.get);
	app.get('/client/:id', JWTAuthentication.verifyJWT, ClientController.getById);
	app.post('/client', ClientController.post);
	app.put('/client/:id', JWTAuthentication.verifyJWT, ClientController.put);
	app.delete('/client/:id', JWTAuthentication.verifyJWT, ClientController.delete);
}