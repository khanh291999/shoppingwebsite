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
      .get("https://myauthapi1.herokuapp.com/product")
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
      return category.category == "t-shirt" && category.sex == 1;
    });
    return (
      <div>
        {/* <Header fixed /> */}
        <Switch>
          <Route
            path="/femalet-shirt/:masanpham"
            render={() => (
              <ProductDetailFemaleTshirt
                products={productss}
              ></ProductDetailFemaleTshirt>
            )}
          ></Route>
          <Route path="/femalet-shirt">
            <ProductListFemaleTshirt
              isLoading={this.state.isLoading}
              total={productss.length}
              limit={this.state.limit}
              page={this.state.page}
              products={[...productss].splice((page - 1) * limit, limit)}
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
