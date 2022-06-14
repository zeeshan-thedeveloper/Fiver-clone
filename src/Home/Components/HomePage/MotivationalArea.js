import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Headingfonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";
import ModalContainer from "../../../CustomComponents/UI/Support/ModalContainer";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import ContactNowForm from "./ContactNow";

// styles
const useStyles = makeStyles((theme) => ({
  btnContained: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.medium,
    backgroundColor: colors.info,
    color: colors.white,
    marginLeft: "5%",
    marginBottom: "5%",
    width: "auto",
    height: "10%",
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.medium,
    color: colors.highlighter,
    marginLeft: "5%",
  },
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.large
        : Headingfonts.extraLarge,
    color: colors.highlighter,
    marginLeft: "5%",
    textAlign: "start",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  bgColor: {
    backgroundImage: "linear-gradient(#66163b, #72103d, #7e1a49, #72103d)",
  },
}));

const MotivationalArea = () => {
  return (
    <Carousel
      axis="horizontal"
      infiniteLoop
      autoPlay
      interval={4000}
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      <SliderItemInMotivationalArea
        title="Grow With Us"
        subtitle="Start your bussiness with us"
        btntitle="Contact Now"
        color={""}
        image="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      />
      <SliderItemInMotivationalArea
        title="Start New bussiness"
        subtitle="What you define, We design"
        btntitle="Contact Now"
        image="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </Carousel>
  );
};

const SliderItemInMotivationalArea = ({
  title,
  subtitle,
  btntitle,
  color,
  image,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  // handlers
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleButtonClick = () => {
    setOpen(true);
  };
  return (
    <Grid container spacing={0}>
      {!isDesktopOrLaptopOrTabletScreen && <Grid xs={1} sm={1}></Grid>}
      <Grid
        item
        container
        justifyContent="flex-start"
        xs={6}
        sm={6}
        md={7}
        className={classes.bgColor}
      >
        <ModalContainer
          open={open}
          handleClose={handleClose}
          Component={<ContactNowForm />}
          desktopWidth={"50%"}
          desktopHeigth={"auto"}
          mobileWidth={"80%"}
          mobileHeigth={"auto"}
          overflow={"hidden"}
        />
        <p className={classes.title}>{title}</p>

        <p className={classes.subtitle}>{subtitle} </p>
        <RoundButton
          title={btntitle}
          variant={`outlined`}
          color={colors.white}
          margin={"0% 0% 5% 5%"}
          borderColor={colors.white}
          handleClick={handleTitleButtonClick}
        />
      </Grid>
      <Grid item xs={4} sm={4} md={5}>
        <img src={image} className={classes.media} />
      </Grid>
    </Grid>
  );
};

export default MotivationalArea;
