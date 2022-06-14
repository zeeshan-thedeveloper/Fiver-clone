import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataLoader_ForListOfServices, DataLoader_ForServiceClicksOverViewChartData, DataUploader_AddServiceToDatabase } from "./APIEndPoints";

//loader thunks...
export const  loadListOfServices= createAsyncThunk(
        'serviceManagerPanel/loadListOfServices',
        async()=>{
            const response = await DataLoader_ForListOfServices().then((resp)=>{
                return resp;
            },(error)=>{
                throw error
            })
            return response;
        })
    
export const  loadServiceClicksOverViewChartData = createAsyncThunk(
    'serviceManagerPanel/loadServiceClicksOverViewChartData',
    async(args,thunkApi)=>{
        const response = await DataLoader_ForServiceClicksOverViewChartData(args).then((resp)=>{
            return resp
        },(error)=>{
            throw error
        })
        return response
    })
    //adder thunks..
export const addProjectToDatabase = createAsyncThunk(
    'serviceManagerPanel/addProjectToDatabase',
    async()=>{
        const response= await DataUploader_AddServiceToDatabase().then((resp)=>{
            return resp;
        },(error)=>{
            throw error;
        })

        return response;
    }
)

//deletion thunks..
export const DeleteService = createAsyncThunk(
    'serviceManagerPanel/',
    async(args,thunkApi)=>{
        const response=null;
        return response;
    }
)
export const SetVisiblityOfService = createAsyncThunk(
    'serviceManagerPanel/',
    async(args,thunkApi)=>{
        const response=null;
        return response;
    }
)