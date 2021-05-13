const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../../config/default')

module.exports = {
	async login(login, user) {
		return new Promise((res, rej) => {
			bcrypt.compare(login.Password, user.Password, function (err, isMatch) {
				if (err) {
					rej({ message: err.message })
				} else if (isMatch) {
					id = user.OwnerId
					const token = jwt.sign({ id }, config.secret, {
						expiresIn: 600
					});

					res({ auth: true, token: token })
				} else {
					res({ auth: false, message: "Senha incorreta!" })
				}
			})
		})
	},
}
