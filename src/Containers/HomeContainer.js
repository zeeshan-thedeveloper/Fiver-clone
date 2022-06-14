import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles } from "@material-ui/core";

// custom components
import LatestProjects from "../Home/Components/HomePage/LatestProjects";
import Services from "../Home/Components/HomePage/Services";
import MainContainer from "../Home/Components/HomePage/MainContainer";
import MotivationalArea from "../Home/Components/HomePage/MotivationalArea";
import UserReview from "../Home/Components/HomePage/UserReviews";
import Technologies from "../Home/Components/HomePage/Technologies";
import WhatWeOffer from "../Home/Components/HomePage/WhatWeOffer";

// navbar
import CustomNavbar from "../CustomComponents/Layouts/Header/CustomNavbar";

// footer
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";

// colors
import colors, { ColorGradient } from "../Theme/colors";

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
import { useSelector, useDispatch } from "react-redux";

//styles
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  MainContainer: {
    backgroundColor: colors.primary,
    paddingTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "25%",
    paddingBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "2%" : "10%",
  },
  services: {
    marginTop: "3%",
  },
  Technologies: {
    marginTop: "3%",
  },
  latestProjects: {
    marginTop: "7%",
    backgroundImage: ColorGradient.lightSkyBlue,
  },
  whatWeOffer: {
    paddingTop: "3%",
  },
  userReview: {
    marginTop: "1%",
  },
  motivationalArea: {
    marginTop: "10%",
  },
  footer: {
    marginTop: "10%",
  },
}));

function HomeContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const { height, width } = useWindowDimensions();
  const [packageContainerStickyNess, setPackageContainerStickyNess] =
    useState("");
  const [sticknessFlag, setSticknessFlag] = useState(true);
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  //-------------------------------------------------------------------------------
  // for redux
  const isLatestProjectsLoaded = useSelector(
    (state) => state.latestProjects.isLoading
  );
  const isServicesLoaded = useSelector((state) => state.allServices.isLoading);
  const isTrendingTechnologyIconsLoaded = useSelector(
    (state) => state.trendingTechnologies.isLoading
  );
  const isLatestUserReviewsLoaded = useSelector(
    (state) => state.latestReviews.isLoading
  );
  const isServicesWithSubServicesLoaded = useSelector(
    (state) => state.searchByCategory.loadServiceWithSubServicesIsLoading
  );
  //-------------------------------------------------------------------------------
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

  return (
    <div className={classes.root}>
      {/* Header */}
      <Grid item xs={12}>
        <AppBar>
          <CustomNavbar
            handelTabIndex={handelTabIndex}
            packageContainerStickyNess={packageContainerStickyNess}
            navbarMenuOptions={navbarMenuOptions}
            isNavbarTabs={isNavbarTabs}
            navbarTabsOptions={navbarTabsOptions}
            isAvatar={isAvatar}
            isNavBarIconButtons={isNavBarIconButtons}
            drawerMenuOptions={drawerMenuOptions}
            darwerMenuExtraOptions={darwerMenuExtraOptions}
            drawerListItemAvatar={drawerListItemAvatar}
            // pass array for keeping record of components loading progress bar
            isComponentsLoaded={[
              isLatestProjectsLoaded,
              isTrendingTechnologyIconsLoaded,
              isLatestUserReviewsLoaded,
              isServicesLoaded,
              isServicesWithSubServicesLoaded
            ]}
          />
        </AppBar>
      </Grid>

      {/* MainContainer */}
      <Grid container spacing={0} className={classes.MainContainer}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <MainContainer />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      {/* Services*/}
      <Grid container spacing={0} className={classes.services}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Services />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      {/* Technologies */}
      <Grid container spacing={0} className={classes.Technologies}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Technologies />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      {/* projects */}
      <Grid container className={classes.latestProjects}>
        <Grid sm={1} md={2} item></Grid>
        <Grid item xs={12} sm={10} md={8}>
          <LatestProjects />
        </Grid>
        <Grid sm={1} md={2} item></Grid>
      </Grid>
      <Grid container spacing={0} className={classes.whatWeOffer}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <WhatWeOffer />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      {/*User reviews */}
      <Grid container className={classes.userReview}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <UserReview />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      {/* extra info area */}
      <Grid container spacing={0} className={classes.motivationalArea}>
        <Grid sm={1} md={1} item></Grid>
        <Grid item xs={12} sm={10} md={10}>
          <MotivationalArea />
        </Grid>
        <Grid sm={1} md={1} item></Grid>
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

export default HomeContainer;
