const { Barbers } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Barbers.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Barbers.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }) });
	},

	async post(req, res, next) {
		data = await Barbers.findOne({ where: { Email: req.body.Email } })

		if (data) {
			res.status(409).send({ message: "Email already used." });
			return;
		}

		const model = {
			Email: req.body.Email,
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName
		};

		Barbers.create(model)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async put(req, res, next) {
		const id = req.params.id;

		const model = {
			Email: req.body.Email,
			Phone: req.body.Phone,
			Password: req.body.Password,
			FirstName: req.body.FirstName,
			LastName: req.body.LastName
		};

		Barbers.update(model, { where: { BarberId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was updated successfully." });
				} else {
					res.send({ message: `Cannot update Barber with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Barbers.destroy({ where: { BarberId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Barber was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Barber with id=${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}