import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import { lightBorder } from "../../../Theme/borders";

export default function ServiceCard({ service, color, isLoading }) {
  // styles
  const useStyles = makeStyles({
    root: {
      marginLeft: "6%",
      marginRight: "6%",
      backgroundColor: color,
      textAlign: "center",
      //border: `15px solid ${color}`,
      minHeight: 350,
      border: lightBorder,
    },
    Img: {},
  });
  const classes = useStyles();
  // handlers
  const handleServiceCardClick = () => {
    alert("navigate to sub service page");
  };
  
  return (
    <Card
      className={classes.root}
      onClick={handleServiceCardClick}
      elevation={0}
    >
      <CardActionArea>
        {isLoading ? (
          <Skeleton variant="rectangular" width={250} height={150} />
        ) : (
          <CardMedia
            component="img"
            height="150"
            alt="Sevice Image"
            image={service.serviceImage}
            classes={{ img: classes.Img }}
            title="Service Image"
          />
        )}
        {isLoading ? (
          <Box>
            <Skeleton height={40} />
            <Skeleton width="60%" height={20} />
          </Box>
        ) : (
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {service.serviceName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {Array.from(service.serviceDescription).slice(0, 125)}
              {Array.from(service.serviceDescription).length > 125 && "..."}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
      {isLoading ? (
        <Skeleton width="30%" />
      ) : (
        <CardActions>
          <Button size="small" color="primary">
            See More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
