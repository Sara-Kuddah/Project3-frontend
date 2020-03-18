import apiUrl from '../apiConfig';
import axios from 'axios';


// Index , show , create ,update  , destroy

// get all Articles 
export const getAllcart = () => {


    return   axios.get(`${apiUrl}/cart`)
  
};
export const deleteAll = () => {
    console.log(" inside axios")
return   axios.delete(`${apiUrl}/cart`)

};

export const deleteItemByID = (id)=> {
    return axios.delete(`${apiUrl}/cart/${id}`);
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
