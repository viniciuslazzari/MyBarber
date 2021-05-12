const { Barbers } = require('../models');
const moment = require('moment');

module.exports = {
	async get(req, res, next) {
		const barbers = await Barbers.findAll();
		res.status(200).send(barbers);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Barbers.findByPk(id)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async post(req, res, next) {
		data = await Barbers.findOne({ where: { Email: req.body.Email } })

		if (data) {
			res.status(500).send({ message: "Email already used." });
			return;
		}

		const barber = {
			Email: req.body.Email,
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		Barbers.create(barber)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},

	async put(req, res, next) {
		const id = req.params.id;

		const barber = {
			Email: req.body.Email,
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
		};

		Barbers.update(barber, { where: { BarberId: id } })
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

		Barbers.destroy({ where: { BarberId: id } })
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