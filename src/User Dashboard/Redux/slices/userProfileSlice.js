//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchUserDetails = createAsyncThunk(
  "userDashboard/fetchUserDetails",                             //action String : created in actions.js
  async (email) => {                                            //Get user details:  given email 
    const user = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const userDetails = await user.json();
    return userDetails;
  }
);

const userProfileSlice = createSlice({
  name: "dashboardUsers",
  initialState: {
    user: null, //this is object that will hold user details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchUserDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchUserDetails.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchUserDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = userProfileSlice;
export default reducer

export const selectUserProfile=(state)=>state.userProfile.user
export const selectIsProfileLoading=state=>state.userProfile.isLoading
export const selectHasProfileError=state=>state.userProfile.hasError
