import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'

export default function ConfirmBillProduct(props){
    const {img,name,price,size,quantity} = props.cart;
    return (
        <Grid container style={{margin: "20px 0", borderBottom:"1px solid black", padding: "10px"}}>
            <Grid item md={4}>
                <img style={{maxWidth: "30%"}} src={img} alt="cart img"></img>
            </Grid> 
            <Grid item md={8} >
                <Typography variant="h5">{name} x {quantity}</Typography>
                <Typography>Price: {price*quantity}$</Typography>
                <Typography> Quantity: {quantity} </Typography>
                <Typography>Size: {size}</Typography>
            </Grid>
        </Grid>
    )
}