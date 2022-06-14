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
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { Divider } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Hidden } from "@material-ui/core";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Logo from '../../Theme/Icons/png/logo.png'
import { ListItemAvatar } from "@material-ui/core";
import Avatar from "antd/lib/avatar/avatar";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimaryNavbar() {
  const classes = useStyles();
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
  
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#011c38" }}>
        <Toolbar>
          <Hidden only={["lg"]}>
            <DrawerComponent />
          </Hidden>
          <Typography className={classes.title} variant="h6" noWrap>
            CODE IN DNA
          </Typography>
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
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="About" color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                About
              </Typography>
            </IconButton>
            <IconButton aria-label="Contact" color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                Contact
              </Typography>
            </IconButton>
            <IconButton aria-label="Login" color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                Login
              </Typography>
            </IconButton>
            <hr />
            <IconButton aria-label="Register" color="inherit">
              <Typography className={classes.title} variant="h6" noWrap>
                Register
              </Typography>
            </IconButton>
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
  },
  profileInfo: {
    marginLeft: "1rem",
  },
});
function DrawerComponent() {
  const drawerOptions = [
    {
      optionTitle: "Contact",
    },
    {
      optionTitle: "About",
    },
    {
      optionTitle: "Login",
    },
    {
      optionTitle: "Register",
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
      <List>
        <ListItem>
		<ListItemAvatar>
          <Avatar
            src={Logo}
            onClick={() => {
              alert("Display Full Image of User");
            }}
            style={{ cursor: "pointer"}}
          />
        </ListItemAvatar>
         
        </ListItem>
      </List>

      <Divider />
      <List>
        {drawerOptions.map(({ optionTitle }) => (
          <ListItem
            button
            key={optionTitle}
            onClick={() => handleDrawerOptionClick(optionTitle)}
          >
            <ListItemText primary={optionTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="Advanced Search"
          onClick={() => handleDrawerOptionClick("Advanced Search")}
        >
          <ListItemIcon>
            <SearchRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Advanced Search" />
        </ListItem>
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
