//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionActions,
  Breadcrumbs,
  Modal,
  Fade,
  Backdrop,
  Typography,
} from "@material-ui/core";

//Material-UI styles

//Custom Components: imported from PreviousPosts folder
import { PostRequestModal } from "./PostRequestModal";

import { FilterByPrice } from "./PreviousPosts/FilterByPrice";
import { FilterByCategory } from "./PreviousPosts/FilterByCategory";
import { FilterByStatus } from "./PreviousPosts/FilterByStatus";
import { PreviousPostContainer } from "./PreviousPosts/PreviousPostContainer";
import { PostPagination } from "./PreviousPosts/PostPagination";

//Icons
import { FilterList } from "@material-ui/icons";

//Styles and Theme
import "./Styles/PreviousPost.css";
import { Link } from "react-router-dom";
import Searchbar from "../../CustomComponents/UI/Searchbar/Searchbar";
import { lightBorder } from "../../Theme/borders";
import { Chip } from "@mui/material";

//Router

//Resources

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCategory,
  selectFilteredPrice,
  selectFilteredStatus,
} from "../Redux/slices/previousPostsFilterSlice";

//action creators
import {
  filterByCategory,
  filterByPrice,
  filterByStatus,
} from "../Redux/slices/previousPostsFilterSlice";

const postStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border: lightBorder,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}));

export const PreviousPost = () => {
  const classes = postStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isItXs = useMediaQuery("(max-width: 599px)");

  return (
    <div>
      <Box display="flex">
        <Box flex={1}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/userdashboard">
              Dashboard
            </Link>
            <Link color="textPrimary" to="previousposts">
              Previous Posts
            </Link>
          </Breadcrumbs>
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Post New Request
          </Button>
        </Box>
      </Box>

      <Card className={classes.root} elevation={0}>
        <CardContent>
          <Headingbar />
        </CardContent>
        <Divider />
        <CardContent>
            <PreviousPostContainer />
        </CardContent>

        <Divider />
        <CardContent>
          <Box display={isItXs ? "Block" : "flex"}>
            <Box flex={1} mt={4}>
              <Typography>Post 1 of 1</Typography>
            </Box>
            <Box>
              <PostPagination />
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Open this modal, when post request button is clicked */}
      <Modal
        aria-labelledby="postRequestModalTitle"
        aria-describedby="postRequestModalForm"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <Typography variant="h4" id="postRequestModalTitle" className={classes.modalHeading}>Transition modal</Typography> */}
            <Box mt={-4}>
              <PostRequestModal
                id="postRequestModalForm"
                handleClose={handleClose}
              />
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const headingbarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  boxContainer: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const Headingbar = () => {
  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");
  const classes = headingbarStyles();

  const [filterOpen, setFilterOpen] = useState(false);

  function handleFilterOptionsClick() {
    setFilterOpen(() => !filterOpen);
  }

  function handleCloseAccordion() {
    setFilterOpen(false);
  }
  return (
    <div>
      <Box className={classes.root} mb={1}>
        <Box
          className={classes.boxContainer}
          ml={isItSmallOrExtraSmall ? -1 : 0}
        >
          <Searchbar placeholder="Seach Anything" opacity={1} />
        </Box>
        <Box flex={1}></Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FilterList />}
            size="small"
            onClick={handleFilterOptionsClick}
          >
            Filters
          </Button>
        </Box>
      </Box>
      <Box>
        <FilterOptionContainer
          filterOpen={filterOpen}
          handleCloseAccordion={handleCloseAccordion}
        />
      </Box>
    </div>
  );
};

const filterStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const FilterOptionContainer = (props) => {
  const classes = filterStyles();
  const isItXs = useMediaQuery("(max-width: 599px)");

  const dispatch = useDispatch();
  function handleCloseAccordion() {
    props.handleCloseAccordion();
  }

  function handleApplyFilters() {
    alert("Apply");
    props.handleCloseAccordion();
  }
  function handleClearFilters() {
    dispatch(filterByCategory(null));
    dispatch(filterByPrice(null));
    dispatch(filterByStatus(null));

    props.handleCloseAccordion();
  }

  return (
    <Box className={classes.root}>
      <Accordion expanded={props.filterOpen} elevation={0}>
        <AccordionDetails />
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <FilterByStatus />
              {isItXs ? <Divider orientation="horizontal" /> : ""}
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              {/* Imported From PreviousPost folder */}
              <FilterByPrice />
              {isItXs ? <Divider /> : ""}
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              {/* Imported From PreviousPost folder */}
              <FilterByCategory />
            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleCloseAccordion}
          >
            Close Filters
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
        </AccordionActions>
        <FilterChips />
      </Accordion>
    </Box>
  );
};

const FilterChips = () => {
  const category = useSelector(selectFilteredCategory);
  const price = useSelector(selectFilteredPrice);
  const status = useSelector(selectFilteredStatus);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const chipData = [
      {
        title: category,
        key: "category",
      },
      {
        title: price,
        key: "price",
      },
      {
        title: status,
        key: "status",
      },
    ];
    setFilters(chipData);
  }, [category, price, status]);

  function handleRelatedProjectDelete(chipToDelete) {
    setFilters((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  }

  return (
    <Box>
      {filters
        ? filters.map((data) => {
            return data.title ? (
              <Chip
                style={{ marginRight: "1rem" }}
                key={data.key}
                label={data.title}
                onDelete={() => {
                  handleRelatedProjectDelete(data);
                }}
              />
            ) : (
              ""
            );
          })
        : ""}
    </Box>
  );
};
