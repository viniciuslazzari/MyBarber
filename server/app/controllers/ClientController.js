const { Clients } = require('../models');
const moment = require('moment');

module.exports = {
	async get(req, res, next) {
		const clients = await Clients.findAll();
		res.status(200).send(clients);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Clients.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async post(req, res, next) {
		data = await Clients.findOne({ where: { Phone: req.body.Phone } })

		if (data) {
			res.status(500).send({ message: "Phone already used." });
			return;
		}

		const client = {
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		Clients.create(client)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async put(req, res, next) {
		const id = req.params.id;

		const client = {
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		Clients.update(client, { where: { ClientId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Client was updated successfully." });
				} else {
					res.send({ message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Clients.destroy({ where: { ClientId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Client was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Client with id=${id}. Maybe Client was not found!` });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	}
}