import React, { useState } from "react";
import "./dropdownList.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const DropdownList = ( { option, label, handleSelectOption } ) => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ remaining, setRemaining ] = useState( false );



  const handleToggle = () => {
    setIsOpen( !isOpen );
    setRemaining( false )
  };

  const handleRemaining = () => {
    setRemaining( true );
  };



  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={handleToggle}>
        <button className="dropdown-button" onClick={handleToggle}>
          <span className="label">{label}</span> {isOpen ? <RiArrowDropUpLine className="dropdown-icon"/> :
          <RiArrowDropDownLine className="dropdown-icon"/>}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {(remaining ?option :option.slice( 0, 3 )).map( ( singleItem ) => (
            <button className="option-button" key={singleItem.id} onClick={() => handleSelectOption(singleItem)}>
              {label === 'price' ? `${singleItem.min}-${singleItem.max}` : singleItem.name}
            </button>
          ) )}

    
          {!remaining && <button className="option-button seeall" onClick={handleRemaining}>See all</button>}
        </div>
      )}

    </div>
  );
};
export default DropdownList;
