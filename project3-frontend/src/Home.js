import React from 'react';
import './App.css';
import Coffees from './coffee/components/Coffees'
import Machines from './machine/components/machines'
import Tools from './tool/components/tools'
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
// to enable to change coffee array 
  setCoffees = (coffees) => {
    this.setState({
      coffees : coffees
    })
  }
  // to enable to machine cart array 
  setMachines = (machines) => {
    this.setState({
      machines:machines
    })
  }
  // to enable to change tool array 
  setTools = (tools) => {
    this.setState({
      tools : tools
    })
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
  </div>

  )
}
}




