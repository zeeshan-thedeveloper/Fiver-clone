import { TrendingTechnologies } from "../LatestProjectTemperorydata";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TRENDINGTECHNOLOGIES } from "./HomePageConstants";

// thunk

export const loadTrendingTechnologies = createAsyncThunk(
  `${TRENDINGTECHNOLOGIES}/getTrendingTechnogies`,
  async () => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    return TrendingTechnologies;
  }
);

// slice
const sliceOption = {
  name: `${TRENDINGTECHNOLOGIES}`,
  initialState: {
    hasError: false,
    isLoading: true,
    allTrendingTechnologies: [],
  },
  reducers: {},
  extraReducers: {
    [loadTrendingTechnologies.pending]: (state, action) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [loadTrendingTechnologies.fulfilled]: (state, action) => {
      console.log("technology slicer ");
      console.log(action.payload);
      state.allTrendingTechnologies = action.payload;
      state.hasError = false;
      state.isLoading = false;
    },
    [loadTrendingTechnologies.rejected]: (state, action) => {
      state.hasError = true;
      state.isLoading = false;
    },
  },
};

const TrendingTechnologySlice = createSlice(sliceOption);

// selectors
export const selectAllTrendingTechnologies = (state) =>
  state.trendingTechnologies.allTrendingTechnologies;

// reducer
export default TrendingTechnologySlice.reducer;
