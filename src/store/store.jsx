import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../slice/authSection/AuthSlice";
import categorySlice from "../slice/category/categorySlice";
import productsSlice from "../slice/products/productsSlice"

const store=configureStore({
  reducer:{
    "auth":AuthSlice,
    "categoryList":categorySlice,
    "productData":productsSlice

  }

})
export default store