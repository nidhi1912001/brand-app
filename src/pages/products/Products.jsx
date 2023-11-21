import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar";
import Items from "../items/Items";
import "./products.scss"
import Container from "../../component/container/Container";

const Products = () => {
  return (
    <div className="products">
      <Container>
        <Sidebar/>
         <Items/>
      </Container>
    </div>

  )
}

export default Products