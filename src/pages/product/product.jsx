import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Container from "../../component/container/Container";
import "./product.scss"

const Product = () => {

  const { id } = useParams();
  const [ product, setProduct ] = useState( {} );
  console.log( id, "idddddddd" )
  useEffect( () => {
    axios.get( `https://api.escuelajs.co/api/v1/products/${id}`
    )
      .then( ( data ) => {
        setProduct( data.data )

      } )
  }, [ id ] )
  console.log( "selectProduct", product )

  return (
    <Container>
      { Object.keys(product).length  && (


         <div className="preview">
          <div className="image-section">

            <div className="main-image">
              <img src={product.category.image} alt="imagesss"/>
            </div>

            <div className="multi-image">
              {product.images.map( ( img ) => {
                return <img src={img}/>
              } )}
            </div>

          </div>

          <div className="preview-details">
           <p className="preview-title"> {product.title} </p>
           <p className="preview-price"> {product.price} </p>
            <div className="description">
              {product.description}

            </div>

          </div>

        </div>

      )
      }


    </Container>
  )
}
export default Product;