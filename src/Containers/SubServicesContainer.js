import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles, Box } from "@material-ui/core";

// footer
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";

// colors
import colors, { ColorGradient } from "../Theme/colors";

// custom components
import ServicePage from "../Home/Components/SubServicesPage/ServicesPage";


// navbar
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

//redux
import { useSelector } from "react-redux";

// styles
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },

  footer: {
    marginTop: "10%",
  },
  loginInForm: {
    backgroundColor: colors.white,
    paddingTop: "7%",
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%" : "25%",
  },
}));

function SubServicesContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const { height, width } = useWindowDimensions();
  const [packageContainerStickyNess, setPackageContainerStickyNess] =
    useState("");
  const [sticknessFlag, setSticknessFlag] = useState(true);
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  //redux
  const isSubServicesCardsLoaded = useSelector(
    (state) => state.subServices.isLoading
  );
  const isServicesWithSubServicesLoaded = useSelector(
    (state) => state.searchByCategory.loadServiceWithSubServicesIsLoading
  );

  useEffect(() => {
    if (scrollPosition > height * 0.9) {
      console.log("S:" + scrollPosition);
      setPackageContainerStickyNess("UnStickThePackageContainer");
    } else {
      setPackageContainerStickyNess("StickThePackageContainer");
    }
  }, [scrollPosition > height * 0.9]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handlers
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  const handelTabIndex = (event, index = 0) => {
    setCurrentSelectedTabIndex(index);
  };

  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);

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
            isComponentsLoaded={[
              isServicesWithSubServicesLoaded,
              isSubServicesCardsLoaded,
            ]}
          />
        </AppBar>
      </Grid>

      <Grid container style={{ marginTop: "10%" }}>
        <Grid xs={1} sm={1} md={1} item></Grid>
        <Grid xs={10} sm={10} md={10} container item>
          <ServicePage />
        </Grid>
        <Grid xs={1} sm={1} md={1} item></Grid>
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

export default SubServicesContainer;
