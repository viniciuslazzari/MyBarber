const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
	app.get('/usuarios', UsuarioController.get);
	app.get('/usuario/:id', UsuarioController.getById);
	app.post('/usuario', UsuarioController.post);
	app.put('/usuario/:id', UsuarioController.put);
	app.delete('/usuario/:id', UsuarioController.delete);
}