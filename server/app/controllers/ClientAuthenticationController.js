const { Clients } = require('../models');
const loginAuthentication = require('../services/loginAuthentication')
const jwt = require('jsonwebtoken');
const config = require('../../config/default')

module.exports = {
	async login(req, res, next) {
		const login = {
			Phone: req.body.Phone,
			Password: req.body.Password
		}

		Clients.findOne({ where: { Phone: login.Phone } })
			.then(data => {
				if (data) {
					loginAuthentication.verifyLogin(login, data)
						.then(isMatch => {
							if (isMatch) {
								id = data.ClientId
								const token = jwt.sign({ id }, config.secret, {
									expiresIn: 600
								});
								res.status(200).send({ auth: true, token: token })
							} else {
								res.status(200).send({ auth: false, message: "Senha Incorreta!" })
							}
						}).catch(err => {
							res.status(500).send({ message: err.message })
						})
				} else {
					res.status(200).send({ message: "This Client doesnt exist" });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}