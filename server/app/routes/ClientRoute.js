const ClientController = require('../controllers/ClientController');

module.exports = (app) => {
	app.get('/clients', ClientController.get);
	app.get('/client/:id', ClientController.getById);
	app.post('/client', ClientController.post);
	app.put('/client/:id', ClientController.put);
	app.delete('/client/:id', ClientController.delete);
}