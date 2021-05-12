const { CatalogItens } = require('../models');
const moment = require('moment');

module.exports = {
	async get(req, res, next) {
		const barbers = await CatalogItens.findAll();
		res.status(200).send(barbers);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		CatalogItens.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async getByShopId(req, res, next) {
		const shopid = req.params.ShopId;

		CatalogItens.findAll({ where: { ShopId: shopid } })
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async post(req, res, next) {
		const catalogItem = {
			Name: req.body.Name,
			Price: req.body.Price,
			EstimatedTime: req.body.EstimatedTime,
			ShopId: req.body.ShopId,
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		CatalogItens.create(catalogItem)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async put(req, res, next) {
		const id = req.params.id;

		const catalogItem = {
			Name: req.body.Name,
			Price: req.body.Price,
			EstimatedTime: req.body.EstimatedTime,
			ShopId: req.body.ShopId,
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		CatalogItens.update(catalogItem, { where: { CatalogItemId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "CatalogItem was updated successfully." });
				} else {
					res.send({ message: `Cannot update CatalogItem with id=${id}. Maybe CatalogItem was not found or req.body is empty!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async delete(req, res, next) {
		const id = req.params.id;

		CatalogItens.destroy({ where: { CatalogItemId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "CatalogItem was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete CatalogItem with id=${id}. Maybe CatalogItem was not found!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	}
}