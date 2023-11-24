import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Container from "../../component/container/Container";
import "./product.scss"

const Product = () => {

  const { id } = useParams();
  const [ product, setProduct ] = useState( {} );
  useEffect( () => {
    axios.get( `https://api.escuelajs.co/api/v1/products/${id}`
    )
      .then( ( data ) => {
        setProduct( data.data )

      } )
  }, [ id ] )


  return (
    <div className="peview-main">
      <Container>
        {Object.keys( product ).length && (


          <div className="preview">
            <div className="image-section">


              <img className="main-image" src={product.category.image} alt="imagesss"/>

              <div className="multi-image">
                {product.images.map( ( img ) => {
                  return <img className="single-image" src={img}/>
                } )}
              </div>

            </div>

            <div className="preview-details">
              <h1 className="heading">Product Details</h1>

              <div className="details">
                <label className="title">Title:-</label><span className="title-detail">{product.title}</span>
              </div>

              <div className="details">
                <label className="title">Price:-</label><span className="price-detail"> {product.price}/-</span>
              </div>

              <div className="details">
                <label className="title">Description:-</label><span
                className="description-detail">{product.description}</span>
              </div>


            </div>

          </div>

        )
        }


      </Container>
    </div>
  )
}
export default Product;