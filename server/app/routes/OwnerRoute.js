const OwnerController = require('../controllers/OwnerController');

module.exports = (app) => {
	app.get('/owners', OwnerController.get);
	app.get('/owner/:id', OwnerController.getById);
	app.post('/owner', OwnerController.post);
	app.put('/owner/:id', OwnerController.put);
	app.delete('/owner/:id', OwnerController.delete);
}