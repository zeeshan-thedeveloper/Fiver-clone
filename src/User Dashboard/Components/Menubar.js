//ReactJS
import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

//Material-UI core
import {
  AppBar,
  Divider,
  IconButton,
  InputBase,
  Menu,
  Typography,
  Zoom,
  Badge,
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
  ListItemAvatar,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";

//Mateirial-UI styles
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Rating } from "@material-ui/lab";
//Icons

import MenuIcon from "@material-ui/icons/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import OrdersIcon from "@material-ui/icons/AddShoppingCart";
import InboxIcon from "@material-ui/icons/Inbox";
import SettingsIcon from "@material-ui/icons/Settings";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ExploreIcon from "@material-ui/icons/Explore";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

//Routing
import { Link } from "react-router-dom";

//Local Resources
import logo from "../Resources/upwork.svg";
import profilePic from "../Resources/nadir.jpg";

//Redux
import { useDispatch, useSelector } from "react-redux";

//action creators

//selectors
import {
  selectNotifications,
  selectIsLoadingNotifications,
  selectHasErrorNotifications,
} from "../Redux/slices/dashboardNotificationsSlice";

//thunks
import { fetchNotifications } from "../Redux/slices/dashboardNotificationsSlice";

//Styles and CSS
import "./Styles/MenubarStyles.css";
import { PostAdd, Speaker } from "@material-ui/icons";

//Custom components

import Searchbar from "../../CustomComponents/UI/Searchbar/Searchbar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex:10,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  menuContainer: {
    backgroundColor: "#011c38",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
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
    marginTop: "0.5rem",
  },
  notificationMenu: {
    marginTop: "0.5rem",
  },
  timeStyles: {
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  notificationIcon: {
    marginTop: 15,
    marginRight: 25,
    marginLeft: 10,
    cursor: "pointer",
  },
  notificationText: {
    overflow: "hidden",
  },
  notificationAppBar: {
    top: "auto",
    position: "sticky",
    backgroundColor: "#FFFFFF",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#000000",
  },
}));

