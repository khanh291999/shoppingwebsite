import React, { Component } from "react";
import Footer from "../../Footer";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import axios from 'axios'
import ProductListMaleJean from "./ProductListMaleJean";
import ProductDetailMaleJean from "./ProductDetailMaleJean";



const style = (theme) => ({
  root: {
    background: "black",
  },
});
class MaleJean extends Component {
  state = {
    products: [],
    isLoading: false,
    page:1,
    limit:8
  };
  componentDidMount(){
    //promise
    this.setState({isLoading:true})
    axios.get("http://localhost:8080/jean").then(res=>{
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
        {/* <Header fixed /> */}
        <Switch>
        <Route path="/jean/:masanpham" render={()=><ProductDetailMaleJean products={this.state.product}></ProductDetailMaleJean>}></Route>
        <Route path="/jean">
          <ProductListMaleJean 
          isLoading={this.state.isLoading}
          total = {this.state.products.length}
          limit = {this.state.limit}
          page = {this.state.page}
          products={[...this.state.products].splice((page-1)*limit,limit)}
          handleChangePage = {this.handleChangePage}
          ></ProductListMaleJean>
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

export default withStyles(style)(MaleJean);
