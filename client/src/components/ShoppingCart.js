import React, { Component } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import axios from 'axios'
import SignUp from './SignUp'
import AboutUs from './AboutUs'

const style = (theme) => ({
  root: {
    background: "black",
  },
});

class ShoppingCart extends Component {
  state = {
    products: [],
    isLoading: false,
    page:1,
    limit:8
  };
  componentDidMount(){
    //promise
    this.setState({isLoading:true})
    axios.get("http://localhost:8080/t-shirt").then(res=>{
      const {data} = res;
      this.setState({products:data, isLoading:false})
    }).catch(err=>{
      console.log(err);
    })
  }
  handleChangePage = page => {
    this.setState({page: page});
  }
  render() {
    const {page,limit} = this.state
    return (
      <div>
        <Header fixed />
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/product/:masanpham" render={()=><ProductDetail products={this.state.product}></ProductDetail>}></Route>
        <Route path="/product">
          <ProductList 
          isLoading={this.state.isLoading}
          total = {this.state.products.length}
          limit = {this.state.limit}
          page = {this.state.page}
          products={[...this.state.products].splice((page-1)*limit,limit)}
          handleChangePage = {this.handleChangePage}
          ></ProductList>
        </Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="*">
          404 PAGE
        </Route>
        </Switch>
        {/* <ProductList products={this.state.products} />
        <Button className={this.props.classes.root} variant="contained">
          OKOKOKOK
        </Button> */}
        <Footer />
      </div>
    );
  }
}

export default withStyles(style)(ShoppingCart);
