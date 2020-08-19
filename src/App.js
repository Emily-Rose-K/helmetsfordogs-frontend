import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Shop from './components/Shop'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Cart from './components/Cart';
import "./App.css";


const promise = loadStripe("pk_test_51HHZvaAiIJqyPXJ3dDsOQBn4DqHbWPqUgEbaMEF12pWAs9M9wDTMpMWdmUxXRxl1Tsc45jGH7ipRoLGhNsTnidVa00x7WhaETB");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      total: 0
     };
  }
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  calculateTotal = (x) => {
   this.setState({
     total: parseInt(this.total) + x
    })
}

render() {
    return (
      <div>
        <Navbar handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
        <Banner />
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/shop'><Shop calculateTotal={this.calculateTotal} total={this.state.total}/>
            </Route>
            <Route 
              exact path='/gallery'><Gallery />
            </Route>
            <Route
            exact path='/checkout'> 
              <Elements stripe={promise}>
                <Cart total={this.state.total}/>
              </Elements>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;