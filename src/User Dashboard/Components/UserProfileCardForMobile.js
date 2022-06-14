//ReactJS
import React, {useState, useEffect} from "react";

//Material-UI core
import {
  Box,
  Badge,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@material-ui/core";

//material-ui styles
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import cx from "clsx";

//Icons

//Styles

//Resources
import profilePic from "../Resources/nadir.jpg";

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
//No need of this thunk actually
import { checkUserPassword } from "../../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";

//selectors
import {
  selectUserDetails,
  selectUserDetailsHasError,
  selectUserDetailsIsLoading,
} from "../../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";

//actionCreators

//custom components
import {lightBorder} from "../../Theme/borders"

export const UserProfileCardForMobile = () => {
  return (
    <div>
      <ProfileCard />
    </div>
  );
};

const useStyles = makeStyles(({ palette }) => ({
  card: {
    // border:lightBorder,
    textAlign: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export const ProfileCard = React.memo(function ProfileCard() {
  const styles = useStyles();
  
  const dispatch=useDispatch()
  const profileData=useSelector(selectUserDetails)
  const isLoading=useSelector(selectUserDetailsIsLoading)
  const encounteredError=useSelector(selectUserDetailsHasError)


  function handleClick(){
    console.log(profileData)
  }
  //No need of this useeffect actually
  useEffect(() => {
    dispatch(checkUserPassword({ userPassword:"4545" }));
  }, [dispatch]);

  
  return (
    <Card className={cx(styles.card)} elevation={0}>
      <CardContent>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            className={styles.avatar}
            src={profilePic}
            onClick={() => {
              alert("Go to my profile page/ Settings");
            }}
            style={{ cursor: "pointer" }}
          />
        </StyledBadge>

        <h3
          className={styles.heading}
          onClick={() => {
            alert("Go my profile page/ Settings");
          }}
          style={{ cursor: "pointer" }}
        >
          Nadir Hussain
        </h3>
        <Box p={1} mt={0}>
          <Rating value={3} size="small" readOnly></Rating>
          <span
            onClick={() => {
              alert("Go to reviews from Sellers");
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            4.7
          </span>
        </Box>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box p={1} flex={"auto"}>
          <p className={styles.statLabel}>Response Time</p>
          <p className={styles.statValue}>1 Hour</p>
        </Box>
        <Box p={1} flex={"auto"}>
          <p className={styles.statLabel}>Balance</p>
          <p className={styles.statValue}>100$</p>
        </Box>
      </Box>
    </Card>
  );
});