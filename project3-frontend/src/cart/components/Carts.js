import React from 'react';
import Cart from './Cart'
import {getAllcart, deleteAll, deleteItemByID} from '../cartAPI'; 



export default class Carts extends React.Component{
   
    componentDidMount(){
     
        getAllcart() 
        .then ((response)=>{
            this.props.setCarts(response.data.cart)

        })
        .catch((error) =>{
            console.log('API error' , error)
        })


    }

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


render(){
       
    let allCarts = <h4> No Carts item </h4>

     if(this.props.carts.length > 0){
        allCarts = this.props.carts.map((item , index ) => {
        return <Cart name={item.name} 
        price={item.price}
        img={item.img}
        amount={item.amount}
        totalprice={item.totalprice}
        deleteOne={this.deleteOne}
        itemId={item.itemId}
        id={item._id}
        key={index}
        />
    })

     }

  
     
    
  return( <div>
<h3> All Carts </h3>
<a href="#" onClick={this.deleteAllCart}>Delete All</a>
{allCarts}

</div>
  )
}


}