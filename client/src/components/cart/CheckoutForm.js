import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField, Typography } from '@material-ui/core';
import UserContext from './../../context/userContext'

export default class CheckoutForm extends Component {
  static contextType = UserContext
  
  componentDidMount() {
    const userData = this.context
    userData ? (
      this.setState({
        name: "userData.displayName",
        address:"userData.address",
        phone_number:"userData.phone_number",
      })
        ) : (this.setState({
          name:"",
          address:"",
          phone_number:""
        }))
      console.log(userData)
  }

  state={
      name:"",
      address:"",
      phone_number:"",
  }
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
        return(
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Checkout"}</DialogTitle>
            <DialogContent>
                <TextField type="text" onChange={this.handleChange} name="name" value={this.state.name} label="name"></TextField>
                <TextField type="text" onChange={this.handleChange} name="address" value={this.state.address} label="address"></TextField>
                <TextField type="text" onChange={this.handleChange} name="phone_number" value={this.state.phone_number} label="phone_number"></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handlePay} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        )
    }
}