import React, { useCallback, useEffect, useState } from "react";
import DropdownList from "../dropdownList/DropdownList.jsx";
import { fetchCategory } from "../../slice/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.scss";

const Sidebar = ( { onSelectCategory } ) => {


  const priceList=useSelector((state)=>state.categoryList.price)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch( fetchCategory() )
  }, [] )
  const categorylist = useSelector( ( state ) => state.categoryList.category )


  // const handleSelectPrice=useCallback((data)=>{
  //   onSelectCategory({
  //     price_min:data.min,
  //     price_max:data.max
  //   })

  // },[])

  return (
    <div className="sidebar">
      <DropdownList
        option={categorylist}
        label="category"
        handleSelectOption={onSelectCategory}
      />
      <DropdownList
        option={priceList}
        label="price"
        handleSelectOption={onSelectCategory}
      />
    </div>
  );
};
export default Sidebar;
