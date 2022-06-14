//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {securityQuestionData, passwordData} from "./dummyData"

//Thunks

export const fetchSecurityQuestionDetails = createAsyncThunk(
  "userDashboard/fetchSecurityQuestionDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter, get security info of this user 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return securityQuestionData;
  }
);

export const fetchPasswordDetails = createAsyncThunk(
  "userDashboard/fetchPasswordDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter, get security info of this user 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return passwordData;
  }
);

export const fetchSetNewPassword=createAsyncThunk(
  "userDashboard/fetchSetNewPassword",                             
  async (passowrdData) => {                             //get this parameter, get security info of this user 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    console.log(passwordData)
    return true;
  }
);

const securityInfoSlice = createSlice({
  name: "securityInfo",
  initialState: {
    securityQuestionInfo: null,
    isLoadingSecurityQuestionInfo: false,
    hasErrorSecurityQuestionInfo: false,

    passwordInfo: null,         //this is array of objects that contains all the required fields for user security info
    isLoadingPasswordInfo: false,
    hasErrorPasswordInfo: false,
    isPasswordSet:false,
  },

  reducers: {},

  extraReducers: {
    [fetchSecurityQuestionDetails.pending]: (state, action) => {
      state.isLoadingSecurityQuestionInfo = true;
      state.hasErrorSecurityQuestionInfo = false;
    },
    [fetchSecurityQuestionDetails.fulfilled]: (state, action) => {
      state.securityQuestionInfo = action.payload;
      state.isLoadingSecurityQuestionInfo = false;
      state.hasErrorSecurityQuestionInfo = false;
    },
    [fetchSecurityQuestionDetails.rejected]: (state, action) => {
      state.isLoadingSecurityQuestionInfo = false;
      state.hasErrorSecurityQuestionInfo = true;
    },

    [fetchPasswordDetails.pending]: (state, action) => {
      state.isLoadingPasswordInfo = true;
      state.hasErrorPasswordInfo = false;
    },
    [fetchPasswordDetails.fulfilled]: (state, action) => {
      state.passwordInfo = action.payload;
      state.isLoadingPasswordInfo = false;
      state.hasErrorPasswordInfo = false;
    },
    [fetchPasswordDetails.rejected]: (state, action) => {
      state.isLoadingPasswordInfo = false;
      state.hasErrorPasswordInfo = true;
    },

    [fetchSetNewPassword.pending]: (state, action) => {
      state.isLoadingPasswordInfo = true;
      state.hasErrorPasswordInfo = false;
    },
    [fetchSetNewPassword.fulfilled]: (state, action) => {
      state.isPasswordSet = action.payload;
      state.isLoadingPasswordInfo = false;
      state.hasErrorPasswordInfo = false;
    },
    [fetchSetNewPassword.rejected]: (state, action) => {
      state.isLoadingPasswordInfo = false;
      state.hasErrorPasswordInfo = true;
    },
  },
});

const { actions, reducer } = securityInfoSlice;
export default reducer

export const selectSecurityQuestionInfo=(state)=>state.securityInfo.securityQuestionInfo
export const selectIsLoadingSecurityQuestionInfo=state=>state.securityInfo.isLoadingSecurityQuestionInfo
export const selectHasErrorSecurityQuestionInfo=state=>state.securityInfo.hasErrorSecurityQuestionInfo

export const selectPasswordInfo=(state)=>state.securityInfo.passwordInfo
export const selectIsLoadingPasswordInfo=state=>state.securityInfo.isLoadingPasswordInfo
export const selectHasErrorPasswordInfo=state=>state.securityInfo.hasErrorPasswordInfo

export const selectIsPasswordSet=state=>state.securityInfo.isPasswordSet
