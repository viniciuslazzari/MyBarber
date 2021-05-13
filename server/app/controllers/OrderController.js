const { Shops, CatalogItens, Clients, Orders } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Orders.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Orders.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByShopId(req, res, next) {
		const id = req.params.ShopId;

		Orders.findAll({ where: { ShopId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByClientId(req, res, next) {
		const id = req.params.ClientId;

		Orders.findAll({ where: { ClientId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByCatalogItemId(req, res, next) {
		const id = req.params.CatalogItemId;

		Orders.findAll({ where: { CatalogItemId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		shop = await Shops.findOne({ where: { ShopId: req.body.ShopId } })
		client = await Clients.findOne({ where: { ClientId: req.body.ClientId } })
		catalogItem = await CatalogItens.findOne({ where: { CatalogItemId: req.body.CatalogItemId } })

		const model = {
			ScheduledTime: req.body.ScheduledTime,
			ShopName: shop.Name,
			ShopId: req.body.ShopId,
			ClientFirstName: client.FirstName,
			ClientLastName: client.LastName,
			ClientId: req.body.ClientId,
			CatalogItemName: catalogItem.Name,
			CatalogItemPrice: catalogItem.Price,
			CatalogItemEstimatedTime: catalogItem.EstimatedTime,
			CatalogItemId: req.body.CatalogItemId
		};

		Orders.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			ScheduledTime: req.body.ScheduledTime,
			ShopId: req.body.ShopId,
			ClientId: req.body.ClientId,
			CatalogItemId: req.body.CatalogItemId
		};

		Orders.update(model, { where: { OrderId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Order was updated successfully." });
				} else {
					res.send({ message: `Cannot update Order with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Orders.destroy({ where: { OrderId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Order was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Order with id=${id}. Maybe Order was not found!` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}