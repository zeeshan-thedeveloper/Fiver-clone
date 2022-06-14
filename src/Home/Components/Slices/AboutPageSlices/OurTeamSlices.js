import { TEAMDETAIL } from "./AboutPageConstant";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { teamdata } from "./temp";

//think action
export const loadTeamDetail = createAsyncThunk(
  `${TEAMDETAIL}/getTeamDetail`,
  async () => {
    // fetch data
    return teamdata;
  }
);
const sliceOptions = {
  name: `${TEAMDETAIL}`,
  initialState: {
    teamData: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},

  extraReducers: {
    [loadTeamDetail.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadTeamDetail.fulfilled]: (state, action) => {
      state.teamData = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadTeamDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const OurTeamSlice = createSlice(sliceOptions);

// selectors
export const selectTeamDetail = (state) => state.teamDetail.teamData;

// reducer
export default OurTeamSlice.reducer;
