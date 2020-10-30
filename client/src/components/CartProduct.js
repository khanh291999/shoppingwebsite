import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'

export default function CartProduct(props){
    const {img,name,price,quantity} = props.cart;
    const handleChangeQuantity = event =>{
        if(Number(event.target.value)===0){
            return props.deleteCart(props.cart.id_cart);
        }
        props.updateCart(props.cart.id_cart, event.target.value);
    }
    const handleDeleteFromCart =()=>{
        props.deleteCart(props.cart.id_cart);
    }
    return (
        <Grid container style={{margin: "20px 0"}}>
            <Grid item md={4}>
                <img style={{maxWidth: "100%"}} src={img} alt="cart img"></img>
            </Grid> 
            <Grid item md={8}>
                <Typography>{name} x {quantity}</Typography>
                <Typography>{price*quantity}$</Typography>
                <TextField type="number" value = {quantity} onChange={handleChangeQuantity}></TextField>
                <Button onClick={handleDeleteFromCart}>Delete</Button>
            </Grid>
        </Grid>
    )
}