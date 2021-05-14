import React from 'react';
import api from "../services/api";
import { handleLogin } from '../services/auth'
import { Redirect } from 'react-router-dom';

interface IProps { }

interface IState {
	email: string
	password: string
	redirect: boolean
}

interface ApiResponse {
	data: {
		auth: any;
		token: string;
		message: any;
	};
}

class OwnerLogin extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			email: '',
			password: '',
			redirect: false
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event: any) {
		event.preventDefault();

		const login = {
			Email: this.state.email,
			Password: this.state.password
		};

		api.post('/owner/login', login)
			.then((response: ApiResponse) => {
				if (response.data.auth) {
					handleLogin(response.data.token)
					this.setState({ redirect: true })
				} else {
					alert(response.data.message)
				}
			})
			.catch((err: any) => { console.log(err) });
	}

	handleEmailChange(event: any) {
		this.setState({ email: event.target.value })
	}

	handlePasswordChange(event: any) {
		this.setState({ password: event.target.value })
	}

	render() {
		const redirect = this.state.redirect;

		if (redirect) {
			return <Redirect to='/owner' />;
		}

		return (
			<div className="OwnerLogin">
				<form>
					<label> Email </label>
					<input type="email" value={this.state.email} onChange={this.handleEmailChange} />
					<label> Senha </label>
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
					<button onClick={this.handleSubmit} > Enviar </button>
				</form>
			</div>
		);
	}
}

export default OwnerLogin;
