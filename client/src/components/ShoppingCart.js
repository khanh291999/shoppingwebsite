import React, { Component } from "react";
import ProductList from "./cart/jacket/ProductList";
import Header from "./Header";
import Footer from "./Footer";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./cart/Cart";
import ProductDetail from "./cart/jacket/ProductDetail";
import axios from 'axios'
//import SignUp from './SignUp'
import AboutUs from './AboutUs'
import Login from './auth/Login'
import Register from './auth/Register'
import MaleJean from "./cart/jean/MaleJean";
import MaleTshirt from "./cart/t-shirt/MaleTshirt";
import Femalejacket from "./cart/jacketfemale/FemaleJacket";
import Femalejean from "./cart/jeanfemale/FemaleJean";
import ShoppingAdmin from "./admin/jacket/ShoppingAdmin"
import AdLogin from "./admin/AdLogin"
import FemaleTshirt from "./cart/femalet-shirt/FemaleTshirt";
import Status from "./status/Status"
import ShoppingAdminJean from "./admin/jean/ShoppingAdminJean";


const style = (theme) => ({
  root: {
    background: "black",
  },
});

const Layout = ({ children }) => {
  return (
    <section>
      <Header fixed/>
        {children}
      <Footer/>
    </section>
  )

}

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
    axios.get("http://localhost:8080/jacket").then(res=>{
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
        <Switch>
        <Route path="/adlogin" component={AdLogin}></Route>
        <Route path="/admin" component={ShoppingAdmin}></Route>
        <Route path="/adminjean" component={ShoppingAdminJean}></Route>
          <Layout>
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
          <Route path="/jean">
            <MaleJean></MaleJean>
          </Route>
          <Route path="/t-shirt">
            <MaleTshirt></MaleTshirt>
          </Route>
          <Route path="/femalejacket">
            <Femalejacket></Femalejacket>
          </Route>
          <Route path="/femalet-shirt">
            <FemaleTshirt></FemaleTshirt>
          </Route>
          <Route path="/femalejean">
            <Femalejean></Femalejean>
          </Route>
          <Route path="/about" component={AboutUs}></Route>
          <Route path="/cart" component={Cart}></Route>
          {/* <Route path="/signup" component={SignUp}></Route> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/status" component={Status} />
          <Route path="*">
            404 PAGE
          </Route>
            </Switch>
        </Layout>
        </Switch>
      </div>
    );
  }
}

export default withStyles(style)(ShoppingCart);
