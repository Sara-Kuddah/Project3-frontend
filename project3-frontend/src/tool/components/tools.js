import React from 'react';
import Tool from './tool'
import {getAlltool} from '../tollAPI'; 



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
        id={item._id}
        key={index}
        />
    })

     }

    
     
    
  return( <div>
<h3> All tools </h3>
{allTools}

</div>
  )
}


}

