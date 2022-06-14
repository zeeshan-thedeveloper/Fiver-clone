import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { 
        loadListOfDeliveredOrders,loadListOfInProgressOrders,
        loadListOfCompletedOrders,loadListOfCanceledOrder,
        loadListOfInRevsionOrder,loadListOfLatedOrder
     } from "./Thunks";
const initialState={
    listOfDeliveredOrders:[],
    listOfInProgressOrders:[],
    listOfCompletedOrders:[],
    listOfCanceledOrder:[],
    listOfLateOrders:[],
    listOfInRevisionOrders:[],

    isLoading_LoadListOfDeliveredOrders: false,
    hasError_LoadListOfDeliveredOrders: false,

    isLoading_LoadListOfInProgressOrders: false,
    hasError_LoadListOfInProgressOrders: false,
    
    isLoading_LoadListOfCompletedOrders: false,
    hasError_LoadListOfCompletedOrders: false,

    isLoading_LoadListOfCanceledOrder: false,
    hasError_LoadListOfCanceledOrder: false,

    isLoading_LoadListOfInRevsionOrder: false,
    hasError_LoadListOfInRevsionOrder: false,

    isLoading_LoadListOfLatedOrder: false,
    hasError_LoadListOfLatedOrder: false,

}

const options = {
    name: "ordersManagerPanel",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: {
        // loadListOfDeliveredOrders
        [loadListOfDeliveredOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfDeliveredOrders = true;
            state.hasError_LoadListOfDeliveredOrders = false;
        },
        [loadListOfDeliveredOrders.fulfilled]: (state, action) => {
            state.listOfDeliveredOrders = action.payload;
            state.isLoading_LoadListOfDeliveredOrders = false;
            state.hasError_LoadListOfDeliveredOrders = false;
        },
        [loadListOfDeliveredOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfDeliveredOrders = false;
            state.hasError_LoadListOfDeliveredOrders = true;
        },

         // loadListOfInProgressOrders
         [loadListOfInProgressOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfInProgressOrders = true;
            state.hasError_LoadListOfInProgressOrders = false;
        },
        [loadListOfInProgressOrders.fulfilled]: (state, action) => {
            state.listOfInProgressOrders = action.payload;
            state.isLoading_LoadListOfInProgressOrders = false;
            state.hasError_LoadListOfInProgressOrders = false;
        },
        [loadListOfInProgressOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfInProgressOrders = false;
            state.hasError_LoadListOfInProgressOrders = true;
        },

         // loadListOfCompletedOrders
         [loadListOfCompletedOrders.pending]: (state, action) => {
            state.isLoading_LoadListOfCompletedOrders = true;
            state.hasError_LoadListOfCompletedOrders = false;
        },
        [loadListOfCompletedOrders.fulfilled]: (state, action) => {
            state.listOfCompletedOrders = action.payload;
            state.isLoading_LoadListOfCompletedOrders = false;
            state.hasError_LoadListOfCompletedOrders = false;
        },
        [loadListOfCompletedOrders.rejected]: (state, action) => {
            state.isLoading_LoadListOfCompletedOrders = false;
            state.hasError_LoadListOfCompletedOrders = true;
        },

         // loadListOfCanceledOrder
         [loadListOfCanceledOrder.pending]: (state, action) => {
            state.isLoading_LoadListOfCanceledOrder = true;
            state.hasError_LoadListOfCanceledOrder = false;
        },
        [loadListOfCanceledOrder.fulfilled]: (state, action) => {
            state.listOfCanceledOrder = action.payload;
            state.isLoading_LoadListOfCanceledOrder = false;
            state.hasError_LoadListOfCanceledOrder = false;
        },
        [loadListOfCanceledOrder.rejected]: (state, action) => {
            state.isLoading_LoadListOfCanceledOrder = false;
            state.hasError_LoadListOfCanceledOrder = true;
        },


        
         // loadListOfInRevsionOrder
         [loadListOfInRevsionOrder.pending]: (state, action) => {
            state.isLoading_LoadListOfInRevsionOrder = true;
            state.hasError_LoadListOfInRevsionOrder = false;
        },
        [loadListOfInRevsionOrder.fulfilled]: (state, action) => {
            state.listOfInRevisionOrders = action.payload;
            state.isLoading_LoadListOfInRevsionOrder = false;
            state.hasError_LoadListOfInRevsionOrder = false;
        },
        [loadListOfInRevsionOrder.rejected]: (state, action) => {
            state.isLoading_LoadListOfInRevsionOrder = false;
            state.hasError_LoadListOfInRevsionOrder = true;
        },

        //loadListOfLatedOrder
        [loadListOfLatedOrder.pending]: (state, action) => {
            state.isLoading_LoadListOfLatedOrder = true;
            state.hasError_LoadListOfLatedOrder = false;
        },
        [loadListOfLatedOrder.fulfilled]: (state, action) => {
            state.listOfLateOrders = action.payload;
            state.isLoading_LoadListOfLatedOrder = false;
            state.hasError_LoadListOfLatedOrder = false;
        },
        [loadListOfLatedOrder.rejected]: (state, action) => {
            state.isLoading_LoadListOfLatedOrder = false;
            state.hasError_LoadListOfLatedOrder = true;
        },

    }
}

const ordersManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = ordersManagerSlice;
export { reducer as ordersManagerReducer }
export const {} = actions;

