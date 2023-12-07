import React from 'react'
import "./input.scss"

const Input = ( props ) => {

  const { type, name, value, onChange, placeholder } = props
  let className = ""
  switch ( type ) {
    case "text":
    case "password":
      className = "input";
      break;
    case "checkbox":
      className = "checkbox-input";
      break;
    case "search":
      className = "search-input"
  }

  return (
    <div>
      <input className={className} type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  )
}

export default Input