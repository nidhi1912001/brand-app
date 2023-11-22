import React from 'react'
import "./items.scss"
import { useState,useEffect } from 'react';
import favorite from "../../assets/favorite.png"


const Items = ({selectCategory}) => {

  
  const[allProductData,setAllProductData]=useState([])
  const[categoryProduct,setCategoryProduct]=useState([])

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products/")
    .then((response)=>response.json())
    .then((data)=>setAllProductData(data))


  },[])

  useEffect(() => {
    // Filter products based on selected category
    if (!selectCategory) {
      setCategoryProduct(allProductData); // Display all products if no category is selected
    } else {
      // Fetch products based on selected category
      fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${selectCategory.id}`)
        .then((response) => response.json())
        .then((data) => {
          setCategoryProduct(data);
         // setCurrentPage(1); // Reset page to 1 when category changes
        })
        .catch((error) => {
          console.error('Error fetching products by category:', error);
        });
    }
  }, [selectCategory, allProductData]);

  // const filterProducts=(e)=>{
  
  //   const filterData=productData.filter((value)=>value.category.id ===selectCategory.data.id )

  // }
  const productsToDisplay = selectCategory === '' ? allProductData : categoryProduct;

   
  return (
    <div className="items">

      

    {allProductData.map((item)=>{
       
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