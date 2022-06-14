import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import { loadListOfServices,loadServiceClicksOverViewChartData,addProjectToDatabase,DeleteService,SetVisiblityOfService} from "./Thunks";
const initialState = {
    listOfServices:[],

    tempServiceDataHolder:{
                    isBeingUsedInEditor:true,
                    BasicInfo:{
                        serviceTitle:null,
                        serviceDesc:null,
                        listOfSubServices:[],
                        listOfKeyWords:[],
                        isEditingEnabled:false
                    },
                    Media:{
                        thumbnailImageUri:null,
                        listOfImages:[],
                        isEditingEnabled:false
                    },
                    Packages:{
                        isEditingEnabled:false,
                        Basic:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        },
                        Standard:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        },
                        Premium:{
                            packageDescription:null,
                            packagePrice:0,
                            listOfFeatures:[],
                        }
                    }
    },
    serviceClicksOverViewChartData:[],

    isLoading_LoadListOfServices: false,
    hasError_LoadListOfServices: false,

    isLoading_loadServiceClicksOverViewChartData: false,
    hasError_loadServiceClicksOverViewChartData: false,

    isLoading_AddProjectToDatabase: false,
    hasError_AddProjectToDatabase: false,

    isLoading_DeleteService: false,
    hasError_DeleteService: false,

    isLoading_SetVisiblityOfService: false,
    hasError_SetVisiblityOfService: false,

}

const options = {
    name:"serviceManagerPanel",
    initialState:initialState,
    reducers:{
        updateTempServiceDataHolderBasicInfo:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.BasicInfo = action.payload;
                return draft
            });
        },
        updateTempServiceDataHolderMedia:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Media = action.payload;
                return draft
            });
        },

        updateTempServiceDataHolderPackagesBasic:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Basic=action.payload;
                return draft
            })
        },
        updateTempServiceDataHolderPackagesStandard:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Standard=action.payload;
                return draft
            })
        },
        updateTempServiceDataHolderPackagesPremium:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.Packages.Premium=action.payload;
                return draft
            })
        },
        updateIsEditingFlagOfBasicInfoForm:(state,action)=>{
            return produce(state,draft=>{
                console.log(action.payload);
                draft.tempServiceDataHolder.Packages.isEditingEnabled=action.payload;
                return draft
            })
        },
        updateIsBeingUsedInEditor:(state,action)=>{
            return produce(state,draft=>{
                draft.tempServiceDataHolder.isBeingUsedInEditor=action.payload;
                return draft
            })
        }
    },

    extraReducers:{
            // loadListOfServices
            [loadListOfServices.pending]: (state, action) => {
              state.isLoading_LoadListOfServices = true;
              state.hasError_LoadListOfServices = false;
            },
            [loadListOfServices.fulfilled]: (state, action) => {
              state.listOfServices = action.payload;
              state.isLoading_LoadListOfServices = false;
              state.hasError_LoadListOfServices = false;
            },
            [loadListOfServices.rejected]: (state, action) => {
              state.isLoading_LoadListOfServices = false;
              state.hasError_LoadListOfServices = true;
            },

            //loadServiceClicksOverViewChartData
            [loadServiceClicksOverViewChartData.pending]: (state, action) => {
                state.isLoading_loadServiceClicksOverViewChartData = true;
                state.hasError_loadServiceClicksOverViewChartData = false;
              },
              [loadServiceClicksOverViewChartData.fulfilled]: (state, action) => {
                state.serviceClicksOverViewChartData = action.payload;
                state.isLoading_loadServiceClicksOverViewChartData = false;
                state.hasError_loadServiceClicksOverViewChartData = false;
              },
              [loadServiceClicksOverViewChartData.rejected]: (state, action) => {
                state.isLoading_loadServiceClicksOverViewChartData = false;
                state.hasError_loadServiceClicksOverViewChartData = true;
              },

              //addProjectToDatabase
            [addProjectToDatabase.pending]: (state, action) => {
                state.isLoading_AddProjectToDatabase = true;
                state.hasError_AddProjectToDatabase = false;
              },
              [addProjectToDatabase.fulfilled]: (state, action) => {
                state.listOfServices.push(action.payload);
                state.isLoading_AddProjectToDatabase = false;
                state.hasError_AddProjectToDatabase = false;
              },
              [addProjectToDatabase.rejected]: (state, action) => {
                state.isLoading_AddProjectToDatabase = false;
                state.hasError_AddProjectToDatabase = true;
              },

              //DeleteService
              [DeleteService.pending]: (state, action) => {
                state.isLoading_DeleteService = true;
                state.hasError_DeleteService = false;
              },
              [DeleteService.fulfilled]: (state, action) => {
                // state.listOfServices = action.payload;
                state.isLoading_DeleteService = false;
                state.hasError_DeleteService = false;
              },
              [DeleteService.rejected]: (state, action) => {
                state.isLoading_DeleteService = false;
                state.hasError_DeleteService = true;
              },  
            
              
                //SetVisiblityOfService
                [SetVisiblityOfService.pending]: (state, action) => {
                    state.isLoading_SetVisiblityOfService = true;
                    state.hasError_SetVisiblityOfService = false;
                  },
                  [SetVisiblityOfService.fulfilled]: (state, action) => {
                    // state.listOfServices.push(action.payload);
                    state.isLoading_SetVisiblityOfService = false;
                    state.hasError_SetVisiblityOfService = false;
                  },
                  [SetVisiblityOfService.rejected]: (state, action) => {
                    state.isLoading_SetVisiblityOfService = false;
                    state.hasError_SetVisiblityOfService = true;
                  },  
  
    }
}
const serviceManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = serviceManagerSlice;
export { reducer as serviceManagerReducer }
export const {
    updateTempServiceDataHolderBasicInfo,
    updateTempServiceDataHolderMedia,
    updateTempServiceDataHolderPackagesBasic,
    updateTempServiceDataHolderPackagesStandard,
    updateTempServiceDataHolderPackagesPremium,
    updateIsEditingFlagOfBasicInfoForm,
    updateIsBeingUsedInEditor
} = actions;
