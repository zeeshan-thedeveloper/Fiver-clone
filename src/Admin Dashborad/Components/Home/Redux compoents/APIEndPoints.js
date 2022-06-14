import produce from "immer";
import {

        OrdersOverViewChartData,
        AccountsOverViewChartData,
        ServiceOverViewChartData,
        RatedOrdersPercentageData,
        RatingsData, SummuryData,

    } from "./TempData";

export const DataLoader_ForLoadOrdersOverViewChartData = (args)=>{
    return new Promise(function(resolve,rejected){
        console.log(args)
        setTimeout(() => {
            resolve(OrdersOverViewChartData);
        }, 3000);
    })
}

export const DataLoader_ForLoadAccountsOverViewChartData = (args)=>{
    return new Promise(function(resolve,rejected){
        console.log(args)
        setTimeout(() => {
            resolve(AccountsOverViewChartData);
        }, 3000);
    })
}

export const DataLoader_ForLoadServiceOverViewChartData = (args)=>{
    
    return new Promise(function(resolve,rejected){
        console.log(args)
        setTimeout(() => {
            resolve(ServiceOverViewChartData);
        }, 3000);
    })
}

export const DataLoader_ForSummuryData = ()=>{
    
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(SummuryData);
        }, 2000);
       
    })
}

export const DataLoader_ForRatingsData = ()=>{
    console.log("A call came to load rating data")
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(RatingsData);
        }, 3000);
    })
}

export const DataLoader_ForRatedOrdersPercentageData = ()=>{
    return new Promise(function(resolve,rejected){
        setTimeout(() => {
            resolve(RatedOrdersPercentageData);
        }, 3000);
    })
};