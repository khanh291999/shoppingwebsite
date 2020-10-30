import React from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import Product from "./Product";
import {Pagination} from '@material-ui/lab';
import {connect} from "react-redux"

function ProductList(props) {
  let total = 0;
  if(props.total % props.limit > 0){
    total = Math.floor(props.total / props.limit) + 1;
  }
  else{
    total = props.total / props.limit;
  }

  const { products, isLoading, page , handleChangePage } = props;
  const handleChange = (e,page) => {
    props.handleChangePage(page);
  }
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={2} xs={12}>
          <div style={{ backgroundColor: "lightcoral" }}>col-2</div>
        </Grid>
        <Grid item md={10} xs={12}>
          {isLoading?<Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress/>
          </Box>:          <Grid container spacing={3}>
            {products.map(product => {
              return (
                <Product
                  name={product.name}
                  price={product.price}
                  key={product.id}
                  img={product.src}
                  id={product.id}
                  addToCart={props.addToCart}
                />
              );
            })}
          </Grid>}

          {/* Pagination */}
           <Pagination count={total} page={page} onChange={handleChange} ></Pagination> 
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStatetoProps = null;
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product) => {
      dispatch({type:"ADD_TO_CART", payload: product})}
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(ProductList)