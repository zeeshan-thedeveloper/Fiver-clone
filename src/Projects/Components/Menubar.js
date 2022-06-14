//ReactJS
import React from "react";

//Material-UI core
import {
  AppBar,
  Divider,
  IconButton,
  InputBase,
  Menu,
  Zoom,
  Toolbar,
  Box,
  useScrollTrigger,
  Hidden,
  Fab,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";

//Mateirial-UI styles
import { alpha, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

//Icons

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import HomeIcon from "@material-ui/icons/Home";
import {
  AccountCircle,
  AllInclusive,
  LockOpen,
  TrendingUp,
} from "@material-ui/icons";

//Routing
import { Link } from "react-router-dom";

//Local Resources
import logo from "../Resources/upwork.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex:1
  },
  
  grow: {
    flexGrow: 1,
  },
  menuContainer: {
    backgroundColor: "#011c38",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "40ch",
    },
  },
  //Show desktop view only when size is lg
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  avatar: {
    marginTop: "0.5rem",
  },
  profileMenu: {
    marginTop: "1rem",
  },
}));

export const Menubar = (props) => {
  const classes = useStyles();

  //User profile Menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const profileMenuOptions = [
    {
      optionTitle: "Login",
      optionIcon: <LockOpen />,
      route: "/signin",
    },
    {
      optionTitle: "Register",
      optionIcon: <AccountCircle />,
      route: "/register",
    },
  ];

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={classes.profileMenu}
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      TransitionComponent={Zoom}
      // elevation={4}
    >
      {profileMenuOptions.map(({ optionTitle, optionIcon, route }) => {
        return (
          <Link to={route} style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key={optionTitle}>
              <ListItemIcon>{optionIcon}</ListItemIcon>
              <ListItemText primary={optionTitle} />
            </ListItem>
          </Link>
        );
      })}
    </Menu>
  );

  function handleSearch(event) {}

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 200,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  const menuOptions = [
    {
      optionTitle: "Home",
      route: "/",
    },
    {
      //Go to Display services page, created by Nageeta
      optionTitle: "Services",
      route: "/services",
    },
    {
      optionTitle: "Trending", //if user is logged in, display Dashboard option instead of trending, trending is available at Dashboard
      route: "/trending",
    },
    {
      //This contact is related to email contact not with inbox/chat
      optionTitle: "Contact",
      route: "/",
    },
  ];

  return (
    <div className={classes.grow}>
      <AppBar className={classes.menuContainer}>
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <DrawerComponent />
          </Hidden>
          <Hidden only={["xs"]}>
            <Link to="/">
              <img src={logo} style={{ cursor: "pointer" }} />
            </Link>
          </Hidden>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onClick={handleSearch}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box spacing={2} m={2}>
              {menuOptions.map(({ optionTitle, route }) => {
                return (
                  <Link to={route} className="menuBarItem">
                    {optionTitle}
                  </Link>
                );
              })}
            </Box>
            <Avatar
              className={classes.avatar}
              onClick={handleProfileMenuOpen}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#011c38", color: "white" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

const drawerStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
    margin: "auto",
  },
  profileInfo: {
    marginLeft: "1rem",
  },
});

function DrawerComponent() {
  const drawerOptions = [
    {
      optionTitle: "Home",
      optionIcon: <HomeIcon />,
      route: "/",
    },
    {
      optionTitle: "Services",
      optionIcon: <AllInclusive />,
      route: "/services", //Go to services page
    },

    {
      optionTitle: "Trending",
      optionIcon: <TrendingUp />, //Show Dashboard if user logged in
      route: "/trending",
    },
  ];


  const loginRegisterOptions = [
    {
      optionTitle: "Login",
      optionIcon: <LockOpen />,
      route: "/login",
    },

    {
      optionTitle: "Register",
      optionIcon: <AccountCircle />,
      route: "/register", //Go to services page
    },
  ]
  const classes = drawerStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const drawerOptionList = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Avatar className={classes.avatar} />
        </ListItem>
      </List>

      <Divider />
      <List>
        {drawerOptions.map(({ optionTitle, optionIcon, route }) => (
          <Link to={route} style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key={optionTitle}>
              <ListItemIcon>{optionIcon}</ListItemIcon>
              <ListItemText primary={optionTitle} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />
      <List>
        {loginRegisterOptions.map(({ optionTitle, optionIcon, route }) => (
          <Link to={route} style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key={optionTitle}>
              <ListItemIcon>{optionIcon}</ListItemIcon>
              <ListItemText primary={optionTitle} />
            </ListItem>
          </Link>
        ))}
      </List>

    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <IconButton
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {drawerOptionList("Left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
