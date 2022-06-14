import React,{useState} from 'react';
// function FilterMotor(props) {
   
//     const [results,setResults]=useState([]);

//     const handelApply = ()=>{
//         FilterEngine(dataToFilter,results);
//     }
    
//     const [searchKeyPairs,setSearchKeyPairs] =useState([
//         {
//             withRespectTo:"projectService", //This will contain value by which we have to sort. these must me keys of the data object
//             values:['Desktop App'],
//             typeofValue:"Array" //Array
//         },
//         {
//             withRespectTo:"projectSubService", 
//             values:['React Js'],
//             typeofValue:"Array" //Array
//         },
//         {
//             withRespectTo:"projectPublishDate", 
//             typeofValue:"Object", //Object
//             values:{
//                 month:"4",
//                 date:"3",
//                 year:"2019",
//                 day:"Monday",
//             }

//         },
//         {
//             withRespectTo:"projectRatingStars", 
//             typeofValue:"SingleValueInteger", //SingleValueInteger
//             values:3
//         },
//         {
//             withRespectTo:"projectEstimatedPrice", 
//             typeofValue:"Range", //Range : int
//             values:[2,39]
//         },

        
//     ]);


//     const MaintainFilter=(withRespectTo,typeofValue,values)=>
//     {
//         switch (typeofValue) {
//             case "Range":

//                 break;
//             case "SingleValueInteger":

//                 break;
//             case "Object":

//                 break;
//             case "Array":

//                 break;

//             default:
//                 alert("Please give right type value for maitaining filter")
//                 break;
//         }
//     }


import produce from 'immer';
const requiredMatchPercentage = 100;

const FilterEngine = (dataToFilter,searchKeyPairs)=>{

    let respoonse =  produce(dataToFilter,draft=>{
        draft = dataToFilter.map((dataItem,index_data_to_filter)=>{
                let numberOfTimesRequired=0;
                let numberOfTimesMatched=0;
                console.log("Item : ----------------------")
                searchKeyPairs.map((searchKeyPairItem,index_key_pair)=>{
                    if(searchKeyPairItem.typeofValue==="Array")
                                        {
                                            numberOfTimesRequired++; //This size must be equal to number of items in below filter array.
                                            // This will match in a way that at least one value from array of values should match from all arrays.
                                            let flag = true;
                                            for(let i=0;i<searchKeyPairItem.values.length;i++)
                                            {
                                                if(dataItem[searchKeyPairItem.withRespectTo]===searchKeyPairItem.values[i])
                                                {
                                                   console.log(`Key: ${searchKeyPairItem.withRespectTo} matched for item index : ${index_data_to_filter+1}`)
                                                   numberOfTimesMatched++;
                                                   flag=false;
                                                   break;
                                                }
                                            }
                                            if(flag)
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} Not matched for item index : ${index_data_to_filter+1}`)                
                                            }
                                        }
                                        else if (searchKeyPairItem.typeofValue==="Object")
                                        {
                                            // This will match in way that whole values object should be matched.
                                            let targetValue ="";
                                            let currentValue="";
                                            numberOfTimesRequired++;
                                            for (const key in dataItem[searchKeyPairItem.withRespectTo]) {
                                                targetValue+=dataItem[searchKeyPairItem.withRespectTo][key]; 
                                            }
                                            for (const key in searchKeyPairItem.values) {
                                                currentValue+=searchKeyPairItem.values[key];
                                            }
                    
                                            if(targetValue===currentValue)
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} matched for item index : ${index_data_to_filter+1}`)
                                                numberOfTimesMatched++;
                                            }else{
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} Not matched for item index : ${index_data_to_filter+1}`)
                                            }
                    
                                        }
                                        else if(searchKeyPairItem.typeofValue==="SingleValueInteger")
                                        {
                                          
                                            numberOfTimesRequired++;
                                           
                                            if(searchKeyPairItem.values===dataItem[searchKeyPairItem.withRespectTo])
                                            {
                                               console.log(`Key: ${searchKeyPairItem.withRespectTo} matched for item index : ${index_data_to_filter+1}`)
                                               numberOfTimesMatched++;     
                                            }
                                            else
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} Not matched for item index : ${index_data_to_filter+1}`)
                                            }
                                        }
                                        else if(searchKeyPairItem.typeofValue==="SingleValueString")
                                        {
                                          
                                            numberOfTimesRequired++;
                                           
                                            if(searchKeyPairItem.values===dataItem[searchKeyPairItem.withRespectTo])
                                            {
                                               console.log(`Key: ${searchKeyPairItem.withRespectTo} matched for item index : ${index_data_to_filter+1}`)
                                               numberOfTimesMatched++;     
                                            }
                                            else
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} Not matched for item index : ${index_data_to_filter+1}`)
                                            }
                                        }
                                        else if(searchKeyPairItem.typeofValue==="Range")
                                        {
                                            // [Min,Max]
                                            numberOfTimesRequired++;
                                            if((dataItem[searchKeyPairItem.withRespectTo]>=searchKeyPairItem.values[0]) && (dataItem[searchKeyPairItem.withRespectTo]<=searchKeyPairItem.values[1]))
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} matched for item index : ${index_data_to_filter+1}`)
                                                numberOfTimesMatched++;
                                            }
                                            else
                                            {
                                                console.log(`Key: ${searchKeyPairItem.withRespectTo} Not matched for item index : ${index_data_to_filter+1}`)          
                                            }
                                            
                                        }
                });//inner map
                const percentage = (parseFloat(numberOfTimesMatched)/parseFloat(numberOfTimesRequired))*100;
                console.log("Match percentage is : "+percentage);
                if(percentage>=requiredMatchPercentage)
                return(dataItem)
                
        });//outer map
        return draft
    });

    return respoonse.filter(function( element ) {
        return element !== undefined;
     });
}

export {FilterEngine as default};