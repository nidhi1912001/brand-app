import React, { useState } from 'react'
import Products from "../products/Products";
import Sidebar from "../../component/sidebar/Sidebar";
import "./home.scss"
import Container from "../../component/container/Container";

const Home = () => {

  const [selectCategory, setSelectCategory] = useState({});
  const [label, setLabel] = useState("")

  const handleSelectCategory = (selectedCategory, label) => {
    const isSameValue =
      label.toLowerCase() === "price"
        ? selectedCategory.min === selectCategory[label]?.min &&
        selectedCategory.max === selectCategory[label]?.max
        : selectCategory[label] === selectedCategory;

    const filterObject = { ...selectCategory, [label]: selectedCategory };
    if (isSameValue) {
      delete filterObject[label];
    }
    setSelectCategory({ ...filterObject });
    setLabel(label);

  };
  // const handleSelectPrice=useCallback((data)=>{
  //   onSelectCategory({
  //     price_min:data.min,
  //     price_max:data.max
  //   })
  //
  // },[])


  return (

    <div className="home">
      <Container>

      <Sidebar onSelectCategory={handleSelectCategory}/>
      <Products selectCategory={selectCategory}/>
      </Container>


    </div>
  )
}

export default Home