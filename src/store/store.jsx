import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";

const store=configureStore({
  reducer:{
    "authSlice":AuthSlice

  }

})
export default store