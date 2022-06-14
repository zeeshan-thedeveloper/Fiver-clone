import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {lightBorder} from '../../../Theme/borders'
import colors from "../../../Theme/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <h4>{children}</h4>
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function SecondaryNavbar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      border:  props.packageContainerStickyNess === "StickThePackageContainer"
      ? colors.primary
      : lightBorder,
    },
    appbar: {
      backgroundColor:
        props.packageContainerStickyNess === "StickThePackageContainer"
          ? colors.primary
          : colors.highlighter,
      boxShadow: "none",
      transition: "background-color 2s ease-in",
      WebkitTransition: "background-color 2s ease-in",
      MozTransition: "background-color 2s ease-in",
    },
    tabs: {
      color:
        props.packageContainerStickyNess === "StickThePackageContainer"
          ? "#f8f9fa"
          : "rgba(0, 0, 0, 0.87)",
      transition: "color 2s ease-in",
      WebkitTransition: "color 2s ease-in",
      MozTransition: "color 2s ease-in",
    },
    indicator: {
      backgroundColor: "#ea6645",
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handelTabChangeEvent(event, newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="black"
        classes={{ root: classes.appbar }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          aria-label="scrollable force tabs example"
          classes={{ root: classes.tabs, indicator: classes.indicator }}
        >
          {props.navbarTabsOptions.map(({ id, label }) => (
            <Tab className="TabTextFonts" label={label} {...a11yProps(id)} />
          ))}
        </Tabs>
      </AppBar>

      {/* panels  which are not decided yet*/}
      {/* {props.navbarTabsOptions.map((item) => (
        <TabPanel value={value} index={item.id}>
          {item.panel()}
        </TabPanel>
      ))} */}
    </div>
  );
}
