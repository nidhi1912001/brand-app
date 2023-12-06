import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { productPreview } from '../../slice/products/productsAction';
import Container from "../../component/container/Container";
import "./product.scss"

const Product = () => {
  const dispatch=useDispatch()
  const { id } = useParams();
  // const [ product, setProduct ] = useState( {} );
  // useEffect( () => {
  //   axios.get( `https://api.escuelajs.co/api/v1/products/${id}`
  //   )
  //     .then( ( data ) => {
  //       setProduct( data.data )

  //     } )
  // }, [ id ] )

  useEffect(()=>{
     dispatch(productPreview(id))
  },[id])

  // const data=useSelector((state)=>console.log(state.productData,"whattt"))
const data={}


  return (
    <div className="peview-main">
      <Container>
        {Object.keys( data ).length && (


          <div className="preview">
            <div className="image-section">


              <img className="main-image" src={data.category.image} alt="imagesss"/>

              <div className="multi-image">
                {data.images.map( ( img ) => {
                  return <img className="single-image" src={img}/>
                } )}
              </div>

            </div>

            <div className="preview-details">
              <h1 className="heading">Product Details</h1>

              <div className="details">
                <label className="title">Title:-</label><span className="title-detail">{data.title}</span>
              </div>

              <div className="details">
                <label className="title">Price:-</label><span className="price-detail"> {data.price}/-</span>
              </div>

              <div className="details">
                <label className="title">Description:-</label><span
                className="description-detail">{data.description}</span>
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