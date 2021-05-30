import React, { Component } from "react";
import ProductList from "./cart/jacket/ProductList";
import Header from "./Header";
import Footer from "./Footer";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./cart/Cart";
import ProductDetail from "./cart/jacket/ProductDetail";
import axios from "axios";
//import SignUp from './SignUp'
import AboutUs from "./AboutUs";
import OrderHelp from "./OrderHelp";
import DeliveryHelp from "./DeliveryHelp";
import ReturningHelp from "./ReturningHelp";
import PrivacyPolicy from "./PrivacyPolicy";
import ShippingDetails from "./ShippingDetail";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MaleJean from "./cart/jean/MaleJean";
import MaleTshirt from "./cart/t-shirt/MaleTshirt";
import Femalejacket from "./cart/jacketfemale/FemaleJacket";
import Femalejean from "./cart/jeanfemale/FemaleJean";
import ShoppingAdmin from "./admin/jacket/ShoppingAdmin";
import AdLogin from "./admin/AdLogin";
import FemaleTshirt from "./cart/femalet-shirt/FemaleTshirt";
import Status from "./status/Status";
import ShoppingAdminJean from "./admin/jean/ShoppingAdminJean";
import ShoppingAdminTshirt from "./admin/t-shirt/ShoppingAdminTshirt";
import AdminShoppingStatus from "./admin/status/AdminShoppingStatus";
import ShoppingAdminFemaleJacket from "./admin/femalejacket/ShoppingAdminFemaleJacket";
import ShoppingAdminFemaleJean from "./admin/femalejean/ShoppingAdminFemaleJean";
import ShoppingAdminFemaleTshirt from "./admin/femalet-shirt/ShoppingAdminFemaleTshirt";
import ShoppingAdminDisableJacket from "./admin/disablejacket/ShoppingAdminDisableJacket";
import ShoppingAdminDisableJean from "./admin/disablejean/ShoppingAdminDisableJean";
import ShoppingAdminDisableTshirt from "./admin/disablet-shirt/ShoppingAdminDisableTshirt";
import ShoppingAdminDisableFemaleJacket from "./admin/disablefemalejacket/ShoppingAdminDisableFemaleJacket";
import ShoppingAdminDisableFemaleJean from "./admin/disablefemalejean/ShoppingAdminDisableFemaleJean";
import ShoppingAdminDisableFemaleTshirt from "./admin/disablefemalet-shirt/ShoppingAdminDisableFemaleTshirt";
import ShoppingAdminStaffControl from "./admin/staffcontrol/ShoppingAdminStaffControl";
import ShoppingAdminUserControl from "./admin/usercontrol/ShoppingAdminUserControl";
import Chatbotsection from "./chatbotsection/Chatbotsection";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../assets/ChatBot.css";
import Chatbot from "./chatbotsection/Chatbot/Chatbot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTimes } from "@fortawesome/free-solid-svg-icons";
import AlanTrigger from "../components/voiceAI/useAlan";
import ScrollToTop from "./ScrollToTop";

const style = (theme) => ({
  root: {
    background: "black",
  },
});

const Chat = () => {
  return (
    <>
      <input type="checkbox" id="click" />
      <label id="chatbot-icon" for="click">
        <i class="fab fa-facebook-messenger"></i>
        <FontAwesomeIcon id="chat-inactivate" icon={faStore} />
        <i class="fas fa-times"></i>
        <FontAwesomeIcon id="chat-activate" icon={faTimes} />
      </label>
      <div class="wrapper">
        <div class="head-text">K&Q</div>
        <div class="chat-bot">
          <Chatbot />
        </div>
      </div>
    </>
  );
};

const Layout = ({ children }) => {
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  const ScrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // useAlan.WrappedComponent({});
  return (
    <section>
      <AlanTrigger />
      <Header fixed />
      {children}
      <Fab onClick={ScrollTop} id="myBtn" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
      <Footer />
      <Chat />
    </section>
  );
};

class ShoppingCart extends Component {
  state = {
    products: [],
    isLoading: false,
    page: 1,
    limit: 9,
  };
  componentDidMount() {
    //promise
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:8080/jacket")
      .then((res) => {
        const { data } = res;
        this.setState({ products: data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangePage = (page) => {
    this.setState({ page: page });
  };

  render() {
    const { page, limit } = this.state;
    return (
      <div>
        <ScrollToTop />
        <Switch>
          <Route path="/adlogin" component={AdLogin}></Route>
          <Route path="/admin" component={ShoppingAdmin}></Route>
          <Route path="/adminjean" component={ShoppingAdminJean}></Route>
          <Route path="/admint-shirt" component={ShoppingAdminTshirt}></Route>
          <Route path="/adminstatus" component={AdminShoppingStatus}></Route>
          <Route
            path="/adminfemalejacket"
            component={ShoppingAdminFemaleJacket}
          ></Route>
          <Route
            path="/adminfemalejean"
            component={ShoppingAdminFemaleJean}
          ></Route>
          <Route
            path="/adminfemalet-shirt"
            component={ShoppingAdminFemaleTshirt}
          ></Route>
          <Route
            path="/disablejacket"
            component={ShoppingAdminDisableJacket}
          ></Route>
          <Route
            path="/disablejean"
            component={ShoppingAdminDisableJean}
          ></Route>
          <Route
            path="/disablet-shirt"
            component={ShoppingAdminDisableTshirt}
          ></Route>
          <Route
            path="/disablefemalejacket"
            component={ShoppingAdminDisableFemaleJacket}
          ></Route>
          <Route
            path="/disablefemalejean"
            component={ShoppingAdminDisableFemaleJean}
          ></Route>
          <Route
            path="/disablefemalet-shirt"
            component={ShoppingAdminDisableFemaleTshirt}
          ></Route>
          <Route
            path="/staffcontrol"
            component={ShoppingAdminStaffControl}
          ></Route>
          <Route
            path="/usercontrol"
            component={ShoppingAdminUserControl}
          ></Route>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route
                path="/product/:masanpham"
                render={() => (
                  <ProductDetail products={this.state.product}></ProductDetail>
                )}
              ></Route>
              <Route path="/product">
                <ProductList
                  isLoading={this.state.isLoading}
                  total={this.state.products.length}
                  limit={this.state.limit}
                  page={this.state.page}
                  products={[...this.state.products].splice(
                    (page - 1) * limit,
                    limit
                  )}
                  handleChangePage={this.handleChangePage}
                ></ProductList>
              </Route>
              <Route path="/chatbot">
                <Chatbotsection></Chatbotsection>
              </Route>
              <Route path="/jean">
                <MaleJean></MaleJean>
              </Route>
              <Route path="/t-shirt">
                <MaleTshirt></MaleTshirt>
              </Route>
              <Route path="/femalejacket">
                <Femalejacket></Femalejacket>
              </Route>
              <Route path="/femalet-shirt">
                <FemaleTshirt></FemaleTshirt>
              </Route>
              <Route path="/femalejean">
                <Femalejean></Femalejean>
              </Route>
              <Route path="/about" component={AboutUs}></Route>
              <Route path="/orderhelp" component={OrderHelp}></Route>
              <Route path="/deliveryhelp" component={DeliveryHelp}></Route>
              <Route path="/returnhelp" component={ReturningHelp}></Route>
              <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
              <Route
                path="/shippingdetails"
                component={ShippingDetails}
              ></Route>
              <Route path="/cart" component={Cart}></Route>
              {/* <Route path="/signup" component={SignUp}></Route> */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/status" component={Status} />
              <Route path="*">404 PAGE</Route>
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default withStyles(style)(ShoppingCart);
