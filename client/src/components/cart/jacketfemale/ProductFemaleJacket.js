import React, { useContext } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
import UserContext from "../../../context/userContext"

export default function ProductFemaleJacket(props) {
  const { userData } = useContext(UserContext);
  const handleAddToCart = () =>{
  const { id, name, price, img } = props;
    props.addToCart({
      id_cart:"cart_"+Date.now()+Math.random(),
      id_product:id,
      name,
      price,
      quantity:1,
      img,
    })
  }
  const { id, name, price, img } = props;
  return (
    <Grid item md={3} >
      <Box boxShadow={5}>
        <Box
          height={250}
          overflow="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#eeefe6"
        >
          <img
            src={img}
            alt="product"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
        <Box p={2} borderTop="1px solid black">
          <Typography color="inherit" variant="body1">
            <Link to={"/femalejacket/"+id}>{name}</Link>
          </Typography>
          <Typography color="inherit" variant="subtitle1">
            {price}$
          </Typography>
          {userData.user ?(
          <Button variant="outlined" color="default" onClick={handleAddToCart}>
            Add to Cart
          </Button>):(
              ""
          )}
        </Box>
      </Box>
    </Grid>
  );
}
