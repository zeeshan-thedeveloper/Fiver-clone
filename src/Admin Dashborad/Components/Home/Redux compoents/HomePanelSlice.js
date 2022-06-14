import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { 
        loadAccountsOverViewChartData,loadOrdersOverViewChartData,loadServiceOverViewChartData,
        loadSummuryData,loadRatingsData,loadRatedOrdersPercentageData
    } from "./Thunks";

const initialState={
    earnings:0,
    avgSellingPrice:0,
    ordersCompleted:0,
    onlineUsers:0,
    onlineTeamMembers:0,
    earnedInThisMonth:0,
    ordersOverViewChartData:[],
    accountsOverViewChartData:[],
    serviceOverViewChartData:[],
    ratings:{
        allTimeRatings:0,
        fiveStarRating:0,
        fourStarRating:0,
        threeStarRating:0,
        twoStarRating:0,
        oneStarRating:0,

        allTimeRatingsTimes:0,
        fiveStarRatingTimes:0,
        fourStarRatingTimes:0,
        threeStarRatingTimes:0,
        twoStarRatingTimes:0,
        oneStarRatingTimes:0,

        communicationWithSeller:0,
        serviceAsDescribed:0,
        buyAgainOrRecommended:0
    },

    ratedOrdersPercentage:0,
    
    isLoading_LoadAccountsOverViewChartData: false,
    hasError_LoadAccountsOverViewChartData: false,

    isLoading_LoadOrdersOverViewChartData: false,
    hasError_LoadOrdersOverViewChartData: false,

    isLoading_LoadServiceOverViewChartData: false,
    hasError_LoadServiceOverViewChartData: false,

    isLoading_LoadSummuryData: false,
    hasError_LoadSummuryData: false,

    isLoading_LoadRatingsData: false,
    hasError_LoadRatingsData: false,

    isLoading_LoadRatedOrdersPercentageData: false,
    hasError_LoadRatedOrdersPercentageData: false,

}

const options = {
    name:"homePanel",
    initialState:initialState,
    reducers:{},
    extraReducers:{
            // loadAccountsOverViewChartData
            [loadAccountsOverViewChartData.pending]: (state, action) => {
              state.isLoading_LoadAccountsOverViewChartData = true;
              state.hasError_LoadAccountsOverViewChartData = false;
            },
            [loadAccountsOverViewChartData.fulfilled]: (state, action) => {
              state.accountsOverViewChartData = action.payload;
              state.isLoading_LoadAccountsOverViewChartData = false;
              state.hasError_LoadAccountsOverViewChartData = false;
            },
            [loadAccountsOverViewChartData.rejected]: (state, action) => {
              state.isLoading_LoadAccountsOverViewChartData = false;
              state.hasError_LoadAccountsOverViewChartData = true;
            },

            // loadOrdersOverViewChartData
            
            [loadOrdersOverViewChartData.pending]: (state, action) => {
                state.isLoading_LoadOrdersOverViewChartData = true;
                state.hasError_LoadOrdersOverViewChartData = false;
              },
              [loadOrdersOverViewChartData.fulfilled]: (state, action) => {
                state.ordersOverViewChartData = action.payload;
                state.isLoading_LoadOrdersOverViewChartData = false;
                state.hasError_LoadOrdersOverViewChartData = false;
              },
              [loadOrdersOverViewChartData.rejected]: (state, action) => {
                state.isLoading_LoadAccountsOverViewChartData = false;
                state.hasError_LoadOrdersOverViewChartData = true;
              },
            
            // loadAccountsOverViewChartData

            [loadServiceOverViewChartData.pending]: (state, action) => {
                state.isLoading_LoadServiceOverViewChartData = true;
                state.hasError_LoadServiceOverViewChartData = false;
              },
              [loadServiceOverViewChartData.fulfilled]: (state, action) => {
                state.serviceOverViewChartData = action.payload;
                state.isLoading_LoadServiceOverViewChartData = false;
                state.hasError_LoadServiceOverViewChartData = false;
              },
              [loadServiceOverViewChartData.rejected]: (state, action) => {
                state.isLoading_LoadServiceOverViewChartData = false;
                state.hasError_LoadServiceOverViewChartData = true;
              },
            // loadSummuryData

            [loadSummuryData.pending]: (state, action) => {
                state.isLoading_LoadSummuryData = true;
                state.hasError_LoadSummuryData = false;
              },
              [loadSummuryData.fulfilled]: (state, action) => {
                
                state.earnings = action.payload.earnings
                state.avgSellingPrice = action.payload.avgSellingPrice
                state.ordersCompleted = action.payload.ordersCompleted
                state.onlineUsers = action.payload.onlineUsers
                state.onlineTeamMembers = action.payload.onlineTeamMembers
                state.earnedInThisMonth = action.payload.earnedInThisMonth

                state.isLoading_LoadSummuryData = false;
                state.hasError_LoadSummuryData = false;
              },
              [loadSummuryData.rejected]: (state, action) => {
                state.isLoading_LoadSummuryData = false;
                state.hasError_LoadSummuryData = true;
              },
              

              // loadRatingsData

            [loadRatingsData.pending]: (state, action) => {
                state.isLoading_LoadRatingsData = true;
                state.hasError_LoadRatingsData = false;
              },
              [loadRatingsData.fulfilled]: (state, action) => {
                
                state.ratings = action.payload
                state.isLoading_LoadRatingsData = false;
                state.hasError_LoadRatingsData = false;
              },
              [loadRatingsData.rejected]: (state, action) => {
                state.isLoading_LoadRatingsData = false;
                state.hasError_LoadRatingsData = true;
              },

              
              // loadRatedOrdersPercentageData

            [loadRatedOrdersPercentageData.pending]: (state, action) => {
                state.isLoading_LoadRatedOrdersPercentageData = true;
                state.hasError_LoadRatedOrdersPercentageData = false;
              },
              [loadRatedOrdersPercentageData.fulfilled]: (state, action) => {
                
                state.ratedOrdersPercentage = action.payload.ratedOrdersPercentage
                state.isLoading_LoadRatedOrdersPercentageData = false;
                state.hasError_LoadRatedOrdersPercentageData = false;
              },
              [loadRatedOrdersPercentageData.rejected]: (state, action) => {
                state.isLoading_LoadRatedOrdersPercentageData = false;
                state.hasError_LoadRatedOrdersPercentageData = true;
              },
              
          }
    }


const homeSlice = createSlice(options);
const {reducer,actions} =  homeSlice;
export { reducer as homeReducer };

console.log(homeSlice)
