import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading:false
  };

  orderHandler =(event)=>{
    event.preventDefault();
    console.log(this.props);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false});
      })
      .catch((error) => {
        this.setState({ loading: false});
      });
  }
  render() {
      let form = ( <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
        <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>);
      if(this.state.loading){
          form=<Spinner/>
      }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form} 
      </div>
    );
  }
}

export default ContactData;
