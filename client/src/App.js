import React, { useState, useEffect }  from "react";
import ShoppingCart from "./components/ShoppingCart";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {createStore, applyMiddleware} from "redux"
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {Provider} from "react-redux"
import Axios from "axios";
import UserContext from "./context/userContext"
import adminContext from "./context/adminContext"
import rootReducer from './components/chatbotsection/_reducers';
import ReactDOM from "react-dom";

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

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(`store`, store.getState())
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

  return (
    <Provider store={store}>
        {/* <Provider
          store={createStoreWithMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )}> */}
      <ThemeProvider theme={theme}>
      <div className="App">
        <adminContext.Provider value={{adminData,setadminData}}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <ShoppingCart /> 
      </UserContext.Provider>
      </adminContext.Provider>
      </div>
      </ThemeProvider>
      {/* </Provider> */}
    </Provider>
  );

}



//export default App;
