import React from 'react'
import { useState,useEffect } from 'react';
import Sidebar from "../../component/sidebar/Sidebar";

const Items = () => {
  
  const[productData,setProductData]=useState([])

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products/")
    .then((response)=>response.json())
    .then((data)=>setProductData(data))

  },[])

   
  return (
    <>

    {productData.map((item)=>{
      // console.log(item)
      return(
        <>
        {item.title}
        
        </>

      )
    })}
      


    </>
  )
}

export default Items