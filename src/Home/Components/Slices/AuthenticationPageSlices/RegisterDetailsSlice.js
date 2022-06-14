import { REGISTERDETAILS } from "./AuthenticationPageConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const sendUserDetailsForRegistration=createAsyncThunk(`${REGISTERDETAILS}/sendUserDetailsForRegistration`,
async (args,thunkAPI)=>{
    let requestType='POST';
    let endPoints='';
    let body=args;
    let returnType='JSON'
    let token=null;
    console.log(args)
    // send user details to api 
    //const response = await ApiRequest(requestType,endPoints,body,returnType,token)
    // if succesful return userdetails to store in redux
return args
})

const SliceOptions={
    name:`${REGISTERDETAILS}`,
    initialState:{
        hasError:false,
        isLoading:true,
        email:null,
        basicDetailsOfUser:{}
    },
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload
        }
    },
    extraReducers:{
        [sendUserDetailsForRegistration.pending]:(state,action)=>{
            state.isLoading=true;
            state.hasError=false;
        },
        [sendUserDetailsForRegistration.fulfilled]:(state,action)=>{
            state.basicDetailsOfUser=action.payload;
            state.isLoading=false;
            state.hasError=false;
        },[sendUserDetailsForRegistration.rejected]:(state,action)=>{
            state.isLoading=false;
            state.hasError=true;
        }
    }
}

//slice
const registerDetailsSlice=createSlice(SliceOptions);


// selectors
export const selectEmail=(state)=>state.registerDetails.email;

export const selectBasicDetailsOfUser=(state)=>state.registerDetails.basicDetailsOfUser;

// actions 
export const {setEmail} = registerDetailsSlice.actions;

// reducer
export default registerDetailsSlice.reducer