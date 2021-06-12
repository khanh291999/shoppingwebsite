import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "0 5px",
    backgroundColor: "#282828",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#282828",
    },
  },
}))(Button);

export default function ProductRowDisableFemaleJacket(props) {
  const handledeleteDisableProduct = () => {
    props.deleteDisableProduct(props.product._id);
  };
  const handleaddOnSaleProduct = () => {
    const size = ["S", "M", "L", "XL", "XXL"];
    const { name, price, image, sex, category, S, M, L, XL, XXL } =
      props.product;
    props.addOnSaleProduct(
      name,
      image,
      price,
      size,
      category,
      sex,
      S,
      M,
      L,
      XL,
      XXL
    );
  };
  const handleOnSale = () => {
    handledeleteDisableProduct();
    handleaddOnSaleProduct();
  };
  const { _id, name, price, image } = props.product;
  return (
    <div className="table-rows">
      <div className="table-cell">{_id}</div>
      <div className="table-cell">{name}</div>
      <div className="table-cell">{price}$</div>
      <div className="table-cell">
        <img alt="" src={image} />
      </div>
      <div className="table-cell" style={{ justifyContent: "center" }}>
        <ColorButton
          variant="contained"
          color="secondary"
          className="onsale-button"
          onClick={handleOnSale}
        >
          On sale
        </ColorButton>
      </div>
    </div>
  );
}
