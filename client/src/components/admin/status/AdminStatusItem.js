import React, { useContext } from "react";
import adminContext from "../../../context/adminContext";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

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

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "5px",
    backgroundColor: "#282828",
    color: "#fff",
    width: "100px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#282828",
    },
  },
}))(Button);

export default function StatusItem(props) {
  const { adminData, setadminData } = useContext(adminContext);
  const classes = useStyles();
  const {
    id,
    name,
    price,
    img,
    size,
    quantity,
    username,
    useraddress,
    userphone_number,
    date,
    status,
    paypalstatus,
    editedby,
    shippingfee,
    total,
    allTotal,
    colorName,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Waiting = () => {
    const status = "Confirming";
    const editedby = adminData.admin.displayName;
    props.updateStatusWaiting(props.id, status, editedby);
  };
  const Delivering = () => {
    const status = "Delivering";
    const editedby = adminData.admin.displayName;
    props.updateStatusDelivering(props.id, status, editedby);
  };
  const Done = () => {
    const status = "Done";
    const editedby = adminData.admin.displayName;
    props.updateStatusDone(props.id, status, editedby);
  };
  return (
    <div className="admin-status-table-rows">
      <div className="admin-status-table-cell">{date}</div>
      <div className="admin-status-table-cell">{username}</div>
      <div className="admin-status-table-cell">{useraddress}</div>
      <div className="admin-status-table-cell">{paypalstatus}</div>
      <div className="admin-status-table-cell">{allTotal}</div>
      <div className="admin-status-table-cell">{userphone_number}</div>
      <div className="admin-status-table-cell">{status}</div>
      <div className="admin-status-table-cell">{editedby}</div>
      <div className="admin-status-table-cell">
        <div style={{ display: "flex" }}>
          <div style={{ flexDirection: "column", textAlign: "center" }}>
            <ColorButton variant="outlined" onClick={Waiting}>
              Waiting
            </ColorButton>
            <ColorButton variant="outlined" onClick={Delivering}>
              Shipping
            </ColorButton>
          </div>
          <div style={{ flexDirection: "column", textAlign: "center" }}>
            <ColorButton variant="outlined" onClick={Done}>
              Done
            </ColorButton>
            <ColorButton
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Details
            </ColorButton>
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
                            value={userphone_number}
                            readonly
                          />
                        </label>
                      </div>
                      <div className="payment-container">
                        <h2 style={{ textAlignLast: "start" }}>Status</h2>
                        <h3>Shipping: {status}</h3>
                        <h3 style={{marginLeft: "-26%"}}>Payment: {paypalstatus}</h3>
                      </div>
                    </div>

                    <div class="bill-right">
                      <div class="product-list">
                        <div class="product">
                          <div>
                            <div class="img-container">
                              <img src={img} alt="cart img" />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                <div class="product-label">{name}</div>
                                <div class="product-size">
                                  {"Size: " + size}
                                </div>
                                <div class="product-size">
                                  {"Color: " + colorName}
                                </div>
                              </div>
                              <div class="absolute">{quantity}</div>
                            </div>
                          </div>
                          <div style={{ alignSelf: "center" }}>
                            {"$" + price * quantity}
                          </div>
                        </div>
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
                            {"$" + allTotal}
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
      </div>
    </div>
  );
}
