import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {useSelector} from "react-redux";

const PrivateRoutes=()=>{
 const token = localStorage.getItem('token');
 // const token= useSelector((state)=>state.auth.accessToken)
  return(
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;