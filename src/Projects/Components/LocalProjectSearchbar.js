//ReactJS
import React, { useState } from "react";

//Material-UI
import { TextField, makeStyles, Typography } from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { Chip, Grid } from "@material-ui/core";

//Icons and colors
import TagFacesIcon from "@material-ui/icons/TagFaces";

//Local Resources
import "./Styles/LocalProjectSearchbarStyles.css";

//Custom components
import {lightBorder} from "../../Theme/borders"
import Searchbar from "../../CustomComponents/UI/Searchbar/Searchbar";
import { Box } from "@mui/system";

const searchFieldStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "50%",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
}));


export const LocalProjectSearchbar = () => {
  const classes = searchFieldStyle();

  const [relatedTerm, setRelatedTerm] = useState([
    {
      key: "react",
      label: "ReactJS",
    },
    {
      key: "node",
      label: "Node",
    },
    {
      key: "express",
      label: "Express",
    },
  ]);

  const [searchedProject, setSearchedProject] = useState("");

  function handleSearch(evt) {
    setSearchedProject(evt.target.innerText);
  }

  function handlerelatedProjectClick(chipClicked) {
    console.log(chipClicked.key);
  }

  function handleRelatedProjectDelete(chipToDelete) {
    setRelatedTerm((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  }

  return (
    <Box mt={4}>
      <Searchbar placeholder="Search project"/>
      
      <Box mt={2} mb={2}>
      <Grid container>
        <Grid item xs={1}></Grid>

        <Grid item xs={10} sm={12}>
          {searchedProject ? (
            <Typography variant="h5" style={{ color: "blue" }}>
              Results for "{searchedProject}"
            </Typography>
          ) : (
            ""
          )}
          <Typography variant="h6">
            Related projects<br></br>
            <Box mt={1}>
            {relatedTerm.map((data) => {
              return (
                <Chip
                  className="relatedProjectsChip"
                  style={{ marginRight: "1rem" }}
                  key={data.key}
                  label={data.label}
                  onClick={() => {
                    handlerelatedProjectClick(data);
                  }}
                  onDelete={() => {
                    handleRelatedProjectDelete(data);
                  }}
                />
              );
            })}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      </Box>
    </Box>
  );
};