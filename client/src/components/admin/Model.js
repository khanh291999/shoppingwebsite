import React, { Component } from "react";
import "../../assets/modal.css";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  TextField,
  Checkbox,
  Radio,
  Select,
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  FormGroup,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Input,
} from "@material-ui/core";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
});

const categories = [
  {
    value: "jacket",
    label: "Jacket",
  },
  {
    value: "jean",
    label: "Jean",
  },
  {
    value: "t-shirt",
    label: "T-shirt",
  },
];

class Modal extends Component {
  state = {
    name: "PRODUCT NEW",
    price: 20,
    sex: 0,
    category: "jacket",
    color: "white",
    colorHex: "#ffffff",
    S: 10,
    M: 10,
    L: 10,
    XL: 10,
    XXL: 10,
    image_one:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dwfd141870/images/xlarge-2D368637-7728-4094-99A7CB28FA38C2EF.png?sw=1125&strip=false&bgcolor=EDEEE5",
    image_two:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dwf45da75a/images/xlarge-42521F82-ED8E-49AA-AFEC0B884601A530.png?sw=1125&strip=false&bgcolor=EDEEE5",
    image_three:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw20a50f46/images/xlarge-7492426A-F546-499C-9B549EEB85506777.png?sw=1125&strip=false&bgcolor=EDEEE5",
    image_four:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw20a50f46/images/xlarge-7492426A-F546-499C-9B549EEB85506777.png?sw=1125&strip=false&bgcolor=EDEEE5",
    image_five:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw20a50f46/images/xlarge-7492426A-F546-499C-9B549EEB85506777.png?sw=1125&strip=false&bgcolor=EDEEE5",
    image_six:
      "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw20a50f46/images/xlarge-7492426A-F546-499C-9B549EEB85506777.png?sw=1125&strip=false&bgcolor=EDEEE5",
    helperText: "",
  };

  handleClose = () => {
    this.props.toggleModal();
  };

