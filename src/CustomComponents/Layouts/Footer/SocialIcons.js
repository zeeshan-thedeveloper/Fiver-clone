import Grid from "@material-ui/core/Grid";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import gernalClassesStyles from "../../../Theme/gernalStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "4%",
    marginBottom: "2%",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen
        ? Headingfonts.extraSmall
        : Headingfonts.large,
  },
}));
const SocialIcons = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const gernalClasses = gernalClassesStyles();

  return (
    <Grid container className={classes.root}>
      {/* for offset */}
      <Grid item xs={2} sm={4} md={5}></Grid>

      <Grid item xs={8} sm={4} md={2} container justifyContent="space-around">
        <span>Follow us</span>
        <Link to="#" className={gernalClasses.linkStyle}>
          <FacebookIcon
            fontSize={isDesktopOrLaptopOrTabletScreen ? "medium" : "small"}
          />
        </Link>
        <Link to="#" className={gernalClasses.linkStyle}>
          <TwitterIcon
            fontSize={isDesktopOrLaptopOrTabletScreen ? "medium" : "small"}
          />
        </Link>
        <Link to="#" className={gernalClasses.linkStyle}>
          <YoutubeIcon
            fontSize={isDesktopOrLaptopOrTabletScreen ? "medium" : "small"}
          />
        </Link>
        <Link to="#" className={gernalClasses.linkStyle}>
          <LinkedInIcon
            fontSize={isDesktopOrLaptopOrTabletScreen ? "medium" : "small"}
          />
        </Link>
      </Grid>
      {/* for offset */}
      <Grid item xs={2} sm={4} md={5}></Grid>
    </Grid>
  );
};
export default SocialIcons;
