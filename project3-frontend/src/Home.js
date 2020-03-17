import React from 'react';
import './App.css';
import Coffees from './coffee/components/Coffees'
import Machines from './machine/components/machines'
import Tools from './tool/components/tools'
import Carts from './cart/components/Carts'
import apiURL from './apiConfig';


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       coffees : [],
       machines:[],
       tools:[],
       carts:[],
    }

    console.log(' MY API URL ', apiURL)
  }

  setCoffees = (coffees) => {
    this.setState({
      coffees : coffees
    })
  }
  setMachines = (machines) => {
    this.setState({
      machines:machines
    })
  }
  setTools = (tools) => {
    this.setState({
      tools : tools
    })
  }
  setCarts = (carts) => {
    this.setState({
      carts : carts
    })
  }
  render(){
  return(
<div className="App">
  <div className="jumbotron" style={{marginBottom: 0+'em'}}>
    <h1>Coffee Store</h1>
    <p>When you can find every thing you need</p>
  </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand"><img src=""/></a>
      <span class="navbar-text">Coffee Store</span>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="dropdown-product" href="/">
            Products
            <span className="caret"></span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown-product">
              <a className="dropdown-item">Machines</a>
              <a className="dropdown-item">Coffee beans</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item">Tools</a>
            </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Cart
          </a>
        </li>
      </ul>
    </nav>

    
  <Coffees  coffees={this.state.coffees} 
  setCoffees={this.setCoffees}
  setCarts={this.setCarts}
  carts={this.state.carts}
   />

  <Machines  machines={this.state.machines} 
  setMachines={this.setMachines}
   setCarts={this.setCarts}
   carts={this.state.carts}
   />

  <Tools  tools={this.state.tools} 
  setTools={this.setTools} 
  setCarts={this.setCarts}
  carts={this.state.carts}
  />

<Carts  carts={this.state.carts} 
  setCarts={this.setCarts}/>
  </div>

  )
}
}




