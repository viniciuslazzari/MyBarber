const jwt = require('jsonwebtoken');
const config = require('../../config/default')

module.exports = {
	async verifyJWT(req, res, next) {
		const token = req.headers['x-access-token'];

		if (!token) {
			res.status(401).send({ auth: false, message: 'No token provided.' });
			return;
		}

		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
				return;
			}

			next();
		});
	},
}