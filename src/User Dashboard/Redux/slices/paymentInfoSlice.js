//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchPaymentInfoDetails = createAsyncThunk(
  "userDashboard/fetchPaymentInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter to get payment info of this user 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return infoDetails;
  }
);

const paymentInfoSlice = createSlice({
  name: "dashboardTrendingServices",
  initialState: {
    paymentInfo: null,         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchPaymentInfoDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPaymentInfoDetails.fulfilled]: (state, action) => {
      state.paymentInfo = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPaymentInfoDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = paymentInfoSlice;
export default reducer

export const selectPaymentlInfo=(state)=>state.paymentInfo.paymentInfo
export const selectIsPaymentInfoLoading=state=>state.paymentInfo.isLoading
export const selectHasPaymentInfoError=state=>state.paymentInfo.hasError