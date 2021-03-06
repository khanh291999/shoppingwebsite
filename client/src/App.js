import React, { useState, useEffect }  from "react";
import ShoppingCart from "./components/ShoppingCart";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {createStore} from "redux"
import {Provider} from "react-redux"
import Axios from "axios";
import UserContext from "./context/userContext"
import adminContext from "./context/adminContext"

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [adminData, setadminData] = useState({
    token: undefined,
    admin: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:8080/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:8080/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    const checkuser = async () =>{
      let userlogin = localStorage.getItem("user-login")
      console.log('user',userlogin);
      if (userlogin) {
        setUserData({
          user: JSON.parse(userlogin)
        })
      }

    }

    const checkadmin = async () =>{
      let adminlogin = localStorage.getItem("admin-login")
      console.log('admin',adminlogin);
      if (adminlogin) {
        setadminData({
          admin: JSON.parse(adminlogin)
        })
      }

    }

    const checkLoggedInAdmin = async () => {
      let token = localStorage.getItem("admin-token");
      if (token === null) {
        localStorage.setItem("admin-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:8080/admins/tokenIsValidAdmin",
        null,
        { headers: { "x-admin-token": token } }
      );
      if (tokenRes.data) {
        const adminRes = await Axios.get("http://localhost:8080/admins/", {
          headers: { "x-auth-token": token },
        });
        setadminData({
          token,
          admin: adminRes.data,
        });
      }
    };
    checkuser();
    checkadmin();
    checkLoggedIn();
    checkLoggedInAdmin();
  }, []);

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


  return (
    <Provider store={store}>
 
      <ThemeProvider theme={theme}>
      <div className="App">
        <adminContext.Provider value={{adminData,setadminData}}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <ShoppingCart /> 
      </UserContext.Provider>
      </adminContext.Provider>
      </div>
      </ThemeProvider>
      
    </Provider>
  );

}

//export default App;
