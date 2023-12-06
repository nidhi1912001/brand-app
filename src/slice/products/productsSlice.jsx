import { createSlice } from "@reduxjs/toolkit";
import { categoryProducts, priceProducts, allProducts } from "./productsAction";

export const initialState = {
  data: [],
  offSet:0,
  limit:10,
  currentPage:1

}

const productsSlice = createSlice( {
  name: "product",
  initialState,
  reducers: {
    handleNext: ( state ) => {
      state.offSet = state.offSet + state.limit
      console.log(state.offSet,"offset")
      state.currentPage = state.currentPage + 1
    },

    handlePrevious: ( state ) => {
       state.currentPage = state.currentPage - 1
        state.offSet = state.offSet - state.limit
    }
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( categoryProducts.pending, ( state ) => {
        state.error = null;

      } )
      .addCase( categoryProducts.fulfilled, ( state, action ) => {
        state.data = action.payload

      } )
      .addCase( categoryProducts.rejected, ( state, action ) => {

        state.error = action.error.message

      } )
      .addCase( allProducts.pending, ( state ) => {
        state.error = null;

      } )
      .addCase( allProducts.fulfilled, ( state, action ) => {

        state.data = action.payload

      } )
      .addCase( allProducts.rejected, ( state, action ) => {

        state.error = action.error.message

      } )
      .addCase( priceProducts.pending, ( state ) => {
        state.error = null;

      } )
      .addCase( priceProducts.fulfilled, ( state, action ) => {

        state.data = action.payload

      } )
      .addCase( priceProducts.rejected, ( state, action ) => {

        state.error = action.error.message

      } );
  }
} )

export default productsSlice.reducer
export const {handlePrevious,handleNext}=productsSlice.actions