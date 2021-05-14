import React from 'react';
import api from "../services/api";
import jwt from 'jwt-decode'
import { Redirect } from 'react-router-dom';
import { getToken } from '../services/auth'

interface IProps {
	match: any
}

interface IState {
	OwnerId: number | null
	data: Shop[] | null
}

interface Shop {
	ShopId: number
	Name: string
	OwnerId: number
	createdAt: any
	updatedAt: any
}

class OwnerShops extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			OwnerId: null,
			data: null
		};
	}

	componentWillMount() {
		var token = getToken()

		if (token) {
			var user: any = jwt(token)
			this.getOwnerShops(user.id)
		}
	}

	getOwnerShops(OwnerId: string) {
		var url = '/owner/' + OwnerId + '/shops';

		api.get(url)
			.then(res => {
				this.setState({ data: res.data })
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	render() {
		let shops = null
		var { match: { params } } = this.props;

		if (this.state.data) {
			shops = this.state.data.map(item => (
				<a href={"/owner/" + params.OwnerId + "/shop/" + item.ShopId + "/orders"}>{item.Name}</a>
			))
		}

		return (
			<div className="OwnerShops">
				{shops}
			</div>
		);
	}
}

export default OwnerShops;
