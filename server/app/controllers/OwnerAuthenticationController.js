const { Owners } = require('../models');
const loginAuthentication = require('../services/loginAuthentication')
const jwt = require('jsonwebtoken');
const config = require('../../config/default')

module.exports = {
	async login(req, res, next) {
		console.log(req.header('Authorization'))

		const login = {
			Email: req.body.Email,
			Password: req.body.Password
		}

		Owners.findOne({ where: { Email: login.Email } })
			.then(data => {
				if (data) {
					loginAuthentication.verifyLogin(login, data.dataValues)
						.then(isMatch => {
							if (isMatch) {
								id = data.OwnerId
								const token = jwt.sign({ id }, config.secret, {
									expiresIn: 6000
								});
								res.status(200).send({ auth: true, token: token })
							} else {
								res.status(200).send({ auth: false, message: "Senha Incorreta!" })
							}
						}).catch(err => {
							res.status(500).send({ message: err.message })
						})
				} else {
					res.status(200).send({ auth: false, message: "Dono não encontrado" });
				}
			})
			.catch(err => { res.status(500).send({ message: err.message }); });
	}
}