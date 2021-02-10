import { Box, Container, Grid, FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText } from "@material-ui/core";
import React from "react";
import CartProduct from "./CartProduct"
import {connect} from "react-redux"
import CheckoutForm from "./CheckoutForm";
import axios from "axios"
import MuiAlert from '@material-ui/lab/Alert';
import UserContext from './../../context/userContext'
import Swal from 'sweetalert2'
import '../../assets/Cart.css'
import '../../assets/CartProduct.css'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class Cart extends React.Component {
  static contextType = UserContext
  state={
    open:false,
    // openAlert:false,
    // alert: "",
    severity:'success',
    selected_shipping: "",
    checkout:false,
    helperText:""
  }
  constructor() {
    super();
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var timer = new Date(),
    time = timer.getHours() + ':' + timer.getMinutes() + ':' + timer.getSeconds();
    this.state = {
      currentTime: time,
      currentDate: date
    }
  }
  
  handleChange = event => {
    this.setState({selected_shipping:event.target.value});
  };

  handleCloseForm = ()=>{
    this.setState({open:false})
  }
  handleCheckout =() =>{
    const {selected_shipping}= this.state;
    if(selected_shipping === undefined)
    {
      this.setState({
        helperText:"Please choose shipping company"
      })
    }
    else{
    this.setState({open:true})
  }
  }
  // handleCloseSnackBar = () =>{
  //   this.setState({openAlert:false})
  // }
  handleSendForm = (form) =>{
    const user = this.context.userData.user;
    const user1 =this.context.userData
    axios.post("http://localhost:8080/cart",{
      ...form,
      // id: 'order' +Date.now()+Math.random(),
      product:this.props.cart_data,
      userid: user?(user.id||user1.id):(""),
      // status:"Waiting for confirm",
      date: this.state.currentDate,
      time: this.state.currentTime,
      editedby: ""
    }).then(()=>{
      this.setState({
        // alert:"Purchase Complete!",
        severity:"success",
        // openAlert:true,
        open:false
      })
      Swal.fire({
        title:"Purchase Successfully",
        timer:1000,
        icon:'success'
      })
      this.props.clearCart();
    }).catch(err =>{
      this.setState({
        // alert:"Purchase Fail!",
        severity:"error",
        // openAlert:true,
        open:false
      })
      Swal.fire({
        title:"Purchase Unsuccessfully, Please contact our admin",
        text:err.message,
        timer:1000,
        icon:'error'
      })
    })
  }

  // handleCheckoutPaypal=()=>{
  //   const {selected_shipping}= this.state;
  //   console.log('selected_shipping',selected_shipping);
    
  //   if(selected_shipping == undefined)
  //   {
  //     this.setState({
  //       helperText:"Please choose shipping company"
  //     })
  //   }
  //   else{
  //     this.setState({checkout:true})
  //   }
  // }
  
  render(){
    const {selected_shipping} = this.state
    const total = this.props.cart_data.reduce((total,pic)=>{
      return total = total + (pic.quantity*pic.price)
    },0)
    const alltotal = total + parseInt(selected_shipping);
    
    return (
      <Container>
        <Grid container spacing={3}> 
          <Grid item md={9}>
            <Box p={2}>
              {total=="0"?
              <div className="empty-cart-warning-container">
                <div className="empty-cart-warning">Your cart is currently empty.</div>
                <a href="/product" className="continue-shopping-btn">Continue Shopping</a>
              </div> 
              : 
              <table class="styled-table">
              <thead>
                  <tr>
                      <th style={{width: "25%"}}>Product</th>
                      <th style={{width: "25%"}}>Product Name</th>
                      <th style={{width: "11%"}}>Size</th>
                      <th style={{width: "13%"}}>Quantity</th>
                      <th style={{width: "13%"}}>Price</th>
                      <th style={{width: "13%"}}>Remove</th>
                  </tr>
              </thead>
                {this.props.cart_data.map(cart_item=>{
                  return (<CartProduct updateCart={this.props.updateCart} deleteCart={this.props.deleteCart} key={cart_item.id_cart} cart={cart_item} ></CartProduct>)
                })}
              </table>}
            </Box>
          </Grid>
          <Grid item md={3}>
            {total=="0"? <></>:
            <Box boxShadow="0 0 25px rgba(0,0,0,0.16)" p={2}>
              <div className="summary-title">Cart Total</div>
              {/* <Typography>Subtotal: ${total}</Typography>
              <Typography>Ship: </Typography>
              <Typography>Total: ${total}</Typography> */}
              <table class="summary-table">
                <tr>
                  <th>Subtotal</th>
                  <td>${total}</td>
                </tr>
                <tr>
                  <th>Ship</th>
                  {/* <td>Free</td> */}
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Shipping unit</FormLabel> */}
                    <RadioGroup aria-label="unit" name="unit" value={this.value} onChange={this.handleChange}>
                      <FormControlLabel value="1" control={<Radio />} label="Grab" />
                      <FormControlLabel value="2" control={<Radio />} label="Now" />
                      <FormControlLabel value="3" control={<Radio />} label="24h" />
                    </RadioGroup>
                    <FormHelperText style={{color:"red"}}>{this.state.helperText}</FormHelperText>
                  </FormControl>
                  <td>${this.state.selected_shipping}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>${alltotal}</td>
                </tr>
              </table>
              {/* {this.state.checkout ? (
              <Paypal alltotal={alltotal}></Paypal>
              ):(
                <button className="summary-btn" onClick={this.handleCheckoutPaypal}>Paypal</button>
              )}
              <br></br> */}
              <button className="summary-btn" onClick={this.handleCheckout}>Buy</button>
            </Box>}
          </Grid>
        </Grid>
        <CheckoutForm total ={total} shippingfee={parseInt(selected_shipping)} alltotal={alltotal} cart={this.props.cart_data} open={this.state.open} handleClose={this.handleCloseForm} handleSendForm={this.handleSendForm}></CheckoutForm>
        {/* <Snackbar open={this.state.openAlert} autoHideDuration={6000} onClose={this.handleCloseSnackBar}>
          <Alert onClose={this.handleCloseSnackBar} severity={this.state.severity}>
            {this.state.alert}
          </Alert>
        </Snackbar> */}
      </Container>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    cart_data: state.cart,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateCart:(id_cart,value)=>{
      dispatch({type:"UPDATE_CART", payload:{id_cart,value}})
    },
    deleteCart: (id_cart) => {
      dispatch({type:"DELETE_CART", payload:id_cart });
    },
    clearCart: () =>{
      dispatch({type: "CLEAR_CART"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
