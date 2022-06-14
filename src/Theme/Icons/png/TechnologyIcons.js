import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import colors, { ColorPalette } from "../../colors";
import { TextFonts, Headingfonts } from "../../fonts";
import { Typography, Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";

//styles
const useStyles = makeStyles((theme) => ({
  IconContainer: {
    marginTop: "20%",
    marginBottom: "20%",
    cursor: "pointer",
    justifyContent: "center",
  },
  IconTitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.large,
    alignSelf: "center",
  },
}));

// custom icon
export const CustomIcon = ({ icon, handleClick, technology, isLoading }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);

  return (
    <div className={classes.IconContainer} onClick={handleClick}>
      {isLoading ? (
        <Skeleton variant="circular" height={70} width={70} />
      ) : (
        icon
      )}
      <Typography variant="h5" classes={{ root: classes.IconTitle }}>
        {isLoading ? (
          <Skeleton variant="text" width={70} />
        ) : (
          technology.technologytitle
        )}
      </Typography>
    </div>
  );
};
