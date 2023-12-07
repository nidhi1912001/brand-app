import { createSlice } from "@reduxjs/toolkit";
import {
  categoryProducts,
  priceProducts,
  allProducts,
  productPreview,
} from "./productsAction";

export const initialState = {
  data: [],
  productPreview: {},
  offSet: 0,
  limit: 10,
  currentPage: 1,
  moreData:true
  isLoading: false
};

const productsSlice = createSlice( {
  name: "product",
  initialState,
  reducers: {
    handleNext: ( state, action ) => {
      let { offSet, currentPage,moreData,data } = action.payload;

      setTimeout(() => {
       state.isLoading = true;
        console.log(data,"dattaaonNext ")
        if (data.length===0) {
          moreData=false
          // state.moreData=moreData
          console.log(moreData,"moreData")
        }else{
          console.log(moreData,"elseMoreData")
        }
        state.isLoading=false

      }, 1000);
      state.offSet = offSet + state.limit;
      state.currentPage = currentPage + 1;
    },

    handlePrevious: ( state, action ) => {
      let { offSet, currentPage } = action.payload;
      state.currentPage = currentPage - 1;
      state.offSet = offSet - state.limit;
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( categoryProducts.pending, ( state ) => {
        state.error = null;
      } )
      .addCase( categoryProducts.fulfilled, ( state, action ) => {
        state.data = action.payload;
      } )
      .addCase( categoryProducts.rejected, ( state, action ) => {
        state.error = action.error.message;
      } )
      .addCase( allProducts.pending, ( state ) => {
        state.error = null;
      } )
      .addCase( allProducts.fulfilled, ( state, action ) => {
        state.data = action.payload;
      } )
      .addCase( allProducts.rejected, ( state, action ) => {
        state.error = action.error.message;
      } )
      .addCase( priceProducts.pending, ( state ) => {
        state.error = null;
      } )
      .addCase( priceProducts.fulfilled, ( state, action ) => {
        state.data = action.payload;
      } )
      .addCase( priceProducts.rejected, ( state, action ) => {
        state.error = action.error.message;
      } )
      .addCase( productPreview.pending, ( state ) => {
        state.error = null;
      } )
      .addCase( productPreview.fulfilled, ( state, action ) => {
        state.productPreview = action.payload;
      } )
      .addCase( productPreview.rejected, ( state, action ) => {
        state.error = action.error.message;
      } );
  },
} );

export default productsSlice.reducer;
export const { handlePrevious, handleNext } = productsSlice.actions;
