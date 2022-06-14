//ReactJS
import React, { useState, useEffect } from "react";
//Material-UI core
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  TextareaAutosize,
  FormControl,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

//Material-UI Styles
import { makeStyles } from "@material-ui/core/styles";

//Custom Components

//Styles and Theme

//Routing

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
//No need of this thunk actually
import { deleteUserAccount } from "../../Redux/slices/criticalSectionSlice";

//selectors
import {
  selectResponseAfterDeletion,
  selectIsLoadingDeletion,
  selectHasErrorInDeletion,
} from "../../Redux/slices/criticalSectionSlice";
import { lightBorder } from "../../../Theme/borders";

//Styles and theme

//Icons

//Resources

export const AccountSettingsCriticalSection = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Think Once!</Typography>
      </Box>
      <CriticalSectionContainer />
    </div>
  );
};

function CriticalSectionContainer() {
  return (
    <>
      <DeleteAccount />
    </>
  );
}

const deleteAccountStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border:lightBorder
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
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

const DeleteAccount = () => {
  const classes = deleteAccountStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} elevation={0}>
        <CardHeader
          title={<Typography variant="h4">Delete Account</Typography>}
        />
        <Divider />
        <CardContent>
          <h3>What happens when you deactivate your account?</h3>
          <ul>
            <li>Your profile won't be shown on Codeindna anymore. </li>
            <li>Active orders will be cancelled. </li>
            <li>You won't be able to re-activate your account</li>
          </ul>
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader
            title={
              <strong>NOTE: Withdraw your before Deleting account.</strong>
            }
            action={
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOpen}
              >
                Delete Account
              </Button>
            }
          />
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="deleteAccountModal"
        aria-describedby="deleteAccountForm"
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
            <Box mt={-4}>
              <DeleteAccountModal id="warningModal" handleClose={handleClose} />
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

const modalFormStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
  },
  attachFilesBtn: {
    flex: 1,
  },
  descriptionBox: {
    fontFamily: "verdana",
    fontSize: 16,
  },
}));

export const DeleteAccountModal = (props) => {
  const classes = modalFormStyles();
  const letterLimit = 2000;
  const minimum=50;

  const[description, setDescription]=useState('')
  function handleDescriptionChange(event) {
    const letters = event.target.value;
    setDescription(letters)
  }

  function handleClose() {
    props.handleClose();
  }

  // const response=useSelector(selectResponseAfterDeletion)
  // const isLoading=useSelector(selectIsLoadingDeletion)
  // const encounteredError=useSelector(selectHasErrorInDeletion)


  const dispatch=useDispatch()
  function handleDeleteAccount() {     
    
    if(description.length<minimum){
      alert(`Write atleast ${minimum} letters`)
      return;
    }
    let userDetails={
      email:"nadir@gmail.com",
      username:"nadir_hussainnn",
      password:"nadir123",
      reasonToLeave:description
    }
    dispatch(deleteUserAccount(userDetails));
    props.handleClose();
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className={classes.root} elevation={0}>
            <CardHeader
              title={
                <Typography variant="h5">
                  Make us improve! Write us why you are leaving DNA?
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <form>
                <FormControl fullWidth>
                  <TextareaAutosize
                    maxRows={4}
                    minRows={4}
                    aria-label="maximum height"
                    placeholder="I am leaving DNA because ..."
                    className={classes.descriptionBox}
                    onChange={handleDescriptionChange}
                    maxLength={letterLimit}
                  />
                  <Box mt={2} display="flex">
                    <Box>
                      <label>
                        {description.length}/{letterLimit}
                      </label>
                    </Box>
                  </Box>
                </FormControl>
              </form>
            </CardContent>
            <CardContent>
              <CardHeader
                action={
                  <Box display="flex" mt={-4}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Box>
                    <Box ml={3}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        onClick={handleDeleteAccount}
                      >
                        Confirm
                      </Button>
                    </Box>
                  </Box>
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
