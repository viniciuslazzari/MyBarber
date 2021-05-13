import React from 'react';
import axios from 'axios';

interface IProps { }

interface IState {
	email: string
	password: string
}

class OwnerLogin extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			email: '',
			password: ''
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

		axios.post('http://localhost:8080/owner/login', login)
			.then(response => { console.log(response) })
			.catch(err => { console.log(err) });
	}

	handleEmailChange(event: any) {
		this.setState({ email: event.target.value })
	}

	handlePasswordChange(event: any) {
		this.setState({ password: event.target.value })
	}

	render() {
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
