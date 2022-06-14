import React from 'react'
import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const ratingStyleHook = makeStyles((theme) => ({

  elements:{
    display:"inline",
  },
  ratingContainer:{
    flex:1
  }
  }));
  
export const FilterByRating = () => {
    const classes = ratingStyleHook();
    const [value, setValue] = React.useState("");
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
    };
    
    const isItXsOrSm = useMediaQuery("(max-width: 959px)");
    return (
      <Box>
               <Typography variant="h6">Ratings</Typography>
        <Box display={isItXsOrSm?"":"flex"}>
        <Box className={classes.ratingContainer}>
        <RadioGroup
          aria-label="Rating"
          name="ratingOptions"
          value={value}
          onChange={handleRadioChange}
          className={classes.elements}
          
        >
          {[1, 2, 3, 4].map((elm, ind) => {
            return (
              <FormControlLabel
                value={"d" + ind}
                control={<Radio size="small" color="primary"/>}
                label={<Rating value={ind + 1} size="small" readOnly />}
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