//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dashboardNotificationsData } from "./dummyData";
//Thunks

export const fetchNotifications = createAsyncThunk(
  "userDashboard/fetchNotificationInfoDetails",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return dashboardNotificationsData;
  }
);

const dashboardNotificationsSlice = createSlice({
  name: "notificationsSettings",
  initialState: {
    notifications: [],         //this is object that contains all the required fields needed to show on personalinfo section of settings/profile
    isLoading: false,
    hasError: false,
  },

  reducers: {},

  extraReducers: {
    [fetchNotifications.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchNotifications.fulfilled]: (state, action) => {
      state.notifications = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchNotifications.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = dashboardNotificationsSlice;
export default reducer

export const selectNotifications=(state)=>state.dashboardNotifications.notifications
export const selectIsLoadingNotifications=state=>state.dashboardNotifications.isLoading
export const selectHasErrorNotifications=state=>state.dashboardNotifications.hasError