import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../slice/authSection/AuthSlice";

const store=configureStore({
  reducer:{
    "auth":AuthSlice

  }

})
export default store