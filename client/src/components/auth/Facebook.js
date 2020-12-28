import React,  { useState, useContext } from 'react'
import FacebookLogin from 'react-facebook-login'
import UserContext from "../../context/userContext";
import {useHistory } from "react-router-dom";

// export default function Facebook {


  
//     componentClicked = () => {
//         console.log('clicked')
//     }

//     responseFacebook = (response) =>{
//         console.log(response);
//     }

//     render() {
//         let fbContent;

//         if(this.state.isLoggedIn){
//             fbContent = null;
//         }else{
//             fbContent= (
//                 <FacebookLogin
//                 appId="2694624874123071"
//                 autoLoad={false}
//                 fields="name,email,picture"
//                 onClick={this.componentClicked}
//                 callback={this.responseFacebook} />
//             )
//         }
//         return (
//             <div>
//                 {fbContent}
//             </div>
//         )
//     }
// }

// import React from 'react'

export default function Facebook() {
    const [isLoggedIn,setisLoggedIn] = useState(false);
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const componentClicked = () => {
        console.log('clicked')
    }

     const responseFacebook = (response) =>{
         console.log(response);
         
        setUserData({
            token: response.accessToken,
            displayName: response.name,
            email:response.email,
            userID: response.userID,
            user: response.name
          });
          console.log(response.name);
          localStorage.setItem("facebook-token", JSON.stringify(response.accessToken));
          history.push("/");
    }

    return (
         <FacebookLogin
             appId="2694624874123071"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
             callback={responseFacebook} />
    )
}

