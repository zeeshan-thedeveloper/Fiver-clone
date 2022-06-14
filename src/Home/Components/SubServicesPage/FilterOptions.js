//ReactJS
import React, { useState } from "react";
import PropTypes from "prop-types";

//Material-UI core
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
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
import { FilterByAttribues } from "./FilterByAttributes";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByRating } from "./FilterByRating";
import { FilterByDeliveryTime } from "./FilterByDeliveryTime";

//Styles

//Resources

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  scroller: {
    flexGrow: 0,
  },
  heading:{
    fontFamily:"verdana",
    fontWeight:"bold",
    fontSize:"20px"
  },
  appBar:{
    zIndex:1
  }
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
      <Accordion elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Apply Filter- Reach your choice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AppBar position="static" className={classes.appBar} color="default" elevation={0}>
            <Tabs
              classes={{ root: classes.root, scroller: classes.scroller }}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant={"scrollable"}
              scrollButtons={"on"}
            >
              <Tab label="Category" {...a11yProps(0)} />
              <Tab label="Attributes" {...a11yProps(1)} />
              <Tab label="Price" {...a11yProps(2)} />
              <Tab label="Ratings" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Delivery Time" {...a11yProps(5)} />
            </Tabs>

          <TabPanel value={value} index={0}>
            <FilterByCategory />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FilterByAttribues />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FilterByPrice />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <FilterByRating />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <h4>UnKnown Filter</h4>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <FilterByDeliveryTime />
          </TabPanel>
          </AppBar>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};