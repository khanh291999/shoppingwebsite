import React, { Component } from "react";
import Footer from "../../Footer";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import ProductDetailFemaleTshirt from "./ProductDetailFemaleTshirt";
import ProductListFemaleTshirt from "./ProductListFemaleTshirt";

const style = (theme) => ({
  root: {
    background: "black",
  },
});
class FemaleTshirt extends Component {
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
      .get("http://localhost:8080/femalet-shirt")
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
    return (
      <div>
        {/* <Header fixed /> */}
        <Switch>
          <Route
            path="/femalet-shirt/:masanpham"
            render={() => (
              <ProductDetailFemaleTshirt
                products={this.state.product}
              ></ProductDetailFemaleTshirt>
            )}
          ></Route>
          <Route path="/femalet-shirt">
            <ProductListFemaleTshirt
              isLoading={this.state.isLoading}
              total={this.state.products.length}
              limit={this.state.limit}
              page={this.state.page}
              products={[...this.state.products].splice(
                (page - 1) * limit,
                limit
              )}
              handleChangePage={this.handleChangePage}
            ></ProductListFemaleTshirt>
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

export default withStyles(style)(FemaleTshirt);
