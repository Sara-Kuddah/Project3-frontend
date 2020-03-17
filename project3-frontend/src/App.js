import React from 'react';//import React, { Component } from 'react';
import './App.css';
// import Coffees from './coffee/components/Coffees'
// import Machines from './machine/components/machines'
// import Tools from './tool/components/tools'
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
      //  coffees : [],
      //  machines:[],
      //  tools:[],
       carts:[],
    }

    console.log(' MY API URL ', apiURL)
  }

  // setCoffees = (coffees) => {
  //   this.setState({
  //     coffees : coffees
  //   })
  // }
  // setMachines = (machines) => {
  //   this.setState({
  //     machines:machines
  //   })
  // }
  // setTools = (tools) => {
  //   this.setState({
  //     tools : tools
  //   })
  // }
  setCarts = (carts) => {
    this.setState({
      carts : carts
    })
  }
  render(){
  return(
<div className="App">
  
   

    <Router>
        <Link to="/">Go to Home Page</Link>{' '}
        <Link to="/Carts">Carts</Link>{' '}
        {/* <Link to="/contact">Contact Us!</Link> */}
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart/components/Carts" component={Carts} />
        {/* <Route path="/contact" component={Contact} /> */}
        { <Carts  carts={this.state.carts} 
  setCarts={this.setCarts}/> }
     
      </Switch>
      </div>
    </Router>
    

 
  {/* <Coffees  coffees={this.state.coffees} 
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
  /> */}


  </div>

  )
}
}




