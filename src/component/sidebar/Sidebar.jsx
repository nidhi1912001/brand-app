import React, { useEffect, useState } from "react";
import DropdownList from "../dropdownList/DropdownList.jsx";
import "./sidebar.scss";

const Sidebar = ({onSelectCategory}) => {
  const price = [
    { id: 1, min: 0, max:500 },
    { id: 2, min: 500, max:1000 },
    { id: 3, min: 1000, max:1500 },
    { id: 4, min: 1600, max:2000 },
    { id: 5, min: 2100, max: 2500},
    
  ];

  const priceOne=[0,500,1000,1500,2000,2500]
  



  const [ category, setCategory ] = useState( [] );
  // const[selectObj,setSelectObj]=useState({})


  useEffect( () => {
    fetch( "https://api.escuelajs.co/api/v1/categories/" )
      .then( ( response ) => response.json() )
      .then( ( data ) => setCategory( data ) );
  }, [] );



  // const handleSelect = ( singleItem ) => {
  //   const  {id, name} = singleItem;
  //   selectCategory({id, name});
    
  // }

  return (
    <div className="sidebar">
      <DropdownList option={category} label="category" handleSelectOption={onSelectCategory}/>
      <DropdownList option={price} label="price"/>
    </div>
  );
};
export default Sidebar;
