//ReactJS
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//Material-UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  Chip,
  Typography,
  Button,
  Box,
  Card,
  useMediaQuery,
} from "@material-ui/core";
import LikeIcon from "@material-ui/icons/ThumbUp";
import WishListIcon from "@material-ui/icons/Favorite";
import { Rating } from "@material-ui/lab";

//CSS
import LoremIpsum from "react-lorem-ipsum";

import { lightBorder } from "../../Theme/borders";

const componentStyles = makeStyles((theme) => ({
  container:{
    border:lightBorder,
    marginBottom:'1rem',
    padding:'4px',
  },
  section: {
    margin: theme.spacing(1.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const ProjectContainer = () => {
  const classes = componentStyles();
  return (
    <div className={classes.container}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <CarouselItem />
          </Grid>
          <Grid item className={classes.section}>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} md={8} lg={8} xl={8}>
            <MiddleDividers />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const sectionStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1.5),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(2, 1, 1),
  },
  likeAndWishlistButton: {
    margin: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
  offerAndPreviewButton: {
    margin: theme.spacing(0.5),

    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
}));

const MiddleDividers = () => {
  const classes = sectionStyle();
  const isItXs = useMediaQuery("(max-width: 599px)");

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid xs={9} sm={9} md={9} lg={9} xl={9}>
            <Typography variant="h5">Offline File Sharer in Java</Typography>
          </Grid>

          <Grid
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            container
            justifyContent="center"
          >
            <Box>
              <Typography variant="h5">$45.54</Typography>
            </Box>
            <Box display={!isItXs?"flex":""}>
            <Box mt={0.5}>
              <Rating size="small" readOnly value={2} />
            </Box>
            <Box mt={-2.2} ml={isItXs?3:0}>
              <h5>(512)</h5>
            </Box>
            </Box>

          </Grid>
        </Grid>
        <p style={{textAlign:'justify'}}><LoremIpsum /></p>
      </div>
      <Divider variant="middle" />
      <div className={classes.section3}>
        <Chip
          icon={<LikeIcon />}
          label="1234"
          clickable
          color="primary"
          variant="outlined"
          className={classes.likeAndWishlistButton}
        />

        <Chip
          icon={<WishListIcon />}
          label="754"
          clickable
          color="primary"
          variant="outlined"
          className={classes.likeAndWishlistButton}
        />
        <Button
          className={classes.offerAndPreviewButton}
          color="primary"
          variant="outlined"
        >
          Make Offer
        </Button>
        <Button
          className={classes.offerAndPreviewButton}
          color="primary"
          variant="outlined"
        >
          Preview
        </Button>
      </div>
    </div>
  );
};


const galleryStyles=makeStyles((theme)=>({
  galleryImage:{
    maxHeight:"16rem",
  }
}))

function CarouselItem() {

  const gallery = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    },
    {
      label: "NeONBRAND Digital Marketing, Las Vegas, United States",
      imgPath:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];
  
  const classes=galleryStyles()
  return(
 
  <Carousel axis='horizontal' infiniteLoop autoPlay interval={3000} showArrows={false} showStatus={false} showThumbs={false}>
  {
    gallery.map(image=>{
      return <div>
        <img src={image.imgPath} className={classes.galleryImage}/>
      </div>
    })
  }    
  </Carousel>
  )
}
