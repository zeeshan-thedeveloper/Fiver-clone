//ReactJS
import React, { useState } from "react";
//Material-UI core
import {
  Button,
  Box,
  Card,
  CardContent,
  TextareaAutosize,
  CardHeader,
  Divider,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Tooltip,
  Zoom,
  Grid,
  useMediaQuery,
  Select,
  MenuItem
} from "@material-ui/core";

//Material-UI Styles
import { makeStyles } from "@material-ui/core/styles";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

//Custom Components


//Styles and Theme

//Resources

const modalFormStyles = makeStyles((theme) => ({
    root: {
      marginTop: "2rem",
    },
    attachFilesBtn: {
      flex: 1,
    },
    descriptionBox: {
      fontFamily: "verdana",
      fontSize: 16,
    },
    closeBtn:{
      cursor:'pointer'
    }
  }));

  
export const PostRequestModal = (props) => {
    const classes = modalFormStyles();
  
    const letterLimit = 5000;
  
    const [letterCount, setLetterCount] = useState(0);
  
    function handleDescriptionChange(event) {
      const letters = event.target.value;
      setLetterCount(letters.length);
    }
  
    function handleSubmitRequest(){
      alert("Send Request to admin Dashboard")
      //Call handle close method of parent component
      props.handleClose()
    }

    function handleSaveAsDraft(){
      alert("Send Data to database as draft")
      //Call handle close method of parent component
      props.handleClose()
    }
    function handleClose(){
      props.handleClose()
    }
  
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card className={classes.root} elevation={0}>
        <CardHeader
          title={
            <Typography variant="h5">
              Describe the service you are looking for- Be more detailed
            </Typography>
          }
          action={
            <Box className={classes.closeBtn}>
            <CloseIcon
              onClick={handleClose}
            />
          </Box>
          }
        />
        <Divider />
        <CardContent>
          <form>
            <FormControl fullWidth>
              <Tooltip
                title={
                  <Typography>
                    Include all the necessary details needed to complete your
                    request. For example: If you are looking for a logo, you can
                    specify your company name, business type, preferred color,
                    etc.
                  </Typography>
                }
                TransitionComponent={Zoom}
                placement="right"
                arrow
              >
                <TextareaAutosize
                  maxRows={4}
                  minRows={4}
                  aria-label="maximum height"
                  placeholder="I am Looking for ..."
                  className={classes.descriptionBox}
                  onChange={handleDescriptionChange}
                  maxLength={letterLimit}
                />
              </Tooltip>
  
              <Box mt={2} display="flex">
                <Box className={classes.attachFilesBtn}>
                  <Button variant="outlined" color="primary">
                    Attach Files
                  </Button>
                </Box>
                <Box>
                  <label>
                    {letterCount}/{letterLimit}
                  </label>
                </Box>
              </Box>
            </FormControl>
          </form>
        </CardContent>
        <Divider />
        <CardContent>
          <SelectOptions />
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader
            title={
              <Box mt={-2}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value="45"
                    size="small"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Box>
            }
            action={
              <Box display="flex">
                <Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmitRequest}
              >
              Save as Draft
              </Button>
              </Box>
              <Box ml={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmitRequest}
              >
                Submit Request
              </Button>
              </Box>
            </Box>
            }
          />
        </CardContent>
      </Card>
      </Grid>
        </Grid>
      </div>
    
    );
  };
  
  const optionsStyles = makeStyles((theme) => ({
    categoryText: {
      fontWeight: "bold",
      color: "black",
    },
    categoryBox: {
      flex: 1,
    },
  }));
  
  const SelectOptions = () => {
    const classes = optionsStyles();
  
    const [category, setCategory] = useState(0);
    const [subCategory, setSubCategory] = useState(0);
    const [time, setTime] = useState(0);
  
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    const handleSubCategoryChange = (event) => {
      setSubCategory(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
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
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value={0} disabled>
                <Typography className={classes.categoryText}>
                  Select Category
                </Typography>
              </MenuItem>
              <MenuItem value={1}>
                <Typography className={classes.categoryText}>
                  Web Development
                </Typography>
              </MenuItem>
  
              <MenuItem value={2}>
                <Typography className={classes.categoryText}>
                  Java Desktop App
                </Typography>
              </MenuItem>
              <MenuItem value={3}>
                <Typography className={classes.categoryText}>
                  .Net Core
                </Typography>
              </MenuItem>
              <MenuItem value={4}>
                <Typography className={classes.categoryText}>
                  Java Android App
                </Typography>
              </MenuItem>
              <MenuItem value={5}>
                <Typography className={classes.categoryText}>
                  React Native App
                </Typography>
              </MenuItem>
              <MenuItem value={6}>
                <Typography className={classes.categoryText}>
                  UX/UI Design
                </Typography>
              </MenuItem>
            </Select>
          </Box>
        </Grid>
  
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Box className={classes.categoryBox} ml={3}>
            <Select
              disableUnderline
              classes={{ root: borderSelectClasses.select }}
              IconComponent={iconComponent}
              MenuProps={menuProps}
              value={subCategory}
              onChange={handleSubCategoryChange}
              disabled={category == 0}
            >
              <MenuItem value={0} disabled>
                <Typography className={classes.categoryText}>
                  Select Sub Category
                </Typography>
              </MenuItem>
              <MenuItem value={1}>
                <Typography className={classes.categoryText}>
                  Web Development
                </Typography>
              </MenuItem>
  
              <MenuItem value={2}>
                <Typography className={classes.categoryText}>
                  Java Desktop App
                </Typography>
              </MenuItem>
              <MenuItem value={3}>
                <Typography className={classes.categoryText}>
                  .Net Core
                </Typography>
              </MenuItem>
              <MenuItem value={4}>
                <Typography className={classes.categoryText}>
                  Java Android App
                </Typography>
              </MenuItem>
              <MenuItem value={5}>
                <Typography className={classes.categoryText}>
                  React Native App
                </Typography>
              </MenuItem>
              <MenuItem value={6}>
                <Typography className={classes.categoryText}>
                  UX/UI Design
                </Typography>
              </MenuItem>
            </Select>
          </Box>
      </Grid>
  
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
      <Box mt={isItSmallOrExtraSmall?1:0}>
            <Select
              disableUnderline
              classes={{ root: borderSelectClasses.select }}
              IconComponent={iconComponent}
              MenuProps={menuProps}
              value={time}
              onChange={handleTimeChange}
              disabled={subCategory == 0}
            >
              <MenuItem value={0} disabled>
                <Typography className={classes.categoryText}>
                  Select Max Project Time
                </Typography>
              </MenuItem>
              <MenuItem value={1}>
                <Typography className={classes.categoryText}>24 Hours</Typography>
              </MenuItem>
              <MenuItem value={2}>
                <Typography className={classes.categoryText}>3 days</Typography>
              </MenuItem>
              <MenuItem value={3}>
                <Typography className={classes.categoryText}>7 days</Typography>
              </MenuItem>
              <MenuItem value={4}>
                <Typography className={classes.categoryText}>15 Days</Typography>
              </MenuItem>
              <MenuItem value={5}>
                <Typography className={classes.categoryText}>1 Month</Typography>
              </MenuItem>
  
              <MenuItem value={6}>
                <Typography className={classes.categoryText}>3 Month</Typography>
              </MenuItem>
  
              <MenuItem value={7}>
                <Typography className={classes.categoryText}>
                  More than 3 Months
                </Typography>
              </MenuItem>
            </Select>
          </Box>
      </Grid>
      </Grid>
    );
  };
  