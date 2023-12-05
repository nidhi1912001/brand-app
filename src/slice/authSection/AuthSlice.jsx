import { createSlice } from "@reduxjs/toolkit";
import authAction from "./authAction";

const initialState = {
  accessToken: null,
  loading: false,
  error: null,
  message: ""
}

const AuthSlice = createSlice( {

  name: "auth",
  initialState: initialState,
  reducers: {
    logout: ( state ) => {
      localStorage.removeItem( "token" )
      state.accessToken = null
      state.error = null
      state.message = null
    }
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( authAction.pending, ( state ) => {
        state.loading = true;
        state.error = null;
        state.accessToken = null
      } )
      .addCase( authAction.fulfilled, ( state, action ) => {

        state.loading = false;
        state.accessToken = action.payload;
        state.error = null
      } )
      .addCase( authAction.rejected, ( state, action ) => {
        state.loading = false;
        state.accessToken = null
        state.error = action.error.message

      } );
  }


} )
export const { logout } = AuthSlice.actions
export default AuthSlice.reducer


//
// export const logout=createAsyncThunk(()=> {
//   return createAsyncThunk(
//     `${name}/logout`,
//     function (arg, { dispatch }) {
//       dispatch(authActions.setAuth(null));
//       localStorage.removeItem('auth');
//       history.navigate('/account/login');
//     }
//   );