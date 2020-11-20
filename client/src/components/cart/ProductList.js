import React from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import Product from "./Product";
import {Pagination} from '@material-ui/lab';
import {connect} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

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

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openfemale, setOpenFemale] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickFemale = () => {
    setOpenFemale(!openfemale);
  };
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={2} xs={12} >
      
              <List
              component="nav"
              ria-labelledby="nested-list-subheader"
              subheader={
              <ListSubheader component="div" id="nested-list-subheader">
              Product list
              </ListSubheader>
              }
                className={classes.root}
              >
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Male" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} to="/product"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                  <ListItem button component={Link} to="/product"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hoodie" />
                  </ListItem>
                  <ListItem button component={Link} to="/product"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jacket" />
                  </ListItem>
                </List>
              </Collapse>
              
              <ListItem button onClick={handleClickFemale}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Female" />
                {openfemale ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openfemale} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} to="/product"  className={classes.nested}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="T-shirt" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
       
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
                  img={product.image[0]}
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