const { Clients } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Clients.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Clients.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async post(req, res, next) {
		data = await Clients.findOne({ where: { Phone: req.body.Phone } })

		if (data) {
			res.status(409).send({ message: "Phone already used." });
			return;
		}

		const model = {
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName
		};

		Clients.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
		};

		Clients.update(model, { where: { ClientId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Client was updated successfully." });
				} else {
					res.send({ message: `Cannot update Client with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Clients.destroy({ where: { ClientId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Client was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Client with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}