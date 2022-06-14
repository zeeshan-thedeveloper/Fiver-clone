import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";

const HeadingStyles = makeStyles(() => ({
  HomePageComponentsHeadingGrid: {
    margin: ({ margin }) => margin,
    textAlign: ({ textAlign }) => textAlign,
  },

  HomePageComponentsHeadingTitle: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.medium
        : Headingfonts.extraExtraLarge,
    fontWeight: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen && "bolder",
    color: ({ titleColor }) => titleColor,
    marginTop: "0px",
    marginBottom: "0px",
  },
  HomePageComponentsHeadingDescription: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
    color: ({ descriptionColor }) => descriptionColor,
    fontWeight: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen && "bolder",
  },
}));

export function HomePageComponentsHeading({
  title,
  description,
  titleColor,
  descriptionColor,
  margin = "2%",
  textAlign = "center",
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = HeadingStyles({
    isDesktopOrLaptopOrTabletScreen,
    titleColor,
    descriptionColor,
    margin,
    textAlign,
  });
  return (
    <Grid
      container
      spacing={0}
      className={classes.HomePageComponentsHeadingGrid}
    >
      <Grid xs={1} sm={1} md={1} item></Grid>
      <Grid xs={10} sm={10} md={10} item>
        <p className={classes.HomePageComponentsHeadingTitle}>{title} </p>
        <p className={classes.HomePageComponentsHeadingDescription}>
          {description}
        </p>
      </Grid>
      <Grid xs={1} sm={1} md={1} item></Grid>
    </Grid>
  );
}
