import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { productPreview } from '../../slice/products/productsAction';
import Container from "../../component/container/Container";
import "./product.scss"

const Product = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  useEffect( () => {
    dispatch( productPreview( { id } ) )
  }, [ id ] )

  const productPreviewData = useSelector( ( state ) => state.productData.productPreview )
  return (
    <div className="peview-main">
      <Container>
        {Object.keys( productPreviewData ).length && (


          <div className="preview">
            <div className="image-section">


              <img className="main-image" src={productPreviewData.images[0]} alt="imagesss"/>

              <div className="multi-image">
                {productPreviewData.images.map( ( img ) => {
                  return <img className="single-image" src={img}/>
                } )}
              </div>

            </div>

            <div className="preview-details">
              <h1 className="heading">Product Details</h1>

              <div className="details">
                <label className="title">Title:-</label><span className="title-detail">{productPreviewData.title}</span>
              </div>

              <div className="details">
                <label className="title">Price:-</label><span
                className="price-detail"> {productPreviewData.price}/-</span>
              </div>

              <div className="details">
                <label className="title">Description:-</label><span
                className="description-detail">{productPreviewData.description}</span>
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