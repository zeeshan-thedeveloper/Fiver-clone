//ReactJS
import React, { useState } from "react";

//Material-UI core
import {
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
  MenuItem,
  Select,
  Grid
} from "@material-ui/core";

//Material-UI styles
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

//Custom Components

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Styles and Theme

//Redux
import { useDispatch, useSelector } from "react-redux";

//selectors
import {
  selectFilteredCategory,
  selectFilteredPrice,
  selectFilteredStatus,
} from "../../Redux/slices/previousPostsFilterSlice";
//action creators
import {filterByCategory, filterByPrice, filterByStatus} from "../../Redux/slices/previousPostsFilterSlice"

const optionsStyles = makeStyles((theme) => ({
  categoryText: {
    fontWeight: "bold",
    color: "black",
  },
  categoryBox: {
    flex: 1,
  },
}));

export const FilterByCategory = () => {
  const classes = optionsStyles();

  const borderSelectClasses = useBorderSelectStyles();

  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + borderSelectClasses.icon}
      />
    );
  };

  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");

  const [postStatus, setPostStatus] = useState('none');
  const dispatch=useDispatch()
  const handlePostStatusChange = (event) => {
    setPostStatus(event.target.value);
    dispatch(filterByCategory(event.target.value))
  };

    const options = [
    {
      optionTitle: "Desktop App Development",
      value: 'desktop',
    },
    {
      optionTitle: "Web Development",
      value: 'Web',
    },
    {
      optionTitle: "Mobile App Development",
      value: 'mobile',
    },
    {
      optionTitle: "Graphic Designing",
      value: 'graphics',
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Box>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            labelId="inputLabel"
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={postStatus}
            onChange={handlePostStatusChange}
          >
            <MenuItem value={'none'} disabled>
              <Typography className={classes.categoryText}>
                Select Post Category
              </Typography>
            </MenuItem>
            {
              options.map(({optionTitle, value})=>{
                return (
                  <MenuItem value={value}>
                  <Typography className={classes.categoryText}>
                    {optionTitle}
                  </Typography>
                </MenuItem>
                )
              })
            }
          </Select>
        </Box>
      </Grid>
    </Grid>
  );
};