import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

// colors and fonts
import gernalClassesStyles from "../../../Theme/gernalStyles";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";

//strings
import { FooterLists } from "./Strings";

//styles
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(12),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  themeColor: {
    backgroundColor: colors.primary,
    color: colors.lightGray,
  },
  liStyle: {
    marginBottom: "6%",
    font: TextFonts.medium,
  },
  ulStyle: {
    listStyle: "none",
  },
  listHeading: {
    font: Headingfonts.large,
    marginBottom: "5%",
  },
}));

const MobileFooterLists = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const gernalClasses = gernalClassesStyles();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid item xs={10}>
      {FooterLists.map((listItem, index) => {
        return (
          <Accordion
            expanded={expanded === `Panel${index}`}
            onChange={handleChange(`Panel${index}`)}
            classes={{
              root: classes.themeColor,
            }}
            key={`FooterItem_${index}`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.listHeading}>
                {listItem.headingName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className={classes.ulStyle}>
                {listItem.listItems.map((item, index) => {
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
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Grid>
  );
};
export default MobileFooterLists;
