import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ForListOfDeclinedOrderRequests, DataLoader_ForListOfNewOrderRequests } from "./APIEndPoints";

export const loadListOfNewOrderRequests =  createAsyncThunk(
    'requestsManagerPanel/loadListOfNewOrderRequests',
    async()=>{
        const response = DataLoader_ForListOfNewOrderRequests().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

export const loadListOfDeclinedOrderRequests =  createAsyncThunk(
    'requestsManagerPanel/loadListOfDeclinedOrderRequests',
    async()=>{
        const response = DataLoader_ForListOfDeclinedOrderRequests().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)
