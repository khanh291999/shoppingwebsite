import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import "../../assets/Cart.css";
import "../../assets/CartProduct.css";
import UserContext from "./../../context/userContext";
import { withStyles } from "@material-ui/core/styles";
import CartProduct from "./CartProduct";
import CheckoutForm from "./CheckoutForm";
import emailjs from "emailjs-com";

const CustomRadio = withStyles({
  root: {
    "&$checked": {
      color: "#BD7F32",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class Cart extends React.Component {
  static contextType = UserContext;
  state = {
    open: false,
    // openAlert:false,
    // alert: "",
    severity: "success",
    selected_shipping: "",
    checkout: false,
    helperText: "",
  };
  constructor() {
    super();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    var timer = new Date(), time;
    var hour = timer.getHours(), minute = timer.getMinutes(), second = timer.getSeconds();
    if(hour < "10"){
      hour = "0" + hour;
    }
    if(minute < "10"){
      minute = "0" + minute;
    }
    if(second < "10"){
      second = "0" + second;
    }
    time = hour + ":" + minute + ":" + second;
    this.state = {
      currentTime: time,
      currentDate: date,
    };
  }

  handleChange = (event) => {
    this.setState({ selected_shipping: event.target.value });
  };

  handleCloseForm = () => {
    this.setState({ open: false });
  };
  handleCheckout = () => {
    const { selected_shipping } = this.state;
    if (selected_shipping == undefined) {
      this.setState({
        helperText: "Please choose shipping company",
      });
    } else {
      this.setState({ open: true });
    }
  };
  // handleCloseSnackBar = () =>{
  //   this.setState({openAlert:false})
  // }
  handleSendForm = (form) => {
    const sendTrigger = document.getElementById('emailForm');
    const { cartItems = [] } = this.props;
    const { selected_shipping } = this.state;
    const user = this.context.userData.user;
    const user1 = this.context.userData;
    const total = cartItems.reduce((total, pic) => {
      return (total = total + pic.quantity * pic.price);
    }, 0);
    const allTotal = total + parseInt(selected_shipping);
    const shippingfee = parseInt(selected_shipping);

    axios
      .post("http://localhost:8080/cart", {
        ...form,
        // id: 'order' +Date.now()+Math.random(),
        product: this.props.cartItems,
        userid: user ? user.id || user1.id : "",
        // status:"Waiting for confirm",
        date: this.state.currentDate,
        time: this.state.currentTime,
        editedby: "",
        shippingfee,
        total,
        allTotal,
      })
      .then((res) => {
        this.setState({
          // alert:"Purchase Complete!",
          severity: "success",
          // openAlert:true,
          open: false,
        });
        Swal.fire({
          title: "Purchase Successfully",
          timer: 1000,
          icon: "success",
        });
        this.props.clearCart();
        sendTrigger.querySelector('input[type="submit"]').click();
      })
      .catch((err) => {
        this.setState({
          // alert:"Purchase Fail!",
          severity: "error",
          // openAlert:true,
          open: false,
        });
        Swal.fire({
          title: "Purchase Unsuccessfully, Please contact our admin",
          text: err.message,
          timer: 1000,
          icon: "error",
        });
      });
  };

  //send email
  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o45eeao', 'template_ycv955e', e.target, 'user_bC3rsl7XER7fkEvk1VU3G')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  render() {
    const { selected_shipping } = this.state;
    const { cartItems = [] } = this.props;
    const total = cartItems.reduce((total, pic) => {
      return (total = total + pic.quantity * pic.price);
    }, 0);
    const alltotal = total + parseInt(selected_shipping);
    const userData = this.context.userData.user;

    return (
      <Container 
        style={{ 
          userSelect: "none" 
          }}>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Box p={2}>
              {total == "0" ? (
                <div className="empty-cart-warning-container">
                  <div className="empty-cart-warning">
                    Your cart is currently empty.
                  </div>
                  <a href="/product" className="continue-shopping-btn">
                    Continue Shopping
                  </a>
                </div>
              ) : (
                <table class="styled-table">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Product</th>
                      <th style={{ width: "25%" }}>Product Name</th>
                      <th style={{ width: "11%" }}>Size</th>
                      <th style={{ width: "13%" }}>Quantity</th>
                      <th style={{ width: "13%" }}>Price</th>
                      <th style={{ width: "7%" }}>Color</th>
                      <th style={{ width: "13%" }}>Remove</th>
                    </tr>
                  </thead>
                  {cartItems.map((cart_item) => {
                    return (
                      <CartProduct
                        updateCart={this.props.updateCart}
                        deleteCart={this.props.deleteCart}
                        key={cart_item.id_cart}
                        cart={cart_item}
                      ></CartProduct>
                    );
                  })}
                </table>
              )}
            </Box>
          </Grid>
          <Grid item md={3}>
            {total == "0" ? (
              <></>
            ) : (
              <Box boxShadow="0 0 25px rgba(0,0,0,0.16)" p={2}>
                <div className="summary-title">Cart Total</div>
                {/* <Typography>Subtotal: ${total}</Typography>
              <Typography>Ship: </Typography>
              <Typography>Total: ${total}</Typography> */}
                <table class="summary-table">
                  <tr>
                    <th>Subtotal</th>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Shipping method</th>
                    {/* <td>Free</td> */}
                    <FormControl component="fieldset">
                      {/* <FormLabel component="legend">Shipping unit</FormLabel> */}
                      <RadioGroup
                        aria-label="unit"
                        name="unit"
                        value={this.value}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="0"
                          control={<CustomRadio />}
                          label="Freeship"
                        />
                        <FormControlLabel
                          value="1"
                          control={<CustomRadio />}
                          label="Ho Chi Minh"
                        />
                        <FormControlLabel
                          value="2"
                          control={<CustomRadio />}
                          label="Nationwide"
                        />
                      </RadioGroup>
                      <FormHelperText style={{ color: "#BD7F32" }}>
                        {this.state.helperText}
                      </FormHelperText>
                    </FormControl>
                    <td>${this.state.selected_shipping}</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>${alltotal.toFixed(2)}</td>
                  </tr>
                </table>
                {/* {this.state.checkout ? (
              <Paypal alltotal={alltotal}></Paypal>
              ):(
                <button className="summary-btn" onClick={this.handleCheckoutPaypal}>Paypal</button>
              )}
              <br></br> */}
                <button className="summary-btn" onClick={this.handleCheckout}>
                  Proceed to Checkout
                </button>
              </Box>
            )}
          </Grid>
        </Grid>
        <CheckoutForm
          total={total}
          shippingfee={parseInt(selected_shipping)}
          alltotal={alltotal}
          cart={cartItems}
          open={this.state.open}
          handleClose={this.handleCloseForm}
          handleSendForm={this.handleSendForm}
        ></CheckoutForm>
        {/* <Snackbar open={this.state.openAlert} autoHideDuration={6000} onClose={this.handleCloseSnackBar}>
          <Alert onClose={this.handleCloseSnackBar} severity={this.state.severity}>
            {this.state.alert}
          </Alert>
        </Snackbar> */}
        <form 
          id = "emailForm"
          style={{display:'none'}}
          onSubmit={this.sendEmail}>
            <input type="text" placeholder="Name" name="name" value={userData.displayName}/>
            <input type="email"  placeholder="Email Address" name="email" value={userData.email}/>
            <input type="submit" value="Send Message"></input>
        </form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (id_product,color, size, id_cart, value) => {
      dispatch({ type: "UPDATE_CART", payload: { id_product,color, size, id_cart, value } });
    },
    deleteCart: (id_cart) => {
      dispatch({ type: "DELETE_CART", payload: id_cart });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
