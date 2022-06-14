
import { LastChoosedDisplayMode, LastDataUpdateTime, LastUpdateDateAndTime, ListOfCurrentDisplayedTrendingProjects, ListOfDraftProjects, ListOfDynamicProjects, ListOfProjects, ListOfStaticProjects } from "./TempData";

export const DataLoader_ForDataOfListOfProjects = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfListOfProjects")
        setTimeout(() => {
            resolve(ListOfProjects)
        }, 3000);
    })
}

export const DataLoader_ForDataOfListOfDraftProjects = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfListOfDraftProjects")
        setTimeout(() => {
            resolve(ListOfDraftProjects)
        }, 3000);
    })
}
export const DataLoader_ForDataOfListOfStaticProjects = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfListOfStaticProjects")
       
        setTimeout(() => {
            resolve(ListOfStaticProjects)
        }, 3000);
    })
}
export const DataLoader_ForDataOfListOfDynamicProjectsList = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfListOfDynamicProjectsList")
       
        setTimeout(() => {
            resolve(ListOfDynamicProjects)
        }, 3000);
    })
}
export const DataLoader_ForDataOfLastUpdateDateAndTime = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfLastUpdateDateAndTime")
       
        setTimeout(() => {
            resolve(LastUpdateDateAndTime)
        }, 3000);
    })
}
export const DataLoader_ForDataOfLastChoosedDisplayMode = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfLastChoosedDisplayMode")
        setTimeout(() => {
            resolve(LastChoosedDisplayMode)
        }, 3000);
    })
}
export const DataLoader_ForDataOfLastDataUpdateTime = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfLastDataUpdateTime")
       
        setTimeout(() => {
            resolve(LastDataUpdateTime)
        }, 3000);
    })
}

export const DataLoader_ForDataOfListOfCurrentDisplayTrendingProject = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfLastDataUpdateTime")
        setTimeout(() => {
            resolve(ListOfCurrentDisplayedTrendingProjects);
        }, 3000)
    })
}
