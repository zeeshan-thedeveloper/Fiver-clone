import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import { useMediaQuery } from "@material-ui/core";
import { TextFonts } from "../../../Theme/fonts";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import { lightBorder } from "../../../Theme/borders";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#F7F2F1",
    cursor: "pointer",
    border: lightBorder,
    paddingLeft:'1em'
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },

  cover: {
    width: 100,
    height: 100,
    borderRadius: 50,
   // marginLeft: "5%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  media: {
    display: "flex",
    alignSelf: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "center",
    flex: "1 0 auto",
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "0" : "10%",
  },
  reviewText: {
    font: TextFonts.XXSmall,
    textAlign: "start",
  },
}));

// review card
export default function ReviewCard({ review, isLoading }) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const handleReviewCardClick = () => {
    alert("card is clicked");
  };

  let reviewTextarray= Array.from(review.reviewText);
  return (
    <Card className={classes.root} onClick={handleReviewCardClick} elevation={0}>
      <div className={classes.media}>
        {isLoading ? (
          <Box p={4}>
            <Skeleton height={100} width={100} variant="circular" />
          </Box>
        ) : (
          <CardMedia
            className={classes.cover}
            image={review.reviewClientImage}
            title="user-Image"
          />
        )}
      </div>
      {isLoading ? (
        <Box className={classes.details}>
          <Skeleton height={20} />
          <Skeleton />
        </Box>
      ) : (
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h5 className={classes.reviewText}>
              
              {reviewTextarray.slice(0, 130)}
              {reviewTextarray.length > 130 && "..."}
            </h5>
            <Typography component="h5" variant="h5" style={{ marginTop: "3%" }}>
              {review.reviewClientFirstName + " " + review.reviewClientLastName}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {review.reviewClientCountry}
            </Typography>
            <Rating name="read-only" value={review.reviewRating} readOnly />
          </CardContent>
        </div>
      )}
    </Card>
  );
}
