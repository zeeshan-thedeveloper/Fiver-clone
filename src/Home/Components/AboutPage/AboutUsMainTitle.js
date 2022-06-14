import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import ModalContainer from "../../../CustomComponents/UI/Support/ModalContainer";
import ContactUsGlobalForm from "./ContactUsGlobalForm";

// string constants
import { CAREER_TITLE, CAREER_SUBTITLE } from "../../Strings/AboutUsStrings";


const AboutUsMainTitleStyles = makeStyles((theme) => ({
  subtitle: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
    color: colors.lightBlack,
  },
  title: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.large
        : Headingfonts.XXXLarge,
    color: colors.secondary,
  },
}));

const AboutUsMainTitle = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Grid container spacing={0}>
      {!isDesktopOrLaptopOrTabletScreen && <Grid item xs={1} sm={1}></Grid>}
      <Grid item md={8} sm={10} xs={10}>
        <AboutUsMainTitleText />
      </Grid>
    </Grid>
  );
};

const AboutUsMainTitleText = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = AboutUsMainTitleStyles(isDesktopOrLaptopOrTabletScreen);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleContactClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <p className={classes.title}>{CAREER_TITLE} </p>
      <ModalContainer
        open={open}
        handleClose={handleClose}
        Component={<ContactUsGlobalForm />}
        desktopWidth={"50%"}
        desktopHeigth={"auto"}
        mobileWidth={'80%'}
        mobileHeigth={'auto'}
        overflow={'hidden'}
      />

      <p className={classes.subtitle}>{CAREER_SUBTITLE}</p>
      <Box >
        <RoundButton
          title="Contact Us"
          color={colors.white}
          bgColor={colors.secondary}
          handleClick={handleContactClick}
        />
      </Box>
    </div>
  );
};

export default AboutUsMainTitle;
