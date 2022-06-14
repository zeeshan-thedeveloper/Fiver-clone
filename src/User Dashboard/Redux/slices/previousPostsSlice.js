//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { previousPosts } from "./dummyData";
//Thunks

export const fetchPreviousPosts = createAsyncThunk(
  "userDashboard/fetchPreviousPosts",                               
  async () => {                    
    //API call
    console.log("Hello")
    return previousPosts
  }
);

const previousPostsSlice = createSlice({
  name: "previousPosts",
  initialState: {
    previousPosts: [],
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchPreviousPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchPreviousPosts.fulfilled]: (state, action) => {
      state.previousPosts=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchPreviousPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default previousPostsSlice.reducer

export const selectAllPosts=(state)=>state.previousPosts.previousPosts
export const selectAreAllPostsLoading=state=>state.previousPosts.isLoading
export const selectHasError=state=>state.previousPosts.hasError