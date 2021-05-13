const { OperationHours } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await OperationHours.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		OperationHours.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByShopId(req, res, next) {
		const id = req.params.ShopId;

		OperationHours.findAll({ where: { ShopId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		const model = {
			Day: req.body.Day,
			OpenTime: req.body.OpenTime,
			CloseTime: req.body.CloseTime,
			ShopId: req.body.ShopId
		};

		OperationHours.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Day: req.body.Day,
			OpenTime: req.body.OpenTime,
			CloseTime: req.body.CloseTime,
			ShopId: req.body.ShopId
		};

		OperationHours.update(model, { where: { OperationHoursId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "OperationHours was updated successfully." });
				} else {
					res.send({ message: `Cannot update OperationHours with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		OperationHours.destroy({ where: { OperationHoursId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "OperationHours was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete OperationHours with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}