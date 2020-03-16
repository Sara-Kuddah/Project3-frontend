import React from 'react';
import {updateAmount} from '../cartAPI'

export default class Cart extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      amount : this.props.amount
    }
  }
  
  deleteItem= (event) => {
    event.preventDefault();
    this.props.deleteOne(this.props.id);

  }

  decreseAmount = () => {
    if(this.state.amount > 0){
      let newamount = this.state.amount ;
      newamount = newamount-1;
    this.setState ({
      amount : newamount
    })
    console.log("dec",this.state.amount)
    let cartItem ={
      itemId : this.props.id ,
      totalprice: 500 ,
       name: this.props.name,
      price: this.props.price, 
      amount : this.state.amount ,
      img: this.props.img
     } 
    
    updateAmount(cartItem , this.props.id )
    .then((response) => {
     
      console.log("update item ")
  
    })
    .catch((error) => {
      console.log('API ERROR:', error);
    });


  }
  }

  incresAmount = () => {
    let newamount = this.state.amount ;
    newamount = newamount+1;
    this.setState ({
      amount : newamount
    })
    console.log("Inc",this.state.amount)
    let cartItem ={
      itemId : this.props.id ,
      totalprice: 500 ,
       name: this.props.name,
      price: this.props.price, 
      amount : this.state.amount ,
      img: this.props.img
     } 
     updateAmount(cartItem , this.props.id )
    .then((response) => {
     
      console.log("update item ")
  
    })
    .catch((error) => {
      console.log('API ERROR:', error);
    });
    
  }
  

  render(){

  return(
<div className="cart">
    <p> {this.props.img} </p>
     <h2>Name: {this.props.name}</h2>
     <p>price: {this.props.price} </p>
  <button onClick={this.decreseAmount}> - </button>
  <p>amount:{this.state.amount} </p>
     <button onClick={this.incresAmount}> + </button>
     <a href="#" onClick={this.deleteItem}>Delete</a>
       
</div>
  )
}


}
