import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchCard from "./SearchCard";
import SideMainContainer from "./SideMainContainer";
import { useMediaQuery } from "@material-ui/core";

const MainContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Grid container spacing={0} style={{ marginTop: "5%", marginBottom: "5%" }}>
      {!isDesktopOrLaptopOrTabletScreen && <Grid item xs={1} sm={1}></Grid>}
      <Grid item md={6} sm={10} xs={10}>
        <SideMainContainer />
      </Grid>
      <Grid item md={2} s={1} sm={1}></Grid>
      <Grid item md={4} xs={0} sm={0}>
        {isDesktopOrLaptopOrTabletScreen && <SearchCard />}
      </Grid>
    </Grid>
  );
};
export default MainContainer;
