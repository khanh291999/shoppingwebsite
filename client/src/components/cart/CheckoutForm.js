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

export default class CheckoutForm extends Component {
  static contextType = UserContext
  
  componentWillMount() {
    const user = this.context.userData.user;
    user ? (
      this.setState({
        name: user.displayName,
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
      openconfirmbill:false
  }

  handleClickOpen = () => {
    this.setState({
      openconfirmbill:true
    })
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
    render(){
        const {handleClose,open}=this.props;
        console.log('total',this.props.total);
        
        return(
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Please input your information"}</DialogTitle>
            <DialogContent>
                <TextField type="text" onChange={this.handleChange} name="name" value={this.state.name} label="Name"></TextField>
                <TextField type="text" onChange={this.handleChange} name="address" value={this.state.address} label="Address"></TextField>
                <TextField type="text" onChange={this.handleChange} name="phone_number" value={this.state.phone_number} label="Phone Number"></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="black">
                Back
              </Button>
              <Button onClick={this.handleClickOpen} color="black" autoFocus>
                Continue
              </Button>
            </DialogActions>
                <ConfirmBill total={this.props.total} open={this.state.openconfirmbill} handlePay={this.handlePay} handleClose={this.handleClose} cart={this.props.cart} username={this.state.name} useraddress={this.state.address} userphonenumber={this.state.phone_number} ></ConfirmBill>)
          </Dialog>
        )

     
    }
}