const { Owners } = require('../models');

module.exports = {
	async get(req, res, next) {
		const data = await Owners.findAll();
		res.status(200).send(data);
	},

	async getById(req, res, next) {
		const id = req.params.id;

		Owners.findByPk(id)
			.then(data => { res.send(data); })
			.catch(err => { res.status(500).send({ message: err.message }) });
	},

	async post(req, res, next) {
		data = await Owners.findOne({ where: { Email: req.body.Email } })

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

		Owners.create(model)
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

		Owners.update(model, { where: { OwnerId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Owner was updated successfully." });
				} else {
					res.send({ message: `Cannot update Owner with id = ${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async delete(req, res, next) {
		const id = req.params.id;

		Owners.destroy({ where: { OwnerId: id } })
			.then(num => {
				if (num == 1) {
					res.send({ message: "Owner was deleted successfully!" });
				} else {
					res.send({ message: `Cannot delete Owner with id=${id}.` });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}