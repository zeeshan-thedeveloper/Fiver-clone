import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer'
import {
    loadDataOfLastChoosedDisplayMode, loadDataOfLastDataUpdateTime, loadDataOfLastUpdateDateAndTime,
    loadDataOfListOfDraftProjects, loadDataOfListOfDynamicProjects, loadDataOfListOfProjects,
    loadDataOfListOfStaticProjects,loadDataOffListOfCurrentDisplayTrendingProject,
    addProjectToDatabase,updateDynamicProjectsList,updateStaticProjectsList,updateProjectInDatabase
} from "./Thunks";
const initialState = {
    listOfProjects: [],
    listOfDraftProjects: [],
    tempProjectDataHolder: {
        BasicInfo: {
            projectTitle: null,
            projectDesc: null,
            projectService: null,
            projectSubService: null,
            projectEstimatedPrice: null,
            projectPublishDate: null,
            clientSideViewUrl: null,
            listOfKeyWords: [],
            isEditingEnabled: false
        },
        Media: {
            thumbnailImageUri: null,
            listOfImages: [],
            isEditingEnabled: false
        }
    },
    listOfStaticProjects:{
        data:[],
        lastUpdateDateAndTime:null
    },
    listOfDynamicProjectsList:{
        data:[],
        lastUpdateDateAndTime:null
    },
    listOfCurrentDisplayTrendingProject:{
        data:[],
        lastUpdateDateAndTime:null
    },
    
    lastUpdateDateAndTime:null,
    lastChoosedDisplayMode:null,
    lastDataUpdateTime: null,

    isLoading_LastChoosedDisplayMode: false,
    hasError_LastChoosedDisplayMode: false,

    isLoading_DataOfLastDataUpdateTime: false,
    hasError_DataOfLastDataUpdateTime: false,

    isLoading_LastUpdateDateAndTime: false,
    hasError_LastUpdateDateAndTime: false,

    isLoading_ListOfDraftProjects: false,
    hasError_ListOfDraftProjects: false,

    isLoading_ListOfDynamicProjects: false,
    hasError_ListOfDynamicProjects: false,

    isLoading_ListOfProjects: false,
    hasError_ListOfProjects: false,

    isLoading_ListOfStaticProjects: false,
    hasError_ListOfStaticProjects: false,

    isLoading_ListOfCurrentDisplayTrendingProject: false,
    hasError_ListOfCurrentDisplayTrendingProject: false,

    //update and adding flags.
    isLoading_AddProjectToDatabase: false,
    hasError_AddProjectToDatabase: false,

    isLoading_UpdateDynamicProjectsList: false,
    hasError_UpdateDynamicProjectsList: false,

    isLoading_UpdateStaticProjectsList: false,
    hasError_UpdateStaticProjectsList: false,

    isLoading_UpdateProjectInDatabase: false,
    hasError_UpdateProjectInDatabase: false,
}

