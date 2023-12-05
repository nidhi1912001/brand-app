import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./login.scss";
import Input from "../../component/input/Input";
import authAction from "../../slice/authSection/authAction";


const Logins = () => {
  const [ userData, setUserData ] = useState( { email: "", password: "" } );
  const navigate = useNavigate()
// const {token} = useSelector((state)=>state.auth)

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setUserData( { ...userData, [name]: value } );

  };

  const dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    // dispatch(authAction(userData)).then((result)=>{
    //   if(result.payload){
    //     navigate("/home")
    //   }
    // })
    dispatch(authAction(userData))
    navigate("/home")

  }

  // useEffect(()=>{
  //   token && navigate("/home")
  // },[token])

  return (
    <form className="login-main">
      <div className="login">
        <p className="heading">Sign in</p>
        <p className="contain">Sign in and start managing your candidates!</p>

        <div className="login-data">

          <Input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="username"/>

          <Input type="password" name="password" value={userData.password} onChange={handleChange}
                 placeholder="password"/>

          <div className="checkbox-password">

            <Input type="checkbox" id="remember" name="remember" value="remember"/>
            <span className="remember">Remember me</span>

            <a href="" className="link"> Forgot password? </a>
          </div>
          <button className="button-login" onClick={handleSubmit}> Login</button>
        </div>
      </div>
    </form>
  );
};

export default Logins;
