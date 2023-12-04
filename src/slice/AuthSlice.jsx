import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
  user:"",
  token:"",
  loading:false
}

const requested="requested"
const successed="success"
const fail="fail"

const AuthSlice = createSlice( {
  name: "user",
  initialState,
  reducers: {},

  extraReducers:{}
} )
export default AuthSlice.reducer