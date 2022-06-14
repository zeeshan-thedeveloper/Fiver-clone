//Never used SLice

// /******************* 
// This slice contains data for active, complete and cancelled orders in ongoing orders tab on dashboard
// ******************* */

// //redux-oolkit
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //Thunks
// export const fetchOrderDetails = createAsyncThunk(
//   "userDashboard/fetchOrderDetails",                             //action String : created in actions.js
//   async (status) => {                      
//                                                               //Get order details:  given status->active, cancelled 
//     const orders = await fetch(`https://randomuser.me/api/`);     //send request to custom API
//     const data = await orders.json();
//     return data;
//   }
// );

// const ordersSlice = createSlice({
//   name: "orders",
//   initialState: {
//     orders: null,           //this is array of objects that will hold order details once thunk is fulfilled
//     isLoading: false,
//     hasError: false,
//   },

//   reducers: {
//   },

//   extraReducers: {
//     [fetchOrderDetails.pending]: (state, action) => {
//       state.isLoading = true;
//       state.hasError = false;
//     },
//     [fetchOrderDetails.fulfilled]: (state, action) => {
//       state.orders=action.payload;
//       state.isLoading = false;
//       state.hasError = false;
//     },
//     [fetchOrderDetails.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.hasError = true;
//     },
//   },
// });

// export default ordersSlice.reducer

// export const selectOrders=(state)=>state.orders.orders
// export const selectIsOrderLoading=state=>state.orders.isLoading
// export const selectHasOrderError=state=>state.orders.hasError