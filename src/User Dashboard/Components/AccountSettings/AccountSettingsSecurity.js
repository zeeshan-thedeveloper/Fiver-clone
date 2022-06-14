//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Select,
  Grid,
  TextareaAutosize,
  Backdrop,
  Modal,
  Fade,
} from "@material-ui/core";

//material-UI styles
import { makeStyles } from "@material-ui/core/styles";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

//Icons
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
//Resources

//Redux
import { useDispatch, useSelector } from "react-redux";
//thunks
import { fetchSecurityQuestionDetails, fetchPasswordDetails, fetchSetNewPassword } from "../../Redux/slices/securityInfoSlice";

//Action creators

//selectors
import {
  selectSecurityQuestionInfo,
  selectIsLoadingSecurityQuestionInfo,
  selectHasErrorSecurityQuestionInfo,
  selectPasswordInfo,
  selectIsLoadingPasswordInfo,
  selectHasErrorPasswordInfo
} from "../../Redux/slices/securityInfoSlice";
import { lightBorder } from "../../../Theme/borders";


export const AccountSettingsSecurity = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Password and Security</Typography>
      </Box>
      <PersonalInfoContainers />
    </div>
  );
};

function PersonalInfoContainers() {
  return (
    <>
      <Password />
      <SecurityQuestion />
    </>
  );
}

const passwordStyles = makeStyles((theme) => ({
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
}));

