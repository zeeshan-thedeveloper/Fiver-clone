//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Thunks
export const fetchProjectDetails = createAsyncThunk(
  "userDashboard/fetchProjectDetails",                              //action String : created in actions.js
  async (status) => {                      
                                                                    //Get 4 recent projects viewed bu user 
    const projects = await fetch(`https://randomuser.me/api/`);     //send request to custom API
    const data = await projects.json();
    return data;
  }
);

const recentlyViewedProjectsSlice = createSlice({
  name: "orders",
  initialState: {
    projects: null,           //this is array of objects that will hold project details once thunk is fulfilled
    isLoading: false,
    hasError: false,
  },

  reducers: {
  },

  extraReducers: {
    [fetchProjectDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchProjectDetails.fulfilled]: (state, action) => {
      state.projects=action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchProjectDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default recentlyViewedProjectsSlice.reducer

export const selectRecentProjects=(state)=>state.recentProjects.projects
export const selectIsProjectLoading=state=>state.recentProjects.isLoading
export const selectHasProjectError=state=>state.recentProjects.hasError