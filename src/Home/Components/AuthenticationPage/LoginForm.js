import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../Theme/colors";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { DividerInFooter, DividerInProjects } from "../HorizontalLine";
import { TextFieldWithIcon } from "../../../CustomComponents/UI/Form/TextFields";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import "../Styles/hrStyle.css";
import CustomAlerts from "../../../CustomComponents/UI/Support/Alerts";
import { TextFonts } from "../../../Theme/fonts";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import ForgetPasswordModal from "./ForgetPasswordModal";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import { lightBorder } from "../../../Theme/borders";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  checkUserId,
  checkUserPassword,
} from "../Slices/AuthenticationPageSlices/LoginFormSlice";



// styles
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "10%",
    alignItems: "center",
    paddingTop: "5%",
    border:lightBorder
    //paddingLeft: isDesktopOrLaptopOrTabletScreen => isDesktopOrLaptopOrTabletScreen ? '1%' : '5%'
  },
  center: { textAlign: "center",lineHeight:2 },
  text: {
    marginBottom: "5%",
  },
  primaryText: {
    color: colors.primary,
    fontWeight: "bolder",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "10%",
    cursor: "pointer",
  },
  forgetPassword: {
    color: colors.secondary,
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.small,
    textAlign: "center",
    cursor: "pointer",
  },
  label: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
  },
}));


// password form where user enter password for login
export const PasswordForm = ({ userEmail }) => {
  const [userPassword, setUserPassword] = useState("");
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserPassword = (value) => {
    setUserPassword(value);
    console.log(value);
  };

  const handleForgetPassword = () => {
    handleOpen();
  };
  const handleLoginClick = () => {
    if (userPassword.length > 0) {
      dispatch(checkUserPassword({ userPassword }));
    } else {
      alert("please enter password");
    }
  };
  return (
    <Box justifyContent="center" alignContent="center">
      <ForgetPasswordModal open={open} handleClose={handleClose} userEmail={userEmail} />
      <form className={classes.form}>
        <SmallHeading title={`Welcome`} margin={'0% 0% 0% 0%'} />
        <h5 className={classes.center}>{userEmail}</h5>
        <TextFieldWithIcon
          label="Password"
          icon={<LockIcon />}
          value={userPassword}
          onChange={handleUserPassword}
          type={"password"}
        />
        <Grid container justifyContent="center" alignItems="center">
          <Grid item style={{ marginRight: "3%" }}>
            {" "}
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                  size="small"
                />
              }
              label="Remember Me"
              classes={{ label: classes.label }}
            />
          </Grid>
          <Grid item style={{ marginLeft: "3%" }}>
            <div
              className={classes.forgetPassword}
              onClick={handleForgetPassword}
            >
              {" "}
              Forget Password{" "}
            </div>
          </Grid>
        </Grid>
        <CustomAlerts
          title={"Incorrect Password"}
          severity={"error"}
          size={"small"}
          open={isIncorrectPassword}
          setOpen={setIsIncorrectPassword}
          width={"100%"}
          bgColor={colors.white}
          color={colors.error}
        />
        <Grid
          style={{ marginTop: "10%" }}
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item>
            <RoundButton
              title={"Login"}
              width={260}
              color={colors.white}
              bgColor={colors.secondary}
              margin={"0% 0% 5%  0%"}
              handleClick={handleLoginClick}
            />
            <div className={classes.primaryText}>Not you ?</div>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};


// login form where user can select login option
export default function LoginForm({
  handleLoginWithEmailClicked,
  handleSignUpClicked,
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const [userId, setUserId] = useState("");
  const [isIncorrectUserId, setIsIncorrectUserId] = useState(false);

  //redux
  const dispatch = useDispatch();
  const { checkUserIdIsLoading } = useSelector((state) => state.loginDetails);
  const { checkUserIdHasError } = useSelector((state) => state.loginDetails);
  const { checkUserPasswordAndReturnUserDetailsIfExistsHasError } = useSelector(
    (state) => state.loginDetails
  );
  const { checkUserPasswordAndReturnUserDetailsIfExistsIsLoading } =
    useSelector((state) => state.loginDetails);

    
  // handlers
  const handleUserId = (value) => {
    setUserId(value);
    console.log(value);
  };
  const handleLoginWithEmailClick = (event) => {
    event.preventDefault();
    if (userId.length > 0) {
      // check user id in database first
      dispatch(checkUserId({ userId })).then(
        (result) => handleLoginWithEmailClicked(userId),
        (error) => alert("user not exists")
      );
    } else alert("please type your email");
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    handleSignUpClicked();
  };

  return (
    <Box justifyContent="center" alignContent="center">
      <form className={classes.form}>
        <SmallHeading title={"Login to CODEINDNA"} />
        <TextFieldWithIcon
          label="Email or Phone number"
          icon={<AccountCircle />}
          value={userId}
          onChange={handleUserId}
          type={"email"}
        />
        <CustomAlerts
          title={"User not exists"}
          severity={"error"}
          size={"small"}
          open={isIncorrectUserId}
          setOpen={setIsIncorrectUserId}
          width={"100%"}
          bgColor={colors.white}
          color={colors.error}
        />

        <Grid
          style={{ marginTop: "10%" }}
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item>
            <RoundButton
              title={"Login With Email"}
              width={280}
              color={colors.white}
              bgColor={colors.secondary}
              margin={"0% 0% 5%  0%"}
              handleClick={handleLoginWithEmailClick}
              icon={<AlternateEmailRoundedIcon />}
            />
            <div class="separator">OR</div>
          </Grid>

          <Grid item>
            <RoundButton
              title={"Continue with Google"}
              width={280}
              color={colors.white}
              bgColor={colors.info}
              margin={"0% 0% 5%  0%"}
              icon={<AccountCircle />}
            />
          </Grid>
        </Grid>
        <DividerInProjects />

        <Grid
          container
          spacing={1}
          justifyContent="center"
          style={{ marginTop: "5%" }}
          alignItems="center"
        >
          <Grid item container justifyContent="center" alignItems="center">
            <Typography>Don't have an account yet? Create Now!</Typography>
            <RoundButton
              title={"Sign Up"}
              width={280}
              color={colors.success}
              variant={"outlined"}
              borderColor={colors.success}
              margin={"10% 0% 10%  0%"}
              handleClick={handleSignUpClick}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
