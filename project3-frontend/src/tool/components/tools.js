import React from 'react';
import Tool from './tool'
import {getAlltool} from '../tollAPI'; 
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'


export default class Coffees extends React.Component{
   
    componentDidMount(){
     
        getAlltool() 
        .then ((response)=>{
            this.props.setTools(response.data.tool)

        })
        .catch((error) =>{
            console.log('API error' , error)
        })


    }



render(){
       
    let allTools = <h4> No tool item </h4>

     if(this.props.tools.length > 0){
        allTools = this.props.tools.map((item , index ) => {
        return <Tool name={item.name} 
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
<h3> All Tools </h3>
<Container>
<CardDeck>
{allTools}
</CardDeck>
</Container>
</div>
  )
}


}

