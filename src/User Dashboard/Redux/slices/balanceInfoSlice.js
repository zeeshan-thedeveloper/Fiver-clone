//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { purchaseHistory, availableBalance } from "./dummyData";
import produce from "immer"

//Thunks

//Fetch purchase history of user
export const fetchPurchaseHistory = createAsyncThunk(
  "userDashboard/fetchPurchaseHistory",
  async () => {                                     
    //get this parameter
    const info = await fetch(`https://randomuser.me/api/`); //send request to custom API
    const infoDetails = await info.json();
    //for noew, return from dummy data
    return purchaseHistory;
  }
);

//Just ger balance of user

export const fetchBalance = createAsyncThunk(
  "userDashboard/fetchBalance",
  async (user_Id_Or_Email_or_username) => {
    //get this parameter
    const balance = await fetch(`https://randomuser.me/api/`); //send request to custom API
    const jsonBalance = await balance.json();
    //for noew, return from dummy data
    return availableBalance;
  }
);

const balanceInfoSlice = createSlice({
  name: "balanceInfo",
  initialState: {
    balance: null,      
    purchaseHistory: [],
    isBalanceLoading: false,
    hasBalanceError: false,
    isPurchaseHistoryLoading:false,
    hasPurchaseHistoryError:false,
  },
  reducers: {
    
  },

  extraReducers: {
    [fetchPurchaseHistory.pending]: (state, action) => {
      state.isPurchaseHistoryLoading = true;
      state.hasPurchaseHistoryError = false;
    },
    [fetchPurchaseHistory.fulfilled]: (state, action) => {
      state.purchaseHistory = action.payload;
      state.isPurchaseHistoryLoading = false;
      state.hasPurchaseHistoryError = false;
    },
    [fetchPurchaseHistory.rejected]: (state, action) => {
      state.isPurchaseHistoryLoading = false;
      state.hasPurchaseHistoryError = true;
    },
    [fetchBalance.pending]: (state, action) => {
      state.isBalanceLoading = true;
      state.hasBalanceError = false;
    },
    [fetchBalance.fulfilled]: (state, action) => {
      state.balance = action.payload;
      state.isBalanceLoading = false;
      state.hasBalanceError = false;
    },
    [fetchBalance.rejected]: (state, action) => {
      state.isBalanceLoading = false;
      state.hasBalanceError = true;
    },
  },
});

const { actions, reducer } = balanceInfoSlice;
export default reducer;

export const selectBalance = (state) => state.balanceInfo.balance;
export const selectIsBalanceLoading = (state) =>
  state.balanceInfo.isBalanceLoading;
export const selectHasBalanceError = (state) => state.balanceInfo.hasBalanceError;

export const selectPurchaseHistory = (state) =>
state.balanceInfo.purchaseHistory;
export const selectIsPurchaseHistoryLoading = (state) =>
  state.balanceInfo.isPurchaseHistoryLoading;
export const selectHasPurchaseHistoryError = (state) =>
  state.balanceInfo.hasPurchaseHistoryError;