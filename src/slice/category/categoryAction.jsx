import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategory=createAsyncThunk(
  "category/fetch",
  async ()=>{
    try {
      const response= await  axios.get("https://api.escuelajs.co/api/v1/categories" )
      return response.data

    }catch (e) {
      console.log(e)

    }

  }
)