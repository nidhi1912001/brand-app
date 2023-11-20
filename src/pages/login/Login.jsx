import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.scss";
import Input from "../../component/input/Input";

const Logins = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcwMDQ4MjQzNCwiZXhwIjoxNzAyMjEwNDM0fQ.O8ljCJhWEYau6_mZJERLyX4Oi166jCb25ISWg8ng9ls`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userData
      );

      console.log("Response:", response.data);
    } catch (error) {
      if (error.response) {
        console.log("Server responded with status:", error.response.status);
        console.log("Error message:", error.response.data);
      } else if (error.request) {
        console.log("Request made but no response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <form className="login-main" onSubmit={handleSubmit}>
      <div className="login">
        <h1 className="heading">Sign in</h1>
        <p className="contain">Sign in and start managing your candidates!</p>

        <Input />

        <Input />

        <div className="signin">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          Remember me
          <a href=""> Forgot password </a>
        </div>
        <button> Login</button>
      </div>
    </form>
  );
};

export default Logins;
