import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OwnerLogin from './OwnerLogin'

class OwnerHome extends React.Component {
	render() {
		return (
			<div className="OwnerHome">
				<Link to="/owner/login"> Login </Link>
			</div >
		);
	}
}

export default OwnerHome;
