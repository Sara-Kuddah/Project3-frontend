import React from 'react';


export default class Coffee extends React.Component{
  

  render(){

  return(
<div className="coffee">
     <h2> {this.props.name}</h2>
     <p> {this.props.description} </p>
       <p> {this.props.type} </p>
       <p> {this.props.price} </p>
       <p> {this.props.img} </p>
</div>
  )
}


}




