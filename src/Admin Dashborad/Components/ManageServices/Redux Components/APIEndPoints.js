import { ListOfServices, Service, ServiceOverViewChartData } from "./TempData";

export const DataLoader_ForListOfServices = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForListOfServices")
        setTimeout(() => {
            resolve(ListOfServices)
        }, 3000);
    })
}

export const DataLoader_ForServiceClicksOverViewChartData = (args)=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForServiceClicksOverViewChartData"+args)
        setTimeout(() => {
            resolve(ServiceOverViewChartData);
        }, 3000);
    })
}

export const DataUploader_AddServiceToDatabase = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataUploader_AddServiceToDatabase")
        setTimeout(() => {
            resolve(Service);
        }, 3000);
    })
}