const options = {
    name: "projectManagerPanel",
    initialState: initialState,
    reducers: {

        updateBasicInfoTempProjectDataHolder: (state, action) => {
            console.log("Trying to update the basic info")
            return produce(state, draft => {
                draft.tempProjectDataHolder.BasicInfo = action.payload;
                return draft
            })
        },
        updateMediaTempProjectDataHolder: (state, action) => {
            return produce(state, draft => {
                draft.tempProjectDataHolder.Media = action.payload;
                return draft
            })
        },
        updateByIdListOfStaticProjects: (state, action) => {
            return produce(state, draft => {
                draft.listOfStaticProjects.data[action.payload.index]=action.payload.selectedProject;
                return draft
            })
        },
        removeProjectByIdFromListOfDrfatProjects: (state, action) => {
            // We need to send projectId in form of object
            return produce(state, draft => {
                draft.listOfDraftProjects.filter((item) => {
                    if (item.projectId != action.payload.projectId) {
                        return item;
                    }
                })
                return draft
            })
        }
        ,
        addProjectInDynamicListOfProjects: (state, action) => {
            // We need to send a object only.
            return produce(state, draft => {
                console.log("ere in dynamic list.");
                console.log(action.payload);
                draft.listOfDynamicProjectsList.data.push(action.payload);
                return draft;
            })
        },

        removeProjectByIdFromDynamicListOfProjects: (state, action) => {
            // we need to send project id in object form.
            return produce(state, draft => {
                const first_part = draft.listOfDynamicProjectsList.data.slice(0,action.payload.index);
                const second_part = draft.listOfDynamicProjectsList.data.slice(action.payload.index+1,draft.listOfDynamicProjectsList.data.length);
                const combine = first_part.concat(second_part)
                draft.listOfDynamicProjectsList.data=combine
                return draft;
            })
        },
    },

   
    extraReducers: {
        // loadDataOfLastChoosedDisplayMode
        [loadDataOfLastChoosedDisplayMode.pending]: (state, action) => {
            state.isLoading_LastChoosedDisplayMode = true;
            state.hasError_LastChoosedDisplayMode = false;
        },
        [loadDataOfLastChoosedDisplayMode.fulfilled]: (state, action) => {
            state.lastChoosedDisplayMode = action.payload;
            state.isLoading_LastChoosedDisplayMode = false;
            state.hasError_LastChoosedDisplayMode = false;
        },
        [loadDataOfLastChoosedDisplayMode.rejected]: (state, action) => {
            state.isLoading_LastChoosedDisplayMode = false;
            state.hasError_LastChoosedDisplayMode = true;
        },

        // loadDataOfLastDataUpdateTime
        [loadDataOfLastDataUpdateTime.pending]: (state, action) => {
            state.isLoading_DataOfLastDataUpdateTime = true;
            state.hasError_DataOfLastDataUpdateTime = false;
        },
        [loadDataOfLastDataUpdateTime.fulfilled]: (state, action) => {
            state.lastDataUpdateTime = action.payload;
            state.isLoading_DataOfLastDataUpdateTime = false;
            state.hasError_DataOfLastDataUpdateTime = false;
        },
        [loadDataOfLastDataUpdateTime.rejected]: (state, action) => {
            state.isLoading_DataOfLastDataUpdateTime = false;
            state.hasError_DataOfLastDataUpdateTime = true;
        },


        // loadDataOfLastUpdateDateAndTime
        [loadDataOfLastUpdateDateAndTime.pending]: (state, action) => {
            state.isLoading_LastUpdateDateAndTime = true;
            state.hasError_LastUpdateDateAndTime = false;
        },
        [loadDataOfLastUpdateDateAndTime.fulfilled]: (state, action) => {
            state.lastDataUpdateTime = action.payload;
            state.isLoading_LastUpdateDateAndTime = false;
            state.hasError_LastUpdateDateAndTime = false;
        },
        [loadDataOfLastUpdateDateAndTime.rejected]: (state, action) => {
            state.isLoading_LastUpdateDateAndTime = false;
            state.hasError_LastUpdateDateAndTime = true;
        },

        // loadDataOfListOfDraftProjects
        [loadDataOfListOfDraftProjects.pending]: (state, action) => {
            state.isLoading_ListOfDraftProjects = true;
            state.hasError_ListOfDraftProjects = false;
        },
        [loadDataOfListOfDraftProjects.fulfilled]: (state, action) => {
            state.listOfDraftProjects = action.payload;
            state.isLoading_ListOfDraftProjects = false;
            state.hasError_ListOfDraftProjects = false;
        },
        [loadDataOfListOfDraftProjects.rejected]: (state, action) => {
            state.isLoading_ListOfDraftProjects = false;
            state.hasError_ListOfDraftProjects = true;
        },


        // loadDataOfListOfDynamicProjects
        [loadDataOfListOfDynamicProjects.pending]: (state, action) => {
            state.isLoading_ListOfDynamicProjects = true;
            state.hasError_ListOfDynamicProjects = false;
        },
        [loadDataOfListOfDynamicProjects.fulfilled]: (state, action) => {
            state.listOfDynamicProjectsList = action.payload;
            state.isLoading_ListOfDynamicProjects = false;
            state.hasError_ListOfDynamicProjects = false;
        },
        [loadDataOfListOfDynamicProjects.rejected]: (state, action) => {
            state.isLoading_ListOfDynamicProjects = false;
            state.hasError_ListOfDynamicProjects = true;
        },

        // loadDataOfListOfProjects
        [loadDataOfListOfProjects.pending]: (state, action) => {
            state.isLoading_ListOfProjects = true;
            state.hasError_ListOfProjects = false;
        },
        [loadDataOfListOfProjects.fulfilled]: (state, action) => {
            state.listOfProjects = action.payload;
            state.isLoading_ListOfProjects = false;
            state.hasError_ListOfProjects = false;
        },
        [loadDataOfListOfProjects.rejected]: (state, action) => {
            state.isLoading_ListOfProjects = false;
            state.hasError_ListOfProjects = true;
        },

        // loadDataOfListOfStaticProjects
        [loadDataOfListOfStaticProjects.pending]: (state, action) => {
            state.isLoading_ListOfStaticProjects = true;
            state.hasError_ListOfStaticProjects = false;
        },
        [loadDataOfListOfStaticProjects.fulfilled]: (state, action) => {
            state.listOfStaticProjects = action.payload;
            state.isLoading_ListOfStaticProjects = false;
            state.hasError_ListOfStaticProjects = false;
        },
        [loadDataOfListOfStaticProjects.rejected]: (state, action) => {
            state.isLoading_ListOfStaticProjects = false;
            state.hasError_ListOfStaticProjects = true;
        },

                // loadDataOffListOfCurrentDisplayTrendingProject
        [loadDataOffListOfCurrentDisplayTrendingProject.pending]: (state, action) => {
            state.isLoading_ListOfCurrentDisplayTrendingProject = true;
            state.hasError_ListOfCurrentDisplayTrendingProject = false;
        },
        [loadDataOffListOfCurrentDisplayTrendingProject.fulfilled]: (state, action) => {
            state.listOfCurrentDisplayTrendingProject = action.payload;
            state.isLoading_ListOfCurrentDisplayTrendingProject = false;
            state.hasError_ListOfCurrentDisplayTrendingProject = false;
        },
        [loadDataOffListOfCurrentDisplayTrendingProject.rejected]: (state, action) => {
            state.isLoading_ListOfCurrentDisplayTrendingProject = false;
            state.hasError_ListOfCurrentDisplayTrendingProject = true;
        },

             // addProjectToDatabase
             [addProjectToDatabase.pending]: (state, action) => {
                state.isLoading_AddProjectToDatabase = true;
                state.hasError_AddProjectToDatabase = false;
            },
            [addProjectToDatabase.fulfilled]: (state, action) => {
                state.listOfProjects.data.push(action.payload); //Need to un comment when you just call the api
                state.isLoading_AddProjectToDatabase = false;
                state.hasError_ListOfCurrentDisplayTrendingProject = false;
            },
            [addProjectToDatabase.rejected]: (state, action) => {
                state.isLoading_AddProjectToDatabase = false;
                state.hasError_AddProjectToDatabase = true;
            },

             // updateDynamicProjectsList
             [updateDynamicProjectsList.pending]: (state, action) => {
                state.isLoading_UpdateDynamicProjectsList = true;
                state.hasError_UpdateDynamicProjectsList = false;
            },
            [updateDynamicProjectsList.fulfilled]: (state, action) => {
                state.listOfDynamicProjectsList.data = action.payload;
                state.isLoading_UpdateDynamicProjectsList = false;
                state.hasError_UpdateDynamicProjectsList = false;
            },
            [updateDynamicProjectsList.rejected]: (state, action) => {
                state.isLoading_UpdateDynamicProjectsList = false;
                state.hasError_UpdateDynamicProjectsList = true;
            },
    
             // updateStaticProjectsList
            [updateStaticProjectsList.pending]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = true;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.fulfilled]: (state, action) => {
                state.listOfStaticProjects.data = action.payload;
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.rejected]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = true;
            },

              // updateStaticProjectsList
            [updateStaticProjectsList.pending]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = true;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.fulfilled]: (state, action) => {
                state.listOfStaticProjects.data = action.payload;
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.rejected]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = true;
            },

            // updateStaticProjectsList
            [updateStaticProjectsList.pending]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = true;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.fulfilled]: (state, action) => {
                state.listOfStaticProjects.data = action.payload;
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.rejected]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = true;
            },

            // updateStaticProjectsList
            [updateStaticProjectsList.pending]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = true;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.fulfilled]: (state, action) => {
                state.listOfStaticProjects.data = action.payload;
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = false;
            },
            [updateStaticProjectsList.rejected]: (state, action) => {
                state.isLoading_UpdateStaticProjectsList = false;
                state.hasError_UpdateStaticProjectsList = true;
            },

            // updateProjectInDatabase
            [updateProjectInDatabase.pending]: (state, action) => {
                state.isLoading_UpdateProjectInDatabase = true;
                state.hasError_UpdateProjectInDatabase = false;
            },
            [updateProjectInDatabase.fulfilled]: (state, action) => {
                state.tempProjectDataHolder = action.payload;
                state.isLoading_UpdateProjectInDatabase = false;
                state.hasError_UpdateProjectInDatabase = false;
            },
            [updateProjectInDatabase.rejected]: (state, action) => {
                state.isLoading_UpdateProjectInDatabase = false;
                state.hasError_UpdateProjectInDatabase = true;
            },
    }
}

const projectManagerSlice = createSlice(options);
// export const projectManagerReducer =  projectManagerSlice.reducer;
const { reducer, actions } = projectManagerSlice;
export { reducer as projectManagerReducer }
export const {
    updateBasicInfoTempProjectDataHolder, updateMediaTempProjectDataHolder, updateByIdListOfStaticProjects, removeProjectByIdFromListOfDrfatProjects,
    addProjectInDynamicListOfProjects,
    removeProjectByIdFromDynamicListOfProjects
} = actions;

console.log(projectManagerSlice)