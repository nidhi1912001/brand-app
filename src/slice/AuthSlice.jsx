import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router";

// const navigate=useNavigate()

const initialState={
  token:null,
  loading:false,
  error:null,
  success:false,
  userInfo:{}
}
  


export const loginUser=createAsyncThunk("auth/login", async ( e ) => {
    

    try {
      const response = await axios.post( "https://api.escuelajs.co/api/v1/auth/login",
      //  userData

       )
      console.log( response.data, "responseeee" )
      localStorage.setItem("token",response.data.token)
      // navigate("/home")
    } catch (error) {
      console.error( "error" )

    }

  }

  
)

const AuthSlice = createSlice( {
  name: "user",
  initialState,
  reducers: {},
  extraReducers:{}
} )
export default AuthSlice.reducer