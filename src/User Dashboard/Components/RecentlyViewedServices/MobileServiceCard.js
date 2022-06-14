//ReactJS
import React, { useEffect, useState } from "react";

//Mateial-ui core
import { Box, makeStyles, Typography, Grid, useMediaQuery } from "@material-ui/core";

//Material-ui styles

//icons
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

//theme and styles
import colors from "../../../Theme/colors";
import { TextFonts } from "../../../Theme/fonts";

//custom components
import { MobileCardCarousel } from "./MobileCardCarousel";

//Redux
import { useDispatch, useSelector } from 'react-redux';
//action creators

//selectors
import { selectRecentServices,selectHasServiceError, selectIsServiceLoading } from '../../Redux/slices/recentlyViewedServicesSlice'
//thunks
import { fetchServiceDetails } from '../../Redux/slices/recentlyViewedServicesSlice';

import { lightBorder } from "../../../Theme/borders";
const CustomCardStyles = makeStyles(() => ({
  root: {
    border:lightBorder,
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
    zIndex: -1,
    fontSize: 20,
    padding: "3%",
    position: "absolute",
    bottom:'40%',
    left: "85%",
    backgroundColor: "white",
    borderRadius: "50%",
    fill: ({ isFavIconSelected }) =>
      isFavIconSelected ? colors.error : colors.secondary,
    
    pointer: "progress",
  },
}));
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
    title: "SEO",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Web Developement",
    author: "author",
  },

  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Graphic Designing",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80",
    title: "Voice",
    author: "author",
  },
  {
    img: "https://images.unsplash.com/photo-1591628001888-76cc02e0c276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
    title: "Desktop Development",
    author: "author",
  },
];

export const MobileServiceCard = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const [navButtonAndFavIconVisibility, setNavButtonAndFavIconVisibility] =
    useState("hidden");
  const [isFavIconSelected, setIsFavIconSelected] = useState(false);
  const classes = CustomCardStyles({
    isDesktopOrLaptopOrTabletScreen,
    navButtonAndFavIconVisibility,
    isFavIconSelected,
  });

    //Redux
    const dispatch=useDispatch()
    const recentServices=useSelector(selectRecentServices)
    const isLoading=useSelector(selectIsServiceLoading)
    const encounteredError=useSelector(selectHasServiceError)
  
    useEffect(() => {
        dispatch(fetchServiceDetails("maybe any argument we may want to pass"))
    }, [dispatch])
    
  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      onMouseEnter={() => setNavButtonAndFavIconVisibility("visible")}
      onMouseLeave={() => setNavButtonAndFavIconVisibility("hidden")}
    >
      <Box style={{ display: "flex", borderBottom:'2px solid black',}}>
        <Box width="40%">
          <MobileCardCarousel
            itemData={itemData}
            navButtonAndFavIconVisibility={navButtonAndFavIconVisibility}
          />
        </Box>
        <Box width="50%" className={classes.detailBox} flexShrink={0}>
          <p>
            You will get custom website in react
          </p>
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
      </Box>
      
      <Box width='100%' p={1} m={1}>
       
        <Box display="flex">
          <Box width="100%">
            <Typography className={classes.textLight}>
              From{" "}
              <Typography component="span" className={classes.textBold}>
                30$
              </Typography>
            </Typography>
          </Box>
          <Box flexShrink={0}>
            <StarRoundedIcon style={{ color: colors.secondary }} />{" "}
          </Box>
          <Box flexShrink={0}>4.5 (2000)</Box>
        </Box>
      </Box>
    </Grid>
  );
};
