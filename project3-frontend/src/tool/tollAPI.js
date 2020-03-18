import apiUrl from '../apiConfig';
import axios from 'axios';


// Index 

// get all tools 
export const getAlltool = () => {
           console.log(" inside axios")
    return   axios.get(`${apiUrl}/tool`)
  
};