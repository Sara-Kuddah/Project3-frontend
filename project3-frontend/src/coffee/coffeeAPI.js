import apiUrl from '../apiConfig';
import axios from 'axios';
import {} from '../cart/cartAPI'

// Index 

// get all coffee 
export const getAllcoffee = () => {
           console.log(" inside axios")
    return   axios.get(`${apiUrl}/coffee`)
  
};

