//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allOrders } from "./dummyData";
//Thunks
export const fetchAllOrders = createAsyncThunk(
  "userDashboard/fetchAllOrders",                               
  async ({
    active,
    completed,
    cancelled,
    all,
    late,
    newest,
    delivered,
  }) => {                 //all, active, completed, late etc      
 
    if(all){
      //One end point: Give results for Orders
      return allOrders;
    }
    else if(active && completed && cancelled){
      //other endpoint: Give results for user dashboard
      return allOrders.filter((order)=>order.status=='active' || order.status=='completed' || order.status=='cancelled')
    }
  }
);

const allOrdersSlice = createSlice({
  name: "orders",
  initialState: {
    allOrders: [],           //this is array of objects that will hold order details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchAllOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAllOrders.fulfilled]: (state, action) => {
      state.allOrders=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAllOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default allOrdersSlice.reducer

export const selectAllOrders=(state)=>state.allOrders.allOrders
export const selectAreAllOrdersLoading=state=>state.allOrders.isLoading
export const selectHasError=state=>state.allOrders.hasError