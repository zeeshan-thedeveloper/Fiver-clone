//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI
import Grid from "@material-ui/core/Grid";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";

import Color from "color";
import { Link } from "react-router-dom";

//icons

//Styles and theme

//resources

//Redux
import { useDispatch, useSelector } from "react-redux";
//action creators

//selectors
import {
  selectRecentProjects,
  selectHasProjectError,
  selectIsProjectLoading,
} from "../../Redux/slices/recentlyViewedProjectsSlice";

//thunks
import { fetchProjectDetails } from "../../Redux/slices/recentlyViewedProjectsSlice";
import { Rating } from "@material-ui/lab";

//Custom components
import {lightBorder} from "../../../Theme/borders"

export const RecentProjectsForMobile = () => {

  return (
    <Grid container spacing={0} style={{ marginTop: "2%" }}>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {Array(4)
          .fill()
          .map((item) => {
            return (
              <Grid item md={6} lg={3} xl={3}>
                <Link to="searchproject" style={{ textDecoration: "none" }}>
                  <Box mt={4} mr={2}>
                    <CustomCard />
                  </Box>
                </Link>
              </Grid>
            );
          })}
      </div>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({

  card: ({ color }) => ({
    maxWidth: 192,
    border:lightBorder,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color('#fff')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
    backgroundColor: "#fff",
  }),
  media: {
    width: "100%",
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "12px",
    color: "#000",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#000",
    opacity: 0.87,
    marginTop: "1rem",
    fontWeight: 700,
    fontSize: 14,
  },
}));

const CustomCard = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const recentProjects = useSelector(selectRecentProjects);
  const isLoading = useSelector(selectIsProjectLoading);
  const encounteredError = useSelector(selectHasProjectError);

  //Now from orders, get active, cancelled and completed orders by checking their status
  useEffect(() => {
    dispatch(fetchProjectDetails("status")); //dispatch thunk with status of order or simply bring all orders for this user
  }, [dispatch]);

  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component={"img"}
          image={
            "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            Offline Whatsapp for Desktop
          </Typography>
          <Box display="flex">
            <Box flex={1}>
              <Typography className={classes.subtitle}>$125</Typography>
            </Box>
            <Box mt={2}>
              <Rating value={5} size="small" readOnly />
            </Box>
          </Box>
        </CardContent>
      </Card>
  );
};