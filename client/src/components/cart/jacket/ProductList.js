import React, { useEffect, useState } from "react";
import { Grid, Container, Box, CircularProgress } from "@material-ui/core";
import Product from "./Product";
import { Pagination } from "@material-ui/lab";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "../../../assets/ProductList.css";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  inputContainer: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function ProductList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  let total = 0;
  if (props.total % props.limit > 0) {
    total = Math.floor(props.total / props.limit) + 1;
  } else {
    total = props.total / props.limit;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { products, isLoading, page } = props;
  const handleChange = (e, page) => {
    props.handleChangePage(page);
  };

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
    <Container maxWidth={false} className="background">
      {/* Categories */}
      <div
        style={{
          textAlign: "-webkit-center",
          backgroundColor: "#f0ede8",
          margin: "0 -1.7%",
        }}
      >
        <ul id="nav-main-list">
          <li class="nav-main-sublist dropdown">
            <a
              href="javascript:void(0)"
              class="dropbtn"
              style={{ backgroundColor: "#fffefa", color: "#bd7f32" }}
            >
              Man
            </a>
            <div class="dropdown-content">
              <Link to="/product">
                <a href="/product">Jacket</a>
              </Link>
              <Link to="/jean">
                <a href="/jean">Jean</a>
              </Link>
              <Link to="/t-shirt">
                <a href="/t-shirt">T-shirt</a>
              </Link>
            </div>
          </li>
          <li class="nav-main-sublist dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              Woman
            </a>
            <div class="dropdown-content">
              <Link to="/femalejacket">
                <a href="/femalejacket">Jacket</a>
              </Link>
              <Link to="/femalejean">
                <a href="/femalejean">Jean</a>
              </Link>
              <Link to="/femalet-shirt">
                <a href="/femalet-shirt">T-shirt</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <form style={{ overflow: "hidden" }}>
        <input
          style={{ width: "23%", marginTop: "1%", float: "right", clear: "both" }}
          type="text"
          placeholder="Seach..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {/* <Paper component="form" className={classes.inputContainer}>
          <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'Search...' }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper> */}
      </form>
      <div className="categories-title">Men's Jacket</div>
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}>
          <List
            component="nav"
            ria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Product Categories
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Men" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/product"
                  className={classes.nested}
                >
                  <ListItemText primary="Jacket" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/jean"
                  className={classes.nested}
                >
                  <ListItemText primary="Jean" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/t-shirt"
                  className={classes.nested}
                >
                  <ListItemText primary="T-shirt" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={handleClickFemale}>
              <ListItemText primary="Women" />
              {openfemale ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openfemale} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  component={Link}
                  to="/femalejacket"
                  className={classes.nested}
                >
                  <ListItemText primary="Jacket" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/femalejean"
                  className={classes.nested}
                >
                  <ListItemText primary="Jean" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/femalet-shirt"
                  className={classes.nested}
                >
                  <ListItemText primary="T-shirt" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item md={10} xs={12}>
          {isLoading ? (
            <Box
              width="100%"
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} style={{ justifyContent: "center" }}>
              {products
                .filter((product) => {
                  if (searchTerm == "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => {
                  return (
                    <Product
                      name={product.name}
                      price={product.price}
                      key={product._id}
                      img={product.image[0]}
                      img1={product.image[1]}
                      PID={product.PID}
                      color={product.color}
                      colorHex={product.colorHex}
                      _id={product._id}
                      addToCart={props.addToCart}
                    />
                  );
                })}
            </Grid>
          )}

          {/* Pagination */}
          <Pagination
            count={total}
            page={page}
            onChange={handleChange}
          ></Pagination>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStatetoProps = null;
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ProductList);
