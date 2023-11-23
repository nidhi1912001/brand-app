import React, { useCallback, useState } from 'react'
import Sidebar from "../../component/sidebar/Sidebar";
import Items from "../items/Items";
import "./products.scss"
import Container from "../../component/container/Container";

const Products = () => {

  const  [selectCategories, setSelectCategories] = useState( {  });
  const [filters, setFilters] = useState({

    // Add more filters as needed

  });

  const handleSelectCategory=(selectedCategory)=>{
    setSelectCategories(selectedCategory)
    console.log("newwww",selectCategories)
    setFilters({...filters,name:selectCategories.id})
  }
  console.log(filters,"filtersssssssssss")

  // const handleSelectPrice=useCallback((data)=>{
  //   onSelectCategory({
  //     price_min:data.min,
  //     price_max:data.max
  //   })
  //
  // },[])




  return (
    <div className="products">
      <Container>
        <Sidebar  onSelectCategory={handleSelectCategory} handleSelectPrice={handleSelectCategory}/>
        <Items selectCategory={selectCategories}/>
      </Container>
    </div>

  )
}

export default Products