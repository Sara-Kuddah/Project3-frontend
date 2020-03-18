import apiUrl from '../apiConfig';
import axios from 'axios';


// Index , show , create ,update  , destroy

// get all items  in cart
export const getAllcart = () => {


    return   axios.get(`${apiUrl}/cart`)
  
};
// delele all items from cart
export const deleteAll = () => {
    console.log(" inside axios")
return   axios.delete(`${apiUrl}/cart`)

};
// delete one item from cart
export const deleteItemByID = (id)=> {
    return axios.delete(`${apiUrl}/cart/${id}`);
  };

// add one item to cart 
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

// update the amount and total price of the item
export const updateAmount= (cartItem , id ) =>{
    console.log("this is the add to cart function work ");
    return axios.patch(`${apiUrl}/cart/${id}` , 
        {
            "cart":{
             "itemId" : cartItem.itemId ,
             "totalprice" : cartItem.totalprice ,
              "name": cartItem.name,
             "price": cartItem.price, 
             "amount" : cartItem.amount ,
            "img": cartItem.img
            } 
       }
    )
    
}
