//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks

export const fetchTrendingServiceDetails = createAsyncThunk(
  "userDashboard/fetchTrendingServiceDetails",                             
  async () => {                                                             //Maybe no argument needed at this time 
    const service = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const serviceDetails = await service.json();
    return serviceDetails;
  }
);

const trendingServiceSlice = createSlice({
  name: "dashboardTrendingServices",
  initialState: {
    services: null,     //this is array of objects that will hold trendingService details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchTrendingServiceDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchTrendingServiceDetails.fulfilled]: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchTrendingServiceDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = trendingServiceSlice;
export default reducer

export const selectTrendingServices=(state)=>state.trendingServices.services
export const selectIsTrendingServiceLoading=state=>state.trendingServices.isLoading
export const selectHasTrendingServiceError=state=>state.trendingServices.hasError
