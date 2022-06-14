import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeaderTitle from "../HeaderTitle";
import ReviewCard from "./ReviewCard";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// redux
import { loadLatestReviews } from "../Slices/HomePageSlices/UserReviewsSlice";
import { selectUserReviews } from "../Slices/HomePageSlices/UserReviewsSlice";
import { useSelector, useDispatch } from "react-redux";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },

  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: "10%",
    paddingTop: "10%",
    color: "rgba(0, 0, 0, 0.87)",
  },

  titleBar: {
    backgroundColor: "#f8f9fa",
    height: "30%",
  },
  RoundBorder: {
    borderRadius: 7,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
  },
  listItems: {},
}));

function DesktopReviewCard({ hasError, isLoading, latest_reviews }) {
  return (
    <Grid
      xs={12}
      sm={12}
      md={12}
      item
      container
      justifyContent="center"
      alignItems="center"
    >
      <Carousel
        axis="horizontal"
        infiniteLoop
        autoPlay
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <Grid
          xs={12}
          sm={12}
          md={12}
          item
          container
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          {!isLoading &&
            latest_reviews.slice(0, 2).map((review) => (
              <Grid xs={10} sm={5} md={5} item>
                <ReviewCard
                  review={review}
                  isLoading={isLoading}
                  // key={review.reviewId}
                  // image={review.reviewClientImage}
                  // firstName={review.reviewClientFirstName}
                  // lastName={review.reviewClientLastName}
                  // reviewRating={review.reviewRating}
                  // country={review.reviewClientCountry}
                  // reviewText={review.reviewText}
                />
              </Grid>
            ))}
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          item
          container
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          {!isLoading &&
            latest_reviews.slice(2, 4).map((review) => (
              <Grid xs={10} sm={5} md={5} item>
                <ReviewCard
                  review={review}
                  isLoading={isLoading}
                  // key={review.reviewId}
                  // image={review.reviewClientImage}
                  // firstName={review.reviewClientFirstName}
                  // lastName={review.reviewClientLastName}
                  // reviewRating={review.reviewRating}
                  // country={review.reviewClientCountry}
                  // reviewText={review.reviewText}
                />
              </Grid>
            ))}
        </Grid>
      </Carousel>
    </Grid>
  );
}

const MobileReviewCard = ({ hasError, isLoading, latest_reviews }) => {
  return (
    <Grid xs={12} container justifyContent="center" alignItems="center">
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Carousel
          axis="horizontal"
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {latest_reviews.map((review) => (
            <ReviewCard
              review={review}
              // key={review.reviewId}
              // image={review.reviewClientImage}
              // firstName={review.reviewClientFirstName}
              // lastName={review.reviewClientLastName}
              // reviewStars={review.reviewStars}
              // country={review.reviewClientCountry}
              // reviewText={review.reviewText}
              isLoading={isLoading}
            />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
export default function UserReview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.latestReviews);
  const { isLoading } = useSelector((state) => state.latestReviews);
  const latest_reviews = useSelector(selectUserReviews);
  useEffect(() => {
    dispatch(loadLatestReviews());
  }, [dispatch]);
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Grid container spacing={0}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        justifyContent="center"
        alignItems="center"
      >
        <HeaderTitle title={"Customer Reviews"} />{" "}
      </Grid>

      {isDesktopOrLaptopOrTabletScreen ? (
        <DesktopReviewCard
          hasError={hasError}
          isLoading={isLoading}
          latest_reviews={latest_reviews}
        />
      ) : (
        <MobileReviewCard
          hasError={hasError}
          isLoading={isLoading}
          latest_reviews={latest_reviews}
        />
      )}
    </Grid>
  );
}