  componentDidMount() {
    if (this.props.editingProduct) {
      const {
        _id,
        image,
        price,
        name,
        sex,
        category,
        color,
        colorHex,
        S,
        M,
        L,
        XL,
        XXL,
      } = this.props.editingProduct;
      this.setState({
        _id,
        image,
        price,
        name,
        sex,
        category,
        color,
        colorHex,
        S,
        M,
        L,
        XL,
        XXL,
      });
    } else {
    }
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.props.clearIsEditing();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.replace(/[^\w\s]/gi, ""),
    });
  };

  handleChangeImageUrl = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePrice = (event) => {
    this.setState({
      [event.target.name]:
        event.target.value < 0 ? (event.target.value = 0) : event.target.value,
    });
  };

  handleSex = (event) => {
    this.setState({
      [event.target.name]:
        event.target.value < 0 || event.target.value > 1
          ? (event.target.value = 0)
          : event.target.value,
    });
  };

  handleColor = (event) => {
    this.setState({
      [event.target.name]: event.target.name,
    });
  };

  handleColorHex = (event) => {
    this.setState({
      [event.target.name]: event.target.name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      _id,
      name,
      price,
      image_one,
      image_three,
      image_two,
      image_four,
      image_five,
      image_six,
      helperText,
      sex,
      category,
      color,
      colorHex,
      S,
      M,
      L,
      XL,
      XXL,
    } = this.state;
    const image = [
      image_one,
      image_two,
      image_three,
      image_four,
      image_five,
      image_six,
    ];
    if (
      name === "" ||
      price === "" ||
      image_one === "" ||
      image_two === "" ||
      image_three === "" ||
      image_four === "" ||
      image_five === "" ||
      image_six === "" ||
      sex === "" ||
      category === "" ||
      color === "" ||
      colorHex === "" ||
      S === "" ||
      M === "" ||
      L === "" ||
      XL === "" ||
      XXL === ""
    ) {
      this.setState({
        helperText: "Field can not be empty!",
      });
    } else {
      if (this.props.editingProduct) {
        this.props.updateProduct(
          _id,
          name,
          image,
          price,
          sex,
          category,
          color,
          colorHex,
          S,
          M,
          L,
          XL,
          XXL
        );
      } else {
        const size = ["S", "M", "L", "XL", "XXL"];
        this.props.addProduct(
          name,
          image,
          price,
          size,
          sex,
          category,
          color,
          colorHex,
          S,
          M,
          L,
          XL,
          XXL
        );
      }

      this.props.toggleModal();
    }
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  render() {
    const { classes } = this.props;

    const {
      _id,
      name,
      price,
      image_one,
      image_two,
      image_three,
      image_four,
      image_five,
      image_six,
      sex,
      category,
      color,
      colorHex,
      S,
      M,
      L,
      XL,
      XXL,
    } = this.state;
    return (
      <div className="modal">
        <div style={{ padding: 16, margin: "auto" }}>
          <FormControl onSubmit={this.handleSubmit}>
            <Paper style={{ padding: 16 }}>
              <div>
                <Typography style={{ fontSize: "2vh" }} component="h5">
                  {this.props.editingProduct ? "Update" : "Create new"} product
                </Typography>
                <Typography style={{ color: "red" }} component="h5">
                  {this.state.helperText}
                </Typography>

                <button
                  type="button"
                  onClick={this.handleClose}
                  className="close btn btn-outline-primary"
                >
                  Cancel
                </button>
              </div>
              <Grid
                container
                alignItems="flex-start"
                spacing={2}
                style={{ marginTop: "2%" }}
              >
                {/* Product Name */}
                <Grid item xs={5}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    type="text"
                    value={name}
                    id="standard-required"
                    onChange={this.handleChange}
                    label="Product Name"
                  />
                </Grid>
                {/* Product Price */}
                <Grid item xs={3} style={{ marginTop: "-8px" }}>
                  <TextField
                    label="Price"
                    required
                    id="standard-end-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">£</InputAdornment>
                      ),
                    }}
                    type="number"
                    name="price"
                    value={price}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    required
                    fullWidth
                    name="color"
                    type="text"
                    value={color}
                    id="standard-required"
                    onChange={this.handleChange}
                    label="Color"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    required
                    fullWidth
                    name="colorHex"
                    type="text"
                    value={colorHex}
                    id="standard-required"
                    onChange={this.handleChangeImageUrl}
                    label="Color Hex"
                  />
                </Grid>
                {/* Sex */}
                <Grid item xs={4} style={{ marginTop: "1%" }}>
                  <Typography
                    style={{ display: "inline-flex", paddingRight: "20px" }}
                  >
                    Sex:{" "}
                  </Typography>
                  <Input
                    type="number"
                    name="sex"
                    placeholder="0 for male; 1 for female"
                    value={sex}
                    onChange={this.handleSex}
                  />
                  {/* <FormControlLabel
                    label="Male"
                    control={
                      <TextField
                        name="Male"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                  <FormControlLabel
                    label="Female"
                    control={
                      <TextField
                        name="Female"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  /> */}
                </Grid>
                {/* Category */}
                <Grid item xs={6} style={{ marginTop: "1%" }}>
                  <Typography
                    style={{ display: "inline-flex", paddingRight: "20px" }}
                  >
                    Category:{" "}
                  </Typography>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={category}
                    onChange={this.handleCategoryChange}
                    helperText="Please select product category"
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* Product Image */}
                <Grid item xs={12} style={{ display: "flex", marginTop: "2%" }}>
                  <Grid item xs={2}>
                    <Typography>Product Image</Typography>
                  </Grid>
                  <Grid item xs={10} style={{ marginTop: "-2%" }}>
                    <TextField
                      name="image_one"
                      value={image_one}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 1"
                      onChange={this.handleChangeImageUrl}
                    />
                    <TextField
                      name="image_two"
                      value={image_two}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 2"
                      onChange={this.handleChangeImageUrl}
                    />
                    <TextField
                      name="image_three"
                      value={image_three}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 3"
                      onChange={this.handleChangeImageUrl}
                    />
                    <TextField
                      name="image_four"
                      value={image_four}
                      onChange={this.handleChangeImageUrl}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 4"
                    />
                    <TextField
                      name="image_five"
                      value={image_five}
                      onChange={this.handleChangeImageUrl}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 5"
                    />
                    <TextField
                      name="image_six"
                      value={image_six}
                      onChange={this.handleChangeImageUrl}
                      required
                      fullWidth
                      type="text"
                      id="standard-required"
                      label="Image url 6"
                    />
                  </Grid>
                </Grid>
                {/* Quantity */}
                <Grid item xs={12} style={{ display: "flex", marginTop: "2%" }}>
                  <Grid item xs={2}>
                    <Typography>Quantity</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ width: "12%", marginTop: "2%" }}>
                        S
                      </Typography>
                      <Input
                        type="number"
                        name="S"
                        placeholder="Size S quantity"
                        value={S}
                        onChange={this.handlePrice}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ width: "12%", marginTop: "2%" }}>
                        M
                      </Typography>
                      <Input
                        type="number"
                        name="M"
                        placeholder="Size M quantity"
                        value={M}
                        onChange={this.handlePrice}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ width: "12%", marginTop: "2%" }}>
                        L
                      </Typography>
                      <Input
                        type="number"
                        name="L"
                        placeholder="Size L quantity"
                        value={L}
                        onChange={this.handlePrice}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={5}>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ width: "12%", marginTop: "2%" }}>
                        XL
                      </Typography>
                      <Input
                        type="number"
                        name="XL"
                        placeholder="Size XL quantity"
                        value={XL}
                        onChange={this.handlePrice}
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <Typography style={{ width: "12%", marginTop: "2%" }}>
                        XXL
                      </Typography>
                      <Input
                        type="number"
                        name="XXL"
                        placeholder="Size XXL quantity"
                        value={XXL}
                        onChange={this.handlePrice}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <button
                type="submit"
                class="btnadmin btn-outline-primary-admin"
                onClick={this.handleSubmit}
              >
                {this.props.editingProduct ? "UPDATE" : "ADD"}
              </button>
            </Paper>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Modal);
