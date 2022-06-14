import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import colors from "../../../Theme/colors";
import { makeStyles } from "@material-ui/core";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import { lightBorder } from "../../../Theme/borders";

// string constants
import {
  TERMSANDSERVICES_TITLE,
  TERMSANDSERVICES_INTROCONTENT,
  TERMSANDSERVICES_CUSTOMOFFERS,
  TERMSANDSERVICES_ORDERS,
  TERMSANDSERVICES_VIOLATION,
} from "../../Strings/AboutUsStrings";


//styles
const TermsAndServicesStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.highlighter,
    paddingBottom: "3%",
    paddingTop: "3%",
    borderTop:lightBorder,
    borderRadius: 10,
  },
  Conatiner: {
    border: lightBorder,
    backgroundColor: colors.white,
    paddingLeft: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "2%" : "4%",
    paddingRight: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "2%" : "4%",
    paddingBottom: "5%",
    paddingTop:'2%'
  },
  paragraph: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "3%" : "5%",
    lineHeight: "1.6",
  },
  bulletPoints: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%" : "2%",
    lineHeight: "1.6",
  },
}));
const TermsAndServices = ({ totalGrid }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = TermsAndServicesStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item md={2}></Grid>
      <TermsAndServicesContent totalGrid={totalGrid} />
      <Grid item md={2}></Grid>
    </Grid>
  );
};

export const TermsAndServicesContent = ({ totalGrid }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = TermsAndServicesStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid
      conatiner
      item
      xs={12}
      md={totalGrid}
      sm={12}
      className={classes.Conatiner}
    >
      <HomePageComponentsHeading
        title={TERMSANDSERVICES_TITLE}
        description={"Welcome to CodeInDNA.com"}
        titleColor={colors.lightBlack}
        descriptionColor={colors.highlighter}
        margin={"0%"}
      />
      <div className={classes.paragraph}>
        {TERMSANDSERVICES_INTROCONTENT.PARAGRAPHONE}{" "}
      </div>

      <div className={classes.paragraph}>
        {TERMSANDSERVICES_INTROCONTENT.PARAGRAPHTWO}{" "}
      </div>
      <div className={classes.paragraph}>
        {TERMSANDSERVICES_INTROCONTENT.PARAGRAPHTHREE}{" "}
      </div>
      <div className={classes.paragraph}>
        {TERMSANDSERVICES_INTROCONTENT.PARAGRAPHFOUR}{" "}
      </div>
      <div className={classes.paragraph}>
        {TERMSANDSERVICES_INTROCONTENT.PARAGRAPHFIVE}{" "}
      </div>
      <SmallHeading title={`Custom Offer`} />
      <ul>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_CUSTOMOFFERS.POINTONE}
        </li>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_CUSTOMOFFERS.POINTTWO}
        </li>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_CUSTOMOFFERS.POINTTHREE}
        </li>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_CUSTOMOFFERS.POINTFOUR}
        </li>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_CUSTOMOFFERS.POINTFIVE.text}
          <ul style={{ marginTop: "1%" }}>
            <li className={classes.bulletPoints}>
              {TERMSANDSERVICES_CUSTOMOFFERS.POINTFIVE.subPoints.ONE}
            </li>
            <li className={classes.bulletPoints}>
              {TERMSANDSERVICES_CUSTOMOFFERS.POINTFIVE.subPoints.TWO}
            </li>
          </ul>
        </li>
      </ul>
      <SmallHeading title={`Orders`} />
      <ul>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_ORDERS.POINTONE}
        </li>
        <li className={classes.bulletPoints}>
          {TERMSANDSERVICES_ORDERS.POINTTWO}
        </li>
      </ul>
      <SmallHeading title={`Violation`} />
      <div className={classes.paragraph}>
        {TERMSANDSERVICES_VIOLATION.POINT_ONE}
      </div>
    </Grid>
  );
};
export default TermsAndServices;
