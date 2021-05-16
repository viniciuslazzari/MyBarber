const bcrypt = require('bcrypt')

module.exports = {
	async verifyLogin(login, user) {
		return new Promise((res, rej) => {
			bcrypt.compare(login.Password, user.Password, function (err, isMatch) {
				if (err) {
					rej({ message: err.message })
				} else {
					res(isMatch)
				}
			})
		})
	},
}
