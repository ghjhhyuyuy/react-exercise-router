import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Products from './Products';
import ProductDetails from './ProductDetails';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <header>
          <NavLink exact to='/' id="link" activeStyle={{textDecoration: 'underline'}} >Home</NavLink>
        <NavLink id="link" activeStyle={{textDecoration: 'underline'}} to='/products'>Products</NavLink>
        <NavLink id="link" activeStyle={{textDecoration: 'underline'}} to='/my-profile'>My Profile</NavLink>
        <NavLink id="link" activeStyle={{textDecoration: 'underline'}} to='/about-us'>About Us</NavLink>
        </header>
        <Route exact path="/" component={Home}></Route>
        <Route path="/my-profile" component={Profile}></Route>
        <Route path="/about-us" component={About}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route path="/products/:id" component={ProductDetails}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
