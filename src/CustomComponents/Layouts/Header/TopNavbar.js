import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Searchbar from "../../UI/Searchbar/Searchbar";

// colors and fonts
import colors from "../../../Theme/colors";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";

//styles
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuBarItem: {
    color: colors.white,
    marginLeft: "2rem",
    textDecoration: "none",
    font: Headingfonts.extraSmall,
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  avatar: {
    marginTop: "0.5rem",
    cursor: "pointer",
  },
}));

export default function TopNavbar({
  navbarMenuOptions,
  isAvatar,
  navbarAvatar,
  isNavBarIconButtons,
  navbarIconButtons,
  drawerMenuOptions,
  darwerMenuExtraOptions,
  drawerListItemAvatar,
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useStyles(isDesktopOrLaptopOrTabletScreen);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogoClick = () => {};
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#011c38" }}>
        <Toolbar>
          <Hidden only={["lg"]}>
            <DrawerComponent
              drawerMenuOptions={drawerMenuOptions}
              darwerMenuExtraOptions={darwerMenuExtraOptions}
              drawerListItemAvatar={drawerListItemAvatar}
            />
          </Hidden>
          <IconButton className={classes.title} onClick={handleLogoClick}>
            <Link to="/"> CODE IN DNA</Link>
          </IconButton>
          <div className={classes.search}>
            {isDesktopOrLaptopOrTabletScreen ? (
              <Searchbar placeholder="Seach Anything" />
            ) : (
              <Searchbar placeholder="Seach Anything" width={265} />
            )}
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box spacing={2} m={2}>
              {navbarMenuOptions.map(({ title, route, onClick }) => (
                <Link to={route} className={classes.menuBarItem}>
                  {title}
                </Link>
              ))}
            </Box>

            {isNavBarIconButtons &&
              navbarIconButtons.map(
                ({
                  ariaLabel,
                  ariaHaspopup,
                  onClick,
                  color,
                  icon,
                  subMenu,
                }) => (
                  <IconButton
                    aria-label={ariaLabel}
                    aria-haspopup={ariaHaspopup}
                    onClick={onClick}
                    color={color}
                  >
                    {icon}
                    {subMenu}
                  </IconButton>
                )
              )}

            {isAvatar && (
              <Avatar
                className={classes.avatar}
                src={navbarAvatar.src}
                onClick={navbarAvatar.onClick}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

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
    cursor: "pointer",
  },
  profileInfo: {
    marginLeft: "1rem",
  },
});
function DrawerComponent({
  drawerMenuOptions,
  darwerMenuExtraOptions,
  drawerListItemAvatar,
}) {
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

  function handleDrawerOptionClick(optionTitle) {
    alert("Go to: " + optionTitle);
    toggleDrawer("left", false);
  }
  const drawerOptionList = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>{drawerListItemAvatar}</List>

      <Divider />
      <List>
        {drawerMenuOptions.map(({ title, route, icon, onClick }) => (
          <ListItem button key={title} onClick={() => onClick(title)}>
            {icon !== undefined && <ListItemIcon>{icon}</ListItemIcon>}

            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {darwerMenuExtraOptions.map(({ title, route, icon, onClick }) => (
          <ListItem button key={title} onClick={() => onClick(title)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
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