const Password = () => {
  const classes = passwordStyles();

  const [strength, setStrength] = useState(0);
  const [strengthColor, setStrengthColor] = useState("secondary");

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function handleOldPassword(event) {
    setOldPassword(event.target.value);
  }

  function handleNewPassword(event) {
    const newPass = event.target.value;
    setNewPassword(newPass);
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (strongRegex.test(newPass)) {
      // setStrengthColor("primary")
      setStrength(100);
    } else if (mediumRegex.test(newPass)) {
      // setStrengthColor("secondary")
      setStrength(50);
    } else {
      // setStrengthColor("secondary")
      setStrength(0);
    }
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  //Redux operations
  const dispatch = useDispatch();
  const alreadySetPassword = useSelector(selectPasswordInfo);
  const isLoading = useSelector(selectIsLoadingPasswordInfo);
  const encounteredError = useSelector(selectHasErrorPasswordInfo);

  useEffect(() => {
    dispatch(fetchPasswordDetails("Give user id here who is logged in"));
  }, [dispatch]);

  function handleUpdatePassword(){
    if(alreadySetPassword!=oldPassword){
      alert("Incorrect Old password")
      return;
    }
    else if(newPassword!=confirmPassword){
      alert("Password doesn't match")
      return;
    }
    else{
      dispatch(fetchSetNewPassword({newPassword:newPassword}))
    }
  }

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader title={<Typography variant="h4">Password</Typography>} />
      <Divider />
      <CardContent>
        <Box mt={2}>
          <TextField
            label="Current Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={oldPassword}
            required
            fullWidth
            onChange={handleOldPassword}
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="New Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={newPassword}
            fullWidth
            required
            onChange={handleNewPassword}
            helperText={
              <div>
                <span>
                  Must containe small and capital letters, and a number with
                  lenght atleast 8
                </span>
                {/* <LinearProgress variant="determinate" value={strength} color={strengthColor}/> */}
              </div>
            }
          />
        </Box>
        <Box mt={2}>
          <TextField
            label="Confirm Password"
            id="outlined-size-small"
            variant="outlined"
            type="password"
            size="small"
            value={confirmPassword}
            required
            fullWidth
            onChange={handleConfirmPassword}
          />
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary" onClick={handleUpdatePassword}>
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const securityQuestionStyles = makeStyles((theme) => ({
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
  formControl: {
    width: "50%",
    padding: "2rem",
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

const SecurityQuestion = () => {
  const classes = securityQuestionStyles();
  //this will be fetched from API
  const [isSecurityQuestionAdded, setIsSecurityQuestionAdded] = useState(true);

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
          action={
            <IconButton aria-label="settings">
              {isSecurityQuestionAdded ? (
                <EditIcon onClick={handleOpen} />
              ) : (
                <AddCircleIcon onClick={handleOpen} />
              )}
            </IconButton>
          }
          title={<Typography variant="h4">Security Question</Typography>}
        />
        <Divider />
        <CardContent>
          {isSecurityQuestionAdded ? (
            <Box display="flex">
              <Box mt={2.5}>
                <CheckCircleIcon color="success" />
              </Box>
              <Box ml={1}>
                <h3>Security Question is Enabled</h3>
              </Box>
            </Box>
          ) : (
            <h3>Add a security Question to protect your account </h3>
          )}
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="securityQuestionModal"
        aria-describedby="securityQuestionForm"
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
              <SecurityQuestionModal
                id="warningModal"
                handleClose={handleClose}
              />
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
  closeBtn: {
    cursor: "pointer",
  },
}));

export const SecurityQuestionModal = (props) => {
  const classes = modalFormStyles();

  const [isSecurityQuestionAdded, setIsSecurityQuestionAdded] = useState(true);
  const[newAnswer, setNewAnswer]=useState('')
  const[oldAnswer, setOldAnswer]=useState('')
  const [newSecurityQuestion, setNewSecurityQuestion] = useState('');

  function handleClose() {
    props.handleClose();
  }

  function handleAddSecurityQuestion() {}
  function handleAddUpdatedQuestion() {}

  function handleNewSecurityQuestionAnswer(e){
    console.log(e.target.value)
    setNewAnswer(e.target.value)
  }

  function handleOldSecurityQuestionAnswer(e){
    setOldAnswer(e.target.value)
  }

  function handleNewSecurityQuestion(question) {
    setNewSecurityQuestion(question);
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className={classes.root} elevation={0}>
            <CardHeader
              title={
                <Box display="flex">
                  <Box flex="1" mt={-3}>
                    <h3>Security Question</h3>
                  </Box>
                  <Box>
                    <CloseIcon
                      onClick={handleClose}
                      className={classes.closeBtn}
                    />
                  </Box>
                </Box>
              }
            />
            <Box mt={-4}>
              <Divider />
            </Box>
            <CardContent>
              <form>
                <FormControl fullWidth>
                  {isSecurityQuestionAdded ? (
                    <>
                      <label>
                        Before you can set a new security question, you’ll have
                        to answer your current one correctly.
                      </label>

                      <Box mt={1}>
                        <strong>What was name of your primary school?</strong>
                      </Box>
                      <Box mt={2}>
                        <TextField
                          label="Your Answer"
                          id="outlined-size-small"
                          variant="outlined"
                          type="text"
                          size="small"
                          value={oldAnswer}
                          required
                          fullWidth
                          onChange={handleOldSecurityQuestionAnswer}
                        />
                      </Box>
                    </>
                  ) : (
                    <label>Choose a question that you can remember</label>
                  )}
                </FormControl>
                <Box mt={1}>
                  <strong>Set a New Question</strong>
                </Box>
                <Box display="flex">
                  <SecurityQuestionOptions handleSecurityQuestion={handleNewSecurityQuestion} />
                  {
                    newSecurityQuestion.length>2?
                    <Box ml={2} mt={2}>
                    <TextField
                      label="Your Answer"
                      id="outlined-size-small"
                      variant="outlined"
                      type="text"
                      size="medium"
                      value={newAnswer}
                      required
                      fullWidth
                      onChange={handleNewSecurityQuestionAnswer}
                    />
                  </Box>
                  :""
                  }
                </Box>
              </form>
            </CardContent>
            <CardContent>
              <CardHeader
                action={
                  <Box display="flex" mt={1}>
                    <Box></Box>
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Box>
                    <Box ml={3}>
                      {isSecurityQuestionAdded ? (
                        <Button
                          variant="contained"
                          color="primary"
                          size="medium"
                          onClick={handleAddSecurityQuestion}
                        >
                          Update
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="secondary"
                          size="medium"
                          onClick={handleAddSecurityQuestion}
                        >
                          Add
                        </Button>
                      )}
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

const optionsStyles = makeStyles((theme) => ({
  text: {
    fontWeight: "bold",
    color: "black",
  },
}));

const SecurityQuestionOptions = (props) => {
  const classes = optionsStyles();
  const [securityQuestion, setSecurityQuestion] = useState(0);

  function handleSecurityQuestion(event) {
    console.log(event.target.value)
    props.handleSecurityQuestion(event.target.value)
    setSecurityQuestion(event.target.value);
  }

  const borderSelectClasses = useBorderSelectStyles();

  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon
        className={props.className + " " + borderSelectClasses.icon}
      />
    );
  };

  const questions = [
    {
      questionId: 1,
      questionContent: "What was the name of your elementary school?",
    },
    {
      questionId: 2,
      questionContent: "What was the name of your first pet?",
    },
    {
      questionId: 3,
      questionContent: "What was your childhood nickname?",
    },
    {
      questionId: 4,
      questionContent: "In what city did your parents meet?",
    },
    {
      questionId: 5,
      questionContent: "What is the name of your favorite childhood friend?",
    },
  ];

  return (
    <FormControl>
      <Box mt={2} display="flex">
        <Box>
          <Select
            disableUnderline
            classes={{ root: borderSelectClasses.select }}
            labelId="inputLabel"
            IconComponent={iconComponent}
            MenuProps={menuProps}
            value={securityQuestion}
            onChange={handleSecurityQuestion}
          >
            <MenuItem value="Select Security Question" disabled>
              <Typography className={classes.text}>
                Select Security Question
              </Typography>
            </MenuItem>

            {questions.map(({ questionId, questionContent }) => {
              return (
                <MenuItem value={questionContent}>
                  <Typography className={classes.text}>
                    {questionContent}
                  </Typography>
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </Box>
    </FormControl>
  );
};
