import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { fontSize } from '@material-ui/system';
import { fontFamily } from '../../../Theme/fonts';
import { InputAdornment } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import '../Styles/TextFieldStyles.css'

/**
 * 
 * fontSize
 * fontWeight
 * value : must be hook
 * setValue : must be of hook
 * height
 * width
 * labelFontSize
 * labelFontColor
 * labrlFontWeight
 */

function SimpleTextFields({id,label,value,setValue,fontSize,fontWeight,labelFontSize,labelFontWeight,labelFontColor,width,height,isReadOnly,...props}) {
    const classes=useStyles();
    return (
        <div >
             <TextField 
             id={id}
             label={label}
             value={value}
             onChange={(e)=>{
                setValue(e.target.value)
             }}
            
             variant="outlined" 
                inputProps={
                    {
                       
                        readOnly:isReadOnly,
                        style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:fontWeight,width:width,height:height}
                    }}
                InputLabelProps={
                    {
                        style:{fontFamily:fontFamily.fontFamily_1,fontWeight:labelFontWeight,color:labelFontColor,fontSize:labelFontSize}
                    }}
                {...props}  
             />
             
        </div>

    );
}

function RoundedTextFields({id,label,value,setValue,fontSize,fontWeight,labelFontSize,labelFontWeight,labelFontColor,width,height,isReadOnly=false,...props}) {
    const classes=useStyles();
    return (
        <div >
             <TextField 
             id={id}
             label={label}
             value={value}
             onChange={(e)=>{
                setValue(e.target.value)
             }}
             className="inputRounded"
             variant="outlined" 
            inputProps={
                {
                    readOnly:isReadOnly,
                    style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:fontWeight,width:width,height:height}
               }}
            InputLabelProps={
                {
                    style:{fontFamily:fontFamily.fontFamily_1,fontWeight:labelFontWeight,color:labelFontColor,fontSize:labelFontSize}
               }}
             {...props}  

             />
            
        </div>

    );
}


/**
 * 
 * fontSize
 * fontWeight
 * value : must be hook
 * setValue : must be of hook
 * height
 * width
 * labelFontSize
 * labelFontColor
 * labrlFontWeight
 * maxRows
 */


function MultiLineTextFields({id,label,value,setValue,fontSize,fontWeight,labelFontSize,labelFontWeight,labelFontColor,width,height,isReadOnly=false,...props}) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
              <TextField 
             id={id}
             label={label}
             value={value}
             onChange={(e)=>{
                setValue(e.target.value)
             }}
             multiline={true}
             rows={props.rows}
             variant="outlined"

             inputProps={
                {
                    readOnly:isReadOnly,
                    style:{fontFamily:fontFamily.fontFamily_1,fontSize:fontSize,fontWeight:fontWeight,width:width,height:height}
               }}
            InputLabelProps={
                {
                    style:{fontFamily:fontFamily.fontFamily_1,fontWeight:labelFontWeight,color:labelFontColor,fontSize:labelFontSize}
               }}
             {...props}  

             />
        </div>

    );
}

const useStyles = makeStyles((theme)=>({
    container:{
        borderRadius:10
    },
    textFieldStyles:{
       
    },
   
}))


export  {SimpleTextFields,RoundedTextFields,MultiLineTextFields};