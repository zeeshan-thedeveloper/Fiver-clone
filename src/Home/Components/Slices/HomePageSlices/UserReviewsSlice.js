import { reviewData } from "../LatestProjectTemperorydata";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LATESTREVIEWS } from "./HomePageConstants";

export const loadLatestReviews = createAsyncThunk(
  `${LATESTREVIEWS}/getLatestReviews`,
  async (args, thunkAPI) => {
    // fetch data from api
    return reviewData;
  }
);

const sliceOption = {
  name: `${LATESTREVIEWS}`,
  initialState: {
    reviews: [],
    hasError: false,
    isLoading: true,
  },
  reducers: {},
  extraReducers: {
    [loadLatestReviews.pending]: (state, action) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [loadLatestReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload;
      state.hasError = false;
      state.isLoading = false;
    },
    [loadLatestReviews.rejected]: (state, action) => {
      state.hasError = true;
      state.isLoading = false;
    },
  },
};
export const UserReviewSlice = createSlice(sliceOption);

// selectors
export const selectUserReviews = (state) => state.latestReviews.reviews;

// reducers
export default UserReviewSlice.reducer;
