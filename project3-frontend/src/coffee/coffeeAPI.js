import apiUrl from '../apiConfig';
import axios from 'axios';


// Index , show , create ,update  , destroy

// get all Articles 
export const getAllcoffee = () => {
           console.log(" inside axios")
    return   axios.get(`${apiUrl}/coffee`)
  
};