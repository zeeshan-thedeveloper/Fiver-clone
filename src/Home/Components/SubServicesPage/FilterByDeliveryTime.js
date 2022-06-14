//ReactJS
import React from 'react'

//Material-UI core
import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";

//Material-UI styles

//Icons

//Style and theme

//Resources

const ratingStyleHook = makeStyles((theme) => ({

  elements:{
    display:"inline",
  },
  ratingContainer:{
    flex:1
  }
  }));
  
export const FilterByDeliveryTime = () => {

    const classes = ratingStyleHook();
    const [value, setValue] = React.useState("");
    
    const options=[
        {
            optionTitle:"1 day",
            value:1,
        },
        {
            optionTitle:"3 days",
            value:3,
        },
        {
            optionTitle:"5 days",
            value:5,
        },
        {
            optionTitle:"7 days",
            value:7
        },
        {
            optionTitle:"15 days",
            value:15
        },
        {
            optionTitle:"1 month",
            value:30
        },
        {
            optionTitle:"1-3 months",
            value:90
        },
    ]
    const handleRadioChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };
    
    const isItXsOrSm = useMediaQuery("(max-width: 959px)");
    return (
      <Box>
               <Typography variant="h6">Deliver Time (days)</Typography>
        <Box display={isItXsOrSm?"":"flex"}>
        <Box className={classes.ratingContainer}>
        <RadioGroup
          aria-label="Rating"
          name="ratingOptions"
          value={value}
          onChange={handleRadioChange}
          className={classes.elements}
          
        >
          {options.map(({optionTitle, value}) => {
            return (
              <FormControlLabel
                value={""+value}
                control={<Radio size="small" color="primary"/>}
                label={<Typography>{optionTitle}</Typography>}
              />
            );
          })}
        </RadioGroup>
        </Box>
        <Box mt={isItXsOrSm?1:0}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          fullWidth
        >
          Clear Filters
        </Button>
        </Box>
        </Box>
      </Box>
        
    );
  };