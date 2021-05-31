import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Container } from "@material-ui/core";
import ConfirmBillProduct from "./ConfirmBillProduct";
import Paypal from "./Paypal";
import "../../assets/ConfirmBill.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#242424",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmBill(props) {
  const {
    handleClose,
    handlePay,
    handlePaypalPay,
    open,
    username,
    useraddress,
    userphonenumber,
    total,
    shippingfee,
    alltotal,
  } = props;
  const classes = useStyles();
  return (
    <Dialog
      className="half"
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      style={{ userSelect: "none" }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Information Confirm
          </Typography>
          {/* <Button autoFocus color="inherit" onClick={handlePay}>
              Buy
            </Button> */}
        </Toolbar>
      </AppBar>
      <Container className="half">
        <div className="bill-parent">
          <div className="bill-container">
            <div className="bill-left">
              <h1>K&Q</h1>
              <h2>Delivery infomation</h2>
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
                    value={username}
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
                    value={useraddress}
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
                    value={userphonenumber}
                    readonly
                  />
                </label>
              </div>
              <div className="payment-container">
                <h2 style={{ textAlignLast: "start" }}>Payment methods</h2>
                <button className="checkout-btn" onClick={handlePay}>
                  Cash on Delivery
                </button>
                <br></br>
                <button className="checkout-btn">
                  <Paypal
                    handlePaypalPay={handlePaypalPay}
                    alltotal={alltotal}
                  ></Paypal>
                </button>
              </div>
            </div>

            <div class="bill-right">
              <div class="product-list">
                {props.cart.map((cart_item) => {
                  return (
                    <ConfirmBillProduct
                      key={cart_item.id_cart}
                      cart={cart_item}
                    ></ConfirmBillProduct>
                  );
                })}
              </div>

              <div class="line"></div>

              <div class="fee-container">
                <table>
                  <tr>
                    <th class="set-left">Pre-total</th>
                    <td class="set-right">{"$" + total}</td>
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
                    {"$" + alltotal}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Dialog>
  );
}
