import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { StandardTextField } from "../../../CustomComponents/UI/Form/StandardTextField";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import colors from "../../../Theme/colors";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import { TextFonts } from "../../../Theme/fonts";
import { FormLabel, useMediaQuery } from "@material-ui/core";
import ModalContainer from "../../../CustomComponents/UI/Support/ModalContainer";
import { TermsAndServicesContent } from "../AboutPage/TermsAndServices";
import { useHistory } from "react-router";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  sendUserDetailsForRegistration,
  selectBasicDetailsOfUser,
  selectEmail,
} from "../Slices/AuthenticationPageSlices/RegisterDetailsSlice";
import { lightBorder } from "../../../Theme/borders";

// styles
const registerModalFormStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    border:lightBorder
    // boxShadow:
    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  selector: {
    height: 10,
  },
  signInLabel: {
    cursor: "pointer",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.large,
    color: colors.secondary,
  },
  viewTermsLabel: {
    color: colors.secondary,
    cursor: "pointer",
  },
}));

export default function RegisterModalForm() {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = registerModalFormStyles(isDesktopOrLaptopOrTabletScreen);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAcceptTermsAndConditions, setIsAcceptTermsAndConditions] =
    useState(false);
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const handleSignInClick = () => {
   history.push('/Login')
  };

  // for modal
  const [open, setOpen] = React.useState(false);

  // handlers
  const handleClose = () => {
    setOpen(false);
  };
  const handleViewTermsClick = () => {
    setOpen(true);
  };
  const handleACceptTermsAndConditions = () => {
    setIsAcceptTermsAndConditions(!isAcceptTermsAndConditions);
  };

  const handleSignUpClicked = (event) => {
    event.preventDefault();
    if (email.length > 0) {
      // verfy email using regex
      dispatch(setEmail(email));
    }
    dispatch(
      sendUserDetailsForRegistration({
        email,
        userName,
        firstName,
        lastName,
        country,
        password,
      })
    ).then(()=>history.push('/userDashboard'));
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <ModalContainer
        open={open}
        handleClose={handleClose}
        Component={<TermsAndServicesContent totalGrid={12} />}
        desktopWidth={"50%"}
        desktopHeigth={"90%"}
        mobileWidth={"90%"}
        mobileHeigth={"80%"}
        overflow={"scroll"}
      />
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <SmallHeading title={"Found Something"} />
          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justifyContent="center"
          >
            <Grid item>
              <RoundButton
                title={"Continue with Google"}
                width={280}
                color={colors.white}
                bgColor={colors.info}
                margin={"0% 0% 10%  0%"}
                //icon={<MailIcon />}
              />
              <div class="separator">OR</div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
              <StandardTextField
                variant="outlined"
                label="First Name"
                value={firstName}
                onChange={(value) => setFirstName(value)}
                size={"small"}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <StandardTextField
                variant="outlined"
                label="last Name"
                value={lastName}
                onChange={(value) => setLastName(value)}
                size={"small"}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <StandardTextField
                variant="outlined"
                label="Email Address"
                value={email}
                onChange={(value) => setEmail(value)}
                size={"small"}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <StandardTextField
                variant="outlined"
                label="User Name"
                value={userName}
                onChange={(value) => setUserName(value)}
                size={"small"}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                size={"small"}
              >
                <InputLabel>Country</InputLabel>
                <Select
                  value={country}
                  onChange={({ target }) => setCountry(target.value)}
                  label="Country"
                  fullWidth
                  required
                  InputProps={{ classes: { input: classes.selector } }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <StandardTextField
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(value) => setPassword(value)}
                size={"small"}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    checked={isAcceptTermsAndConditions}
                    onChange={handleACceptTermsAndConditions}
                  />
                }
                label="I accept the terms and the conditions"
              />
              <FormLabel
                className={classes.viewTermsLabel}
                onClick={handleViewTermsClick}
              >
                View Terms
              </FormLabel>
            </Grid>
          </Grid>
          <RoundButton
            type="submit"
            variant="contained"
            color={colors.white}
            bgColor={colors.secondary}
            handleClick={handleSignUpClicked}
            title="Sign Up"
            width="100%"
          />

          <Grid
            container
            justifyContent="flex-end"
            style={{ marginBottom: "5%", marginTop: "5%" }}
          >
            <Grid item>
              <p>Already have an account? </p>
              <div onClick={handleSignInClick} className={classes.signInLabel}>
                Sign In
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
