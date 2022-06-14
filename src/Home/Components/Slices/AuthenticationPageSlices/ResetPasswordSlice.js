import { RESETPASSWORD } from "./AuthenticationPageConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//thunk
export const sendResetPasswordLinkUsingEmail = createAsyncThunk(
  `${RESETPASSWORD}/sendResetPasswordLinkUsingEmail`,
  async ({ userEmail }, thunkAPI) => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    // return true if email is send
    return true;
  }
);

export const changePasswordByUsigEmailLink = createAsyncThunk(
  `${RESETPASSWORD}/changePasswordByUsingEmailLink`,
  async ({ userEmail, newPassword }, thunkAPI) => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    //alert("in change password thunk");
    return true;
  }
);

const sliceOption = {
  name: `${RESETPASSWORD}`,
  initialState: {
    // for sending reset password link
    hasErrorInLinkForResetPasswordSentByEmail: false,
    isLoadingInLinkForResetPasswordSentByEmail: true,
    isLinkForResetPasswordSentByEmail: false,
    // when passowrd is changed using reset password link
    isPasswordChanged: false,
    hasErrorInChangePasswordByUsigEmailLink: false,
    isLoadingInChangePasswordByUsigEmailLink: true,
  },
  reducers: {},
  extraReducers: {
    [sendResetPasswordLinkUsingEmail.pending]: (state, action) => {
      state.hasErrorInLinkForResetPasswordSentByEmail = false;
      state.isLoadingInLinkForResetPasswordSentByEmail = true;
    },
    [sendResetPasswordLinkUsingEmail.fulfilled]: (state, action) => {
      state.isLinkForResetPasswordSentByEmail = action.payload;
      state.hasErrorInLinkForResetPasswordSentByEmail = false;
      state.isLoadingInLinkForResetPasswordSentByEmail = false;
    },
    [sendResetPasswordLinkUsingEmail.rejected]: (state, action) => {
      state.hasErrorInLinkForResetPasswordSentByEmail = true;
      state.isLoadingInLinkForResetPasswordSentByEmail = false;
    },
    [changePasswordByUsigEmailLink.pending]: (state, action) => {
      //console.log("pending");
      state.hasErrorInChangePasswordByUsigEmailLink = false;
      state.isLoadingInChangePasswordByUsigEmailLink = true;
    },
    [changePasswordByUsigEmailLink.fulfilled]: (state, action) => {
      //console.log("fulfilled");
      //console.log(action.payload);
      state.isPasswordChanged = action.payload;
      state.hasErrorInChangePasswordByUsigEmailLink = false;
      state.isLoadingInChangePasswordByUsigEmailLink = false;
    },
    [changePasswordByUsigEmailLink.rejected]: (state, action) => {
      //console.log("rejected");
      state.hasErrorInChangePasswordByUsigEmailLink = true;
      state.isLoadingInChangePasswordByUsigEmailLink = false;
    },
  },
};
// slice
const resetPasswordSlice = createSlice(sliceOption);

// selectors
export const selectIsLinkForResetPasswordSentByEmail = (state) =>
  state.resetPassword.isLinkForResetPasswordSentByEmail;

export const selectIsPasswordChanged = (state) =>
  state.resetPassword.isPasswordChanged;

// reducers
export default resetPasswordSlice.reducer;
