const { Barber } = require('../models/');

module.exports = {
	async get(req, res, next) {
		const users = await Barber.findAll();
		res.status(200).send(users);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Barber.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({
					message: "Error retrieving Tutorial with id=" + id
				});
			});
	},

	async post(req, res, next) {
		if (!req.body) {
			res.status(400).send({
				message: "Content can not be empty!"
			});
			return;
		}

		const barber = {
			Email: req.body.email,
			Password: req.body.password,
			FirstName: req.body.firstname,
			LastName: req.body.lastname
		};

		Barber.create(barber)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({
					message:
						err.message || "Some error occurred while creating the Tutorial."
				});
			});
	},

	async put(req, res, next) {
		let id = req.params.id;
		res.status(201).send(`Rota PUT com ID! --> ${id}`);
	},

	async delete(req, res, next) {
		let id = req.params.id;
		res.status(200).send(`Rota DELETE com ID! --> ${id}`);
	}
}