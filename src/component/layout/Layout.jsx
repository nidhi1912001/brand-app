import React from 'react'
import Header from '../header/Header'
import Sidebar from "../sidebar/Sidebar";
import {Outlet} from "react-router-dom"
import Container from "../container/Container";

const Layout = () => {

  
  return (
    <>

        <Header/>

        {/*<Sidebar/>*/}
        <Outlet/>
        
</>
  )
}

export default Layout