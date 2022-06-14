import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextFonts } from "../../../Theme/fonts";
const RoundButtonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ bgColor }) => bgColor && bgColor,
    color: ({ color }) => color,
    //width:({width})=>width,
    width: ({ width,isDesktopOrLaptopOrTabletScreen }) =>isDesktopOrLaptopOrTabletScreen ? width : 'auto',
    borderRadius: 20,
    borderColor: ({ borderColor }) => borderColor,
    margin: ({ margin }) => margin,
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: ({ bgColor }) => bgColor && bgColor,
    },
    font:({isDesktopOrLaptopOrTabletScreen})=>isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall :TextFonts.medium
  },
}));
export const RoundButton = ({
  title,
  color,
  bgColor,
  handleClick,
  width,
  variant = "contained",
  borderColor,
  margin,
  icon,
  type
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const props = {
    color,
    bgColor,
    width,
    borderColor,
    margin,
    isDesktopOrLaptopOrTabletScreen
  };
  const classes = RoundButtonStyles(props);

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      classes={{ root: classes.root }}
      startIcon={icon}
      type={type}
      fullWidth
      width={width}
    >
      {title}
    </Button>
  );
};
