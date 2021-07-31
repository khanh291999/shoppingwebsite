import React from "react";

export default function AdminStatusItem(props) {
  const { img, name, price, size, quantity, colorName } = props.cart;
  return (
    <div class="product">
      <div>
        <div class="img-container">
          <img src={img} alt="cart img" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div class="product-label">{name}</div>
            <div class="product-size">{"Size: " + size}</div>
            <div class="product-size">{"Color: " + colorName}</div>
          </div>
          <div class="absolute">{quantity}</div>
        </div>
      </div>
      <div style={{ alignSelf: "center" }}>{"$" + price * quantity}</div>
    </div>
  );
}
