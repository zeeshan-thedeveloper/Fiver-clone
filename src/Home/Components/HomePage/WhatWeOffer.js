import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Offer from "./Offer";
import HeaderTitle from "../HeaderTitle";
import { DividerInProjects } from "../HorizontalLine";
import { useMediaQuery } from "@material-ui/core";
import { WORKSTEPS, WORKSTEPSTITLE } from "../../Strings/HomePageStrings";
const WhatWeOffer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Grid
      xs={12}
      sm={12}
      md={12}
      item
      container
      justifyContent="center"
      alignItems="center"
    >
      <DividerInProjects />
      <HeaderTitle title={WORKSTEPSTITLE} />
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={isDesktopOrLaptopOrTabletScreen ? 4 : 0}
        style={{ marginBottom: "3%" }}
      >
        {WORKSTEPS.map((step) => (
          <Grid xs={10} sm={5} md={3} item>
            <Offer
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          </Grid>
        ))}
      </Grid>
      <DividerInProjects />
    </Grid>
  );
};
export default WhatWeOffer;
