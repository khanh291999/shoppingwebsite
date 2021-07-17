import { TextField, Button } from "@material-ui/core";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "../../assets/CartProduct.css";

export default function CartProduct(props) {
  const { img, name, price, size, quantity, color } = props.cart;
  const handleChangeQuantity = (event) => {
    if (Number(event.target.value) === 0) {
      return props.deleteCart(props.cart.id_cart);
    }
    props.updateCart(props.cart.id_product,props.cart.color,props.cart.size, props.cart.id_cart, event.target.value);
  };
  const handleDeleteFromCart = () => {
    props.deleteCart(props.cart.id_cart);
  };

  return (
    <tbody>
      <tr>
        <td>
          <img style={{ maxWidth: "30%" }} src={img} alt="cart img"></img>
        </td>
        <td>{name}</td>
        <td>{size}</td>
        <td>
          <TextField
            className="quantity"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          ></TextField>
        </td>
        <td>{price}</td>
        <td>
          <div className="product-list-color">
            <button style={{ background: color }}></button>
          </div>
        </td>
        <td>
          <Button onClick={handleDeleteFromCart}>
            <DeleteForeverIcon></DeleteForeverIcon>
          </Button>
        </td>
      </tr>
    </tbody>
  );
}
