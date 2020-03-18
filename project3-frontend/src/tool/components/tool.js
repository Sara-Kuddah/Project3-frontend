import React from 'react';
import {addToCart} from '../../cart/cartAPI';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Tool extends React.Component{
    // call back cart API to add item to cart array
  addToCartTool = (event)=>{
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
    <Button variant="primary" onClick={this.addToCartTool}>ADD TO CART</Button>

</Card>


  )
}


}