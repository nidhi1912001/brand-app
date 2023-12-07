import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const categoryProducts = createAsyncThunk(
  "categoryproducts/fetch",
  async ( props ) => {
    const { selectCategory, offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products?categoryId=${selectCategory.id}&offset=${offSet}&limit=${limit}` )
      return response.data

    } catch (e) {
      console.error( e )

    }
  }
)

export const priceProducts = createAsyncThunk(
  "priceProducts/fetch",
  async ( props ) => {
    const { selectCategory, offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products/?price_min=${selectCategory.min}&price_max=${selectCategory.max}&offset=${offSet}&limit=${limit}` )
      return response.data
    } catch (e) {
      console.error( e )
    }
  }
)

export const allProducts = createAsyncThunk(
  "allproducts/fetch",
  async ( props ) => {
    const { offSet, limit } = props
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products?offset=${offSet}&limit=${limit}` )
      return response.data

    } catch (e) {
      console.error( e )
    }
  }
)


export const productPreview = createAsyncThunk(
  "productPreview/fetch",
  async ( { id } ) => {
    try {
      const response = await axios.get( `https://api.escuelajs.co/api/v1/products/${id}` )
      return response.data
    } catch (e) {
      console.error( e )

    }
  }
)