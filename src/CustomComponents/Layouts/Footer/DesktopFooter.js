import Grid from "@material-ui/core/Grid";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidRoundedIcon from "@material-ui/icons/AndroidRounded";
import SocialIcons from "./SocialIcons";
import { makeStyles } from "@material-ui/core/styles";
import { DividerInFooter } from "./DividerInFooter";

//colors and fonts
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import gernalClassesStyles from "../../../Theme/gernalStyles";

//routing
import { Link } from "react-router-dom";

// strings
import { FooterLists } from "./Strings";

//styles
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.primary,
    paddingTop: "4%",
    color: colors.lightGray,
  },
  ulStyle: {
    listStyle: "none",
  },
  listHeading: {
    font: Headingfonts.extraSmall,
    marginBottom: "5%",
  },
  liStyle: {
    marginBottom: "4%",
    font: TextFonts.XXSmall,
  },
  websiteMark: {
    color: colors.highlighter,
    font: Headingfonts.extraExtraSmall,
  },
  mobileApp: {
    marginRight: "2%",
    font: Headingfonts.extraExtraSmall,
  },
}));

// desktop footer
const DesktopFooter = (props) => {
  const classes = useStyles();
  const gernalClasses = gernalClassesStyles();
  return (
    <Grid classes={{ root: classes.root }}>
      <Grid container spacing={0}>
        <Grid sm={1} md={1} item></Grid>
        <Grid xs={12} sm={10} md={10} item container>
          {FooterLists.map((listItem, index) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <ul className={classes.ulStyle} key={`FooterList_${index}`}>
                  <li className={classes.listHeading}>
                    {listItem.headingName}
                  </li>
                  {listItem.listItems.map((item) => {
                    return (
                      <Link
                        to={`${item.route}`}
                        className={gernalClasses.linkStyle}
                      >
                        <li className={classes.liStyle}>{item.itemName}</li>
                      </Link>
                    );
                  })}
                </ul>
              </Grid>
            );
          })}
        </Grid>
        <Grid sm={1} md={1} item></Grid>
      </Grid>

      <SocialIcons />

      {/**for horizontal line */}
      <DividerInFooter />
      {/* for extra info*/}
      <Grid container>
        <Grid md={1} sm={3} xs={2} item></Grid>
        <Grid item md={3}>
          <p className={classes.websiteMark}>
            {" "}
            © 2015 - 2021 CodeInDNA® Global Inc.
          </p>
        </Grid>
        <Grid md={5} sm={6} xs={2} item></Grid>
        <Grid md={2} sm={3} xs={2} item container>
          <span className={classes.mobileApp}>Mobile Apps</span>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AppleIcon />
          </Link>
          <Link to="#" className={gernalClasses.linkStyle}>
            <AndroidRoundedIcon />
          </Link>
        </Grid>
        <Grid md={1} sm={3} xs={2} item></Grid>
      </Grid>
    </Grid>
  );
};

export default DesktopFooter;
