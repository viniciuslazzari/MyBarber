const { Orders } = require('../models');
const moment = require('moment');

module.exports = {
	async get(req, res, next) {
		const orders = await Orders.findAll();
		res.status(200).send(orders);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Orders.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async getByShopId(req, res, next) {
		const shopid = req.params.ShopId;

		Shops.findAll({ where: { ShopId: shopid } })
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async getByClientId(req, res, next) {
		const clientid = req.params.ClientId;

		Shops.findAll({ where: { ClientId: clientid } })
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async getByCatalogItemId(req, res, next) {
		const catalogitemid = req.params.CatalogItemId;

		Shops.findAll({ where: { CatalogItemId: catalogitemid } })
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async post(req, res, next) {
		const order = {
			ScheduledTime: req.body.ScheduledTime,
			ShopId: req.body.ShopId,
			ClientId: req.body.ClientId,
			CatalogItemId: req.body.CatalogItemId,
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
		};

		Orders.create(order)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async put(req, res, next) {
		const id = req.params.id;

		const order = {
			ScheduledTime: req.body.ScheduledTime,
			ShopId: req.body.ShopId,
			ClientId: req.body.ClientId,
			CatalogItemId: req.body.CatalogItemId,
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
		};

		Orders.update(order, { where: { OrderId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Order was updated successfully." });
				} else {
					res.send({ message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Orders.destroy({ where: { OrderId: id } })
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