import React from 'react'
import "./items.scss"
import { useState,useEffect } from 'react';
import favorite from "../../assets/favorite.png"


const Items = ({selectCategory}) => {
  
  const[productData,setProductData]=useState([])

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products/")
    .then((response)=>response.json())
    .then((data)=>setProductData(data))

  },[])

   
  return (
    <div className="items">

    {productData.map((item)=>{
       // console.log(item.images[0],"imageslength")
       return(
        <div className="card">
          <div className="card-img">
          <img  className="image" src={item.images[0]}/>
          </div>
          <div className="card-content">
            <div className="content-detail">
            <div className="content-price">Rs.{item.price}</div>
            <div className="content-title">{item.title}</div>
            </div>

            <div className="favorite">
              <img className="favorite-image" src={favorite} />
            </div>
          </div>
        
        </div>

      )
    })}
      


    </div>
  )
}

export default Items