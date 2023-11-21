import React, { useState } from "react";
import "./dropdownList.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const DropdownList = ({ option, label,handleSelectOption }) => {
   
  const [isOpen, setIsOpen] = useState(false);
  const [remaining, setRemaining] = useState(false);
//   const [select,setSelect]=useState({})
  const remainingCategories = option.slice(5,10);
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRemaining(false)
  };

  const handleRemaining = () => {
    setRemaining(true);
  };
//   const handleSelectOption = (option) => {
//     setSelect(option);
//     setIsOpen(false);
//   };
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={handleToggle}>
        <button onClick={handleToggle}>
          {label} {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {option.slice(0, 5).map((option) => (
            <li key={option.id} onClick={() => handleSelectOption(option)}>
              {option.name }
            </li>
          ))}

          {remaining && (
            <>
              {remainingCategories.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option.name}
                  </li>
                );
              })}
            </>
          )}

          { !remaining && <button onClick={handleRemaining}>See all</button>}
        </ul>
      )}
      
    </div>
  );
};
export default DropdownList;