export const Menubar = (props) => {
  const classes = useStyles();

  //Notification Menu

  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState(null);
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const isNotificationMenuOpen = Boolean(notificationMenuAnchor);

  const handleNotificationMenuOpen = (event) => {
    console.log(event.currentTarget);
    setNotificationMenuAnchor(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationMenuAnchor(null);
  };

  function handleNotificationVolume() {
    setIsVolumeOn((prev) => !prev);
  }
  //Notification Menu options/items

  const dispatch = useDispatch();
  const notificationsData = useSelector(selectNotifications);
  const isLoading = useSelector(selectIsLoadingNotifications);
  const encounteredError = useSelector(selectHasErrorNotifications);

  useEffect(() => {
    dispatch(fetchNotifications("email of user or id"));
  }, [dispatch]);

  const notificationMenuId = "primary-search-account-menu";
  const renderNotificationMenu = (
    <Menu
      className={classes.notificationMenu}
      anchorEl={notificationMenuAnchor}
      id={notificationMenuId}
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
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
      TransitionComponent={Zoom}
      PaperProps={{
        style: {
          maxHeight: 100 * 10,
          width: "35ch",
        },
      }}
    >
      <Scrollbars autoHeight autoHide>
        {notificationsData.map((notf, index) => {
          return (
            <Link
              to={notf.route}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button key={notf.notificationId}>
                <ListItemIcon>{notf.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <span className={classes.notificationText}>
                      {notf.content}
                    </span>
                  }
                  secondary={
                    <span className={classes.timeStyles}>
                      {notf.deliveryTime}
                    </span>
                  }
                />
              </ListItem>
              <Divider />
            </Link>
          );
        })}
      </Scrollbars>
      <Box className={classes.notificationAppBar}>
        <Toolbar>
          {isVolumeOn ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleNotificationVolume}
            >
              <VolumeUpIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleNotificationVolume}
            >
              <VolumeOffIcon />
            </IconButton>
          )}

          {/* <div className={classes.grow} /> */}
          <Link to="/settings" className={classes.linkStyle}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </Box>
    </Menu>
  );

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
      optionTitle: "Settings",
      optionIcon: <SettingsIcon />,
      route: "/settings",
    },
    {
      optionTitle: "Logout",
      optionIcon: <LogoutIcon />,
      route: "/",
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
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={profilePic}
            onClick={() => {
              alert("Display Full Image of User");
            }}
            style={{ cursor: "pointer" }}
          />
        </ListItemAvatar>
        <ListItemText
          className={classes.profileMenuInfo}
          primary={<Typography variant="h6">Nadir Hussain</Typography>}
        />
      </ListItem>
      <Divider />
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

  //Explore menu
  const [exploreMenuAnchor, setExploreMenuAnchor] = useState(null);
  const isExploreMenuOpen = Boolean(exploreMenuAnchor);

  const handleExploreMenuOpen = (event) => {
    setExploreMenuAnchor(event.currentTarget);
  };

  const handleExploreMenuClose = () => {
    setExploreMenuAnchor(null);
  };

  const exploreMenuOptions = [
    {
      optionTitle: "Services",
      optionIcon: <FeaturedPlayListIcon />,
      route: "/services",
    },
    {
      optionTitle: "Projects",
      optionIcon: <FeaturedPlayListIcon />,
      route: "/searchproject",
    },
  ];

  const exploreMenuId = "primary-search-account-menu";
  const renderExploreMenu = (
    <Menu
      className={classes.profileMenu}
      anchorEl={exploreMenuAnchor}
      id={exploreMenuId}
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
      open={isExploreMenuOpen}
      onClose={handleExploreMenuClose}
      TransitionComponent={Zoom}
      // elevation={4}
    >
      {exploreMenuOptions.map(({ optionTitle, optionIcon, route }) => {
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
      optionTitle: "Dashboard",
      route: "/userdashboard",
    },
    {
      optionTitle: "Inbox",
      route: "/messaging",
    },
    {
      optionTitle: "Orders",
      route: "/orders",
    },
    {
      optionTitle: "Explore",
      route: "/explore",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 600px)");

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
          <Box ml={isMobile?2:6}>
            {isMobile ? (
              <Searchbar placeholder="Seach Anything" width={265}/>
            ) : (
              <Searchbar placeholder="Seach Anything" />
            )}
          </Box>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box spacing={2} m={2}>
              {menuOptions.map(({ optionTitle, route }) => {
                return optionTitle == "Explore" ? (
                  <Link className="menuBarItem" onClick={handleExploreMenuOpen}>
                    Explore
                  </Link>
                ) : (
                  <Link to={route} className="menuBarItem">
                    {optionTitle}
                  </Link>
                );
              })}
            </Box>

            <Badge
              badgeContent={8}
              color="primary"
              className={classes.notificationIcon}
              onClick={handleNotificationMenuOpen}
            >
              <CircleNotificationsIcon />
            </Badge>
            <Avatar
              className={classes.avatar}
              src={profilePic}
              onClick={handleProfileMenuOpen}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderNotificationMenu}
      {renderExploreMenu}
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

function DrawerComponent() {
  const drawerOptions = [
    {
      optionTitle: "Home",
      optionIcon: <HomeIcon />,
      route: "/",
    },
    {
      optionTitle: "Dashboard",
      optionIcon: <DashboardIcon />,
      route: "/userdashboard",
    },

    {
      optionTitle: "Inbox",
      optionIcon: <InboxIcon />,
      route: "/inbox",
    },
    {
      optionTitle: "Explore Services",
      optionIcon: <ExploreIcon />,
      route: "/services",
    },
    {
      optionTitle: "Explore Project",
      optionIcon: <ExploreIcon />,
      route: "/searchproject",
    },
    {
      optionTitle: "Post Request",
      optionIcon: <PostAdd />,
      route: "/postrequest",
    },
    {
      optionTitle: "Orders",
      optionIcon: <OrdersIcon />,
      route: "/orders",
    },
    {
      optionTitle: "Settings",
      optionIcon: <SettingsIcon />,
      route: "/settings",
    },
  ];
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
          <ListItemAvatar>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                className={classes.avatar}
                src={profilePic}
                onClick={() => {
                  alert("Display Full Image of User");
                }}
                style={{ cursor: "pointer" }}
              />
            </StyledBadge>
          </ListItemAvatar>
          <ListItemText
            className={classes.profileInfo}
            primary={<Typography variant="h6">Nadir Hussain</Typography>}
            secondary={<Rating value="3" size="small" readOnly />}
          />
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
        {/* Go to Home after Logout */}
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button key="logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Box ml={-2}>
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
    </Box>
  );
}
