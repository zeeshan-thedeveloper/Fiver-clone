//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks
export const fetchServiceDetails = createAsyncThunk(
  "userDashboard/fetchServiceDetails",
  async (status) => {                      
                                                                    //Get 4 recent services viewed by user 
    const services = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const data = await services.json();
    return data;
  }
);

const recentlyViewedServicesSlice = createSlice({
  name: "orders",
  initialState: {
    services: null,           //this is array of objects that will hold project details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchServiceDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchServiceDetails.fulfilled]: (state, action) => {
      state.services=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchServiceDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default recentlyViewedServicesSlice.reducer

export const selectRecentServices=(state)=>state.recentServices.services
export const selectIsServiceLoading=state=>state.recentServices.isLoading
export const selectHasServiceError=state=>state.recentServices.hasError