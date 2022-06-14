//ReactJS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Material-UI core
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  useMediaQuery,
  Menu,
  Fade,
} from "@material-ui/core";

//Material-UI styles

//Icons
import MoreVerticalIcon from "@material-ui/icons/MoreVert";

//Theme and Styles
import "../Styles/PreviousPostContainer.css";

//Custom components

//Resources

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPosts,
  selectAreAllPostsLoading,
  selectHasError,
} from "../../Redux/slices/previousPostsSlice";
//thunks
import { fetchPreviousPosts } from "../../Redux/slices/previousPostsSlice";

export const PreviousPostContainer = () => {
  const isItExtraSmall = useMediaQuery("(max-width: 599px)");

  const dispatch = useDispatch();
  const previousPosts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectAreAllPostsLoading);
  const encounteredError = useSelector(selectHasError);

  useEffect(() => {
    dispatch(fetchPreviousPosts());
  }, [dispatch]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(previousPosts);
  }, [previousPosts]);

  return (
    <Box>
      {isLoading ? (
        <h5>Loading Posts ....</h5>
      ) : (
        posts.map((post) => {
          const postDate = post.postedOn.split("/");
          const today = new Date().toLocaleDateString().split("/");

          const days = parseInt(today[0]) - parseInt(postDate[0]);
          // const months=today[1]-postDate[1]
          // const year=today[2]-postDate[2]
          // let totalTime=0;

          return (
            <Grid container className="previousPostContainer">
              <Grid item xs={12} sm={7} md={6} lg={6} xl={6}>
                <Box>
                  <h4>{post.requirement}</h4>
                </Box>
                <Box mt={-2}>
                  <span> Posted {days} days ago by you</span>
                </Box>
              </Grid>
              <Grid item xs={5} sm={2} md={3} lg={2} xl={2}>
                <Box display="flex">
                  <h4>Status</h4>
                </Box>
                <Box mt={isItExtraSmall ? -2 : 0}>
                  <span> {post.status.toUpperCase()}</span>
                </Box>
              </Grid>

              <Grid item xs={6} sm={2} md={2} lg={3} xl={3}>
                <Box display="flex">
                  <h4>Seen By DNA</h4>
                </Box>
                <Box mt={isItExtraSmall ? -2 : 0}>
                  <span> {post.seenByDNA ? "YES" : "NO"} </span>
                </Box>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <Box mt={2}>
                  <PostOptionsMenu postId={post.postId} />
                </Box>
              </Grid>
            </Grid>
          );
        })
      )}
    </Box>
  );
};

function PostOptionsMenu(props) {
  const [postId, setPostId] = useState();

  useEffect(() => {
    setPostId(props.postId);
  }, [props]);

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVerticalIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        TransitionComponent={Fade}
      >
        <Link
          to={{
            pathname: "/viewpost",
            state: { postId: postId },
          }}
          className="linkStyle"
        >
          <MenuItem>View Post</MenuItem>
        </Link>
        <Box>
          <MenuItem>Reuse Post</MenuItem>
        </Box>
        <Box>
          <MenuItem>Delete Post</MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
