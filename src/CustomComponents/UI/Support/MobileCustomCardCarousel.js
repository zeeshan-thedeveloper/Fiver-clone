// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const CustomCardCarouselStyles = makeStyles(() => ({
    image: {
     width:'120%'
    },
    icon:{
        fontSize:18
    }
  }));

export const MobileCustomCardCarousel=({subServiceThumbnails,navButtonAndFavIconVisibility})=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    const classes=CustomCardCarouselStyles({isDesktopOrLaptopOrTabletScreen});
return(
    <Carousel
      axis="horizontal"
      autoPlay
      interval={4000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
            {subServiceThumbnails.map((thumbnail,index)=>{
                return( <Box key={'img_'+index}>
                    <img src={thumbnail} className={classes.image} />
                  </Box>)
            })}
         
        </Carousel>
)

}