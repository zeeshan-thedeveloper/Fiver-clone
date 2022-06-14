import { ALLSERVICES } from "./HomePageConstants";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// temp data
import { servicesData } from "../LatestProjectTemperorydata";

// thunk
export const loadAllServices = createAsyncThunk(
  `${ALLSERVICES}/getAllServices`,
  async (arg, thunkAPI) => {
    // fetch data from api
    return servicesData;
  }
);

// slice options
const sliceOptions = {
  name: `${ALLSERVICES}`,
  initialState: {
    services: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadAllServices.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadAllServices.fulfilled]: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadAllServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const servicesSlice = createSlice(sliceOptions);

// selectors
export const selectAllServices = (state) => state.allServices.services;

// reducer
export default servicesSlice.reducer;
