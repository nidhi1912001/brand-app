import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { allProducts, categoryProducts, priceProducts } from "../../slice/products/productsAction";
import { handlePrevious, handleNext } from "../../slice/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import favorite from "../../assets/favorite.png";
import "./products.scss";


const Products = ( { selectCategory, label } ) => {

  // const [hasMoreData,setHasMoreData]=useState(true)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { data, currentPage, offSet, limit, moreData } = useSelector( ( state ) => state.productData )

  useEffect( () => {
    if ( label === "category" ) {
      dispatch( categoryProducts( { selectCategory, offSet, limit } ) )
    } else if ( label === "price" ) {
      dispatch( priceProducts( { selectCategory, offSet, limit } ) )
    } else {
      dispatch( allProducts( { offSet, limit } ) )
    }
  }, [ selectCategory, label, offSet ] )


  const handleProductPreview = ( id ) => {
    navigate( `/product/${id}` );
  };
  const disabledNextButton = () => {

  }

  return (

    <div className="products-main">
      {/*{!data.length ?*/}
      {/*  <div className="loader-main">*/}
      {/*    <p className="loading-screen"></p>*/}
      {/*  </div>*/}
      {/*  :*/}
        <div className="products-contain">
          <div className="products">

            {data?.map( ( item ) => {
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
          </div>
          <div className="pagination">
            <button className="paginationButton" disabled={currentPage === 1}
                    onClick={() => dispatch( handlePrevious( { offSet, currentPage } ) )}>
              &lt;
            </button>

            <p className="currentPage"> {currentPage} </p>
            <button className="paginationButton" disabled={!moreData && currentPage}
                    onClick={() => dispatch( handleNext( { offSet, currentPage, moreData,data } ) )}>
              &gt;
            </button>

          </div>
        </div>

      }
    </div>
  );

}

export default Products;
