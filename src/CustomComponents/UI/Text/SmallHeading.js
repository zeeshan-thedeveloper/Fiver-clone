import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Headingfonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";
const SmallHeadingStyles = makeStyles(() => ({
  smallHeading: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? Headingfonts.small : Headingfonts.large,
    fontWeight: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen && "bolder",
    textAlign: ({ textAlign }) => textAlign,
    margin: ({ margin }) => margin,
    color: ({ color }) => color,
  },
}));
export const SmallHeading = ({
  title,
  textAlign = "center",
  margin,
  color = colors.black,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = SmallHeadingStyles({
    isDesktopOrLaptopOrTabletScreen,
    margin,
    textAlign,
    color,
  });

  return <p className={classes.smallHeading}>{title}</p>;
};
