//redux-oolkit
import { TramOutlined } from "@material-ui/icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mobileNotificationSettingsData, desktopNotificationSettingsData, emailNotificationSettingsData } from "./dummyData";
//Thunks

export const fetchMobileNotificationSettings = createAsyncThunk(
  "userDashboard/fetchMobileNotificationSettings",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return mobileNotificationSettingsData
  }
);

export const fetchDesktopNotificationSettings = createAsyncThunk(
  "userDashboard/fetchDesktopNotificationSettings",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return desktopNotificationSettingsData
  }
);


export const fetchEmailNotificationSettings = createAsyncThunk(
  "userDashboard/fetchEmailNotificationSettings",                             
  async (user_Id_Or_Email_or_username) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    return emailNotificationSettingsData
  }
);

export const updateMobileNotificationSettings = createAsyncThunk(
  "userDashboard/updateMobileNotificationSettings",                             
  async (data) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    console.log(data)
    return true
  }
);

export const updateDesktopNotificationSettings = createAsyncThunk(
  "userDashboard/updateDesktopNotificationSettings",                             
  async (data) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    console.log(data)
    return true
  }
);


export const updateEmailNotificationSettings = createAsyncThunk(
  "userDashboard/updateEmailNotificationSettings",                             
  async (data) => {                             //get this parameter 
    const info = await fetch(`https://randomuser.me/api/`);              //send request to custom API
    const infoDetails = await info.json();
    console.log(data)
    return true
  }
);

const notificationInfoSlice = createSlice({
  name: "notificationsSettings",
  initialState: {
    mobileNotifications: [],
    desktopNotifications: [],
    emailNotifications: [],
    isLoadingMobileNotifications: false,
    hasErrorMobileNotifications: false,
    isLoadingDesktopNotifications: false,
    hasErrorDesktopNotifications: false,
    isLoadingEmailNotifications: false,
    hasErrorEmailNotifications: false,

    isUpdatingMobileNotifications :  true,
    hasErrorUpdatingMobileNotifications:   false,
    isUpdatingDesktopNotifications:   true,
    hasErrorUpdatingDesktopNotifications:   false,
    isUpdatingEmailNotifications :  true,
    hasErrorUpdatingEmailNotifications :  false,

    hasUpdatedMobileNotifications:false,
    hasUpdatedDesktopNotifications:false,
    hasUpdatedEmailNotifications:false,
  },

  reducers: {},

  extraReducers: {
    [fetchMobileNotificationSettings.pending]: (state, action) => {
      state.isLoadingMobileNotifications = true;
      state.hasErrorMobileNotifications = false;
    },
    [fetchMobileNotificationSettings.fulfilled]: (state, action) => {
      state.mobileNotifications = action.payload;
      state.isLoadingMobileNotifications = false;
      state.hasErrorMobileNotifications = false;
    },
    [fetchMobileNotificationSettings.rejected]: (state, action) => {
      state.isLoadingMobileNotifications = false;
      state.hasErrorMobileNotifications = true;
    },

    [fetchDesktopNotificationSettings.pending]: (state, action) => {
      state.isLoadingDesktopNotifications = true;
      state.hasErrorDesktopNotifications = false;
    },
    [fetchDesktopNotificationSettings.fulfilled]: (state, action) => {
      state.desktopNotifications = action.payload;
      state.isLoadingDesktopNotifications = false;
      state.hasErrorDesktopNotifications = false;
    },
    [fetchDesktopNotificationSettings.rejected]: (state, action) => {
      state.isLoadingDesktopNotifications = false;
      state.hasErrorDesktopNotifications = true;
    },

    [fetchEmailNotificationSettings.pending]: (state, action) => {
      state.isLoadingEmailNotifications = true;
      state.hasErrorEmailNotifications = false;
    },
    [fetchEmailNotificationSettings.fulfilled]: (state, action) => {
      state.emailNotifications = action.payload;
      state.isLoadingEmailNotifications = false;
      state.hasErrorEmailNotifications = false;
    },
    [fetchEmailNotificationSettings.rejected]: (state, action) => {
      state.isLoadingEmailNotifications = false;
      state.hasErrorEmailNotifications = true;
    },
    /************************************ Update settings */
    [updateMobileNotificationSettings.pending]: (state, action) => {
      state.isUpdatingMobileNotifications = true;
      state.hasErrorUpdatingMobileNotifications = false;
    },
    [updateMobileNotificationSettings.fulfilled]: (state, action) => {
      state.hasUpdatedMobileNotifications = action.payload;
      state.isUpdatingMobileNotifications = false;
      state.hasErrorUpdatingMobileNotifications = false;
    },
    [updateMobileNotificationSettings.rejected]: (state, action) => {
      state.isUpdatingMobileNotifications = false;
      state.hasErrorUpdatingMobileNotifications = true;
    },
    [updateDesktopNotificationSettings.pending]: (state, action) => {
      state.isUpdatingDesktopNotifications = true;
      state.hasErrorUpdatingDesktopNotifications = false;
    },
    [updateDesktopNotificationSettings.fulfilled]: (state, action) => {
      state.hasUpdatedDesktopNotifications = action.payload;
      state.isUpdatingDesktopNotifications = false;
      state.hasErrorUpdatingDesktopNotifications = false;
    },
    [updateDesktopNotificationSettings.rejected]: (state, action) => {
      state.isUpdatingDesktopNotifications = false;
      state.hasErrorUpdatingDesktopNotifications = true;
    },

    [updateEmailNotificationSettings.pending]: (state, action) => {
      state.isUpdatingEmailNotifications = true;
      state.hasErrorUpdatingEmailNotifications = false;
    },
    [updateEmailNotificationSettings.fulfilled]: (state, action) => {
      state.hasUpdatedEmailNotifications = action.payload;
      state.isUpdatingEmailNotifications = false;
      state.hasErrorUpdatingEmailNotifications = false;
    },
    [updateEmailNotificationSettings.rejected]: (state, action) => {
      state.isUpdatingEmailNotifications = false;
      state.hasErrorUpdatingEmailNotifications = true;
    },
  },
});

