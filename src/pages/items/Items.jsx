import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import favorite from "../../assets/favorite.png";
import "./items.scss";
import Product from "../product/product";

const Items = ({ selectCategory, label }) => {
  const [allProductData, setAllProductData] = useState([]);
  const [finalFilteredProduct, setFinalFilteredProduct] = useState([]);
  // const [categoryData, setCategoryData]=useState([])
  const navigate = useNavigate();
  // const [filters, setFilters] = useState({
  //   categoryId: '',
  //   priceRange: '',
  //   // Add more filters as needed
  // });

  //   useEffect( () => {
  //     axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${selectCategory.min}&price_max=${selectCategory.max}`)
  //       .then((priceData)=>{
  //         const { minPrice, maxPrice}=priceData;
  //         let categoryFilteredProducts=[]

  //     if ( selectCategory.label==="category" ) {
  //       axios.get( `https://api.escuelajs.co/api/v1/products?categoryId=${selectCategory.id}`)
  //         .then( ( data ) => {
  //           setAllProductData( data.data );
  //           categoryFilteredProducts = data.data || [];
  //           // setCurrentPage(1); // Reset page to 1 when category changes

  //           if (minPrice && maxPrice && categoryFilteredProducts.length > 0) {
  //             const priceFilteredProducts = categoryFilteredProducts.filter(
  //               (product) => product.price >= minPrice && product.price <= maxPrice
  //             );
  //             setAllProductData(priceFilteredProducts);
  //           }
  //         })
  //         .catch((error) => {
  //           console.error('Error fetching products by category:', error);
  //         });
  //     }else{
  //       axios.get( "https://api.escuelajs.co/api/v1/products" )
  //       .then( ( data ) => setAllProductData( data.data ) )

  //       if (minPrice && maxPrice && data.length > 0) {
  //         const priceFilteredProducts = data.filter(
  //           (product) => product.price >= minPrice && product.price <= maxPrice
  //         );
  //         setAllProductData(priceFilteredProducts);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching all products:', error);
  //     });
  // }
  // })
  // .catch((error) => {
  // console.error('Error fetching price data:', error);
  // });
  // }, [ selectCategory ] );

  //   else if(categoryData && selectCategory.label==="price"){
  //     axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000`)
  //   }
  // })
  //   else {

  //     axios.get( "https://api.escuelajs.co/api/v1/products" )
  //       .then( ( data ) => setAllProductData( data.data ) )
  //       .catch( ( error ) => {
  //         console.error( 'Error fetching products by category:', error );
  //       } );
  //   }
  // }, [ selectCategory ] );

  useEffect(() => {
    let filter = "";
    if ("category" in selectCategory)
      filter = filter + `categoryId=${selectCategory["category"]}`;
    if ("price" in selectCategory)
      filter =
        filter +
        (filter ? "&" : "") +
        `price_min=${selectCategory["price"].min}&price_max=${selectCategory["price"].max}`;

    fetch(`https://api.escuelajs.co/api/v1/products?${filter}`)
      .then((response) => response.json())
      .then((data) => setAllProductData(data || []))
      .catch((error) => console.log(error));
  }, [selectCategory]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.escuelajs.co/api/v1/products/?price_min=${selectCategory.min}&price_max=${selectCategory.max}`
  //   )
  //     .then((response) => response.json())
  //     .then((priceData) => {
  //       console.log(priceData, "priceDataaaaaaaaa");
  //       const { minPrice, maxPrice } = priceData;
  //       if (allProductData.length > 0 && minPrice && maxPrice) {
  //         const priceFilteredProducts = allProductData.filter(
  //           (product) => product.price >= minPrice && product.price <= maxPrice
  //         );
  //         setFinalFilteredProduct(priceFilteredProducts);
  //       } else {
  //         setFinalFilteredProduct(allProductData);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [allProductData]);

  const handleProductPreview = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="items">
      {allProductData?.map((item) => {
        return (
          <div className="card">
            <div className="card-img">
              <img
                className="image"
                src={item.images[0]}
                onClick={() => handleProductPreview(item.id)}
              />
            </div>
            <div className="card-content">
              <div className="content-detail">
                <div className="content-price">Rs.{item.price}</div>
                <div className="content-title">{item.title}</div>
              </div>

              <div className="favorite">
                <img className="favorite-image" src={favorite} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;

