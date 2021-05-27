import { useEffect, useState, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";
import axios from "axios";

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  // PURCHASE_ITEMS: "purchase-items"
};
function AlanTrigger(props) {
  const history = useHistory();
  const [alanInstance, setAlanInstance] = useState();
  const [data, setData] = useState();

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
        id_product: item.id,
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

  // const purchaseItems = useCallback(() => {
  //   if (isCartEmpty) {
  //     alanInstance.playText("Your cart is empty")
  //   } else {
  //     alanInstance.playText("Checking out")
  //     checkout()
  //   }
  // }, [alanInstance, isCartEmpty, checkout])

  useEffect(() => {
    const getAllProduct = async () => {
      const result = await axios.get(
        "https://myauthapi1.herokuapp.com/allproduct"
      );
      setData(result.data);
    };
    getAllProduct();

    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
    window.addEventListener(COMMANDS.ADD_ITEM, addItem);
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeItem);
    // window.addEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems)

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem);
      // window.removeEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems)
    };
  }, [openCart, closeCart, addItem, removeItem]);
  // [openCart, closeCart, addItem, removeItem, purchaseItems]
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlanTrigger);
