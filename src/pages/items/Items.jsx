import React,{ useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import favorite from "../../assets/favorite.png"
import "./items.scss"
import Product from "../product/product";


const Items = ( { selectCategory } ) => {



  const [ allProductData, setAllProductData ] = useState( [] )
  const [categoryData, setCategoryData]=useState([])
  const navigate=useNavigate()
  // const [filters, setFilters] = useState({
  //   categoryId: '',
  //   priceRange: '',
  //   // Add more filters as needed
  // });


  useEffect( () => {

    if ( selectCategory.label==="category" ) {
      axios.get( `https://api.escuelajs.co/api/v1/products?categoryId=${selectCategory.id}`
      )
        .then( ( data ) => {
          setAllProductData( data.data );
          setCategoryData(data.data)
          // setCurrentPage(1); // Reset page to 1 when category changes
        } )
    } else if(categoryData && selectCategory.label==="price"){
      axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000`)
    }

    else {

      axios.get( "https://api.escuelajs.co/api/v1/products" )
        .then( ( data ) => setAllProductData( data.data ) )
        .catch( ( error ) => {
          console.error( 'Error fetching products by category:', error );
        } );
    }
  }, [ selectCategory ] );

  useEffect(()=>{

  })


  const handleProductPreview=(id)=>{
    navigate(`/product/${id}`)
  }


  return (
    <div className="items">


      {allProductData?.map( ( item ) => {
        console.log(item,"itemmmm")

        return (
          <div className="card">
            <div className="card-img">
              <img className="image" src={item.images[0]} onClick={()=>handleProductPreview(item.id)}/>
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

        )
      } )}


    </div>
  )
}

export default Items


// if(category){
//   setProduct(category)
// }else if (category && price )