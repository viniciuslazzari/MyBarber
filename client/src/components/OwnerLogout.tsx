import React from 'react';
import { handleLogout } from '../services/auth'
import { Redirect } from 'react-router-dom';

interface IProps { }

class OwnerLogout extends React.Component {
	render() {
		handleLogout()

		return <Redirect to='/owner/login' />;
	}
}

export default OwnerLogout;
