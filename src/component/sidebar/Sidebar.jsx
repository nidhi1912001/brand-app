import React, { useEffect, useState } from "react";
import DropdownList from "../dropdownList/DropdownList.jsx";
import "./sidebar.scss";

const Sidebar = () => {
  const price = [
    { id: 1, name: 100 },
    { id: 2, name: 200 },
    { id: 3, name: 300 },
    { id: 3, name: 400 },
    { id: 3, name: 500 },
    { id: 3, name: 600 },
    { id: 3, name: 700 },
    { id: 3, name: 800 },
    { id: 3, name: 900 },
    { id: 3, name: 1000 },
  ];

  const [category, setCategory] = useState([]);
  //const[price,setPrice] = useState(priceData)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories/")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  const handleSelect=(option)=>{
    console.log(option)

  }

  return (
    <div className="sidebar">
      <DropdownList option={category} label="category" handleSelectOption={()=>handleSelect()} />
      <DropdownList option={price} label="price" />
    </div>
  );
};
export default Sidebar;
