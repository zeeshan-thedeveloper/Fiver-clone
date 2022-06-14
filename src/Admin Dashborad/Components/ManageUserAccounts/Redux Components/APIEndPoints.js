import { listOfActiveUserAccounts, listOfBlockedUserAccounts, NumberOfAccountsWithRespectToStatusChart } from "./TempData";
import {ListOfDeliveredOrders} from '../../ManageOrders/Redux Components/TempData'
import {listOfNewrequestRequests} from '../../ManageOrderResquests/Redux Components/TempData'
export const  DataLoader_ForListActiveUserAccounts = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListActiveUserAccounts")
       setTimeout(() => {
           resolve(listOfActiveUserAccounts)
       }, 3000);
   })
}

export const  DataLoader_ForListBlockedUserAccounts = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListBlockedUserAccounts")
       setTimeout(() => {
           resolve(listOfBlockedUserAccounts)
       }, 3000);
   })
}

export const  DataLoader_ForListOfOffers = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfOffers")
       setTimeout(() => {
           resolve(listOfNewrequestRequests)
       }, 3000);
   })
}

export const  DataLoader_ForListOfOders = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfOders")
       setTimeout(() => {
           resolve(ListOfDeliveredOrders)
       }, 3000);
   })
}

export const  DataLoader_ForNumberOfAccountsWithRespectToStatusChart = (args)=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForNumberOfAccountsWithRespectToStatusChart")
       setTimeout(() => {
           resolve(NumberOfAccountsWithRespectToStatusChart)
       }, 3000);
   })
}


