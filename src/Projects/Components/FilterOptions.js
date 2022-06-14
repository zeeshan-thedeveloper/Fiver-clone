//ReactJS
import PropTypes from "prop-types";

//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Button,
  Grid,
  useMediaQuery,
  Chip,
  Typography,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Custom Components
import { FilterByCategory } from "./FilterByCategory";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByRating } from "./FilterByRating";
import { FilterByDeliveryTime } from "./FilterByDeliveryTime";

//Styles

//Resources
import { lightBorder } from "../../Theme/borders";

const useStyles = makeStyles((theme) => ({
  container: {
    border: lightBorder,
  },
}));

export const FilterOptions = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <Box mb={5}>
      <Accordion elevation={0} className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Apply Filter- Reach your choice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterOptionContainer />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const filterStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const FilterOptionContainer = () => {
  const classes = filterStyles();
  const isItXs = useMediaQuery("(max-width: 599px)");

  // const dispatch = useDispatch();

  function handleApplyFilters() {
    alert("Apply");
  }
  function handleClearFilters() {
    // dispatch(filterByCategory(null));
    // dispatch(filterByPrice(null));
    // dispatch(filterByStatus(null));
  }

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Box mt={1}>
        <Grid item xs={11} sm={4} md={4} lg={4} xl={4}>
          <FilterByCategory />
        </Grid>
        </Box>
        <Grid item xs={1} />
        <Box mt={1}>
        <Grid item xs={11} sm={4} md={4} lg={4} xl={4}>
          <FilterByPrice />
        </Grid>
        </Box>
        <Box mt={1}>
        <Grid item xs={1} />
        <Grid item xs={11} sm={4} md={4} lg={4} xl={4}>
          <FilterByDeliveryTime />
        </Grid>
        </Box>
      </Grid>
      <Box mt={1}>
      <Divider />
      </Box>
      <Box display="flex" mt={3}>
        <Box flex="1"></Box>
        <Box display="flex">
          <Box mr={2}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleClearFilters}
            >
              Clear Filters
            </Button>
          </Box>

          <Box>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
      <FilterChips />
      </Box>
    </Box>
  );
};

const FilterChips = () => {
  // const category = useSelector(selectFilteredCategory);
  // const price = useSelector(selectFilteredPrice);
  // const status = useSelector(selectFilteredStatus);

  const [filters, setFilters] = useState([]);
  const chipData = [
    {
      title: "category",
      key: "category",
    },
    {
      title: "price",
      key: "price",
    },
    {
      title: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    setFilters(chipData);
  }, []);

  function handleRelatedProjectDelete(chipToDelete) {
    setFilters((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  }

  return (
    <Box>
      {filters
        ? filters.map((data) => {
            return data.title ? (
              <Chip
                style={{ marginRight: "1rem" }}
                key={data.key}
                label={data.title}
                onDelete={() => {
                  handleRelatedProjectDelete(data);
                }}
              />
            ) : (
              ""
            );
          })
        : ""}
    </Box>
  );
};
