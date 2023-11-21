import React from 'react'
import Container from '../container/Container'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaUser,FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Input from "../input/Input";
import "./header.scss"
import logo from "../../assets/logo-symbol.png"
import brand from "../../assets/Brand.png"

const Header = () => {
  return (
    <Container>
      <div className="header">
        <div className="logo-contain">
          <img src={logo} className="logo" />
          <img src={brand} className="brand"/>
        </div>

        <div className="input-detail">
          <Input type="search" placeholder="Search"/>
          <button className="search-button">Search</button>
        </div>

        <div className="user-detail">
          <div className="icon-container">
           <FaUser className="icon"/>
           <span className="icon-data">Profile</span>
          </div>

          <div className="icon-container">
            <MdMessage  className="icon"/>
            <span className="icon-data">Message</span>
          </div>

          <div className="icon-container">
          <FaHeart  className="icon"/>
          <span className="icon-data">Orders</span>
          </div>

          <div className="icon-container">
          <FaShoppingCart  className="icon"/>
          <span className="icon-data">My cart</span>
          </div>


        </div>
      </div>
    </Container>


  )
}

export default Header