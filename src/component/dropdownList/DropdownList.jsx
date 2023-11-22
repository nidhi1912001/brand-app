import React, { useState } from "react";
import "./dropdownList.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const DropdownList = ( { option, label, handleSelectOption } ) => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ remaining, setRemaining ] = useState( false );
//   const [select,setSelect]=useState({})
  const remainingCategories = option.slice( 3, option.length );


  const handleToggle = () => {
    setIsOpen( !isOpen );
    setRemaining( false )
  };

  const handleRemaining = () => {
    setRemaining( true );
  };
//   const handleSelectOption = (option) => {
//     setSelect(option);
//     setIsOpen(false);
//   };


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
          {option.slice( 0, 3 ).map( ( singleItem ) => (
            <button className="option-button" key={singleItem.id} onClick={() => handleSelectOption( singleItem )}>
              {singleItem.name}
            </button>
          ) )}

          {remaining && (
            <div className="dropdown-options">
              {remainingCategories.map( ( singleItem ) => {
                return (
                  <button
                    className="option-button"
                    key={option.id}
                    onClick={() => handleSelectOption( singleItem )}
                  >
                    {singleItem.name}
                  </button>
                );
              } )}
            </div>

          )}

          {!remaining && <button className="option-button seeall" onClick={handleRemaining}>See all</button>}
        </div>
      )}

    </div>
  );
};
export default DropdownList;
