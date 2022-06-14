import { createAsyncThunk } from "@reduxjs/toolkit" 
import { DataLoader_ForDataOfLastChoosedDisplayMode, DataLoader_ForDataOfLastDataUpdateTime, DataLoader_ForDataOfLastUpdateDateAndTime, DataLoader_ForDataOfListOfCurrentDisplayTrendingProject, DataLoader_ForDataOfListOfDraftProjects, DataLoader_ForDataOfListOfDynamicProjectsList, DataLoader_ForDataOfListOfProjects, DataLoader_ForDataOfListOfStaticProjects } from "./APIEndPoints";

//Loader methods..

export const  loadDataOfListOfProjects= createAsyncThunk(
    'projectManagerPanel/loadDataOfListOfProjects',
    async()=>{
        const response = await DataLoader_ForDataOfListOfProjects().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)

export const  loadDataOfListOfDraftProjects= createAsyncThunk(
    'projectManagerPanel/loadDataOfListOfDraftProjects',
    async()=>{
        const response = await DataLoader_ForDataOfListOfDraftProjects().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOfListOfStaticProjects= createAsyncThunk(
    'projectManagerPanel/loadDataOfListOfStaticProjects',
    async()=>{
        const response = await DataLoader_ForDataOfListOfStaticProjects().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOfListOfDynamicProjects= createAsyncThunk(
    'projectManagerPanel/loadDataOfListOfDynamicProjectsList',
    async()=>{
        const response = await DataLoader_ForDataOfListOfDynamicProjectsList().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOfLastUpdateDateAndTime= createAsyncThunk(
    'projectManagerPanel/loadDataOfLastUpdateDateAndTime',
    async()=>{
        const response = await DataLoader_ForDataOfLastUpdateDateAndTime().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOfLastChoosedDisplayMode= createAsyncThunk(
    'projectManagerPanel/loadDataOfLastChoosedDisplayMode',
    async()=>{
        const response = await DataLoader_ForDataOfLastChoosedDisplayMode().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOfLastDataUpdateTime= createAsyncThunk(
    'projectManagerPanel/loadDataOfLastDataUpdateTime',
    async()=>{
        const response = await DataLoader_ForDataOfLastDataUpdateTime().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)
export const  loadDataOffListOfCurrentDisplayTrendingProject= createAsyncThunk(
    'projectManagerPanel/loadDataOffListOfCurrentDisplayTrendingProject',
    async()=>{
        const response = await DataLoader_ForDataOfListOfCurrentDisplayTrendingProject().then((resp)=>{
            return resp;
        },(error)=>{
            throw error
        })
        return response;
    }
)

//adding methods.. 

export const addProjectToDatabase = createAsyncThunk(
    'projectManagerPanel/addProjectToDatabase',
    async(args,thunkApi)=>{
        const response = {}//Call the api.
        return response;
    }
)

//update methods..
export const updateProjectInDatabase = createAsyncThunk(
    'projectManagerPanel/updateProjectInDatabase',
    async(args,thunkApi)=>{

        const response = {} //Call the api. //this will return the same type of object.
        return response;
    }
)

export const updateStaticProjectsList = createAsyncThunk(
    'projectManagerPanel/updateStaticProjectsList',
    async(args,thunkApi)=>{
        const response = []//Call the api.
        return response;
    }
)

export const updateDynamicProjectsList = createAsyncThunk(
    'projectManagerPanel/updateDynamicProjectsList',
    async(args,thunkApi)=>{
        const response = [] //Call the api.
        return response;
    }
);
