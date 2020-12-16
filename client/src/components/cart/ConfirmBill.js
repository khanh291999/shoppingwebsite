import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Grid, TextField } from '@material-ui/core'
import ConfirmBillProduct from './ConfirmBillProduct'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmBill(props) {
    const {handleClose,handlePay,open,username,useraddress,userphonenumber} = props;
    const classes = useStyles();
  return (
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Information Confirm
            </Typography>
            <Button autoFocus color="inherit" onClick={handlePay}>
              Buy
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Username" secondary={username} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Address" secondary={useraddress} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Phone Number" secondary={userphonenumber} />
          </ListItem>
        </List>
        {props.cart.map(cart_item=>{
                return (<ConfirmBillProduct key={cart_item.id_cart}  cart={cart_item} ></ConfirmBillProduct>)
              })}
      </Dialog>
  );
}
