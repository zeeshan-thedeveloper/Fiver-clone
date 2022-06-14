import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadListOfDeclinedOrderRequests,loadListOfNewOrderRequests } from "./Thunks";
const initialState={
    listOfNewOrderRequests:[],
    listOfDeclinedOrderRequests:[],

    isLoading_LoadListOfNewOrderRequests : false,
    hasError_LoadListOfNewOrderRequests : false,

    isLoading_LoadListOfDeclinedOrderRequests: false,
    hasError_LoadListOfDeclinedOrderRequests: false,
}
 
const options = {
    name: "requestsManagerPanel",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: {
        // // loadListOfDeclinedOrderRequests
         [loadListOfDeclinedOrderRequests.pending]: (state, action) => {
            state.isLoading_LoadListOfDeclinedOrderRequests = true;
            state.hasError_LoadListOfDeclinedOrderRequests = false;
        },
        [loadListOfDeclinedOrderRequests.fulfilled]: (state, action) => {
            state.listOfDeclinedOrderRequests = action.payload;
            state.isLoading_LoadListOfDeclinedOrderRequests = false;
            state.hasError_LoadListOfDeclinedOrderRequests = false;
        },
        [loadListOfDeclinedOrderRequests.rejected]: (state, action) => {
            state.isLoading_LoadListOfDeclinedOrderRequests = false;
            state.hasError_LoadListOfDeclinedOrderRequests = true;
        },

        // // loadListOfNewOrderRequests
        [loadListOfNewOrderRequests.pending]: (state, action) => {
            state.isLoading_LoadListOfNewOrderRequests = true;
            state.hasError_LoadListOfNewOrderRequests = false;
        },
        [loadListOfNewOrderRequests.fulfilled]: (state, action) => {
            state.listOfNewOrderRequests = action.payload;
            state.isLoading_LoadListOfNewOrderRequests = false;
            state.hasError_LoadListOfNewOrderRequests = false;
        },
        [loadListOfNewOrderRequests.rejected]: (state, action) => {
            state.isLoading_LoadListOfNewOrderRequests = false;
            state.hasError_LoadListOfNewOrderRequests = true;
        },

    }
}


const requestManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = requestManagerSlice;
export { reducer as requestManagerReducer }
export const {} = actions;