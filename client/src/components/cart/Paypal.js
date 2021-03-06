import React ,{Component} from 'react'
import { PayPalButton } from "react-paypal-button-v2";

export default class Paypal extends Component {
  render() {
    const {handlePaypalPay,alltotal} = this.props;
    return (
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: alltotal
              }
            }],
            // application_context: {
            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
            // }
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function(details) {
            // Show a success message to your buyer
            alert("Transaction completed by " + details.payer.name.given_name);
            handlePaypalPay(); //{handlePaypalPay()}
            // OPTIONAL: Call your server to save the transaction
            return fetch("http://localhost:8080/paypal", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          });
        }}
        OnError = {(err)=>{
            console.log(err);
        }}
      />
    );
  }
}