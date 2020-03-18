import React from 'react';
import {addToCart} from '../../cart/cartAPI';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class Coffee extends React.Component{

 // call back cart API to add item to cart array
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

     let ItemExist=false;

     this.props.carts.forEach((item)=>{
       if(item.name === this.props.name ){
         console.log("ItemExist");
        ItemExist= true;
  
     }
    
     });


    if(ItemExist){
      console.log(ItemExist);
      console.log("ItemExist");
      alert("You can not add this item , it is already exist in thr Cart")

    }else{
      console.log(ItemExist);
      console.log("ItemNotExist");
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
    }

 
  render(){

  return(<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    {this.props.description} 
    </Card.Text>
    <Card.Text>
    {this.props.price} RAL
    </Card.Text>
    </Card.Body>
    <Button variant="primary" onClick={this.addToCartCoffee}>ADD TO CART</Button>

</Card>

  )
}
}




