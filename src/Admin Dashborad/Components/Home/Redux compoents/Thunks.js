import { createAsyncThunk } from "@reduxjs/toolkit" 
import { 
        OrdersOverViewChartData,AccountsOverViewChartData,ServiceOverViewChartData
    } from "./TempData";
import { 
        DataLoader_ForLoadAccountsOverViewChartData,
        DataLoader_ForLoadOrdersOverViewChartData,
        DataLoader_ForLoadServiceOverViewChartData, 
        DataLoader_ForRatedOrdersPercentageData, 
        DataLoader_ForRatingsData, 
        DataLoader_ForSummuryData
} from "./APIEndPoints";

export const loadOrdersOverViewChartData = createAsyncThunk(
    'homePanel/loadOrdersOverViewChartData',
    async (args,thunkApi) =>{
        const response = await DataLoader_ForLoadOrdersOverViewChartData(args).then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const loadAccountsOverViewChartData = createAsyncThunk(
    'homePanel/loadAccountsOverViewChartData',
    async (args,thunkApi) =>{
        const response = await DataLoader_ForLoadAccountsOverViewChartData(args).then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const loadServiceOverViewChartData = createAsyncThunk(
    'homePanel/loadServiceOverViewChartData',
    async (args,thunkApi) =>{
        const response = await DataLoader_ForLoadServiceOverViewChartData(args).then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const loadSummuryData = createAsyncThunk(
    'homePanel/loadSummuryData',
    async () =>{
        const response = await DataLoader_ForSummuryData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const loadRatingsData = createAsyncThunk(
    'homePanel/loadRatingsData',
    async () =>{
        console.log("Loading rating data start")
        const response = await DataLoader_ForRatingsData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        console.log("Loading rating data end")   
        return response;
    }
)

export const loadRatedOrdersPercentageData = createAsyncThunk(
    'homePanel/loadRatedOrdersPercentageData',
    async () =>{
        const response = await DataLoader_ForRatedOrdersPercentageData().then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response;
    }
)
