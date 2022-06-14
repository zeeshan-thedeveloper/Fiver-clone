import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//actions
import { LATESTPROJECTS } from "./HomePageConstants";

//temp data
import { latestProjectData } from "../LatestProjectTemperorydata";

// thuuk action
export const loadLatestProjects = createAsyncThunk(
  `${LATESTPROJECTS}/getLatestProjects`,
  async () => {
    const data = await fetch(
      "https://randomuser.me/api/0.6/?format=SQL&results=10"
    );
    const json = await data.json();
   // console.log(json);
    //return json
    return latestProjectData;
  }
);

// slice options
const sliceOptions = {
  name: `${LATESTPROJECTS}`,
  initialState: {
    projects: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadLatestProjects.pending]: (state, action) => {
      console.log("pending");
      state.isLoading = true;
      state.hasError = false;
    },
    [loadLatestProjects.fulfilled]: (state, action) => {
      console.log("fulfiled");
      state.projects = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadLatestProjects.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const latestProjectSlice = createSlice(sliceOptions);

// selectors
export const selectLatestProjects = (state) => state.latestProjects.projects;


// export default reducers
export default latestProjectSlice.reducer;
