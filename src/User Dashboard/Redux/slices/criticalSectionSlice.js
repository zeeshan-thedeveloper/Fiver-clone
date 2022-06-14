//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const deleteUserAccount = createAsyncThunk(
  "userDashboard/deleteUserAccount",                             
  async (data) => {               
      //post this data object to API
    console.log(data)
    return true;
  }
);

const criticalSectionSlice = createSlice({
  name: "criticalSection",
  initialState: {
    isAccountDeleted: false,         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [deleteUserAccount.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [deleteUserAccount.fulfilled]: (state, action) => {
      state.isAccountDeleted = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [deleteUserAccount.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = criticalSectionSlice;
export default reducer

export const selectResponseAfterDeletion=(state)=>state.criticalInfo.isAccountDeleted
export const selectIsLoadingDeletion=state=>state.criticalInfo.isLoading
export const selectHasErrorInDeletion=state=>state.criticalInfo.hasError
