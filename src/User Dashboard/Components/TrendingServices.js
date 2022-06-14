//ReactJS
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Material-UI
import Box from "@material-ui/core/Box";

//Styles
import "./Styles/TrendingServicesStyles.css";

//Strings
import { stringCollection } from "../Strings/StringCollection.js";

//Resources
import RoughImage2 from "../Resources/Rough2.PNG";
import RoughImage3 from "../Resources/Rough3.PNG";

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
import { fetchTrendingServiceDetails } from "../Redux/slices/trendingServicesSlice";

//selectors
import {
  selectTrendingServices,
  selectIsTrendingServiceLoading,
  selectHasTrendingServiceError,
} from "../Redux/slices/trendingServicesSlice";

//actionCreators


import {lightBorder} from "../../Theme/borders"
import { makeStyles } from "@material-ui/core";

export const TrendingServices = () => {
  return (
    <div>
      <h1>{stringCollection.TrendingServices.title}</h1>
      <TrendingServiceCarousel />
    </div>
  );
};

const useStyles=makeStyles(()=>({
  carouselContainer:{
    // border:lightBorder
  }
}))
const TrendingServiceCarousel = () => {

  const classes=useStyles()
  const data = [
    {
      id: "S45451-1",
      image: RoughImage2,
    },
    {
      id: "S45451-2",
      image: RoughImage3,
    },
    {
      id: "S45451-3",
      image: RoughImage2,
    },
    {
      id: "S45451-4",
      image: RoughImage3,
    },
  ];

  //Redux store: operations

  const dispatch = useDispatch();
  const services = useSelector(selectTrendingServices);
  const isLoading = useSelector(selectIsTrendingServiceLoading);
  const encounteredError = useSelector(selectHasTrendingServiceError);

  useEffect(() => {
    dispatch(fetchTrendingServiceDetails()); //dispatch thunk to bring all trending services for
  }, [dispatch]);

  function redirectToTrendingService(id) {
    alert("I am Trending service with id : " + id);
  }

  return (
    <Box className={classes.carouselContainer}>
          <Carousel
      axis="horizontal"
      infiniteLoop
      autoPlay
      interval={3000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {data.map(({ image, id }, i) => (
        <Box onClick={() => redirectToTrendingService(id)}>
          <img
            src={image}
            id={id}
            className="serviceImage"
          ></img>
        </Box>
      ))}
    </Carousel>
    </Box>
  );
};
