import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles } from "@material-ui/core";

//footer
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";

//colors
import colors, { ColorGradient } from "../Theme/colors";

// custom components
import ContactUsGlobalForm from "../Home/Components/AboutPage/ContactUsGlobalForm";

// navabr
import CustomNavbar from "../CustomComponents/Layouts/Header/CustomNavbar";
// navbar parameters
import {
  navbarMenuOptions,
  drawerMenuOptions,
  darwerMenuExtraOptions,
  navbarTabsOptions,
  drawerListItemAvatar,
  isNavbarTabs,
  isNavBarIconButtons,
  isAvatar,
} from "./SupportFiles/HomePageNavbarParameters";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  footer: {
    marginTop: "10%",
  },

  contactForm: {
    paddingTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "10%" : "35%",
     
  },
}));

function ContactUsContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const { height, width } = useWindowDimensions();
  const [packageContainerStickyNess, setPackageContainerStickyNess] =
    useState("");
  const [sticknessFlag, setSticknessFlag] = useState(true);
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    if (scrollPosition > height * 0.9) {
      console.log("S:" + scrollPosition);
      setPackageContainerStickyNess("UnStickThePackageContainer");
    } else {
      setPackageContainerStickyNess("StickThePackageContainer");
    }
  }, [scrollPosition > height * 0.9]);

  const handelTabIndex = (event, index = 0) => {
    setCurrentSelectedTabIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  // navbr options
  const navbarMenuOptions = [
    { title: "About", route: "about" },
    { title: "Conatct", route: "contact" },
    { title: "Login", route: "login" },
    { title: "Register", route: "register" },
  ];

  return (
    <div className={classes.root}>
      {/* Header */}
      <Grid item xs={12}>
        <AppBar>
          <CustomNavbar
            handelTabIndex={handelTabIndex}
            packageContainerStickyNess={packageContainerStickyNess}
            navbarMenuOptions={navbarMenuOptions}
            isNavbarTabs={false}
            isAvatar={false}
            isNavBarIconButtons={false}
            drawerMenuOptions={drawerMenuOptions}
            darwerMenuExtraOptions={darwerMenuExtraOptions}
            drawerListItemAvatar={drawerListItemAvatar}
            // pass array for keeping record of components loading progress bar
            isComponentsLoaded={[]}
          />
        </AppBar>
      </Grid>

      {/** Contact form */}
      <Grid container className={classes.contactForm} spacing={0}>
        <Grid item md={3} xs={1} sm={2}></Grid>
        <Grid item md={6} xs={10} sm={8}>
          <ContactUsGlobalForm />
        </Grid>
        <Grid item md={3} xs={1} sm={2}></Grid>
      </Grid>

      {/* footer*/}
      <Grid container className={classes.footer} spacing={0}>
        <Grid item md={12} xs={12} sm={12}>
          {isDesktopOrLaptopOrTabletScreen ? (
            <DesktopFooter />
          ) : (
            <MobileFooter />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUsContainer;
