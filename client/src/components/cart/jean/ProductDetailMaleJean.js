import { Box, Grid, Typography, TextField , Container, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
//import { TextFields } from "@material-ui/icons";
import React, {Component} from "react";
import {withStyles, CircularProgress} from '@material-ui/core'
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import ImageContainer from "../ImageContainer";
//import Spinner from "reactstrap"

const styles = (theme=>({
  img_container: {
    boxShadow: theme.shadows[3]
  },
}))
class ProductDetailMaleJean extends Component {
  //state-hook
  state={
    selected_size: "",
    quantity: 1,
    img:[],
    loading: undefined
  }
  handleChange = event => {
    this.setState({selected_size:event.target.value});
  };
  componentDidMount(){
    this.setState({
      loading:true,
  })
    axios.get(
      `http://localhost:8080/jean/${this.props.match.params.masanpham}`
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

    this.props.addToCart({
      id_cart:"cart_"+Date.now()+Math.random(),
      id_product:id,
      name,
      price,
      img,
      size: selected_size,
      quantity,
    })
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
      {/* className={classes.img_container} */}
        {/* <Box > */}
        {/* className={classes.big_img} */}
          {/* <img src={img}/> */}
          <ImageContainer items={img}/>
        {/* </Box> */}
        {/* <Box display="flex">
          <Box className={classes.small_img}>small</Box>
          <Box className={classes.small_img}>small</Box>
          <Box className={classes.small_img}>small</Box>
        </Box> */}
      </Grid>
      <Grid item md={6}>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h5">{price}$</Typography>
      <FormControl component="fieldset">
      <FormLabel component="legend">Size:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChange}>
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
    </FormControl>
      <Box>
        <TextField type="number" value={this.state.quantity} onChange={(event)=>{this.setState({quantity:Number(event.target.value)})}}></TextField>
        <Button onClick={this.handleClickBtn}>Add to cart</Button>
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

export default connect(null,mapDispatchToProps)(withRouter(withStyles(styles)(ProductDetailMaleJean)));

