import React from 'react';
import './App.css';
import Coffees from './coffee/components/Coffees'
import apiURL from './apiConfig';

export default class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
       coffees : [ 
         
      ],
  
    }
    console.log(' MY API URL ', apiURL)
  }

  setCoffees = (coffees) => {
    this.setState({
      coffees : coffees
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
  

</div>
  )
}


}




