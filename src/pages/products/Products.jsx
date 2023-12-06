import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { allProducts, categoryProducts,priceProducts } from "../../slice/products/productsAction";
import {handlePrevious,handleNext} from "../../slice/products/productsSlice";
import {useDispatch,useSelector} from "react-redux";
import favorite from "../../assets/favorite.png";
import "./products.scss";



const Products = ( { selectCategory, label } ) => {
   // const [ currentPage, setCurrentPage ] = useState( 1 )
   // const [ offSet, setOffSet ] = useState( 0 )
   // const limit = 10
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const { data,currentPage,offSet,limit }=useSelector((state)=>state.productData)
  // console.log(data,currentPage,offSet)
  // const data=useSelector((state)=>state.productData.data)

  // const handleNext = () => {
  //   setCurrentPage( currentPage + 1 )
  //   setOffSet( offSet + limit )
  // }
  //
  // const handlePrevious = () => {
  //   setCurrentPage( currentPage - 1 )
  //   setOffSet( offSet - limit )
  //
  // }


  useEffect(()=>{
   if(label==="category"){
     dispatch(categoryProducts({selectCategory,offSet,limit}))
   }else if(label === "price"){
    dispatch(priceProducts({selectCategory,offSet,limit}))
   }else {
     dispatch(allProducts({offSet,limit}))
   }
  },[ selectCategory, label, offSet ])


  const handleProductPreview = ( id ) => {
    navigate( `/product/${id}` );
  };

  return (

    <div className="products-main">


      {!data.length ?
        <div className="loader-main">
        <p className="loading-screen"></p>
        </div>
          :
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
        <button className="paginationButton" disabled={currentPage === 1} onClick={()=>dispatch(handlePrevious())} >Previous</button>
        <p className="currentPage"> {currentPage} </p>
        <button className="paginationButton"  onClick={()=>dispatch(handleNext())}>Next</button>

        </div>
        </div>

      }
    </div>
  );

}

export default Products;
