import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OwnerHome from './components/OwnerHome'
import OwnerLogin from './components/OwnerLogin'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path={"/owner"} component={OwnerHome} />
          <Route path={"/owner/login"} component={OwnerLogin} />
        </Router>
      </div>
    )
  }
}

export default App;
