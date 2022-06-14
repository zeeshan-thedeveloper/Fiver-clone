import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadDataOfListOfAllOffers } from "./Thunks";
const initialState ={
    listOfAllOffers:[],
    tempCreateNewOfferDataHolder:{
        BasicInfo:{
        offerPunchLine:null,
        offerCreationDate:null,
        offerCreationTime:null,
        offerCatagory:null,
        offerSubCatagory:null,
        offerStatus:null,//Not Published
        isEditingEnabled: false
        },
        Media:{
            offerImage:null,
            isEditingEnabled: false
        }
    },
      
    isLoading_loadDataOfListOfAllOffers : false,
    hasErrorloadDataOfListOfAllOffers : false,

    
}

const options = {
    name: "offersManagerPanel",
    initialState: initialState,
    reducers: {
        updateBasicInfoOfCreateNewOffer:(state,action)=>{
            return produce(state,draft=>{
                draft.tempCreateNewOfferDataHolder.BasicInfo=action.payload;
                return draft
            })
        },
        updateMediaOfCreateNewOffer:(state,action)=>{
            return produce(state,draft=>{
                draft.tempCreateNewOfferDataHolder.Media=action.payload;
                return draft
            })
        }
    },
    extraReducers: {
        // loadDataOfLastChoosedDisplayMode
        [loadDataOfListOfAllOffers.pending]: (state, action) => {
            state.isLoading_loadDataOfListOfAllOffers = true;
            state.hasErrorloadDataOfListOfAllOffers = false;
        },
        [loadDataOfListOfAllOffers.fulfilled]: (state, action) => {
            state.listOfAllOffers = action.payload;
            state.isLoading_loadDataOfListOfAllOffers = false;
            state.hasErrorloadDataOfListOfAllOffers = false;
        },
        [loadDataOfListOfAllOffers.rejected]: (state, action) => {
            state.isLoading_loadDataOfListOfAllOffers = false;
            state.hasErrorloadDataOfListOfAllOffers = true;
        },

    },
}

const offersManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = offersManagerSlice;
export { reducer as offersManagerReducer }
export const {
    updateBasicInfoOfCreateNewOffer,
    updateMediaOfCreateNewOffer
} = actions;
