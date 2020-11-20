import { Box, Grid, Typography, TextField , Container, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
//import { TextFields } from "@material-ui/icons";
import React, {Component} from "react";
import {withStyles} from '@material-ui/core'
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import ImageContainer from "./ImageContainer";

const styles = (theme=>({
  img_container: {
    boxShadow: theme.shadows[3]
  },
  big_img:{
    minHeight:'300px',
    display:'flex',
    justifyContent:'center'
  },
  small_img:{
    minHeight:'100px',
    width:'100%',
    border:'1px solid black'
  }
}))
class ProductDetail extends Component {
  //state-hook
  state={
    selected_size: "",
    quantity: 1,
    img:[]
  }
  handleChange = event => {
    this.setState({selected_size:event.target.value});
  };
  componentDidMount(){
    axios.get(
      `http://localhost:8080/jacket/${this.props.match.params.masanpham}`
    )
    .then(res =>{
      const {id, name, price ,size ,image } = res.data;
      this.setState({
        id,
        name,
        price,
        size,
        img:image
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
      id_prodict:id,
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
    <Container>
      <Grid container>
      <Grid item md={4} className={classes.img_container}>
        <Box className={classes.big_img}>
          {/* <img src={img}/> */}
          
          <ImageContainer items={img}/>
        </Box>
        {/* <Box display="flex">
          <Box className={classes.small_img}>small</Box>
          <Box className={classes.small_img}>small</Box>
          <Box className={classes.small_img}>small</Box>
        </Box> */}
      </Grid>
      <Grid item md={8}>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h4">{price}</Typography>
      <FormControl component="fieldset">
      <FormLabel component="legend">Size:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={this.state.size} onChange={this.handleChange}>
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

export default connect(null,mapDispatchToProps)(withRouter(withStyles(styles)(ProductDetail)));

