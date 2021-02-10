import { Box, Grid, Typography, TextField , Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText } from "@material-ui/core";
//import { TextFields } from "@material-ui/icons";
import React, {Component} from "react";
import {withStyles, CircularProgress} from '@material-ui/core'
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import ImageContainer from "../ImageContainer";
import '../../../assets/ProductDetail.css'
//import Spinner from "reactstrap"

const styles = (theme=>({
  img_container: {
    boxShadow: theme.shadows[3]
  },
}))
class ProductDetailFemaleTshirt extends Component {
  //state-hook
  state={
    selected_size: "",
    quantity: 1,
    img:[],
    loading: undefined,
    helperText: ""
  }
  handleChange = event => {
    this.setState({selected_size:event.target.value});
  };
  componentDidMount(){
    this.setState({
      loading:true,
  })
    axios.get(
      `http://localhost:8080/femalet-shirt/${this.props.match.params.masanpham}`
    )
    .then(res =>{
      const {id, name, price ,size ,image } = res.data;
      this.setState({
      
        id,
        name,
        price,
        size,
        img:image,
        loading:false
      });
    })
    .catch(e =>{
      console.log(e);
    })
  }
  handleClickBtn = () =>{
    const {id, name , price ,selected_size ,img, quantity } = this.state;
    if(selected_size === "")
    {
      this.setState({
        helperText:"Please choose size"
      })
    }
    else{
    this.props.addToCart({
      id_cart:"cart_"+Date.now()+Math.random(),
      id_product:id,
      name,
      price,
      img,
      size: selected_size,
      quantity,
    })
  }
  };
 render(){
  const {classes} = this.props;
  const {id, name , price ,size ,img } = this.state;
  return (
    <>
    {this.state.loading === false ?
    <Container  style={{ marginTop: "50px"}}>
      <Grid container>
      <Grid item md={6} >
          <ImageContainer items={img}/>
      </Grid>
      <Grid item md={6} className="product-info-container">
        <Typography variant="div" className="product-name">{name}</Typography>
        <Typography variant="div" className="product-price">${price}</Typography>
        <div className="product-info">
          <div>The Charm is 70’s inspired with a high waist and kick flare. A new fit to our denim collection, it features faded detail and classic 5-pocket styling. </div>
          <li>Full length inseam</li>
          <li>Comfort stretch</li>
          <li>Zip fly</li>
          <li>Care: 30-degree normal wash</li>
        </div>
        <FormControl component="fieldset">
        <FormLabel component="legend">Size:</FormLabel>
        {/* <RadioGroup aria-label="gender" name="gender1" value={this.state.size} onChange={this.handleChange}> */}
        <RadioGroup row aria-label="gender" name="size" onChange={this.handleChange} className="radio-btn-container">
            {size &&
            size.map((s,index)=>{
              return (
                <FormControlLabel
                key={index}
                value={s}
                control={<Radio/>}
                label={s}
                />
              )
            })}
        </RadioGroup>
        <FormHelperText style={{color:"red"}}>{this.state.helperText}</FormHelperText>
        </FormControl>
        <Box>
          <TextField className="product-quantity" type="number" value={this.state.quantity} onChange={(event)=>{this.setState({quantity:Number(event.target.value < 0?(event.target.value=0):event.target.value)})}}></TextField>
          <button className="add-to-cart-button"onClick={this.handleClickBtn}>Add to cart</button>
        </Box>  
      </Grid>
    </Grid>
    </Container>
    :
    <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
    <CircularProgress/>
  </Box>
  }
 </>
  );
 }
}

const mapDispatchToProps = dispatch =>{
  return{
    addToCart:(product)=>{
      dispatch({type:"ADD_TO_CART",payload:product})
    }
  }
}

export default connect(null,mapDispatchToProps)(withRouter(withStyles(styles)(ProductDetailFemaleTshirt)));

