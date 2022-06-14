//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchPersonalInfoDetails = createAsyncThunk(
  "userDashboard/fetchPersonalInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const personalInfoSlice = createSlice({
  name: "dashboardTrendingServices",
  initialState: {
    personalInfo: null,         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchPersonalInfoDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPersonalInfoDetails.fulfilled]: (state, action) => {
      state.personalInfo = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPersonalInfoDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = personalInfoSlice;
export default reducer

export const selectPersonalInfo=(state)=>state.personalInfo.personalInfo
export const selectIsPersonalInfoLoading=state=>state.personalInfo.isLoading
export const selectHasPersonalInfoError=state=>state.personalInfo.hasError