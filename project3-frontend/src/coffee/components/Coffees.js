import React from 'react';
import Coffee from './Coffee'
import {getAllcoffee} from '../coffeeAPI'; 
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container';

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
        setCarts={this.props.setCarts}
        carts={this.props.carts}
        id={item._id}
        key={index}
        />
    })
     }

  return( <div>
<h3> All Coffees </h3>
<Container>
<CardDeck>
{allCoffees}
</CardDeck>
</Container>
</div>
  )
}
}




