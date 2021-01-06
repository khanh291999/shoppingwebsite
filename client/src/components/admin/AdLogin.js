import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import '../../assets/Login.css'
import adminContext from "../../context/adminContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const  {setadminData}  = useContext(adminContext);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('admin-token');
    if(token){
        history.push('/admin')
    }
  }, []);


  //post login data
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginAdmin = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:8080/admins/adminlogin",
        loginAdmin
      );
      console.log("Response")
      setadminData({
        token: loginRes.data.token,
        admin: loginRes.data.admin,
      });
      localStorage.setItem("admin-token", loginRes.data.token);
      localStorage.setItem("admin-login",  JSON.stringify(loginRes.data.admin));
      history.push("/admin");
      console.log("abc");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <div className='login-form-container'>
      <h2>Admin Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" id="login-btn">Log in</button>
      </form>
      </div>
    </div>
  );
}
