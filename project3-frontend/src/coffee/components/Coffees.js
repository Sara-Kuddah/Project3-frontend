import React from 'react';
import Coffee from './Coffee'
import {getAllcoffee} from '../coffeeAPI'; 



export default class Coffees extends React.Component{
   
    componentDidMount(){
     
        getAllcoffee() 
        .then ((response)=>{
            this.props.setCoffees(response.data.coffee)

        })
        .catch((error) =>{
            console.log('API error' , error)
        })


    }



render(){
       
    let allCoffees = <h4> No coffee item </h4>

     if(this.props.coffees.length > 0){
        allCoffees = this.props.coffees.map((item , index ) => {
        return <Coffee name={item.name} 
        description={item.description}
        type={item.type}
        price={item.price}
        img={item.img}
        id={item._id}
        key={index}
        />
    })

     }

    
     
    
  return( <div>
<h3> All coffees </h3>
{allCoffees}

</div>
  )
}


}




