import React, { useCallback, useState } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Items from "../items/Items";
import "./products.scss";
import Container from "../../component/container/Container";

const Products = () => {
  const [selectCategory, setSelectCategory] = useState({});
  const [filters, setFilters] = useState({});
  const [label, setLabel] = useState("");

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
    // console.log("newwww",selectCategories)
    // setFilters({...filters,name:selectCategories.id})
  };
  console.log(selectCategory, "filtersssssssssssnidhiii");

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
        <Sidebar onSelectCategory={handleSelectCategory} />
        <Items selectCategory={selectCategory} label={label} />
      </Container>
    </div>
  );
};

export default Products;
