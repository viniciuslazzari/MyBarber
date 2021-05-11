const { Barbers } = require('../models');
const jwtAuthentication = require('../services/jwtAuthentication')

module.exports = {
	async authenticate(req, res, next) {
		const login = {
			email: req.body.email,
			password: req.body.password
		}

		Barbers.findOne({ where: { Email: login.email } })
			.then(data => {
				if (data) {
					jwtAuthentication.login(login, data)
						.then(message => {
							res.status(200).send(message)
						}).catch(err => {
							res.status(500).send({ message: err.message })
						})
				} else {
					res.status(200).send({ message: "This Barber doesnt exist" });
				}
			})
			.catch(err => {
				res.status(500).send({ message: err.message });
			});
	},
}