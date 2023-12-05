import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const authAction=createAsyncThunk("auth/login",
  async (userData)=>{
try {
  const response=await axios.post("https://api.escuelajs.co/api/v1/auth/login",
  userData
  )
  localStorage.setItem( "token", response.data.access_token )
  return response.data.access_token
}catch (error) {
  console.error(error)
}
  })

export default authAction



