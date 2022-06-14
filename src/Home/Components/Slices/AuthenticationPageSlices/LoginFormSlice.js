import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LOGININDETAILS } from "./AuthenticationPageConstants";

// temp data
import { userDetails } from "./TempData";


export const checkUserId = createAsyncThunk(
  `${LOGININDETAILS}/checkUserId`,
  async ({userId}, thunkAPI) => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    // check if user id exists then set it to state
    return userId
  }
);

const checkUserPasswordAndReturnUserDetailsIfExists = createAsyncThunk(
  `${LOGININDETAILS}/getUserDetails`,
  async ({userPassword}, thunkAPI) => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    console.log('user details')
    console.log(userDetails)
    return {userDetails,userPassword};
  }
);



// slice options
const sliceOptions = {
  name: `${LOGININDETAILS}`,
  initialState: {
    userId: null,
    userPassword: null,
    userToken: null,
    userDetails: {},
    checkUserIdHasError: false,
    checkUserIdIsLoading: true,
    checkUserPasswordAndReturnUserDetailsIfExistsHasError:false,
    checkUserPasswordAndReturnUserDetailsIfExistsIsLoading:true,
  },
  reducers: {
    // setUserId: (state, action) => {
    //   state.userId = action.payload;
    // },
    // setUserPassword: (state, action) => {
    //   state.userPassword = action.payload;
    // },
  },
  extraReducers: {
    [checkUserPasswordAndReturnUserDetailsIfExists.pending]: (state, action) => {
      console.log('in pending of login form slicer')
      state.checkUserPasswordAndReturnUserDetailsIfExistsIsLoading = true;
      state.checkUserPasswordAndReturnUserDetailsIfExistsHasError = false;
    },
    [checkUserPasswordAndReturnUserDetailsIfExists.fulfilled]: (state, action) => {
      state.userDetails = action.payload.userDetails;
      state.userPassword=action.payload.userPassword;
      console.log('in fullfiled of login form slicer')
      console.log( action.payload)
      state.checkUserPasswordAndReturnUserDetailsIfExistsIsLoading = false;
      state.checkUserPasswordAndReturnUserDetailsIfExistsHasError = false;
    },
    [checkUserPasswordAndReturnUserDetailsIfExists.rejected]: (state, action) => {
      console.log('in rejected of login form slicer')
      state.checkUserPasswordAndReturnUserDetailsIfExistsIsLoading = false;
      state.checkUserPasswordAndReturnUserDetailsIfExistsHasError = true;
    },
    [checkUserId.pending]: (state, action) => {
      state.checkUserIdIsLoading = true;
      state.checkUserIdHasError = false;
    },
    [checkUserId.fulfilled]: (state, action) => {
      state.userId = action.payload;
      state.checkUserIdIsLoading = false;
      state.checkUserIdHasError = false;
    },
    [checkUserId.rejected]: (state, action) => {
      state.checkUserIdIsLoading = false;
      state.checkUserIdHasError = true;
    },
  },
};

export const loginFormSLice = createSlice(sliceOptions);

// selectors
export const selectUserId = (state) => state.loginDetails.userId;

export const selectUserToken = (state) => state.loginDetails.userToken;

export const selectUserDetails = (state) => state.loginDetails.userDetails;

export const selectUserPassword = (state) => state.loginDetails.userPassword;
export const selectUserDetailsHasError=state=>state.loginDetails.checkUserPasswordAndReturnUserDetailsIfExistsHasError;
export const selectUserDetailsIsLoading=state=>state.loginDetails.checkUserPasswordAndReturnUserDetailsIfExistsIsLoading;



// actions
export{ checkUserPasswordAndReturnUserDetailsIfExists as checkUserPassword}

// reducer
export default loginFormSLice.reducer;
