export const selectAll=(state)=>{
    return state.serviceManagerPanel
}

export const selectListOfServices=(state)=>{
    return state.serviceManagerPanel.listOfServices
}
export const selectTempServiceDataHolderBasicInfo=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.BasicInfo
}
export const selectTempServiceDataHolderMedia=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.Media
}
export const selectTempServiceDataHolderPackagesBasic=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.Packages.Basic
}
export const selectTempServiceDataHolderPackagesStandard=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.Packages.Standard
}
export const selectTempServiceDataHolderPackagesPremium=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.Packages.Premium
}
export const selectServiceClicksOverViewChartData=(state)=>{
    return state.serviceManagerPanel.serviceClicksOverViewChartData
}

export const selectisEditingForPakcagePanel=(state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.Packages.isEditingEnabled
}

export const selectIsBeingUsedInEditor = (state)=>{
    return state.serviceManagerPanel.tempServiceDataHolder.isBeingUsedInEditor
}








