
import React from 'react';
import './App.css';
import Home from './Home'
import Carts from './cart/components/Carts'
import apiURL from './apiConfig';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       carts:[],
    }
    console.log(' MY API URL ', apiURL)
  }
// to enable to change cart array 
  setCarts = (carts) => {
    this.setState({
      carts : carts
    })
  }
  render(){
  return(
<div className="App">
  {/* nav */}
    <Router>
    <div className="jumbotron" style={{marginBottom: 0+'em'}}>
    <h1>Coffee Store</h1>
    <p>When you can find every thing you need</p>
  </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <span class="navbar-text">Coffee Store</span>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
        </li>
        <li className="nav-item">
          <a className="nav-link"> <Link to="/">Go to Home Page</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/Carts">Carts</Link></a>
        </li>
      </ul>
    </nav>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart/components/Carts" component={Carts} />
        { <Carts  carts={this.state.carts} 
  setCarts={this.setCarts}/> }
      </Switch>
      </div>
    </Router>
  </div>

  )
}
}




