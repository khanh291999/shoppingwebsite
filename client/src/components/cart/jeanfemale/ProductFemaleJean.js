import React, { useContext } from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
import UserContext from "../../../context/userContext"

export default function ProductFemaleJean(props) {
  // const { userData } = useContext(UserContext);
  // const handleAddToCart = () =>{
  // const { id, name, price, img } = props;
  //   props.addToCart({
  //     id_cart:"cart_"+Date.now()+Math.random(),
  //     id_product:id,
  //     name,
  //     price,
  //     quantity:1,
  //     img,
  //   })
  // }
  const { id, name, price, img, img1 } = props;
  return (
    <Box
    component={Link} to={"/femalejean/"+id}
    >
      <div className="product-container">
        <img
          className="product-list-img"
          alt="product"
          src={img}
          onMouseOver={e => (e.currentTarget.src=img1)}
          onMouseOut={e=> (e.currentTarget.src=img)}
        />
        <div className="product-list-name">{name}</div>
        <div className="product-list-price">$ {price}</div>
      </div>
    </Box>
  );
}
