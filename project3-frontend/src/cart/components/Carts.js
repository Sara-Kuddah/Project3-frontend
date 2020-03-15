import React from 'react';
import Cart from './Cart'
import {getAllcart} from '../cartAPI'; 



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



render(){
       
    let allCarts = <h4> No Carts item </h4>

     if(this.props.carts.length > 0){
        allCarts = this.props.carts.map((item , index ) => {
        return <Cart name={item.name} 
        price={item.price}
        img={item.img}
        amount={item.amount}
        totalprice={item.totalprice}
        itemId={item.itemId}
        id={item._id}
        key={index}
        />
    })

     }
     
    
  return( <div>
<h3> All Carts </h3>
{allCarts}

</div>
  )
}


}