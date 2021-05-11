const BarberController = require('../controllers/BarberController');

module.exports = (app) => {
	app.get('/barbers', BarberController.get);
	app.get('/barber/:id', BarberController.getById);
	app.post('/barber', BarberController.post);
	app.put('/barber/:id', BarberController.put);
	app.delete('/barber/:id', BarberController.delete);
}