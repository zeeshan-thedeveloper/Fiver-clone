import React from "react";

import {
  TextField,
  Button,
  Typography,
  Slider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  scroller: {
    flexGrow: 0,
  },
  priceRangeFormTextFields: {
    [theme.breakpoints.down("sm")]: {
      width: "48%",
      marginTop: "1rem",
    },
    marginLeft: "2%",
  },
  priceRangeFormButtons: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-0.6rem",
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "48%",
      marginTop: "1rem",
    },
    marginLeft: "2%",
  },
}));

export const FilterByPrice = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.priceRangeForm} noValidate autoComplete="off">
        <Typography variant="h6">Price Range $</Typography>
        <PriceRange />

        <TextField
          label="Min"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.priceRangeFormTextFields}
        />
        <TextField
          label="Max"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.priceRangeFormTextFields}
        />
        <Button
          variant="contained"
          className={classes.priceRangeFormButtons}
          style={{ backgroundColor: "#011c38", color: "white" }}
          size="small"
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className={classes.priceRangeFormButtons}
          color="secondary"
          size="small"
        >
          Clear
        </Button>
      </form>
    </div>
  );
};

const stylesHook = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "2px",
    },
    width: "18rem",
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const PriceRange = () => {
  const classes = stylesHook();
  const [value, setValue] = React.useState([5, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
      className={classes.root}
    />
  );
};