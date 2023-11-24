import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import favorite from "../../assets/favorite.png";
import Product from "../../pages/product/product"
import "./products.scss";
import axios from "axios";


const Products = ( { selectCategory } ) => {
  const [ allProductData, setAllProductData ] = useState( [] );
  const[currentPage,setCurrentPage]=useState(1)
  const[offSet,setOffSet]=useState(0)
 const limit=10

  const navigate = useNavigate();
  // const [filters, setFilters] = useState({
  //   categoryId: '',
  //   priceRange: '',
  //   // Add more filters as needed
  // });
  console.log(currentPage,"currentPage")

  useEffect( () => {
    let filter = "";
    if ( "category" in selectCategory )
      filter = filter + `categoryId=${selectCategory["category"]}`;
    if ( "price" in selectCategory )
      filter =
        filter +
        ( filter ? "&" : "" ) +
        `price_min=${selectCategory["price"].min}&price_max=${selectCategory["price"].max}`;

    fetch( `https://api.escuelajs.co/api/v1/products?${filter}` )
      .then( ( response ) => response.json() )
      .then( ( data ) => setAllProductData( data || [] ) )
      .catch( ( error ) => console.log( error ) );
  }, [ selectCategory ] );



  useEffect(()=>{
     axios.get(`https://api.escuelajs.co/api/v1/products/?offset=${offSet}&limit=${limit}`)
       .then((response)=>{
         console.log(response.data)
       })
       setOffSet(offSet+limit)

  },[])


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
        <button onClick={()=>setCurrentPage(currentPage-1)} >Previous</button>
        {currentPage}
        <button onClick={()=>setCurrentPage(currentPage+1)}>Next</button>

      </div>

    </div>
  );
};

export default Products;
