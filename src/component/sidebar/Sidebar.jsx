import React, { useCallback, useEffect, useState } from "react";
import DropdownList from "../dropdownList/DropdownList.jsx";
import "./sidebar.scss";

const Sidebar = ( { onSelectCategory } ) => {

  const prices = [ 1, 500, 1000, 1500, 2000, 2500 ]


  const minPrice = Math.min( ...prices );
  const maxPrice = Math.max( ...prices );


  const rangeSize = 500;
  const numberOfRanges = Math.ceil( ( maxPrice - minPrice ) / rangeSize );
  const priceRanges = Array.from( { length: numberOfRanges }, ( _, index ) => ( {
    min: minPrice + index * rangeSize,
    max: minPrice + ( index + 1 ) * rangeSize
  } ) );


  const [ category, setCategory ] = useState( [] );


  useEffect( () => {
    fetch( "https://api.escuelajs.co/api/v1/categories/" )
      .then( ( response ) => response.json() )
      .then( ( data ) => setCategory( data ) );
  }, [] );

  const handleSelectPrice=useCallback((data)=>{
    onSelectCategory({
      price_min:data.min,
      price_max:data.max
    })

  },[])


  return (
    <div className="sidebar">
      <DropdownList option={category} label="category" handleSelectOption={onSelectCategory}/>
      <DropdownList option={priceRanges} label="price" handleSelectOption={handleSelectPrice}/>
    </div>
  );
};
export default Sidebar;
