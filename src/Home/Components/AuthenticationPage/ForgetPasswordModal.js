import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { StandardTextField } from "../../../CustomComponents/UI/Form/StandardTextField";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useMediaQuery, Button } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";

// fonts and colors
import { TextFonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLinkForResetPasswordSentByEmail,
  selectIsPasswordChanged,
  sendResetPasswordLinkUsingEmail,
  changePasswordByUsigEmailLink,
} from "../Slices/AuthenticationPageSlices/ResetPasswordSlice";

// styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "2% 5% 2% 5%",
  },
  secondayText: {
    color: colors.secondary,
    fontWeight: "bolder",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
    cursor: "pointer",
  },
  primaryText: {
    color: colors.primary,
    fontWeight: "bolder",
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.extraSmall : TextFonts.large,
    textAlign: "center",
  },
}));

export default function ForgetPasswordModal({ open, handleClose, userEmail }) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  // local states
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  // redux
  const dispatch = useDispatch();
  const { hasErrorInLinkForResetPasswordSentByEmail } = useSelector(
    (state) => state.resetPassword
  );
  const { isLoadingInLinkForResetPasswordSentByEmail } = useSelector(
    (state) => state.resetPassword
  );
  const is_reset_password_link_sent = useSelector(
    selectIsLinkForResetPasswordSentByEmail
  );
  const { hasErrorInChangePasswordByUsigEmailLink } = useSelector(
    (state) => state.resetPassword
  );
  const { isLoadingInChangePasswordByUsigEmailLink } = useSelector(
    (state) => state.resetPassword
  );
  const is_password_changed = useSelector(selectIsPasswordChanged);
  // handlers
  const handleSendResetPasswordLink = () => {
    dispatch(sendResetPasswordLinkUsingEmail({ userEmail }));
  };
  const handleChangePasswordClick = () => {
    if (newPassword === repeatNewPassword) {
      //alert('matched')
      dispatch(changePasswordByUsigEmailLink({ userEmail, newPassword }));
    } else {
      alert("password does not match");
    }
  };
  const handleSetNewPassword = (value) => {
    setNewPassword(value);
  };
  const handleSetRepeatNewPassword = (value) => {
    setRepeatNewPassword(value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
        {is_password_changed ? (
          <div className={classes.paper}>
            <Button
              disabled={true}
              style={{ fontWeight: "bolder", color: colors.black }}
              startIcon={<CheckCircleIcon color="success" fontSize="large" />}
            >
              Password changed successFully
            </Button>
            <h2
              className={classes.secondayText}
              onClick={() => alert("redirect to login Screen")}
            >
              Want to Login ?
            </h2>
          </div>
        ) : is_reset_password_link_sent ? (
          <div className={classes.paper}>
            <h2>Change Password</h2>
            <StandardTextField
              label="New Password"
              variant="outlined"
              margin={"2% 0% 2% 0%"}
              type="password"
              size={"small"}
              value={newPassword}
              onChange={handleSetNewPassword}
            />
            <StandardTextField
              label="Repeat Password"
              variant="outlined"
              margin={"2% 0% 2% 0%"}
              type="password"
              size={"small"}
              value={repeatNewPassword}
              onChange={handleSetRepeatNewPassword}
            />

            <RoundButton
              color={colors.white}
              bgColor={colors.secondary}
              title={"Change"}
              width="100%"
              margin={"8% 0% 5% 0%"}
              handleClick={handleChangePasswordClick}
            />
          </div>
        ) : (
          <div className={classes.paper}>
            <h2>Reset Password</h2>
            <p>We will set you a link to reset your password</p>
            <StandardTextField
              label="Your Email"
              variant="outlined"
              margin={"2% 0% 2% 0%"}
              type="email"
              size={"small"}
              value={userEmail}
              disabled={true}
            />
            <RoundButton
              color={colors.white}
              bgColor={colors.secondary}
              title={"Send"}
              width="100%"
              margin={"8% 0% 5% 0%"}
              handleClick={handleSendResetPasswordLink}
            />
          </div>
        )}
      </Fade>
    </Modal>
  );
}
