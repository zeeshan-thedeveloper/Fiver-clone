//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {previousPostDetails} from "./dummyData"

//Thunks
export const fetchPostDetails = createAsyncThunk(
  "userDashboard/fetchPostDetails",                             
  async (postId) => {
    const orders = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const data = await orders.json();
    return previousPostDetails;
  }
);

const viewPostSlice = createSlice({
  name: "orders",
  initialState: {
    post: {},           //this is  objects that will hold order details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchPostDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPostDetails.fulfilled]: (state, action) => {
      state.post=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPostDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default viewPostSlice.reducer

export const selectPost=(state)=>state.viewPost.post
export const selectIsPostLoading=state=>state.viewPost.isLoading
export const selectHasPostError=state=>state.viewPost.hasError