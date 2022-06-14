import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useWindowDimensions } from "../Home/Components/WindowDimensions";
import { AppBar, makeStyles } from "@material-ui/core";

// footer
import DesktopFooter from "../CustomComponents/Layouts/Footer/DesktopFooter";
import MobileFooter from "../CustomComponents/Layouts/Footer/MobileFooter";

// colors
import colors, { ColorGradient } from "../Theme/colors";

// custom compoents
import LoginForm, {
  PasswordForm,
} from "../Home/Components/AuthenticationPage/LoginForm";
import Register from "../Home/Components/AuthenticationPage/Register";
import RegisterDetails from "../Home/Components/AuthenticationPage/RegisterDetails";

// navbar
import CustomNavbar from "../CustomComponents/Layouts/Header/CustomNavbar";

// navbar parameters
import {
  navbarMenuOptions,
  drawerMenuOptions,
  darwerMenuExtraOptions,
  navbarTabsOptions,
  drawerListItemAvatar,
  isNavbarTabs,
  isNavBarIconButtons,
  isAvatar,
} from "./SupportFiles/HomePageNavbarParameters";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  footer: {
    marginTop: "10%",
  },
  loginInForm: {
    backgroundColor: colors.white,
    paddingTop: "7%",
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%" : "25%",
  },
}));

function AuthenticationContainer(props) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const { height, width } = useWindowDimensions();
  const [packageContainerStickyNess, setPackageContainerStickyNess] =
    useState("");
  const [sticknessFlag, setSticknessFlag] = useState(true);
  const [currentSelectedTabIndex, setCurrentSelectedTabIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  // true stands for login, false states for sign up
  const [isLoginOrSignUp, setIsLoginOrSignUp] = useState(true);

  const handleSignUpClicked = () => {
    setIsLoginOrSignUp(!isLoginOrSignUp);
  };
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    if (scrollPosition > height * 0.9) {
      setPackageContainerStickyNess("UnStickThePackageContainer");
    } else {
      setPackageContainerStickyNess("StickThePackageContainer");
    }
  }, [scrollPosition > height * 0.9]);

  const handelTabIndex = (event, index = 0) => {
    setCurrentSelectedTabIndex(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const navbarMenuOptions = [
    { title: "About", route: "about" },
    { title: "Conatct", route: "contact" },
    { title: "Login", route: "login" },
    { title: "Register", route: "register" },
  ];
  return (
    <div className={classes.root}>
      {/* Header */}
      <Grid item xs={12}>
        <AppBar>
          <CustomNavbar
            handelTabIndex={handelTabIndex}
            packageContainerStickyNess={packageContainerStickyNess}
            navbarMenuOptions={navbarMenuOptions}
            isNavbarTabs={false}
            isAvatar={false}
            isNavBarIconButtons={false}
            drawerMenuOptions={drawerMenuOptions}
            darwerMenuExtraOptions={darwerMenuExtraOptions}
            drawerListItemAvatar={drawerListItemAvatar}
              // pass array for keeping record of components loading progress bar
              isComponentsLoaded={[]}
          />
        </AppBar>
      </Grid>

      {isLoginOrSignUp ? (
        <LoginInContainer handleSignUpClicked={handleSignUpClicked} />
      ) : (
        <SignUPContainer handleSignInClicked={handleSignUpClicked} />
      )}
      {/* footer*/}
      <Grid container className={classes.footer} spacing={0}>
        <Grid item md={12} xs={12} sm={12}>
          {isDesktopOrLaptopOrTabletScreen ? (
            <DesktopFooter />
          ) : (
            <MobileFooter />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const SignUPContainer = ({ handleSignInClicked }) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const [isSignUpWithEmailClicked, setIsSignUpWithEmailClicked] =
    useState(true);
  const [userEmail, setUserEmail] = useState("");

  const handleSignUpWithEmailClicked = (value) => {
    setUserEmail(value);
    setIsSignUpWithEmailClicked(!isSignUpWithEmailClicked);
  };

  return (
    <Grid container className={classes.loginInForm}>
      <Grid
        sm={isSignUpWithEmailClicked ? 1 : 2}
        md={isSignUpWithEmailClicked ? 4 : 3}
        xs={1}
        item
      ></Grid>
      <Grid
        item
        xs={10}
        sm={isSignUpWithEmailClicked ? 10 : 8}
        md={isSignUpWithEmailClicked ? 4 : 6}
      >
        {isSignUpWithEmailClicked ? (
          <Register
            handleSignUpWithEmailClicked={handleSignUpWithEmailClicked}
          />
        ) : (
          <RegisterDetails handleSignInClicked={handleSignInClicked} />
        )}
      </Grid>
      <Grid
        sm={isSignUpWithEmailClicked ? 1 : 2}
        md={isSignUpWithEmailClicked ? 4 : 3}
        xs={1}
        item
      ></Grid>
    </Grid>
  );
};
const LoginInContainer = ({ handleSignUpClicked }) => {
  const [isLoginWithEmailClicked, setIsLoginWithEmailClicked] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);

  const handleLoginWithEmailClicked = (value) => {
    setIsLoginWithEmailClicked(!isLoginWithEmailClicked);
    setUserEmail(value);
  };

  return (
    <Grid container className={classes.loginInForm}>
      <Grid xs={1} sm={1} md={4} item></Grid>
      <Grid item xs={10} sm={10} md={4}>
        {isLoginWithEmailClicked ? (
          <LoginForm
            handleLoginWithEmailClicked={handleLoginWithEmailClicked}
            handleSignUpClicked={handleSignUpClicked}
          />
        ) : (
          <PasswordForm userEmail={userEmail} />
        )}
      </Grid>
      <Grid xs={1} sm={1} md={4} item></Grid>
    </Grid>
  );
};

export default AuthenticationContainer;
