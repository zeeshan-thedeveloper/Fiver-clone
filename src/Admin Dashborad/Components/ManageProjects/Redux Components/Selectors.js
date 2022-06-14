export const selectAll=(state)=>{
    return state.projectManagerPanel
}
//project lists.
export const selectListOfProjects=(state)=>{
    return state.projectManagerPanel.listOfProjects;
}
export const selectListOfStaticProjects=(state)=>{
    return state.projectManagerPanel.listOfStaticProjects.data;
}
export const selectListOfDynamicProjectsList=(state)=>{
    return state.projectManagerPanel.listOfDynamicProjectsList.data;
}
export const selectListOfDraftProjects=(state)=>{
    return state.projectManagerPanel.listOfDraftProjects;
}
export const selectListOfCurrentDisplayTrendingProject=(state)=>{
    return state.projectManagerPanel.listOfCurrentDisplayTrendingProject.data;
}

//non list.. variabeles.
export const selectBasicInfo=(state)=>{
    return state.projectManagerPanel.tempProjectDataHolder.BasicInfo;
}
export const selectMedia=(state)=>{
    return state.projectManagerPanel.tempProjectDataHolder.Media;
}
export const selectLastUpdateDateAndTime=(state)=>{
    return state.projectManagerPanel.lastUpdateDateAndTime
}
export const selectLastChoosedDisplayMode=(state)=>{
    return state.projectManagerPanel.lastChoosedDisplayMode
}
export const selectLastDataUpdateTime=(state)=>{
    return state.projectManagerPanel.lastDataUpdateTime
}

export const  selectLastUpdateDateAndTimeOfListOfStaticProjects = (state)=>{
    return state.projectManagerPanel.listOfStaticProjects.lastUpdateDateAndTime
}
export const  selectLastUpdateDateAndTimeOfListOfDynamicProjectsList = (state)=>{
    return state.projectManagerPanel.listOfDynamicProjectsList.lastUpdateDateAndTime
}
export const  selectLastUpdateDateAndTimeOfListOfCurrentDisplayTrendingProject = (state)=>{
    return state.projectManagerPanel.listOfCurrentDisplayTrendingProject.lastUpdateDateAndTime
}