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

	async getByOwnerId(req, res, next) {
		const id = req.params.OwnerId;

		Shops.findAll({ where: { OwnerId: id } })
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async ownerHasShop(req, res, next) {
		const model = {
			OwnerId: req.body.OwnerId,
			ShopId: req.body.ShopId
		};

		Shops.findAll({ where: { OwnerId: model.OwnerId } })
			.then(data => {
				const shopsIds = data.map(item => item.ShopId);
				if (shopsIds.includes(parseInt(model.ShopId))) {
					res.send({ ownerHasShop: true });
				} else {
					res.send({ ownerHasShop: false });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); })
	},

	async post(req, res, next) {
		const model = {
			Name: req.body.Name,
			OwnerId: req.body.OwnerId
		};

		Shops.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Name: req.body.Name,
			OwnerId: req.body.OwnerId
		};

		Shops.update(model, { where: { ShopId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Shop was updated successfully." });
				} else {
					res.send({ message: `Cannot update Shop with id=${id}. Maybe Shop was not found or req.body is empty!` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Shops.destroy({ where: { ShopId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Shop was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Shop with id=${id}. Maybe Shop was not found!` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}