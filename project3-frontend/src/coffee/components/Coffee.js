import React from 'react';
import {addToCart} from '../../cart/cartAPI';
// import '../../App.css';

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

<div className="card text-center"  style={{width:18+'em'}}>
<img className="card-img-top" src={this.props.img } alt="Card image cap"/>
  <div class="card-body">
    <h5 classnName="card-title">{this.props.name}</h5>
    <p className="card-text">{this.props.description}</p>
    <p className="card-text"> {this.props.price} </p>
    <a href="#" className="btn btn-primary" onClick={this.addToCartCoffee} >ADD TO CART</a>
  </div>
  </div>

     {/* <h5> {this.props.name}</h5>
     <p> {this.props.description} </p>
       <p> {this.props.type} </p>
       <p> {this.props.price} </p>
       <img src={this.props.img }  height="42" width="42"></img>
       <a href ="#" onClick={this.addToCartCoffee}>ADD TO CART</a> */}

</div>
  )
}
}




