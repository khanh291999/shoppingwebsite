import React, { useState, useEffect } from "react";
import StatusProduct from "./StatusProduct";
import Button from "@material-ui/core/Button";
import UserContext from "./../../context/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
// import ConfirmBillProduct from '../cart/ConfirmBillProduct'
// import '../../assets/ConfirmBill.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StatusRow(props) {
  // const {username,useraddress,userphonenumber, shippingfee, alltotal} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    id,
    name,
    address,
    phone_number,
    status,
    total,
    allTotal,
    date,
    shippingfee,
    paypalstatus,
    product,
  } = props.productss;
  return (
    <div className="client-table-rows">
      <div className="client-table-cell">{id}</div>
      <div className="client-table-cell">{date}</div>
      <div className="client-table-cell">${allTotal.toFixed(2)}</div>
      <div className="client-table-cell">{status}</div>
      <div className="client-table-cell">{paypalstatus}</div>
      <div className="client-table-cell">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Detail
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            className={classes.appBar}
            style={{ backgroundColor: "#282828" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.title}
                style={{ fontFamily: "Cambria", fontSize: "1.5rem" }}
              >
                Order details
              </Typography>
            </Toolbar>
          </AppBar>
          <Container className="half">
            <div className="bill-parent">
              <div className="bill-container">
                <div className="bill-left">
                  <h1>K&Q</h1>
                  <h2>Delivery information</h2>
                  <div className="bill-form">
                    <label className="info">
                      <span className="info__label" for="customer_name">
                        Customer Name
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="customer_name"
                        value={name}
                        readonly
                      />
                    </label>
                    <label className="info">
                      <span className="info__label" for="address">
                        Address
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="address"
                        value={address}
                        readonly
                      />
                    </label>
                    <label className="info">
                      <span className="info__label" for="phone_number">
                        Phone Number
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="phone_number"
                        value={phone_number}
                        readonly
                      />
                    </label>
                  </div>
                  <div className="payment-container">
                    <h2 style={{ textAlignLast: "start" }}>Status</h2>
                    <h3>Shipping: {status}</h3>
                    <h3 style={{textAlign:'left'}}>Payment: {paypalstatus}</h3>
                  </div>
                </div>

                <div class="bill-right">
                  <div class="product-list">
                    {product.map((cart_item) => {
                      return (
                        <StatusProduct
                          key={cart_item.id_cart}
                          cart={cart_item}
                        ></StatusProduct>
                      );
                    })}
                  </div>

                  <div class="line"></div>

                  <div class="fee-container">
                    <table>
                      <tr>
                        <th class="set-left">Pre-total</th>
                        <td class="set-right">{"$" + total.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <th class="set-left">Shipping</th>
                        {shippingfee == 0 ? (
                          <td class="set-right">{"Free"}</td>
                        ) : (
                          <td class="set-right">{"$" + shippingfee}</td>
                        )}
                      </tr>
                    </table>
                  </div>

                  <div class="line"></div>

                  <table style={{ width: "100%" }}>
                    <tr>
                      <th class="set-left">Total</th>
                      <td class="set-right" style={{ fontSize: "1.5em" }}>
                        {"$" + allTotal.toFixed(2)}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </Dialog>
      </div>
    </div>
  );
}
