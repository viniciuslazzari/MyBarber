const { Shops } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Shops.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Shops.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByBarberId(req, res, next) {
		const id = req.params.BarberId;

		Shops.findAll({ where: { BarberId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		const model = {
			Name: req.body.Name,
			BarberId: req.body.BarberId
		};

		Shops.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Name: req.body.Name,
			BarberId: req.body.BarberId
		};

		Shops.update(model, { where: { ShopId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was updated successfully." });
				} else {
					res.send({ message: `Cannot update Barber with id=${id}. Maybe Barber was not found or req.body is empty!` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Shops.destroy({ where: { ShopId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Barber with id=${id}. Maybe Barber was not found!` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}