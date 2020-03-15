import React from 'react';


export default class Cart extends React.Component{
  

  render(){

  return(
<div className="cart">
    <p> {this.props.img} </p>
     <h2>Name: {this.props.name}</h2>
     <p>price: {this.props.price} </p>
     <p>amount:{this.props.amount} </p>
     
       
</div>
  )
}


}
