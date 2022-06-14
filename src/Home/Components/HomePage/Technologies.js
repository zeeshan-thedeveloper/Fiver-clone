import HeaderTitle from "../HeaderTitle";
import { Grid } from "@material-ui/core";
import TechnologyIcons from "./TechnologyIcons";
import { DividerInservices } from "../HorizontalLine";

const Technologies = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        container
        justifyContent="center"
        alignItems="center"
      >
        <HeaderTitle title={"Trending Technologies"} />

        <TechnologyIcons />
      </Grid>
      <DividerInservices />
    </Grid>
  );
};
export default Technologies;
