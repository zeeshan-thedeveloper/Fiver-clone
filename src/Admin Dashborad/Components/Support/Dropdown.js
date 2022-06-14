import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fontFamily } from '../../../Theme/fonts';
/**
 * 
 *

const listOfOptions_ForDropDown=[
        {
            optionTitle:"Last Month",
            optionValue:0
        },
        {
            optionTitle:"Last Week",
            optionValue:1
        },
        {
            optionTitle:"Last Day",
            optionValue:2
        },
        {
            optionTitle:"Last Hour",
            optionValue:3
        },
        
    ]
   label={""}
   value : mustBeHook
   setValue: func of hook

         <Dropdown listOfOptions={listOfOptions_ForDropDown} label={"History"} value={selectedValue} setValue={setSelectedValue}/>
             
 */
function Dropdown({label,value,...props}) {
  const classes=useStyles();

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" className={classes.labelStyle}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label={label}
          className={classes.selecteStyle}
          props
        >
          
          {
              props.listOfOptions.map((item,index)=>{
                  return(
                        <MenuItem className={classes.menuItemStyle} value={item.optionValue}>{item.optionTitle}</MenuItem>
                  )
              })
          }
        </Select>
      </FormControl>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 130,
      width:'100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    labelStyle:{
        fontFamily:fontFamily.fontFamily_1,
        fontWeight:'bold'
    },
    menuItemStyle:{
        fontFamily:fontFamily.fontFamily_1,
        fontWeight:'bold'
    },
    selecteStyle:{
        fontFamily:fontFamily.fontFamily_1,
        fontWeight:'bold'
    },
    
  }));



export default Dropdown;