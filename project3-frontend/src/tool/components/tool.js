import React from 'react';
import {addToCart} from '../../cart/cartAPI';


export default class Tool extends React.Component{
  
  addToCartTool = (event)=>{
    event.preventDefault();

    let cartItem ={
      itemId : this.props.id ,
      totalprice:55 ,
       name: this.props.name,
      price: this.props.price, 
      amount : 9 ,
     img: this.props.img
     } 
    

    addToCart(cartItem) 
    .then ((response)=>{
        console.log("Item has been Added");
        const  newCartList = this.props.carts;
        newCartList.push(cartItem);
        console.log(newCartList)
        this.props.setCarts(newCartList)
        window.location.reload()

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
       <a href ="#" onClick={this.addToCartTool}>ADD TO CART</a>
</div>
  )
}


}