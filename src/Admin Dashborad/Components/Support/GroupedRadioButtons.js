import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core';
import { fontFamily } from '../../../Theme/fonts';
/**
 * c
 * 
 * const listOfOptions_RadioBoxes = [
        {
            optionLabel:"Style 1",
            optionValue:"1",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Style 2",
            optionValue:"2",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Style 3",
            optionValue:"3",
            radioBtnColor:'secondary'
        },
     
        
    ]
    setValue : func
    value : hook..
    
 */

function GroupedRadioButtons(props) {
    const classes=useStyles();
   
    return (
        <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="top"
            value={props.value}
            onChange={(e)=>{
                props.setValue(e.target.value);
            }}
        >
         
          {
              props.listOfOptions.map((item,index)=>{
                return(
                    <FormControlLabel 
                    classes={{
                        label:classes.btn
                    }}
                     value={item.optionValue} control={<Radio color={item.radioBtnColor} />} label={item.optionLabel} />
                )
              })
          }

        </RadioGroup>

      </FormControl>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    btn:{
        fontFamily:fontFamily.fontFamily_1,
        // fontWeight:'bold',
        fontSize:'1rem'
    }
}))

export default GroupedRadioButtons;