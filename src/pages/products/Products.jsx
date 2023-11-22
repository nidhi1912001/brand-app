import React, { useCallback, useState } from 'react'
import Sidebar from "../../component/sidebar/Sidebar";
import Items from "../items/Items";
import "./products.scss"
import Container from "../../component/container/Container";

const Products = () => {

  const  [selectCategories, setSelectCategories] = useState({});
  


  // const selectCategory = useCallback( (data) =>{
  //   console.log(data,"dataa")
  //         setSelectCategories({...selectCategories,data});
  // },[selectCategories]);

  const handleSelectCategory=(selectedCategory)=>{
    setSelectCategories(selectedCategory)
    
  }




  return (
    <div className="products">
      <Container>
        <Sidebar  onSelectCategory={handleSelectCategory}/>
         <Items selectCategory={selectCategories}/>
      </Container>
    </div>

  )
}

export default Products