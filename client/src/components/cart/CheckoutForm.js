import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField, Typography } from '@material-ui/core';
import UserContext from './../../context/userContext'
import ConfirmBill from './ConfirmBill';
import '../../assets/CheckOutForm.css'

export default class CheckoutForm extends Component {
  static contextType = UserContext
  
  componentWillMount() {
    const user = this.context.userData.user||this.context.userData;
    console.log('userss',this.context.userData);
    console.log('userss11',this.context.userData.user)
    user ? (
      this.setState({
        name: user.displayName||user,
        address:user.address,
        phone_number:user.phoneNumber,
      })
        ) : (this.setState({
          name:"",
          address:"",
          phone_number:""
        }))
      // console.log('userdata', user);
  }
  

  state={
      name:"",
      address:"",
      phone_number:"",
      openconfirmbill:false,
      helperText:"",
      paypalstatus:""
  }

  handleClickOpen = () => {
    if(this.state.name.length == 0 || this.state.address.length == 0 || this.state.phone_number.length == 0)
    {
      this.setState({
        helperText:"Please input your information"
      })
    } 
    else(
    this.setState({
      openconfirmbill:true
    })
    )
  };

  handleClose = () => {
    this.setState({
      openconfirmbill:false
    })
  };

  handleChange=(event)=>{
      const new_state = {...this.state};
      new_state[event.target.name] = event.target.value; //new_state.name
      this.setState(new_state);
  }
  handlePay=()=>{
      this.props.handleSendForm(this.state)
      this.setState({
        name:"",
        address:"",
        phone_number:"",
      })
  }
  handlePaypalPay=()=>{
    this.setState({
      paypalstatus:"Paid by paypal"
    })
    this.props.handleSendForm(this.state)
    this.setState({
      name:"",
      address:"",
      phone_number:"",
      paypalstatus:""
    })
}
    render(){
        const {handleClose,open}=this.props;
        console.log('total',typeof(this.props.alltotal));
        
        return(
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                    <div class="container">
                    <h1>Shipping</h1>
                    <p>Please enter your shipping details.</p>
                    <hr/>
                    <div class="form">
                      <label class="field">
                        <span class="field__label" for="customer_name">Customer Name</span>
                        <TextField class="field__input" type="text" id="customername" onChange={this.handleChange} helperText={this.state.helperText}  error ={this.state.helperText.length === 0 ? false : true } name="name" value={this.state.name} />
                      </label>
                      <label class="field">
                        <span class="field__label" for="address">Address</span>
                        <TextField class="field__input" type="text" id="address" onChange={this.handleChange} helperText={this.state.helperText}  error ={this.state.helperText.length === 0 ? false : true } name="address" value={this.state.address}/>
                      </label>
                      <label class="field">
                        <span class="field__label" for="phone_number">Phone Number</span>
                        <TextField class="field__input" type="text" id="phone_number" onChange={this.handleChange} helperText={this.state.helperText}  error ={this.state.helperText.length === 0 ? false : true } name="phone_number" value={this.state.phone_number}/>
                      </label>
                    </div>
                    <hr/>
                  </div>
              <DialogActions>
                <Button onClick={handleClose} color="black">
                  Back
                </Button>
                <Button onClick={this.handleClickOpen} color="black" autoFocus>
                  Continue
                </Button>
              </DialogActions>
                  <ConfirmBill total={this.props.total} shippingfee={this.props.shippingfee} alltotal={this.props.alltotal} open={this.state.openconfirmbill} handlePay={this.handlePay} handlePaypalPay={this.handlePaypalPay} handleClose={this.handleClose} cart={this.props.cart} username={this.state.name} useraddress={this.state.address} userphonenumber={this.state.phone_number} ></ConfirmBill>)
          </Dialog>
        )

     
    }
}