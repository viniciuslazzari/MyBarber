const OperationsHoursController = require('../controllers/OperationHoursController');
const JWTAuthentication = require('../services/JWTAuthentication')

module.exports = (app) => {
	app.get('/operationhours', JWTAuthentication.verifyJWT, OperationsHoursController.get);
	app.get('/shop/:ShopId/operationhours', JWTAuthentication.verifyJWT, OperationsHoursController.getByShopId)
	app.get('/operationhours/:id', JWTAuthentication.verifyJWT, OperationsHoursController.getById);
	app.post('/operationhours', JWTAuthentication.verifyJWT, OperationsHoursController.post);
	app.put('/operationhours/:id', JWTAuthentication.verifyJWT, OperationsHoursController.put);
	app.delete('/operationhours/:id', JWTAuthentication.verifyJWT, OperationsHoursController.delete);
}