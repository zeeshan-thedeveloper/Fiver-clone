import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useMediaQuery } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import colors, { ColorGradient } from "../../../Theme/colors";
import Careers from "./Careers";
import TermsAndServices from "./TermsAndServices";
import OurTeam from "./OurTeam";
import ContactUsGlobalForm from "./ContactUsGlobalForm";
import AboutUs from "./AboutUs";
import FAQS from "./FAQS";
import { lightBorder } from "../../../Theme/borders";
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

const AboutUsMenuStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: "5%",
    backgroundColor: colors.white,
  },

  appBar: {
    backgroundColor: colors.white,
    boxShadow: "none",
  },
  contactForm: {
    paddingTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "3%" : "10%",
    backgroundImage:ColorGradient.lightSkyBlue,
    borderTop:lightBorder,
    borderRadius:10
  },
}));

export default function AboutUsMenu() {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  const classes = AboutUsMenuStyles(isDesktopOrLaptopOrTabletScreen);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="About Us Menu"
        >
          <Tab label="About Us" {...a11yProps(0)} />
          <Tab label="Our Team" {...a11yProps(1)} />
          <Tab label="Careers" {...a11yProps(2)} />
          <Tab label="Terms & Services" {...a11yProps(3)} />
          <Tab label="FAQS" {...a11yProps(4)} />
          <Tab label="Contact Us" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AboutUs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OurTeam />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Careers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TermsAndServices totalGrid={8} />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <FAQS />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container className={classes.contactForm} spacing={0}>
          <Grid item md={3} xs={1} sm={2}></Grid>
          <Grid item md={6} xs={10} sm={8}>
            <ContactUsGlobalForm />
          </Grid>
          <Grid item md={3} xs={1} sm={2}></Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
