import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
        DataLoader_ForListOfDiscardedReviews,
        DataLoader_ForListOfNewReviews,
        DataLoader_ForListOfPublishedReviews 
    } from "./APIEndPoints";

export const loadListOfNewReviews =  createAsyncThunk(
    'reviewsManagerPanel/loadListOfNewReviews',
    async()=>{
        const response = DataLoader_ForListOfNewReviews().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

export const loadListOfPublishedReviews =  createAsyncThunk(
    'reviewsManagerPanel/loadListOfPublishedReviews',
    async()=>{
        const response = DataLoader_ForListOfPublishedReviews().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

export const loadListOfDiscardedReviews =  createAsyncThunk(
    'reviewsManagerPanel/loadListOfDiscardedReviews',
    async()=>{
        const response = DataLoader_ForListOfDiscardedReviews().then((resp)=>{
            return resp
        },(error)=>{
            throw error;
        })
        return response;
    }
)

