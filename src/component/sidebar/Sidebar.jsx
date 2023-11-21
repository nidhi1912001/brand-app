import React, { useEffect, useState } from "react"
import "./sidebar.scss"

const Sidebar = () => {

  const[category,setCategory]= useState([])
  console.log(category)

  useEffect( () => {
    fetch( "https://api.escuelajs.co/api/v1/categories/" )
      .then( ( response ) => response.json() )
      .then( ( data ) => setCategory(data) )
  }, [] )



  const handleCategoryChange=()=>{

  }
  return (
    <div className="sidebar">

      <select
        defaultValue="  "
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
      >
       <option value=" " >Category</option>
        {category.map((data)=>{
          return(
            <option >{data.name}</option>
          )
        })}
      </select>

    </div>

  )

}
export default Sidebar;