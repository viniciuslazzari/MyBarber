const { Clients } = require('../models');
const loginAuthentication = require('../services/loginAuthentication')

module.exports = {
	async login(req, res, next) {
		const login = {
			Phone: req.body.Phone,
			Password: req.body.Password
		}

		Clients.findOne({ where: { Phone: login.Phone } })
			.then(data => {
				if (data) {
					loginAuthentication.login(login, data)
						.then(message => {
							res.status(200).send(message)
						}).catch(err => {
							res.status(500).send({ message: err.message })
						})
				} else {
					res.status(200).send({ message: "This Client doesnt exist" });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	},

	async logout(req, res, next) {
		res.status(200).send({ auth: false, token: null })
	},
}