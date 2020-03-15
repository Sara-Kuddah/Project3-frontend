import React from 'react';
import './App.css';
import Coffees from './coffee/components/Coffees'
import Machines from './machine/components/machines'
import Tools from './tool/components/tools'
import apiURL from './apiConfig';

export default class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
       coffees : [],
       machines:[],
       tools:[],
  
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
  render(){

  return(
<div className="App">
  <header className="App-header">
  <p> 
    welcome to coffee store  ! 
  </p>
  
  </header>
  <Coffees  coffees={this.state.coffees} 
  setCoffees={this.setCoffees}/>

  <Machines  machines={this.state.machines} 
  setMachines={this.setMachines}/>

  <Tools  tools={this.state.tools} 
  setTools={this.setTools}/>
  

</div>
  )
}


}




