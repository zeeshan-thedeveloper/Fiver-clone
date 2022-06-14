import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";

const HowItWorksAreaInServicesStyles = makeStyles(() => ({
  root: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "10%",
  
  },
  heading: {
    fontWeight: "bolder",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.large,
  },
  media: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      !isDesktopOrLaptopOrTabletScreen && "5%",
  },
}));
export const HowItWorksAreaInServices = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = HowItWorksAreaInServicesStyles(
    isDesktopOrLaptopOrTabletScreen
  );
  return (
    <Grid container className={classes.root}>
      <Grid item md={1} xs={1} sm={1}></Grid>
      <Grid item Container md={5} xs={10} sm={5}>
        <div>
          <h1 className={classes.heading}>1. Browse</h1>
          <p>
            Find the type of work you need, clearly defined and ready to start.
          </p>
        </div>
        <hr />
        <div>
          <h2 className={classes.heading}>2. Buy</h2>
          <p>Work begins as soon as you purchase and provide requirements.</p>
        </div>
        <hr />
        <div>
          <h2 className={classes.heading}>3. Approve </h2>
          <p>
            Receive and review your project. The professional will be paid once
            you’ve approved it.
          </p>
        </div>
      </Grid>
      {!isDesktopOrLaptopOrTabletScreen && <Grid item xs={1}></Grid>}
      {!isDesktopOrLaptopOrTabletScreen && <Grid item xs={1}></Grid>}
      <Grid
        item
        Container
        md={5}
        xs={10}
        sm={5}
        justifyContent="center"
        alignItems="center"
        className={classes.media}
      >
        <video
          src={"https://www.youtube.com/watch?v=umxLRYwyq24"}
          width="100%"
          height="100%"
          controls="controls"
          autoplay="true"
        />
      </Grid>
    </Grid>
  );
};
