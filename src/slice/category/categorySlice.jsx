import {createSlice} from "@reduxjs/toolkit";
import{fetchCategory} from "./categoryAction";
import {priceRanges} from "../../component/priceList"


const initialState={
  category:[],
  price:priceRanges,
  error:null
}

const categorySlice=createSlice({
  name:"category",
  initialState,
  reducers:{},
  extraReducers: ( builder ) => {
    builder
      .addCase( fetchCategory.pending, ( state ) => {
        state.error = null;

      } )
      .addCase( fetchCategory.fulfilled, ( state, action ) => {

        state.category=action.payload

      } )
      .addCase( fetchCategory.rejected, ( state, action ) => {

        state.error = action.error.message

      } );
  }

})
export default categorySlice.reducer