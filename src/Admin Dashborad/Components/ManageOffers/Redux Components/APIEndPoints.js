import { listOfAllOffers } from "./TempData";

export const DataLoader_ListOfAllOffers = ()=>{
    return new Promise(function(resolve,rejected){
        console.log("A call has arrived to DataLoader_ForDataOfListOfDraftProjects")
        setTimeout(() => {
            resolve(listOfAllOffers)
        }, 3000);
    })
}
