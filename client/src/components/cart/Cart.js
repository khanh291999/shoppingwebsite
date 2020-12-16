import { Box, Button, Container, Grid, Typography, Snackbar } from "@material-ui/core";
import React from "react";
import CartProduct from "./CartProduct"
import {connect} from "react-redux"
import CheckoutForm from "./CheckoutForm";
import axios from "axios"
import MuiAlert from '@material-ui/lab/Alert';
import UserContext from './../../context/userContext'
import Swal from 'sweetalert2'
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class Cart extends React.Component {
  static contextType = UserContext
  state={
    open:false,
    // openAlert:false,
    // alert: "",
    severity:'success'
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
  
  handleCloseForm = ()=>{
    this.setState({open:false})
  }
  handleCheckout =() =>{
    this.setState({open:true})
  }
  // handleCloseSnackBar = () =>{
  //   this.setState({openAlert:false})
  // }
  handleSendForm = (form) =>{
    const user = this.context.userData.user;
    axios.post("http://localhost:8080/cart",{
      ...form,
      id: 'order' +Date.now()+Math.random(),
      product:this.props.cart_data,
      userid: user.id,
      status:"Waiting for confirm",
      date: this.state.currentDate,
      time: this.state.currentTime
    }).then(res=>{
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

  render(){
    const total = this.props.cart_data.reduce((total,pic)=>{
      return total = total + (pic.quantity*pic.price)
    },0)
    return (
      <Container>
        <Grid container spacing={3}> 
          <Grid item md={9}>
            <Box p={2}>
              {this.props.cart_data.map(cart_item=>{
                return (<CartProduct updateCart={this.props.updateCart} deleteCart={this.props.deleteCart} key={cart_item.id_cart} cart={cart_item} ></CartProduct>)
              })}
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box boxShadow="0 0 25px rgba(0,0,0,0.16)" p={2}>
              <Typography>ToTal: {total}$</Typography>
              <Button onClick={this.handleCheckout}>Buy</Button>
            </Box>
          </Grid>
        </Grid>
        <CheckoutForm total={total} cart={this.props.cart_data} open={this.state.open} handleClose={this.handleCloseForm} handleSendForm={this.handleSendForm}></CheckoutForm>
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
