import { CONTACTFORMDETAILS } from "./AboutPageConstant";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//temp data
import { queries } from "./temp";

// thunk
export const sendContactFormDetails = createAsyncThunk(
  `${CONTACTFORMDETAILS}/sendContactFormDetails`,
  async ({ name, email, description, userQuery ,encodedData}, thunkAPI) => {
    //alert(`${name} ${email} ${description} ${userQuery}`);
    //post data
  }
);

export const loadStandardQueries = createAsyncThunk(
  `${CONTACTFORMDETAILS}/getContactFormStandardQueries`,
  async (args, thinkAPI) => {
    // fetch queries here
    return queries;
  }
);

const sliceOptions = {
  name: `${CONTACTFORMDETAILS}`,
  initialState: {
    response: null,
    standardQueries: [],
    sendContactFormDetailsIsLoading: true,
    sendContactFormDetailsHasError: false,
    loadStandardQueriesIsLoading: true,
    loadStandardQueriesHasError: false,
  },
  reducers: {},
  extraReducers: {
    [sendContactFormDetails.pending]: (state, action) => {
      state.sendContactFormDetailsIsLoading = true;
      state.sendContactFormDetailsHasError = false;
    },
    [sendContactFormDetails.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.sendContactFormDetailsIsLoading = false;
      state.sendContactFormDetailsHasError = false;
    },
    [sendContactFormDetails.rejected]: (state, action) => {
      state.sendContactFormDetailsIsLoading = false;
      state.sendContactFormDetailsHasError = true;
    },
    [loadStandardQueries.pending]: (state, action) => {
      state.loadStandardQueriesIsLoading = true;
      state.loadStandardQueriesHasError = false;
    },
    [loadStandardQueries.fulfilled]: (state, action) => {
      state.standardQueries = action.payload;
      state.loadStandardQueriesIsLoading = false;
      state.loadStandardQueriesHasError = false;
    },
    [loadStandardQueries.rejected]: (state, action) => {
      state.loadStandardQueriesIsLoading = false;
      state.loadStandardQueriesHasError = true;
    },
  },
};

const ContactUsGlobalFormSlicer = createSlice(sliceOptions);

// selectors
export const selectStandardQueries = (state) =>
  state.contactFormDetails.standardQueries;

//reducer
export default ContactUsGlobalFormSlicer.reducer;
