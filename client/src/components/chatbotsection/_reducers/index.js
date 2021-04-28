import { combineReducers } from 'redux';
import message from './message_reducer';


const initState={
    cart: []
  }
  

function cart (state = [], action) {
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

const rootReducer = combineReducers({
    message,
    cart
});

export default rootReducer;