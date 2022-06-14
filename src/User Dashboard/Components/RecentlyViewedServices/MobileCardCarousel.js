//ReactJS
import React, {useState, useEffect} from 'react'


//Material-UI core
import Carousel from "react-material-ui-carousel";
import { Box, makeStyles,useMediaQuery } from "@material-ui/core";

//Material-ui styles


//icons
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";


//theme and styles

//custom components

//redux

//action creators

//selectors

//thunks



const CustomCardCarouselStyles = makeStyles(() => ({
    image: {
     width:'100%'
    },
    icon:{
        fontSize:18
    }
  }));

export const MobileCardCarousel=({itemData,navButtonAndFavIconVisibility})=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    const classes=CustomCardCarouselStyles({isDesktopOrLaptopOrTabletScreen});
return(
    <Carousel
          NextIcon={<NavigateNextIcon className={classes.icon} />}
          PrevIcon={<NavigateBeforeIcon className={classes.icon}/>}
          animation="slide"
          timeout={500}
          autoPlay={false}
          indicatorIconButtonProps={{
            style: {
              display: "none",
            },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "white",
              color: "black",
              opacity: 1,
              visibility: navButtonAndFavIconVisibility,
              padding: "3%",
            },
          }}

          // OR
        >
            {itemData.map((item,index)=>{
                return( <Box key={'img_'+index}>
                    <img src={item.img} className={classes.image} />
                  </Box>)
            })}
         
        </Carousel>
)

}