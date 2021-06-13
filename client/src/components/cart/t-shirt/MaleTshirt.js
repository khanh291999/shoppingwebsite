import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ProductDetailMaleTshirt from "./ProductDetailMaleTshirt";
import ProductListMaleTshirt from "./ProductListMaleTshirt";

const style = (theme) => ({
  root: {
    background: "black",
  },
});
class MaleTshirt extends Component {
  state = {
    products: [],
    isLoading: false,
    page: 1,
    limit: 9,
  };
  componentDidMount() {
    //promise
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:8080/product")
      .then((res) => {
        const { data } = res;
        this.setState({ products: data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangePage = (page) => {
    this.setState({ page: page });
  };
  render() {
    const { page, limit } = this.state;
    let productss = this.state.products.filter(function (category) {
      return category.category == "t-shirt" && category.sex == 0;
    });
    return (
      <div>
        {/* <Header fixed /> */}
        <Switch>
          <Route
            path="/t-shirt/:masanpham"
            render={() => (
              <ProductDetailMaleTshirt
                products={productss}
              ></ProductDetailMaleTshirt>
            )}
          ></Route>
          <Route path="/t-shirt">
            <ProductListMaleTshirt
              isLoading={this.state.isLoading}
              total={productss.length}
              limit={this.state.limit}
              page={this.state.page}
              products={[...productss].splice((page - 1) * limit, limit)}
              handleChangePage={this.handleChangePage}
            ></ProductListMaleTshirt>
          </Route>
        </Switch>
        {/* <ProductList products={this.state.products} />
        <Button className={this.props.classes.root} variant="contained">
          OKOKOKOK
        </Button> */}
      </div>
    );
  }
}

export default withStyles(style)(MaleTshirt);
