import { createAsyncThunk } from "@reduxjs/toolkit";
import {initialState} from "./productsSlice";
import axios from "axios";


const {offSet,limit}=initialState
console.log(offSet,limit,"OFFSETLIMIT")

export const categoryProducts = createAsyncThunk(
  "categoryproducts/fetch",
  async ( props ) => {
    const { selectCategory, offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products?categoryId=${selectCategory.id}&offset=${offSet}&limit=${limit}` )
      return response.data

    } catch (e) {
      console.log( e )

    }
  }
)

export const priceProducts = createAsyncThunk(
  "priceProducts/fetch",
  async (props) => {
    const { selectCategory, offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products/?price_min=${selectCategory.min}&price_max=${selectCategory.max}&offset=${offSet}&limit=${limit}` )
      return response.data
    } catch (e) {
      console.log( e )
    }
  }
)

export const allProducts = createAsyncThunk(
  "allproducts/fetch",
  async ( props ) => {
    // const { offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products?offset=${offSet}&limit=${limit}` )
      return response.data
      console.log(response.data,"responseeee")
    } catch (e) {
      console.log( e )
    }
  }
)