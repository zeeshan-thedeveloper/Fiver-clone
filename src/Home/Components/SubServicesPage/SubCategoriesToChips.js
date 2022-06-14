import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import gernalClassesStyles from "../../../Theme/gernalStyles";
import colors from "../../../Theme/colors";
import { Headingfonts, TextFonts } from "../../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
const SubCategoriesToChipsStyles = makeStyles(() => ({
  ulStyle: {
    listStyle: "none",
  },
  liStyle: {
    marginBottom: "4%",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    color: colors.primary,
  },
}));

const SelectSubCategories = ({ subCategoriesOfSelectedCategoryChip }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = SubCategoriesToChipsStyles(isDesktopOrLaptopOrTabletScreen);
  const gernalClasses = gernalClassesStyles();
  useEffect(()=>{
    console.log('in SelectSubCategories')
  })
  return (
    <Grid container spacing={0}>
      <Grid sm={1} md={1} item></Grid>
      <Grid xs={12} sm={10} md={10} item container>
        <Grid item xs={5} sm={6} md={3}>
          <ul className={classes.ulStyle}>
            {subCategoriesOfSelectedCategoryChip.slice(0,5).map((subCategory) => (
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>{subCategory}</li>
              </Link>
            ))}
          </ul>
        </Grid>
        <Grid item xs={5} sm={6} md={3}>
          <ul className={classes.ulStyle}>
          {subCategoriesOfSelectedCategoryChip.slice(5,10).map((subCategory) => (
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>{subCategory}</li>
              </Link>
            ))}

          </ul>
        </Grid>
        <Grid item xs={5} sm={6} md={3}>
          <ul className={classes.ulStyle}>
          {subCategoriesOfSelectedCategoryChip.slice(10,15).map((subCategory) => (
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>{subCategory}</li>
              </Link>
            ))}
          </ul>
        </Grid>
        <Grid item xs={5} sm={6} md={3}>
          <ul className={classes.ulStyle}>
          {subCategoriesOfSelectedCategoryChip.slice(15,20).map((subCategory) => (
              <Link to="#" className={gernalClasses.linkStyle}>
                <li className={classes.liStyle}>{subCategory}</li>
              </Link>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Grid sm={1} md={1} item></Grid>
    </Grid>
  );
};
export const SubCategoriesToChips = ({
  selectedCategoryChipId,
  subCategoriesOfSelectedCategoryChip,
}) => {
  useEffect(()=>{
    console.log('in export const SubCategoriesToChips')
    console.log(typeof subCategoriesOfSelectedCategoryChip)
  })
  return (
    <SelectSubCategories
      subCategoriesOfSelectedCategoryChip={subCategoriesOfSelectedCategoryChip}
    />
  );
};
