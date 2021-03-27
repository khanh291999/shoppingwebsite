import { combineReducers } from "redux";
import message from "./message_reducer";

const initState = {
  cartItems: [],
};

function cart(state = initState, action) {
  console.log("🚀 ~ file: index.js ~ line 9 ~ cart ~ state", state);
  console.log("🚀 ~ file: index.js ~ line 9 ~ cart ~ action", action);
  switch (action.type) {
    case "ADD_TO_CART": {
      const availableProductIndex = state.cartItems.findIndex((cartProduct) => {
        return cartProduct.id_product === action.payload.id_product;
      });
      if (availableProductIndex >= 0) {
        const new_cart = [...state.cartItems];
        new_cart[availableProductIndex].quantity =
          new_cart[availableProductIndex].quantity + action.payload.quantity;
        return {
          ...state,
          cartItems: new_cart,
        };
      } else {
        console.log("pass");
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    }
    case "UPDATE_CART": {
      const update_product_index = state.cartItems.findIndex((pic) => {
        return (pic.id_cart = action.payload.id_cart);
      });
      const new_cart = [...state.cartItems];
      new_cart[update_product_index].quantity = Number(action.payload.value);
      return {
        ...state,
        cartItems: new_cart,
      };
    }
    case "DELETE_CART": {
      const new_cart = state.cartItems.filter((pic) => {
        return pic.id_cart !== action.payload;
      });
      return {
        ...state,
        cartItems: new_cart,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  message,
  cart,
});

export default rootReducer;
