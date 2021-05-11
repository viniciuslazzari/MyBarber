const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../../config/default')

module.exports = {
	async login(login, user) {
		return new Promise((res, rej) => {
			bcrypt.compare(login.password, user.Password, function (err, isMatch) {
				if (err) {
					rej({ message: err.message })
				} else if (isMatch) {
					id = user.BarberId
					const token = jwt.sign({ id }, config.secret, {
						expiresIn: 300
					});

					res({ token: token })
				} else {
					res({ message: "Password doesnt matches!" })
				}
			})
		})
	}
}
