import {
  Box,
  Grid,
  Typography,
  TextField,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
//import { TextFields } from "@material-ui/icons";
import React, { Component } from "react";
import { withStyles, CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import ImageContainer from "../ImageContainer";
import "../../../assets/ProductDetail.css";
//import Spinner from "reactstrap"

const CustomRadio = withStyles({
  root: {
    "&$checked": {
      color: "#BD7F32",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const styles = (theme) => ({
  img_container: {
    boxShadow: theme.shadows[3],
  },
});
class ProductDetailFemaleJacket extends Component {
  //state-hook
  state = {
    selected_size: "",
    selected_color: "",
    quantity: 1,
    img: [],
    loading: undefined,
    helperText: "",
    helperTextColor: "",
  };
  handleChange = (event) => {
    this.setState({ selected_size: event.target.value });
  };
  handleChangeColor = (event) => {
    this.setState({ selected_color: event.target.value });
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get(`http://localhost:8080/product/${this.props.match.params.masanpham}`)
      .then((res) => {
        const { _id, name, price, size, image, PID, color, colorHex } =
          res.data;
        this.setState({
          _id,
          name,
          price,
          size,
          img: image,
          PID,
          color,
          colorHex,
          loading: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  handleClickBtn = () => {
    const { _id, name, price, selected_size, selected_color, img, quantity } =
      this.state;
    if (selected_size === "") {
      this.setState({
        helperText: "Please choose size",
      });
    } else if (selected_color === "") {
      this.setState({
        helperTextColor: "Please choose color",
      });
    } else {
      this.props.addToCart({
        id_cart: "cart_" + Date.now() + Math.random(),
        id_product: _id,
        name,
        price,
        img,
        size: selected_size,
        color: selected_color,
        quantity,
      });
    }
  };
  render() {
    const { classes } = this.props;
    const { _id, name, price, size, PID, img, color, colorHex } = this.state;
    return (
      <div className="product-detail-container">
        {this.state.loading === false ? (
          <Container>
            <Grid container>
              <Grid item md={6}>
                <ImageContainer items={img} />
              </Grid>
              <Grid item md={6} className="product-info-container">
                <Typography variant="div" className="product-name">
                  {name}
                </Typography>
                <Typography variant="div" className="product-name">
                  {PID}
                </Typography>
                <Typography variant="div" className="product-price">
                  ${price}
                </Typography>
                <FormHelperText style={{ color: "red" }}>
                  {this.state.helperTextColor}
                </FormHelperText>
                <div className="product-list-color">
                  {colorHex.map((color, index) => (
                    <button
                      key={index}
                      value={color}
                      style={{ background: color }}
                      onClick={this.handleChangeColor}
                    ></button>
                  ))}
                </div>
                <div className="product-info">
                  <div>
                    The Charm is 70’s inspired with a high waist and kick flare.
                    A new fit to our denim collection, it features faded detail
                    and classic 5-pocket styling.{" "}
                  </div>
                  <li>Full length inseam</li>
                  <li>Comfort stretch</li>
                  <li>Zip fly</li>
                  <li>Care: 30-degree normal wash</li>
                </div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Size:</FormLabel>
                  {/* <RadioGroup aria-label="gender" name="gender1" value={this.state.size} onChange={this.handleChange}> */}
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="size"
                    onChange={this.handleChange}
                    className="radio-btn-container"
                  >
                    {size &&
                      size.map((s, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={s}
                            control={<CustomRadio />}
                            label={s}
                          />
                        );
                      })}
                  </RadioGroup>
                  <FormHelperText style={{ color: "red" }}>
                    {this.state.helperText}
                  </FormHelperText>
                </FormControl>
                <Box>
                  <TextField
                    className="product-quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={(event) => {
                      this.setState({
                        quantity: Number(
                          event.target.value < 0
                            ? (event.target.value = 0)
                            : event.target.value
                        ),
                      });
                    }}
                  ></TextField>
                  <button
                    className="add-to-cart-button"
                    onClick={this.handleClickBtn}
                  >
                    Add to cart
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(ProductDetailFemaleJacket)));
