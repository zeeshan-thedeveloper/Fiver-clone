import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../Theme/colors";
import MailIcon from "@material-ui/icons/Mail";
import { TextFieldWithIcon } from "../../../CustomComponents/UI/Form/TextFields";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import "../Styles/hrStyle.css";
import CustomAlerts from "../../../CustomComponents/UI/Support/Alerts";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import { lightBorder } from "../../../Theme/borders";


// redux
import { useSelector, useDispatch } from "react-redux";
import { setEmail } from "../Slices/AuthenticationPageSlices/RegisterDetailsSlice";


// styles
const registerStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "10%",
    alignItems: "center",
    paddingTop: "3%",
    border:lightBorder
  },

  text: {
    marginBottom: "5%",
  },
}));

export default function Register({ handleSignUpWithEmailClicked }) {
  const classes = registerStyles();

  // local states
  const [userEmail, setUserEmail] = useState("");
  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);

  // redux
  const dispatch = useDispatch();

  // handlers
  const handleContinueWithEmailClick = () => {
    if (userEmail.length > 0) {
      dispatch(setEmail(userEmail));
      handleSignUpWithEmailClicked(userEmail);
    } else {
      alert("Please Enter your Email first");
    }
  };

  const handleUserEmail = (value) => {
    setUserEmail(value);
    console.log(value);
  };

  return (
    <Box  justifyContent="center" alignContent="center">
      <form className={classes.form}>
        <SmallHeading title={"Get your free account"} />
        <TextFieldWithIcon
          label="Email address"
          icon={<MailIcon />}
          value={userEmail}
          onChange={handleUserEmail}
          type={"email"}
        />
        <CustomAlerts
          title={" Would you like to use your work email instead? "}
          severity={"warning"}
          size={"small"}
          open={isIncorrectEmail}
          setOpen={setIsIncorrectEmail}
          width={"100%"}
          bgColor={colors.white}
          color={colors.warning}
        />

        <Grid
          style={{ marginTop: "5%" }}
          container
          spacing={1}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item>
            <RoundButton
              title={"Continue with Email"}
              width={280}
              color={colors.white}
              bgColor={colors.secondary}
              margin={"3% 0% 5%  0%"}
              icon={<AlternateEmailRoundedIcon />}
              handleClick={handleContinueWithEmailClick}
            />
            <div class="separator">OR</div>
          </Grid>

          <Grid item>
            <RoundButton
              title={"Continue with Google"}
              width={280}
              color={colors.white}
              bgColor={colors.info}
              margin={"3% 0% 10%  0%"}
              icon={<MailIcon />}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
