import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "0 5px",
    backgroundColor: "#282828",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#282828",
    },
  },
}))(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DataRowOpinionControl(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { email, password, username, address, opinion } = props.opinion;
  return (
    <div className="table-rows">
      <div className="table-cell">
        {username.length > 18 ? username.substring(0, 18) + "..." : username}
      </div>
      <div className="table-cell">
        {email.length > 18 ? email.substring(0, 18) + "..." : email}
      </div>
      <div className="table-cell">
        {address.length > 18 ? address.substring(0, 18) + "..." : address}
      </div>
      <div className="table-cell">
        {opinion.length > 18 ? opinion.substring(0, 18) + "..." : opinion}
      </div>
      <div className="table-cell" style={{ placeSelf: "center" }}>
        <ColorButton
          variant="contained"
          color="secondary"
          className="edit-button"
          onClick={handleClickOpen}
        >
          View Details
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
                Opinion details
              </Typography>
            </Toolbar>
          </AppBar>
          <Container className="half">
            <div className="bill-parent">
              <div className="bill-container">
                <div className="bill-left">
                  <h1>K&Q</h1>
                  <h2>Customer opinion</h2>
                  <div className="bill-form">
                    <label className="info">
                      <span className="info__label" for="customer_name">
                        Customer Name
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="username"
                        placeholder="User Display Name"
                        value={username}
                        readonly
                      />
                    </label>
                    <label className="info">
                      <span className="info__label" for="address">
                        email
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="email"
                        placeholder="User email"
                        value={email}
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
                        placeholder="User address"
                        value={address}
                        readonly
                      />
                    </label>
                  </div>
                </div>
                <div className="bill-right">
                    <label className="info">
                      <span className="info__label" for="phone_number">
                        Opinion
                      </span>
                      <input
                        className="info__input"
                        type="text"
                        id="fname"
                        name="opinion"
                        placeholder="Customer opinion"
                        value={opinion}
                        readonly
                      />
                    </label>
                </div>
              </div>
            </div>
          </Container>
        </Dialog>
      </div>
    </div>
  );
}
