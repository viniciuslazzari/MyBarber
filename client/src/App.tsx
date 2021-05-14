import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getToken, isAuthenticated } from './services/auth'
import PrivateRoute from './props/PrivateRoute'
import OwnerHome from './components/OwnerHome'
import OwnerLogin from './components/OwnerLogin'
import OwnerLogout from './components/OwnerLogout'
import OwnerShops from './components/OwnerShops'
import OwnerShopOrders from './components/OwnerShopOrders'

interface IProps { }

interface IState { }

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path={'/owner'} component={OwnerHome} />
          <PrivateRoute path='/owner/login' component={OwnerLogin} auth={!isAuthenticated()} redirectTo='/owner' />
          <PrivateRoute path='/owner/logout' component={OwnerLogout} auth={isAuthenticated()} redirectTo='/owner' />
          <PrivateRoute path='/owner/shops' component={OwnerShops} auth={isAuthenticated()} redirectTo='/owner/login' />
          <PrivateRoute path='/owner/shop/:ShopId/orders' component={OwnerShopOrders} auth={isAuthenticated()} redirectTo='/owner/login' />
        </Router>
      </div>
    )
  }
}

export default App;
