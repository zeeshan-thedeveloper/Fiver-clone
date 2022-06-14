import {listOfNewReviews,listOfPublishedReviews,listOfDiscardedReviews} from './TempData'

export const  DataLoader_ForListOfNewReviews = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfNewReviews")
       setTimeout(() => {
           resolve(listOfNewReviews)
       }, 3000);
   })
}

export const  DataLoader_ForListOfPublishedReviews = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfPublishedReviews")
       setTimeout(() => {
           resolve(listOfPublishedReviews)
       }, 3000);
   })
}

export const  DataLoader_ForListOfDiscardedReviews = ()=>{
    return new Promise(function(resolve,rejected){
       console.log("A call has arrived to DataLoader_ForListOfDiscardedReviews")
       setTimeout(() => {
           resolve(listOfDiscardedReviews)
       }, 3000);
   })
}


