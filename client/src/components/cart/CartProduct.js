import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../../assets/CartProduct.css'

export default function CartProduct(props){
    const {img,name,price,size,quantity} = props.cart;
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
        // <Grid container style={{margin: "20px 0", borderBottom:"1px solid black", padding: "10px"}}>
        //     <Grid item md={4}>
        //         <img style={{maxWidth: "30%"}} src={img} alt="cart img"></img>
        //     </Grid> 
        //     <Grid item md={8} >
        //         <Typography variant="h5">{name} x {quantity}</Typography>
        //         <Typography>{price*quantity}$</Typography>
        //         <TextField type="number" value = {quantity} onChange={handleChangeQuantity}></TextField>
        //         <Typography>Size: {size}</Typography>
        //         <Button onClick={handleDeleteFromCart}>Delete</Button>
        //     </Grid>
        // </Grid>
            <tbody>
                <tr>
                    <td>
                        <img style={{maxWidth: "30%"}} src={img} alt="cart img"></img>
                    </td>
                    <td>
                        {name}
                    </td>
                    <td>
                        {size}
                    </td>
                    <td>
                        {quantity}
                    </td>
                    <td>
                        {price}
                    </td>
                    <td>
                        <Button onClick={handleDeleteFromCart}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </Button>
                    </td>
                </tr>
            </tbody>
    )
}