//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {orderDetails} from "./dummyData"

//Thunks
export const fetchOrderDetails = createAsyncThunk(
  "userDashboard/fetchOrderDetails",                             
  async (orderId) => {
    console.log("To thunk: "+orderId)             //Get order details:  given status->active, cancelled 
    const orders = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const data = await orders.json();
    return orderDetails;
  }
);

const viewOrdersSlice = createSlice({
  name: "orders",
  initialState: {
    order: {},           //this is  objects that will hold order details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchOrderDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchOrderDetails.fulfilled]: (state, action) => {
      state.order=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchOrderDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default viewOrdersSlice.reducer

export const selectOrder=(state)=>state.viewOrder.order
export const selectIsOrderLoading=state=>state.viewOrder.isLoading
export const selectHasOrderError=state=>state.viewOrder.hasError