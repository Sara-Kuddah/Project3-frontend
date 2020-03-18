
import React from "react";
import { updateAmount } from "../cartAPI";
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.amount,
      totalprice: this.props.totalprice
    };
  }

  deleteItem = event => {
    event.preventDefault();
    this.props.deleteOne(this.props.id);
  };

  decreseAmount = () => {
    if (this.state.amount > 0) {
      let newamount = this.state.amount;
      let newTotalprice = this.state.totalprice;
      newTotalprice = newTotalprice - this.props.price;
      newamount = newamount - 1;
      this.setState({
        amount: newamount,
        totalprice: newTotalprice
      });
      // console.log("dec",this.state.amount)
      // let cartItem ={
      //   itemId : this.props.id ,
      //   totalprice: this.state.totalprice ,
      //    name: this.props.name,
      //   price: this.props.price ,
      //   amount : this.state.amount ,
      //   img: this.props.img
      //  }

      // updateAmount(cartItem , this.props.id )
      // .then((response) => {

      // })
      // .catch((error) => {
      //   console.log('API ERROR:', error);
      // });
    }
  };

  incresAmount = () => {
    let newamount = this.state.amount;
    let newTotalprice = this.state.totalprice;
    newamount = newamount + 1;
    newTotalprice = newTotalprice + this.props.price;

    this.setState({
      amount: newamount,
      totalprice: newTotalprice
    });
    console.log("Inc", this.state.amount);
    // let cartItem ={
    //   itemId : this.props.id ,
    //   totalprice: this.state.totalprice ,
    //    name: this.props.name,
    //   price: this.props.price,
    //   amount : this.state.amount ,
    //   img: this.props.img
    //  }
    //  updateAmount(cartItem , this.props.id )
    // .then((response) => {

    //   console.log("update item ")

    // })
    // .catch((error) => {
    //   console.log('API ERROR:', error);
    // });
  };

  saveChange = event => {
    event.preventDefault();
    let cartItem = {
      itemId: this.props.id,
      totalprice: this.state.totalprice,
      name: this.props.name,
      price: this.props.price,
      amount: this.state.amount,
      img: this.props.img
    };
    updateAmount(cartItem, this.props.id)
      .then(response => {
        console.log("update item ");
        //  let newArray = this.props.carts.map(( item , index)=>{
        //    return   item

        // })

        // this.props.setCarts(newArray)
        // this.props.componentDidMount()
        this.props.sumAllTotal();
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };
  render() {
    return (

  <div className="cart">
        <ListGroup horizontal >
  <ListGroup.Item >{this.props.name}</ListGroup.Item>
  <ListGroup.Item>{this.props.price} </ListGroup.Item>
  <ListGroup.Item><button onClick={this.decreseAmount}> - </button></ListGroup.Item>
  <ListGroup.Item>{this.state.amount}</ListGroup.Item>
  <ListGroup.Item><button onClick={this.incresAmount}> + </button> </ListGroup.Item>
  <ListGroup.Item>{this.state.totalprice} </ListGroup.Item>
  <ListGroup.Item> <a href="#" onClick={this.saveChange}><i class="material-icons">
save_alt
</i></a></ListGroup.Item>
  <ListGroup.Item><Button variant="danger"  onClick={this.deleteItem}><i class="material-icons">
delete_forever
</i></Button> </ListGroup.Item>
</ListGroup>
</div>

    );
  }
}