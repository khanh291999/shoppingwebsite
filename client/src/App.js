import React from "react";
import ShoppingCart from "./components/ShoppingCart";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {createStore} from "redux"
import {Provider} from "react-redux"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e74c3c"
    }
  }
})

const initState={
  cart: []
}

const rootReducer = (state = initState, action) =>{
  switch (action.type) {
    case "ADD_TO_CART":{
      const available_product_index= state.cart.findIndex(product_in_cart=>{
        return product_in_cart.id_product === action.payload.id_product
      })
      if(available_product_index>=0){
        const new_cart = [...state.cart];
        new_cart[available_product_index].quantity = new_cart[available_product_index].quantity + action.payload.quantity;
        return{
          ...state,
          cart:new_cart
        }
      }
      else{
        return {
          ...state,
          cart:[...state.cart,action.payload]
              }
          }
     
      }
      case "UPDATE_CART":{
        const update_product_index = state.cart.findIndex(pic=>{
          return pic.id_cart = action.payload.id_cart;
        })
        const new_cart = [...state.cart];
        new_cart[update_product_index].quantity = Number(action.payload.value)
        return{
          ...state,
          cart:new_cart
        }
      }
      case "DELETE_CART": {
        const new_cart = state.cart.filter((pic) => {
          return pic.id_cart !== action.payload;
        });
        return {
          ...state,
          cart: new_cart,
        }
      }
      case "CLEAR_CART": {
        return{
          ...state,
          cart:[]
        }
      }

    default:
      return state;
  }
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <ShoppingCart />>
      </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
