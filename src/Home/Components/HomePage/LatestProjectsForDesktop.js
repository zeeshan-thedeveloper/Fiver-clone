import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Color from "color";
import HeaderTitle from "../HeaderTitle";
import { ProjectCard } from "./ProjectCard";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectLatestProjects } from "../Slices/HomePageSlices/LatestProjectSlice";
import { loadLatestProjects } from "../Slices/HomePageSlices/LatestProjectSlice";
import {lightBorder} from '../../../Theme/borders'

//styles
const useStyles = makeStyles(() => ({
  card: ({ color }) => ({
    minWidth: 256,
   // borderRadius: 16,
    boxShadow: "none",
    border:lightBorder,
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },

  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  media: {
    height: 200,
    width: "100%",
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "1.5rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "1rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const LatestProjectsForDesktop = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const latest_Projects = useSelector(selectLatestProjects);
  const { isLoading } = useSelector((state) => state.latestProjects);
  const { hasError } = useSelector((state) => state.latestProjects);

  useEffect(() => {
    dispatch(loadLatestProjects());
  }, [dispatch]);

  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  return (
    <Grid container spacing={0} style={{ marginTop: "2%" }}>
      <Grid xs={0} sm={1} md={1} item></Grid>
      {
        <Grid xs={12} sm={10} md={10} item container spacing={4}>
          <Grid item xs={12} sm={9} md={6}>
            <ProjectCard
              classes={styles}
              project={latest_Projects[0]}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <ProjectCard
              classes={styles2}
              project={latest_Projects[1]}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <ProjectCard
              classes={styles3}
              project={latest_Projects[2]}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={6}>
            <ProjectCard
              classes={styles4}
              project={latest_Projects[3]}
              isLoading={isLoading}
            />
          </Grid>
        </Grid>
      }
      <Grid xs={0} sm={1} md={1} item></Grid>
    </Grid>
  );
};
export default LatestProjectsForDesktop;
