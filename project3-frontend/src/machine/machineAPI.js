import apiUrl from '../apiConfig';
import axios from 'axios';


// Index 

// get all mashines 
export const getAllmachine = () => {
           console.log(" inside axios")
    return   axios.get(`${apiUrl}/machine`)
  
};