import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import colors from "../../../Theme/colors";
import { TextFonts, HeadingFonts } from "../../../Theme/fonts";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AvTimerRoundedIcon from "@material-ui/icons/AvTimerRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MobileCustomCardCarousel } from "./MobileCustomCardCarousel";
import Skeleton from "@mui/material/Skeleton";
import { lightBorder } from "../../../Theme/borders";

//styles
const CustomCardStyles = makeStyles(() => ({
  root: {
    boxShadow:
      "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    maxWidth: "100%",
    cursor: "pointer",
    position: "relative",
  },

  detailBox: {
    margin: "0% 0% 0% 2%",
  },
  title: {
    font: TextFonts.medium,
    fontWeight: "bolder",
  },
  deliveryTime: {
    font: TextFonts.small,
  },
  textLight: {
    font: TextFonts.large,
  },
  textBold: {
    font: TextFonts.large,
  },
  favouriteIcon: {
    zIndex: 9,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    bottom: "45%",
    left: "85%",
    backgroundColor: "white",
    borderRadius: "50%",
    fill: ({ isFavIconSelected }) =>
      isFavIconSelected ? colors.error : colors.secondary,

    pointer: "progress",
  },
}));

export const MobileCustomCard = ({ subService, isLoading }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const [navButtonAndFavIconVisibility, setNavButtonAndFavIconVisibility] =
    useState("hidden");
  const [isFavIconSelected, setIsFavIconSelected] = useState(false);
  const classes = CustomCardStyles({
    isDesktopOrLaptopOrTabletScreen,
    navButtonAndFavIconVisibility,
    isFavIconSelected,
  });
  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      onMouseEnter={() => setNavButtonAndFavIconVisibility("visible")}
      onMouseLeave={() => setNavButtonAndFavIconVisibility("hidden")}
    >
      <Box style={{ display: "flex", borderBottom: "2px solid black" }}>
        {isLoading ? (
          <Skeleton height={80} width={110} variant="rectangle" />
        ) : (
          <Box width="40%">
            <MobileCustomCardCarousel
              subServiceThumbnails={subService.subServiceThumbnails}
              navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
            />
          </Box>
        )}
        {isLoading ? (
          <Box p={1}>
            <Skeleton height={20} width={150} variant="text" />
            <Skeleton height={20} width="80%" variant="text" />
          </Box>
        ) : (
          <Box width="50%" className={classes.detailBox} flexShrink={0}>
            {Array.from(subService.subServiceTitle).slice(0, 50)}
            {Array.from(subService.subServiceTitle).length > 50 && "..."}
            {isFavIconSelected ? (
              <FavoriteIcon
                className={classes.favouriteIcon}
                onClick={() => setIsFavIconSelected(!isFavIconSelected)}
              />
            ) : (
              <FavoriteBorderIcon
                className={classes.favouriteIcon}
                onClick={() => setIsFavIconSelected(!isFavIconSelected)}
              />
            )}
          </Box>
        )}
      </Box>

      <Box width="100%" p={1} m={1}>
        <Box display="flex">
          <Box width="100%">
            {isLoading ? (
              <Skeleton width="40%" variant="text" />
            ) : (
              <Typography className={classes.textLight}>
                From{" "}
                <Typography component="span" className={classes.textBold}>
                  {subService.basicPackagePrice + "$"}
                </Typography>
              </Typography>
            )}
          </Box>
          <Box flexShrink={0}>
            {isLoading ? (
              <Skeleton width={20} height={20} variant="circular" />
            ) : (
              <StarRoundedIcon style={{ color: colors.secondary }} />
            )}
          </Box>
          {isLoading ? (
            <Skeleton variant="text" width="30%" />
          ) : (
            <Box flexShrink={0}>
              {subService.subServiceRating}{" "}
              {`(${subService.subServiceTotalRatedOrders})`}
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
};
