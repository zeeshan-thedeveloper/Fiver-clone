import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { 
        loadListOfActiveUserAccounts,
        loadListOfBlockedUserAccounts,
        loadListOfOffers,loadListOfOrders,
        loadListOfNumberOfAccountsWithRespectToStatusChart
     } from "./Thunks";
const initialState={
    listOfActiveUserAccounts:[],
    listOfBlockedUserAccounts:[],
    listOfOffers:[],
    listOfOrders:[],
    numberOfAccountsWithRespectToStatusChartData:[],

    
    isLoading_LoadListOfActiveUserAccounts: false,
    hasError_LoadListOfActiveUserAccounts: false,

    isLoading_LoadListOfBlockedUserAccounts: false,
    hasError_LoadListOfBlockedUserAccounts: false,
    
    isLoading_loadListOfOrders: false,
    hasError_loadListOfOrders: false,

    isLoading_loadListOfOffers: false,
    hasError_loadListOfOffers: false,

    isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart: false,
    hasError_loadListOfNumberOfAccountsWithRespectToStatusChart: false,
}

const options = {
    name: "userAccountManagerPanel",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: {
        // // loadListOfActiveUserAccounts
         [loadListOfActiveUserAccounts.pending]: (state, action) => {
            state.isLoading_LoadListOfActiveUserAccounts = true;
            state.hasError_LoadListOfActiveUserAccounts = false;
        },
        [loadListOfActiveUserAccounts.fulfilled]: (state, action) => {
            state.listOfActiveUserAccounts = action.payload;
            state.isLoading_LoadListOfActiveUserAccounts = false;
            state.hasError_LoadListOfActiveUserAccounts = false;
        },
        [loadListOfActiveUserAccounts.rejected]: (state, action) => {
            state.isLoading_LoadListOfActiveUserAccounts = false;
            state.hasError_LoadListOfActiveUserAccounts = true;
        },

         // // loadListOfBlockedUserAccounts
         [loadListOfBlockedUserAccounts.pending]: (state, action) => {
            state.isLoading_LoadListOfBlockedUserAccounts = true;
            state.hasError_LoadListOfBlockedUserAccounts = false;
        },
        [loadListOfBlockedUserAccounts.fulfilled]: (state, action) => {
            state.listOfBlockedUserAccounts = action.payload;
            state.isLoading_LoadListOfBlockedUserAccounts = false;
            state.hasError_LoadListOfBlockedUserAccounts = false;
        },
        [loadListOfBlockedUserAccounts.rejected]: (state, action) => {
            state.isLoading_LoadListOfBlockedUserAccounts = false;
            state.hasError_LoadListOfBlockedUserAccounts = true;
        },

          // // loadListOfOffers
          [loadListOfOffers.pending]: (state, action) => {
            state.isLoading_loadListOfOffers = true;
            state.hasError_loadListOfOffers = false;
        },
        [loadListOfOffers.fulfilled]: (state, action) => {
            state.listOfOffers = action.payload;
            state.isLoading_loadListOfOffers = false;
            state.hasError_loadListOfOffers = false;
        },
        [loadListOfOffers.rejected]: (state, action) => {
            state.isLoading_loadListOfOffers = false;
            state.hasError_loadListOfOffers = true;
        },

          // // loadListOfOffers
          [loadListOfOrders.pending]: (state, action) => {
            state.isLoading_loadListOfOrders = true;
            state.hasError_loadListOfOrders = false;
        },
        [loadListOfOrders.fulfilled]: (state, action) => {
            state.listOfOrders = action.payload;
            state.isLoading_loadListOfOrders = false;
            state.hasError_loadListOfOrders = false;
        },
        [loadListOfOrders.rejected]: (state, action) => {
            state.isLoading_loadListOfOrders = false;
            state.hasError_loadListOfOrders = true;
        },

           // // loadListOfNumberOfAccountsWithRespectToStatusChart
           [loadListOfNumberOfAccountsWithRespectToStatusChart.pending]: (state, action) => {
            state.isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart = true;
            state.hasError_loadListOfNumberOfAccountsWithRespectToStatusChart = false;
        },
        [loadListOfNumberOfAccountsWithRespectToStatusChart.fulfilled]: (state, action) => {
            state.numberOfAccountsWithRespectToStatusChartData = action.payload;
            state.isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart = false;
            state.hasError_loadListOfOrders = false;
        },
        [loadListOfNumberOfAccountsWithRespectToStatusChart.rejected]: (state, action) => {
            state.isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart = false;
            state.hasError_loadListOfOrders = true;
        },
    }
}



const userAccountsManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = userAccountsManagerSlice;
export { reducer as userAccountManagerReducer }
export const {} = actions;