const { actions, reducer } = notificationInfoSlice;
export default reducer


export const selectMobileNotifications=state=>state.notificationInfo.mobileNotifications
export const selectDesktopNotifications=(state)=>state.notificationInfo.desktopNotifications
export const selectEmailNotifications=(state)=>state.notificationInfo.emailNotifications

export const selectIsLoadingMobileNotifications=state=>state.notificationInfo.isLoadingMobileNotifications
export const selectHasErrorMobileNotifications=state=>state.notificationInfo.hasErrorMobileNotifications

export const selectIsLoadingDesktopNotifications=state=>state.notificationInfo.isLoadingDesktopNotifications
export const selectHasErrorDesktopNotifications=state=>state.notificationInfo.hasErrorDesktopNotifications

export const selectIsLoadingEmailNotifications=state=>state.notificationInfo.isLoadingEmailNotifications
export const selectHasErrorEmailNotifications=state=>state.notificationInfo.hasErrorEmailNotifications

/** Updating notification settings */

export const selectHasUpdatedMobileNotifications=state=>state.notificationInfo.hasUpdatedMobileNotifications
export const selectHasUpdatedDesktopNotifications=state=>state.notificationInfo.hasUpdatedDesktopNotifications
export const selectHasUpdatedEmailNotifications=state=>state.notificationInfo.hasUpdatedEmailNotifications

export const selectHasErrorUpdatingMobileNotifications=state=>state.notificationInfo.hasErrorUpdatingMobileNotifications
export const selectHasErrorUpdatingDesktopNotifications=state=>state.notificationInfo.hasErrorUpdatingDesktopNotifications
export const selectHasErrorUpdatingEmailNotifications=state=>state.notificationInfo.hasErrorUpdatingEmailNotifications

export const selectIsUpdatingMobileNotifications=state=>state.notificationInfo.isUpdatingMobileNotifications
export const selectIsUpdatingDesktopNotifications=state=>state.notificationInfo.isUpdatingDesktopNotifications
export const selectIsUpdatingEmailNotifications=state=>state.notificationInfo.isUpdatingEmailNotifications