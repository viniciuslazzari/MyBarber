import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, redirectTo, ...rest }) => (
	<Route {...rest} render={(props) => (
		auth == true
			? <Component {...props} />
			: <Redirect to={redirectTo} />
	)} />
)

export default PrivateRoute;