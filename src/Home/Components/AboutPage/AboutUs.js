import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AppBar, makeStyles } from "@material-ui/core";
import colors, { ColorGradient } from "../../../Theme/colors";
import bg from "../../CODEINDNA.png";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// strings Constants
import {COMPANY_OVERVIEW,COMPANY_OVERVIEW_TITLE,ABOUTUS_EXPLORE_TITLE} from '../../Strings/AboutUsStrings'

// styles
const AboutUsStyles = makeStyles(() => ({
  media: {
    maxWidth: `100%`,
    height: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? 300 : 100,
  },
  companyOverView: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "8%",
    alignItems: "center",
  },
  mediaContainer: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "8%",
  },
  overViewMedia: {
    maxWidth: "80%",
  },
  contact: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "8%",
  },
}));


// About Us component
const AboutUs = (props) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = AboutUsStyles(isDesktopOrLaptopOrTabletScreen);

  // handlers
  const handleBuyProjectsClick=()=>{
    alert(`naviagate to nadir's page`)
  }
  const handleBuyServicesClick=()=>{
    alert(`navigate to nigeeta's page`)
  }
  return (
    <Grid container justifyContent="center">
      <Grid item md={12} xs={12} sm={12}>
        <img className={classes.media} src={bg} />{" "}
      </Grid>
      <Grid item container justifyContent="center">
        <Grid item md={1} xs={1} sm={2}></Grid>
        <Grid
          item
          md={5}
          xs={10}
          sm={5}
          container
          className={classes.companyOverView}
        >
          <SmallHeading title={COMPANY_OVERVIEW} margin={"0%"} />
          <p>
           {COMPANY_OVERVIEW_TITLE}
          </p>
        </Grid>
        <Grid
          item
          md={5}
          xs={10}
          sm={5}
          className={classes.mediaContainer}
          container
          alignContent="center"
          justifyContent="center"
        >
          <img
            className={classes.overViewMedia}
            src="https://cdn3.f-cdn.com/build/css/images/about-us/overview-company-overview.jpg"
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "lightblue",
          marginTop: "5%",
          width: "100%",
          height: 400,
        }}
      >
        {/* <Map
          google={props.google}
          zoom={8}
          style={{ width: "100%", height: 400 }}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map> */}
      </Grid>
      <Grid
        container
        justifyContent="center"
        style={{
          backgroundImage: ColorGradient.lightSkyBlue,
          marginTop: "2%",
          borderRadius: 10,
        }}
      >
        <Grid
          item
          container
          justifyContent="center"
          className={classes.contact}
        >
          <SmallHeading
            title={ABOUTUS_EXPLORE_TITLE}
            margin={"0%"}
            color={colors.secondary}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <RoundButton
            title={"Buy Services"}
            color={colors.white}
            bgColor={colors.secondary}
            margin={"2% 0% 0% 0%"}
            handleClick={handleBuyServicesClick}
          />
          <RoundButton
            title={"Buy Projects"}
            color={colors.white}
            bgColor={colors.secondary}
            margin={"2% 0% 0% 2%"}
            handleClick={handleBuyProjectsClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GoogleApiWrapper({
  apiKey: "TOKEN HERE",
})(AboutUs);
