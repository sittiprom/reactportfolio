import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Prices from './PricesComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PRICES } from '../shared/prices.js';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prices: PRICES


    }
  }


  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/prices' render={() => <Prices prices={this.state.prices} />} />
          <Route path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    ); 
  }
}

export default Main;
