import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";

export function ProjectCard({ classes, project, isLoading }) {
  // handlers
  const hanldeProjectCardClick = () => {
    alert("go to zeeshan project page");
  };
  return (
    <CardActionArea
      className={classes.actionArea}
      onClick={hanldeProjectCardClick}
    >
      <Card className={classes.card} elevation={0}>
        {isLoading ? (
          <Box p={2}>
            <Skeleton variant="rectangular" width={360} height={200} />
          </Box>
        ) : (
          <CardMedia
            classes={{ media: classes.media }}
            component={"img"}
            image={project.projectImage}
          />
        )}
        {isLoading ? (
          <Box p={2}>
            <Skeleton  />
            <Skeleton width="60%" />
          </Box>
        ) : (
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={"h2"}>
              {project.projectTitle}
            </Typography>
            <Typography className={classes.subtitle}>
              {project.projectSubtitle}
            </Typography>
          </CardContent>
        )}
      </Card>
    </CardActionArea>
  );
}
