//redux-oolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const previousPostFilters = createSlice({
  name: "dashboard/previousPostFilters",
  initialState: {
    category:null,
    price:null,
    status:null,
  },
  reducers: {
      filterByPrice:(state,action)=>{
        state.price=action.payload
      },
      filterByCategory:(state,action)=>{
        state.category=action.payload
    },
        filterByStatus:(state,action)=>{
            state.status=action.payload
    },
  },
});

const { actions, reducer } = previousPostFilters;
export default reducer

export const selectFilteredCategory=(state)=>state.previousPostFilters.category
export const selectFilteredPrice=(state)=>state.previousPostFilters.price
export const selectFilteredStatus=(state)=>state.previousPostFilters.status

export const {filterByCategory, filterByPrice, filterByStatus} =actions
