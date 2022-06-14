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
import { CustomCardCarousel } from "./CustomCardCarousel";
import Skeleton from "@mui/material/Skeleton";
import { lightBorder } from "../../../Theme/borders";

// styles
const CustomCardStyles = makeStyles(() => ({
  root: {
    // boxShadow:
    //   "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    maxWidth: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? 260 : 160,
    cursor: "pointer",
    position: "relative",
    minHeight: 300,
    border: lightBorder,
  },

  detailBox: {
    margin: "0% 5% 5% 5%",
  },
  title: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    fontWeight: "bolder",
    marginTop: "2%",
  },
  deliveryTime: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  textLight: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  textBold: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
  },
  favouriteIcon: {
    zIndex: 9,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    top: "5%",
    left: "85%",
    backgroundColor: "white",
    borderRadius: "50%",
    fill: ({ isFavIconSelected }) =>
      isFavIconSelected ? colors.error : colors.secondary,
    visibility: ({ navButtonAndFavIconVisibility }) =>
      navButtonAndFavIconVisibility,
    pointer: "progress",
  },
}));

export const DesktopCustomCard = ({ subService, isLoading }) => {
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
      {isLoading ? (
        <Box>
          <Skeleton height={160} width={255} variant="rectangular" />
        </Box>
      ) : (
        <Box>
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

          <CustomCardCarousel
            subServiceThumbnails={subService.subServiceThumbnails}
            navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
          />
        </Box>
      )}

      <Box className={classes.detailBox}>
        {isLoading ? (
          <Box>
            <Skeleton height={40} width={200} variant="rectangle" />
          </Box>
        ) : (
          <Typography component="h6" className={classes.title}>
            {Array.from(subService.subServiceTitle).slice(0, 50)}
            {Array.from(subService.subServiceTitle).length > 50 && "..."}
          </Typography>
        )}
        {isLoading ? (
          <Box>
            <Skeleton height={20} width="70%" />
          </Box>
        ) : (
          <Box display="flex" style={{ marginTop: "5%", marginBottom: "5%" }}>
            <Box width="10%">
              <AvTimerRoundedIcon fontSize="small" />
            </Box>
            <Box flexShrink={0}>
              {subService.basicPackageDeliveryTime} Delivery
            </Box>
          </Box>
        )}
        <hr style={{ marginTop: "5%", marginBottom: "5%" }} />

        {isLoading ? (
          <Box>
            <Skeleton height={20} width="70%" />
          </Box>
        ) : (
          <Box display="flex">
            <Box width="100%">
              <Typography className={classes.textLight}>
                From{" "}
                <Typography component="span" className={classes.textBold}>
                  {subService.basicPackagePrice + "$"}
                </Typography>
              </Typography>
            </Box>
            <Box flexShrink={0}>
              <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
            </Box>
            <Box flexShrink={0}>
              {subService.subServiceRating}{" "}
              {`(${subService.subServiceTotalRatedOrders})`}
            </Box>
          </Box>
        )}
      </Box>
    </Grid>
  );
};
