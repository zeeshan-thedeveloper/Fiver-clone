//ReactJS
import React, { useState } from "react";

//Material-UI core
import {
  Button,
  Box,
  Card,
  CardContent,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

//Material-UI Styles
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";

//Icons

//Custom Components

import { PostRequestModal } from "./PostRequestModal";

//Styles and Theme

//Routes
import { Link } from "react-router-dom";

//Resources

//custom components
import {lightBorder} from "../../Theme/borders"

export const PostRequestCard = () => {
  return <RequestCard />;
};

const requestCardStyles = makeStyles((theme) => ({
  card: {
    // borderRadius: 12,
    border:lightBorder,
    textAlign: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
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

const RequestCard = React.memo(function ProfileCard() {
  const classes = requestCardStyles();
  const shadowStyles = useFadedShadowStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={cx(classes.card, /*shadowStyles.root*/)} elevation={0}>
        <CardContent>
          <p className={classes.statValue}>
            Get offers from sellers for your project
          </p>
          <Box m={1} pt={3}>
            <Button variant="outlined" onClick={handleOpen}>
              Post a Request
            </Button>
          </Box>
          <Box m={1}>
            <Link to="previousposts" className="linkStyle">
            <Button variant="contained" color="primary">
              Show Previous
            </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
      <div>
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
                <PostRequestModal id="postRequestModalForm" handleClose={handleClose}/>
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
});