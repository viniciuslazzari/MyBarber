const { CatalogItens } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await CatalogItens.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		CatalogItens.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async getByShopId(req, res, next) {
		const id = req.params.ShopId;

		CatalogItens.findAll({ where: { ShopId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		const model = {
			Name: req.body.Name,
			Price: req.body.Price,
			EstimatedTime: req.body.EstimatedTime,
			ShopId: req.body.ShopId
		};

		CatalogItens.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Name: req.body.Name,
			Price: req.body.Price,
			EstimatedTime: req.body.EstimatedTime,
			ShopId: req.body.ShopId
		};

		CatalogItens.update(model, { where: { CatalogItemId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "CatalogItem was updated successfully." });
				} else {
					res.send({ message: `Cannot update CatalogItem with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		CatalogItens.destroy({ where: { CatalogItemId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "CatalogItem was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete CatalogItem with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}