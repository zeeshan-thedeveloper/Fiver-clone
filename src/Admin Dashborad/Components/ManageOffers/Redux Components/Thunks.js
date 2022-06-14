 import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ListOfAllOffers } from "./APIEndPoints";

export const  loadDataOfListOfAllOffers= createAsyncThunk(
    'offersManagerPanel/loadDataOfListOfAllOffers',
    async()=>{
        const response = await DataLoader_ListOfAllOffers().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
