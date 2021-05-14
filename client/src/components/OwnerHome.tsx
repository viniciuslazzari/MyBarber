import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import api from '../services/api'
import OwnerLogin from './OwnerLogin'

interface IProps { }
interface IState { }

class OwnerHome extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
		};

		this.test = this.test.bind(this);
	}

	test() {
		api.get('/owners')
			.then((response) => {
				console.log(response.data)
			})
			.catch((err: any) => { console.log(err.response.data.message) });
	}

	render() {
		return (
			<div className="OwnerHome">
				<Link to="/owner/login"> Login </Link>
				<Link to="/owner/logout"> Logout </Link>
				<button onClick={this.test}>test</button>
			</div >
		);
	}
}

export default OwnerHome;
