import { SEARCHBYCATEGORY } from "./HomePageConstants";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// temperory data
import {
  latestProjectData,
  serviceWithSubServices,
  subServicesData,
} from "../LatestProjectTemperorydata";

// action thunk
export const loadSearchResults = createAsyncThunk(
  `${SEARCHBYCATEGORY}/getSearchByCategoryResults`,
  async ({ keyword, category, subCategory }, thunkAPI) => {
    console.log("from serach card slice " + keyword + category + subCategory);
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    // console.log(json);
    //return json
    return { latestProjectData, subServicesData };
  }
);

export const loadServiceWithSubServices = createAsyncThunk(
  `${SEARCHBYCATEGORY}/getServiceWithSubServices`,
  async () => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
    return serviceWithSubServices;
  }
);

// slice options
const sliceOptions = {
  name: `${SEARCHBYCATEGORY}`,
  initialState: {
    searchResults: {},
    serviceAndSubServices: [],
    serachResultsIsLoading: true,
    serachResultsHasError: false,
    loadServiceWithSubServicesHasError: false,
    loadServiceWithSubServicesIsLoading: true,
  },
  reducers: {},
  extraReducers: {
    [loadSearchResults.pending]: (state, action) => {
      state.serachResultsIsLoading = true;
      state.serachResultsHasError = false;
    },
    [loadSearchResults.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.serachResultsIsLoading = false;
      state.serachResultsHasError = false;
    },
    [loadSearchResults.rejected]: (state, action) => {
      state.serachResultsIsLoading = false;
      state.serachResultsHasError = true;
    },
    [loadServiceWithSubServices.pending]: (state, action) => {
      state.loadServiceWithSubServicesIsLoading = true;
      state.loadServiceWithSubServicesHasError = false;
    },
    [loadServiceWithSubServices.fulfilled]: (state, action) => {
      state.serviceAndSubServices = action.payload;
      state.loadServiceWithSubServicesIsLoading = false;
      state.loadServiceWithSubServicesHasError = false;
    },
    [loadServiceWithSubServices.rejected]: (state, action) => {
      state.loadServiceWithSubServicesIsLoading = false;
      state.loadServiceWithSubServicesHasError = true;
    },
  },
};

export const searchCardSlice = createSlice(sliceOptions);

// selectors
export const selectSearchResults = (state) =>
  state.searchByCategory.searchResults;

export const selectServicesAndSubServices = (state) =>
  state.searchByCategory.serviceAndSubServices;

export const selectFirstService = (state) =>
  state.searchByCategory.serviceAndSubServices[0];

// reducer
export default searchCardSlice.reducer;
