import { useEffect, useState, useCallback, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";
import axios from "axios";
import Swal from "sweetalert2";
import UserContext from "./../../context/userContext";

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  SHOW_CATEGORY: "show-category",
  SHOW_ORDER: "show-order",
  SHOW_PROFILE: "show-profile",
  SHOW_CONTACT: "show-contact",
  SHOW_HELP: "show-help",
  SHOW_PRODUCTSHIPPINGTIME: "show-productshippingtime",
  SHOW_RETURN: "show-return",
  SHOW_PRIVACY: "show-privacy",
  SHOW_DELIVERY: "show-delivery",
  BUY_PRODUCT: "buy-product",
};
function AlanTrigger(props) {
  const history = useHistory();
  const [alanInstance, setAlanInstance] = useState();
  const [data, setData] = useState();
  const { userData, setUserData } = useContext(UserContext);

  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  var timer = new Date(),
    time =
      timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds();
  const openCart = useCallback(() => {
    if (props.quantity == 0) {
      alanInstance.playText("You have no items in your cart");
    } else {
      alanInstance.playText("Opening cart");
      history.push("/cart");
    }
  }, [alanInstance, props.quantity]);

  const closeCart = useCallback(() => {
    alanInstance.playText("Closing cart");
    history.push("/");
  }, [alanInstance]);

  const addItem = ({ detail: { name, size } }) => {
    const item = data?.find((i) => i.name.toLowerCase() === name.toLowerCase());
    if (item == null) {
      alanInstance.playText(`I cannot find the ${name} item`);
    } else {
      props.addToCart({
        id_cart: "cart_" + Date.now() + Math.random(),
        id_product: item._id,
        name,
        price: item.price,
        img: item.image[0],
        quantity: 1,
        size,
      });
      alanInstance.playText(`Add ${size} of the ${name} item to your cart`);
    }
  };

  const removeItem = ({ detail: { name } }) => {
    const entry = props.cartItems?.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );
    if (entry == null) {
      alanInstance.playText(`I cannot find the ${name} item in your cart`);
    } else {
      props.deleteCart(entry.id_cart);
      alanInstance.playText(`Removed the ${name} item from your cart`);
    }
  };

  const showCategory = useCallback(() => {
    alanInstance.playText("Showing product");
    history.push("/product");
  }, [alanInstance]);

  const showOrder = useCallback(() => {
    alanInstance.playText("Showing order history");
    history.push("/status");
  }, [alanInstance]);

  const showProfile = useCallback(() => {
    alanInstance.playText("Showing your profile");
    history.push("/userprofile");
  }, [alanInstance]);

  const showContact = useCallback(() => {
    alanInstance.playText("Showing our contact and our team member");
    history.push("/about");
  }, [alanInstance]);

  const showHelp = useCallback(() => {
    alanInstance.playText("Showing our FAQ");
    history.push("/orderhelp");
  }, [alanInstance]);

  const showProductshippingtime = useCallback(() => {
    alanInstance.playText(
      "Your package will be delivered within 2 to 7 working days after you place an order"
    );
    history.push("/deliveryhelp");
  }, [alanInstance]);

  const showReturn = useCallback(() => {
    alanInstance.playText("Showing our returning condition");
    history.push("/returnhelp");
  }, [alanInstance]);

  const showPrivacy = useCallback(() => {
    alanInstance.playText("Showing our Privacy statement");
    history.push("/privacypolicy");
  }, [alanInstance]);

  const showDelivery = useCallback(() => {
    alanInstance.playText("Showing our shipping fee");
    history.push("/shippingdetails");
  }, [alanInstance]);

  const buyProduct = ({ detail: { shipping_fee } }) => {
    let shippingfee = undefined;
    if (shipping_fee == "Free Ship") {
      shippingfee = 0;
    } else if (shipping_fee == "Ho Chi Minh") {
      shippingfee = 1;
    } else if (shipping_fee == "Nationwide") {
      shippingfee = 2;
    }
    const { cartItems = [] } = props;
    const total = cartItems.reduce((total, pic) => {
      return (total = total + pic.quantity * pic.price);
    }, 0);
    const allTotal = total + shippingfee;
    if (!userData.user) {
      alanInstance.playText(
        `Please login before you can buy product through me`
      );
    } else if (props.quantity == 0) {
      alanInstance.playText(
        "You have no items in your cart, Please add some product before you can purchase"
      );
    } else {
      axios
        .post("http://localhost:8080/cart", {
          name: userData.user.displayName,
          address: userData.user.address,
          phoneNumber: userData.user.phoneNumber,
          paypalstatus: "Paid by COD",
          status: "Waitting for Confirm",
          product: props.cartItems,
          userid: userData.user.id,
          date: date,
          time: time,
          editedby: "",
          shippingfee,
          total,
          allTotal,
        })
        .then((res) => {
          Swal.fire({
            title: "Purchase Successfully",
            timer: 1000,
            icon: "success",
          });
          props.clearCart();
        })
        .catch((err) => {
          Swal.fire({
            title: "Purchase Unsuccessfully, Please contact our admin",
            text: err.message,
            timer: 1000,
            icon: "error",
          });
        });
      alanInstance.playText(`Thanks for your purchase`);
    }
  };

  useEffect(() => {
    const getAllProduct = async () => {
      const result = await axios.get("http://localhost:8080/product");
      setData(result.data);
    };
    getAllProduct();

    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
    window.addEventListener(COMMANDS.ADD_ITEM, addItem);
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeItem);
    window.addEventListener(COMMANDS.SHOW_CATEGORY, showCategory);
    window.addEventListener(COMMANDS.SHOW_ORDER, showOrder);
    window.addEventListener(COMMANDS.SHOW_PROFILE, showProfile);
    window.addEventListener(COMMANDS.SHOW_CONTACT, showContact);
    window.addEventListener(COMMANDS.SHOW_HELP, showHelp);
    window.addEventListener(
      COMMANDS.SHOW_PRODUCTSHIPPINGTIME,
      showProductshippingtime
    );
    window.addEventListener(COMMANDS.SHOW_RETURN, showReturn);
    window.addEventListener(COMMANDS.SHOW_PRIVACY, showPrivacy);
    window.addEventListener(COMMANDS.SHOW_DELIVERY, showDelivery);
    window.addEventListener(COMMANDS.BUY_PRODUCT, buyProduct);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem);
      window.removeEventListener(COMMANDS.SHOW_CATEGORY, showCategory);
      window.removeEventListener(COMMANDS.SHOW_ORDER, showOrder);
      window.removeEventListener(COMMANDS.SHOW_PROFILE, showProfile);
      window.removeEventListener(COMMANDS.SHOW_CONTACT, showContact);
      window.removeEventListener(COMMANDS.SHOW_HELP, showHelp);
      window.removeEventListener(
        COMMANDS.SHOW_PRODUCTSHIPPINGTIME,
        showProductshippingtime
      );
      window.removeEventListener(COMMANDS.SHOW_RETURN, showReturn);
      window.removeEventListener(COMMANDS.SHOW_PRIVACY, showPrivacy);
      window.removeEventListener(COMMANDS.SHOW_DELIVERY, showDelivery);
      window.removeEventListener(COMMANDS.BUY_PRODUCT, buyProduct);
    };
  }, [
    openCart,
    closeCart,
    addItem,
    removeItem,
    showCategory,
    showOrder,
    showProfile,
    showContact,
    showHelp,
    showProductshippingtime,
    showReturn,
    showPrivacy,
    showDelivery,
    buyProduct,
  ]);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        bottom: "15px",
        left: "15px",
        key: "a3275cc49f52267bfa9530ef982a25a02e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
        },
      })
    );
  }, []);

  return null;
}

const mapStateToProps = (state) => {
  const quantity = get(state, ["cart", "cartItems"], []).reduce(
    (count, cartProduct) => {
      return (count += cartProduct.quantity);
    },
    0
  );
  return {
    quantity,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
    deleteCart: (id_cart) => {
      dispatch({ type: "DELETE_CART", payload: id_cart });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlanTrigger);
