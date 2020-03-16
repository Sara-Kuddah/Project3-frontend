import apiUrl from '../apiConfig';
import axios from 'axios';


// Index , show , create ,update  , destroy

// get all Articles 
export const getAllcart = () => {
           console.log(" inside axios")
    return   axios.get(`${apiUrl}/cart`)
  
};


export const addToCart= (cartItem) =>{
    console.log("this is the add to cart function work ");
    return axios.post(`${apiUrl}/cart` , 
        {
            "cart":{
             "itemId" : cartItem.itemId ,
             "totalprice" :cartItem.totalprice ,
              "name": cartItem.name,
             "price": cartItem.price, 
             "amount" : cartItem.amount ,
            "img": cartItem.img
            } 
       }
    )
    
}