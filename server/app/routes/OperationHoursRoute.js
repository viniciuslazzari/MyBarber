const OperationsHoursController = require('../controllers/OperationHoursController');

module.exports = (app) => {
	app.get('/operationhours', OperationsHoursController.get);
	app.get('/operationhoursbyshop/:Shopid', OperationsHoursController.getByShopId)
	app.get('/operationhours/:id', OperationsHoursController.getById);
	app.post('/operationhours', OperationsHoursController.post);
	app.put('/operationhours/:id', OperationsHoursController.put);
	app.delete('/operationhours/:id', OperationsHoursController.delete);
}