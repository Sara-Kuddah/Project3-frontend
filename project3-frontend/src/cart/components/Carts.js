import React from 'react';
import Cart from './Cart'
import {getAllcart, deleteAll, deleteItemByID } from '../cartAPI'; 
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'


export default class Carts extends React.Component{
    componentDidMount(){
      // call axios API to get all items in cart 
        getAllcart() 
        .then ((response)=>{
          // send the response to cart array 
            this.props.setCarts(response.data.cart)
        })
        .catch((error) =>{
            console.log('API error' , error)
        })
    }

    // delete all items in cart
    deleteAllCart =(event)=>{
        event.preventDefault();
        deleteAll()
        .then ((response)=>{
        this.componentDidMount()
        })
        .catch((error) =>{
            console.log('API error' , error)
        })
     }

     // delete one item from the cart
     deleteOne = (id) => {
        console.log('The item ID to Delete', id);
        deleteItemByID(id)
          .then((response) => {
            console.log(`The item with the ID ${id} has been deleted.`);
            const newCartList = this.props.carts.filter((item) => {
              return item._id !== id;
            });
            this.props.setCarts(newCartList);
          })
          .catch((error) => {
            console.log('API ERROR:', error);
          });
      }

      // calculite all items price that on the cart
  sumAllTotal = () => {
    this.componentDidMount()
    let totalAllProduct = 0 ;
    if (this.props.carts.length > 0){
      let newArray = this.props.carts.filter((element) => {
               return totalAllProduct += element.totalprice
      })
      return totalAllProduct
   }
  }
render(){

    let allCarts = <h4> No Carts item </h4>
    // check if cart array have item to create item in cart 
     if(this.props.carts.length > 0){
        allCarts = this.props.carts.map((item , index ) => {
        return <Cart name={item.name} 
        price={item.price}
        img={item.img}
        amount={item.amount}
        totalprice={item.totalprice}
        deleteOne={this.deleteOne}
        setCarts={this.props.setCarts}
        itemId={item.itemId}
        id={item._id}
        key={index}
        setCarts={this.props.setCarts}
        carts = {this.props.carts}
        sumAllTotal={this.sumAllTotal}
        />
    })
     }
  return( <div>
<h3> All Carts </h3>
<a href="#" onClick={this.deleteAllCart}>Delete All</a>

<Container>
<div className="cart">
<ListGroup horizontal>
  <ListGroup.Item >Name</ListGroup.Item>
  <ListGroup.Item> Price</ListGroup.Item>
  <ListGroup.Item> Subs </ListGroup.Item>
  <ListGroup.Item>Amount</ListGroup.Item>
  <ListGroup.Item>Add</ListGroup.Item>
  <ListGroup.Item>Total price </ListGroup.Item>
  <ListGroup.Item >Save changes</ListGroup.Item>
  <ListGroup.Item >Delete</ListGroup.Item>
</ListGroup>
</div>
{allCarts}
</Container>  
<h4> The Total </h4>
{this.sumAllTotal()}
</div>
  )
}
}