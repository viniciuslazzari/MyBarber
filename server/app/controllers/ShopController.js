const { Shops } = require('../models');
const moment = require('moment');

module.exports = {
	async get(req, res, next) {
		const shops = await Shops.findAll();
		res.status(200).send(shops);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Shops.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async getByBarberId(req, res, next) {
		const barberid = req.params.barberid;
		console.log(barberid)

		Shops.findAll({ where: { BarberId: barberid } })
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async post(req, res, next) {
		const shop = {
			Name: req.body.Name,
			BarberId: req.body.BarberId,
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
		};

		Shops.create(shop)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async put(req, res, next) {
		const id = req.params.id;

		const shop = {
			Name: req.body.Name,
			BarberId: req.body.BarberId,
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
		};

		Shops.update(shop, { where: { ShopId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was updated successfully." });
				} else {
					res.send({ message: `Cannot update Barber with id=${id}. Maybe Barber was not found or req.body is empty!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
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
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	}
}