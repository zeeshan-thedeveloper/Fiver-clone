import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidRoundedIcon from "@material-ui/icons/AndroidRounded";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { DividerInFooter } from "./DividerInFooter";
import gernalClassesStyles from "../../../Theme/gernalStyles";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import MobileFooterLists from "./MobileFooterList";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: colors.primary,
    color: colors.lightGray,
  },
  websiteMark: {
    color: colors.highlighter,
    font: Headingfonts.medium,
    marginBottom: "5%",
    marginTop: "3%",
    textAlign: "center",
  },
  mobileApp: {
    marginRight: "5%",
    font: Headingfonts.medium,
  },
}));

export default function MobileFooter() {
  const classes = useStyles();
  const gernalClasses = gernalClassesStyles();
  return (
    <Grid item xs={12} className={classes.root} container>
      <Grid item xs={1}></Grid>
      <MobileFooterLists />
      <Grid item xs={1}></Grid>

      <SocialIcons />

      <DividerInFooter />

      <Grid container>
        <Grid xs={4} item></Grid>
        <Grid xs={6} item container>
          <span className={classes.mobileApp}> Mobile Apps</span>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AppleIcon fontSize="small" />
          </Link>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AndroidRoundedIcon fontSize="small" />
          </Link>
        </Grid>
        <Grid xs={4} item></Grid>
      </Grid>
      <Grid container className={classes.websiteMark}>
        <Grid xs={2} item></Grid>
        <Grid item xs={8}>
          © 2015 - 2021 CodeInDNA® Global Inc.
        </Grid>
        <Grid xs={2} item></Grid>
      </Grid>
    </Grid>
  );
}
