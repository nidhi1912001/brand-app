import React from 'react'
import "./container.scss"

const Container = ({Children}) => {
    console.log(Children)
  return (
    <div className='container'>{Children}</div>
  )
}

export default Container