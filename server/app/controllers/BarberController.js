const { Barbers } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Barbers.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Barbers.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByShopId(req, res, next) {
		const id = req.params.ShopId;

		Barbers.findAll({ where: { ShopId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		const model = {
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			ShopId: req.body.ShopId
		};

		Barbers.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			ShopId: req.body.ShopId
		};

		Barbers.update(model, { where: { BarberId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was updated successfully." });
				} else {
					res.send({ message: `Cannot update Barber with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Barbers.destroy({ where: { BarberId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Barber with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}