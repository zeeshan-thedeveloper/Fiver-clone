//ReactJS


//Material-UI core
import {
  Grid,
  useMediaQuery,
} from "@material-ui/core";

//Material-UI styles


//icons

//Custom Components

import { Menubar } from "./Menubar";
import { FilterOptions } from "./FilterOptions";
import { LocalProjectSearchbar } from "./LocalProjectSearchbar";
import { Footer } from "./Footer";
import MobileFooter from "./MobileFooter";
import { ProjectContainer } from "./ProjectContainer";
import { ProjectPagination } from "./ProjectPagination";

//Theme and Styles
import "./Styles/FooterStyles.css";
import "../Color/Colors.css";


//Resources


export const SearchProjectsComponent = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <Grid container>
        <Grid item xs={4} sm={12} md={12}>
          <Menubar />
        </Grid>
      </Grid>

      <div className="filterOptions">
        <Grid container>
          <Grid item sm={1} md={1} lg={2} xl={2}></Grid>

          <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
            <LocalProjectSearchbar />
            <FilterOptions />
          </Grid>
          <Grid item sm={1} md={1} lg={2} xl={2}></Grid>
        </Grid>
      </div>

      <div className="projectContainer">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>

          <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
            {Array(7)
              .fill()
              .map((proj, ind) => {
                return (
                    <ProjectContainer />
                );
              })}
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
        </Grid>
      </div>

      <div className="projectContainer">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>

          <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
              <hr></hr>
          <ProjectPagination />
         </Grid>
         </Grid>
      </div>

      {/* Footer Section */}
      <div>
        <Grid container style={{ marginTop: "5%" }} spacing={0}>
          <Grid item md={12} xs={12} sm={12}>
            {isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};