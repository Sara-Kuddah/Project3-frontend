import React from 'react';
import {addToCart} from '../../cart/cartAPI';

export default class Coffee extends React.Component{


   addToCartCoffee = (event)=>{
    event.preventDefault();

    let cartItem ={
      itemId : this.props.id ,
      totalprice: this.props.price ,
       name: this.props.name,
      price: this.props.price, 
      amount : 1 ,
     img: this.props.img
     } 
    

    addToCart(cartItem) 
    .then ((res)=>{
        console.log("Item has been Added");
        const  newCartList = this.props.carts;
        newCartList.push(res.data.cart);
        console.log(res.data.cart)
        this.props.setCarts(newCartList)
        

    })
    .catch((error) =>{
        console.log('API error' , error)
    })
  }
  render(){
  return(
<div className="coffee">
     <h2> {this.props.name}</h2>
     <p> {this.props.description} </p>
       <p> {this.props.type} </p>
       <p> {this.props.price} </p>
       <p> {this.props.img} </p>
       <a href ="#" onClick={this.addToCartCoffee}>ADD TO CART</a>
</div>
  )
}
}




