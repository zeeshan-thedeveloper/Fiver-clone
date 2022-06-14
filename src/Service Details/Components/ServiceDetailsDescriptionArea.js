import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Styles/StyleSheet.css";
import { Grid, useMediaQuery, withWidth, Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
//import strings from '../Strings/Strings'
import ServiceImagesCarousel from "./ServiceImagesCarousel";
import PackageComparator from "./PackageComparator";
import ServiceReviews from "./ServiceReviews";
import RelatedService from "./RelatedService";
import useWindowDimensions from "./useWindowDimensions";
import Packages from "./Packages";
function ServiceDetailsDescriptionArea(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles();
  var overviewDiv = document.getElementById("overviewDiv");
  var descriptionDiv = document.getElementById("descriptionDiv");
  var comparePackagesDiv = document.getElementById("comparePackagesDiv");
  var serviceREviewsDiv = document.getElementById("serviceREviewsDiv");
  var relatedServicesDiv = document.getElementById("relatedServicesDiv");
  const { height, width } = useWindowDimensions();
  console.log(height);
  useEffect(() => {
    switch (props.currentSelectedTabIndex) {
      case 1:
        window.scrollTo({
          behavior: "smooth",
          top: height * (isDesktopOrLaptopOrTabletScreen ? 0.6 : 0.7),
        });
        break;
      case 2:
        window.scrollTo({
          behavior: "smooth",
          top: height * (isDesktopOrLaptopOrTabletScreen ? 0.9 : 1.1),
        });
        break;
      case 3:
        window.scrollTo({
          behavior: "smooth",
          top: height * (isDesktopOrLaptopOrTabletScreen ? 2 : 1.9),
        });
        break;
      case 4:
        window.scrollTo({
          behavior: "smooth",
          top: height * (isDesktopOrLaptopOrTabletScreen ? 4 : 4),
        });
        break;
      case 0:
        window.scrollTo({
          behavior: "smooth",
          top: height * (isDesktopOrLaptopOrTabletScreen ? 0.0 : 0.0),
        });
        break;
    }
  }, [props.currentSelectedTabIndex]);

  return (
    <div className={classes.serviceDescriptionDiv}>
      <Grid container spacing={1}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          className={classes.titleRow}
          style={{ marginTop: isDesktopOrLaptopOrTabletScreen ? 0 : "10%" }}
        >
          {/* Title */}
          <div className="ServiceTitle">
            We will develop java based applications and solve your problems
          </div>
          <div className="ServiceRatingText">Rating</div>
          <div className="ServiceRatingBar">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              size="small"
            />
          </div>
        </Grid>

        <Grid item lg={12} md={12} sm={12} className={classes.imageRow}>
          {/* Image */}
          <div className={classes.serviceImageDiv}>
            <div className={classes.serviceCarousel}>
              <ServiceImagesCarousel />
            </div>
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} className={classes.overviewrow}>
          <div id="overviewDiv">
            {/* Description */}

            <div className={classes.HeadingContainer}>
              <div className="HeadingFonts">Description</div>
            </div>
            <div className={classes.ParaphContainer}>
              {" "}
              <div className="ParaphFonts">Rough</div>
            </div>
          </div>
          <Hidden only={["sm", "lg", "md"]}>
            <div id="comparePackagesDiv">
              {/* Compare packages */}
              <div className={classes.HeadingContainer}>
                <div className="HeadingFonts">Package Comaparison</div>
              </div>
              <div className={classes.packageContainerOnMobile}>
                <Packages />
              </div>
            </div>
          </Hidden>
          <Hidden only="xs">
            <div id="comparePackagesDiv">
              {/* Compare packages */}
              <div className={classes.HeadingContainer}>
                <div className="HeadingFonts">Package Comaparison</div>
              </div>
              <div className={classes.ParaphContainer}>
                {" "}
                <div className="ParaphFonts">
                  <PackageComparator />
                </div>
              </div>
            </div>
          </Hidden>

          <div id="serviceREviewsDiv">
            {/* Reviews */}
            <div className={classes.HeadingContainer}>
              <div className="HeadingFonts">Customer Reviews</div>
            </div>
            <div className={classes.ParaphContainer}>
              {" "}
              <div className="ParaphFonts">
                <ServiceReviews />
              </div>
            </div>
          </div>

          <div id="relatedServicesDiv">
            {/* Related Services */}
            <div className={classes.HeadingContainer}>
              <div className="HeadingFonts">Related Services</div>
            </div>
            <div className={classes.ParaphContainer}>
              {" "}
              <div className="ParaphFonts">
                <RelatedService />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  serviceDescriptionDiv: {
    //   backgroundColor:"#f8f9fa",
    marginTop: "4%",
  },
  titleRow: {
    marginTop: "1%",
  },
  imageRow: {
    marginTop: "1%",
    paddingLeft: "10%",
  },
  serviceImageDiv: {
    width: "100%",
  },
  serviceCarousel: {
    marginLeft: "2%",
    marginTop: "2%",
  },
  overviewrow: {
    marginTop: "2%",
  },
  ParaphContainer: {
    paddingLeft: "2%",
    paddingTop: "1%",
  },
  HeadingContainer: {
    marginTop: "2%",
  },
  packageComparatorContainer: {
    marginTop: "2%",
  },
  packageContainerOnMobile: {
    // Set according to screen
    ["@media (min-width: 960px)"]: {
      // eslint-disable-line no-useless-computed-key
    },
    ["@media (max-width: 600px)"]: {
      // eslint-disable-line no-useless-computed-key
      paddingLeft: 5,
    },
  },
}));

ServiceDetailsDescriptionArea.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(ServiceDetailsDescriptionArea);
