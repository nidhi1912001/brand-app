import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "./login.scss";
import Input from "../../component/input/Input";

const Logins = () => {
  const [ userData, setUserData ] = useState( { email: "", password: "" } );
  const navigate = useNavigate()
  const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcwMDQ4MjQzNCwiZXhwIjoxNzAyMjEwNDM0fQ.O8ljCJhWEYau6_mZJERLyX4Oi166jCb25ISWg8ng9ls`;

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setUserData( { ...userData, [name]: value } );

  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userData
      );

      console.log( "Response:", response.data );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login-main" onSubmit={handleSubmit}>
      <div className="login">
        <p className="heading">Sign in</p>
        <p className="contain">Sign in and start managing your candidates!</p>

        <div className="login-data">

          <Input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="Email"/>

          <Input type="password" name="password" value={userData.password} onChange={handleChange}
                 placeholder="password"/>

          <div className="checkbox-password">

            <Input type="checkbox" id="remember" name="remember" value="remember"/>
            <span className="remember">Remember me</span>

            <a href="" className="link"> Forgot password? </a>
          </div>
          <button className="button-login" > Login</button>
        </div>
      </div>
    </form>
  );
};

export default Logins;
