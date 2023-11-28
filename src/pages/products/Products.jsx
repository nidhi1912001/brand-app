import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import favorite from "../../assets/favorite.png";
import "./products.scss";
import axios from "axios";


const Products = ( { selectCategory, label } ) => {
  const [ allProductData, setAllProductData ] = useState( [] );
  const [ currentPage, setCurrentPage ] = useState( 1 )
  // const [hasMoreData, setHasMoreData] = useState(true);
  const [ offSet, setOffSet ] = useState( 0 )
  const limit = 10
  const navigate = useNavigate();
  console.log( allProductData.length, "allProductData" )

  const handleNext = () => {
    setCurrentPage( currentPage + 1 )
    setOffSet( offSet + limit )

  }

  const handlePrevious = () => {
    setCurrentPage( currentPage - 1 )
    setOffSet( offSet - limit )

  }


  useEffect( () => {

    if ( label === "category" ) {
      fetch( `https://api.escuelajs.co/api/v1/products?categoryId=${selectCategory.id}` )
        .then( ( response ) => response.json() )
        .then( ( data ) => setAllProductData( data ) )

    } else if ( label === "price" ) {
      fetch( `https://api.escuelajs.co/api/v1/products/?price_min=${selectCategory.min}&price_max=${selectCategory.max}` )
        .then((response)=>response.json())
        .then((data)=>setAllProductData(data))
    } else {

      fetch( `https://api.escuelajs.co/api/v1/products?offset=${offSet}&limit=${limit}` )
        .then( ( response ) => response.json() )
        .then( ( data ) => {
          setAllProductData( data )

        } )

    }

  }, [ selectCategory, label, offSet ] )


  const handleProductPreview = ( id ) => {
    navigate( `/product/${id}` );
  };



  return (
    <div className="products">

      {allProductData?.map( ( item ) => {
        return (
          <div className="card">
            <div className="card-img">
              <img
                className="image"
                src={item.images[0]}
                onClick={() => handleProductPreview( item.id )}
              />
            </div>
            <div className="card-content">
              <div className="content-detail">
                <div className="content-price">Rs.{item.price}</div>
                <div className="content-title">{item.title}</div>
              </div>

              <div className="favorite">
                <img className="favorite-image" src={favorite}/>
              </div>
            </div>
          </div>
        );
      } )}


      <div className="pagination">
        <button disabled={currentPage === 1} onClick={handlePrevious}>Previous</button>
        {currentPage}
        <button onClick={handleNext}>Next</button>

      </div>

    </div>
  );
};

export default Products;
