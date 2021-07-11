import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ProductFemaleJacket(props) {
  const { _id, name, price, img, img1, PID, color, colorHex } = props;
  return (
    <Box component={Link} to={"/femalejacket/" + _id}>
      <div className="product-container">
        <img
          className="product-list-img"
          alt="product"
          src={img}
          onMouseOver={(e) => (e.currentTarget.src = img1)}
          onMouseOut={(e) => (e.currentTarget.src = img)}
        />
        <div className="product-list-name">
          {name} | {PID}
        </div>
        <div className="product-list-price">$ {price}</div>
        <div className="product-list-color">
          {colorHex.map((color) => (
            <button style={{ background: color }}></button>
          ))}
        </div>
      </div>
    </Box>
  );
}
