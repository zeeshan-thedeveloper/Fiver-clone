import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { ColorGradient } from "../../../Theme/colors";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectLatestProjects } from "../Slices/HomePageSlices/LatestProjectSlice";
import { loadLatestProjects } from "../Slices/HomePageSlices/LatestProjectSlice";


// styles
const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background: ColorGradient.purple,
  },
}));

export default function LatestProjectsForMobile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const latest_Projects = useSelector(selectLatestProjects);
  // const { isLoading } = useSelector((state) => state.latestProjects);
  // const { hasError } = useSelector((state) => state.latestProjects);

  // useEffect(() => {
  //   dispatch(loadLatestProjects());
  // }, [dispatch]);

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1.2} gap={8}>
        {" "}
        {/* {latest_Projects.map((project) => (
          <ImageListItem key={project.projectId} className={classes.actionArea}>
            <img src={project.projectImage} alt={project.projectTitle} />
            <ImageListItemBar
              title={project.projectTitle}
              subtitle={project.projectSubtitle}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
             
            />
          </ImageListItem>
        ))} */}
      </ImageList>
    </div>
  );
}
