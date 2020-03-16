import React from 'react';


export default class Cart extends React.Component{
  deleteItem= (event) => {
    event.preventDefault();
    this.props.deleteOne(this.props.id);
  }

  render(){

  return(
<div className="cart">
    <p> {this.props.img} </p>
     <h2>Name: {this.props.name}</h2>
     <p>price: {this.props.price} </p>
     <p>amount:{this.props.amount} </p>
     <a href="#" onClick={this.deleteItem}>Delete</a>
       
</div>
  )
}


}
