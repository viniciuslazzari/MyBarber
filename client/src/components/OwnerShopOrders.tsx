import React from 'react';
import api from "../services/api";
import jwt from 'jwt-decode'
import { Redirect } from 'react-router-dom';
import { getToken } from '../services/auth'
import moment from 'moment'

interface IProps {
	match: any
}

interface IState {
	OwnerId: number | null
	ShopId: number | null
	OwnerHasShop: boolean
	data: Order[] | null
}

interface Order {
	OrderId: number
	ScheduledTime: any
	BarberFirstName: string
	BarberLastName: string
	BarberId: number
	ShopName: string
	ShopId: number
	ClientFirstName: string
	ClientLastName: string
	ClientId: number
	CatalogItemName: string
	CatalogItemPrice: number
	CatalogItemEstimatedTime: any
	CatalogItemId: number
	createdAt: any
	updatedAt: any
}

class OwnerShopOrders extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			OwnerId: null,
			OwnerHasShop: false,
			ShopId: null,
			data: null
		};

		this.ownerHasShop = this.ownerHasShop.bind(this)
	}

	componentWillMount() {
		var token = getToken()

		if (token) {
			var user: any = jwt(token)
			var { match: { params } } = this.props;

			this.ownerHasShop(user.id, params.ShopId)
		}
	}

	ownerHasShop(OwnerId: string, ShopId: string) {
		const model = {
			OwnerId: OwnerId,
			ShopId: ShopId
		}
		const url = '/ownerhasshop';

		api.post(url, model)
			.then(res => {
				this.setState({ OwnerHasShop: res.data.ownerHasShop }, () => {
					if (this.state.OwnerHasShop) {
						this.getShopOrders(model.ShopId)
						setInterval(() => this.getShopOrders(model.ShopId), 30000);
					} else {
						alert("Essa loja não pertence a esse dono")
					}
				})
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	getShopOrders(ShopId: string) {
		var url = '/shop/' + ShopId + '/orders';

		api.get(url)
			.then(res => {
				res.data.forEach((item: Order) => {
					item.ScheduledTime = moment(item.ScheduledTime).format("HH:mm");
				});
				this.setState({ data: res.data })
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	render() {
		let orders = null

		if (this.state.data) {
			orders = this.state.data.map(item => (
				<tr>
					<td> {item.ScheduledTime} </td>
					<td> {item.ClientFirstName + " " + item.ClientLastName} </td>
					<td> {item.BarberFirstName + " " + item.BarberLastName} </td>
					<td> {item.CatalogItemName} </td>
				</tr>
			))
		}

		return (
			<div className="OwnerShops">
				<table>
					<tr>
						<th> Horário </th>
						<th> Cliente </th>
						<th> Funcionário </th>
						<th> Serviço </th>
					</tr>
					{orders}
				</table>
			</div>
		);
	}
}

export default OwnerShopOrders;