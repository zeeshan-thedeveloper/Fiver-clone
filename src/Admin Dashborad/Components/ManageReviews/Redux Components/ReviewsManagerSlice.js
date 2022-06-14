import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import {
        loadListOfNewReviews,
        loadListOfPublishedReviews,
        loadListOfDiscardedReviews
    } from './Thunks'
 const initialState={
    listOfNewReviews:[],
    listOfPublishedReviews:[],
    listOfDiscardedReviews:[],
 
    isLoading_loadListOfNewReviews: false,
    hasError_loadListOfNewReviews: false,

    isLoading_loadListOfPublishedReviews: false,
    hasError_loadListOfPublishedReviews: false,

    isLoading_loadListOfDiscardedReviews: false,
    hasError_loadListOfDiscardedReviews: false,
}

const options = {
    name: "reviewsManagerPanel",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: {
        // // loadListOfNewReviews
         [loadListOfNewReviews.pending]: (state, action) => {
            state.isLoading_loadListOfNewReviews = true;
            state.hasError_loadListOfNewReviews = false;
        },
        [loadListOfNewReviews.fulfilled]: (state, action) => {
            state.listOfNewReviews = action.payload;
            state.isLoading_loadListOfNewReviews = false;
            state.hasError_loadListOfNewReviews = false;
        },
        [loadListOfNewReviews.rejected]: (state, action) => {
            state.isLoading_loadListOfNewReviews = false;
            state.hasError_loadListOfNewReviews = true;
        },


        // // loadListOfPublishedReviews
        [loadListOfPublishedReviews.pending]: (state, action) => {
            state.isLoading_loadListOfPublishedReviews = true;
            state.hasError_loadListOfPublishedReviews = false;
        },
        [loadListOfPublishedReviews.fulfilled]: (state, action) => {
            state.listOfPublishedReviews = action.payload;
            state.isLoading_loadListOfPublishedReviews = false;
            state.hasError_loadListOfPublishedReviews = false;
        },
        [loadListOfPublishedReviews.rejected]: (state, action) => {
            state.isLoading_loadListOfPublishedReviews = false;
            state.hasError_loadListOfPublishedReviews = true;
        },
        

        // // loadListOfDiscardedReviews
        [loadListOfDiscardedReviews.pending]: (state, action) => {
            state.isLoading_loadListOfDiscardedReviews = true;
            state.hasError_loadListOfDiscardedReviews = false;
        },
        [loadListOfDiscardedReviews.fulfilled]: (state, action) => {
            state.listOfDiscardedReviews = action.payload;
            state.isLoading_loadListOfDiscardedReviews = false;
            state.hasError_loadListOfDiscardedReviews = false;
        },
        [loadListOfDiscardedReviews.rejected]: (state, action) => {
            state.isLoading_loadListOfDiscardedReviews = false;
            state.hasError_loadListOfDiscardedReviews = true;
        },
        
        
    }
}


const reviewsManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = reviewsManagerSlice;
export { reducer as reviewsManagerReducer }
export const {} = actions;

