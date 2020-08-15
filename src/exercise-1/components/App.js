import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <header>
          <NavLink exact to='/' id="link" activeStyle={{textDecoration: 'underline'}} >Home</NavLink>
        <NavLink id="link" activeStyle={{textDecoration: 'underline'}} to='/my-profile'>My Profile</NavLink>
        <NavLink id="link" activeStyle={{textDecoration: 'underline'}} to='/about-us'>About Us</NavLink>
        </header>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/my-profile" component={Profile}></Route>
        <Route exact path="/about-us" component={About}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
