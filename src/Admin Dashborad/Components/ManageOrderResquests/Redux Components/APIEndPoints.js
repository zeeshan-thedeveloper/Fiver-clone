import { listDeclinedOrderRequests, listOfNewrequestRequests } from "./TempData";

export const  DataLoader_ForListOfNewOrderRequests = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfNewOrderRequests")
       setTimeout(() => {
           resolve(listOfNewrequestRequests)
       }, 3000);
   })
}

export const  DataLoader_ForListOfDeclinedOrderRequests = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfDeclinedOrderRequests")
       setTimeout(() => {
           resolve(listDeclinedOrderRequests)
       }, 3000);
   })
}
