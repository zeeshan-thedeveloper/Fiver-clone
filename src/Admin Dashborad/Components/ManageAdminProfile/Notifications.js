import React from 'react';
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { Zoom,ListItemAvatar,Menu, makeStyles,ListItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core';

function Notifications(props) {
    const classes=useStyles();

    const notificationDetails=[
        {
          notificationId:0,
          content:"Notification",
          time:new Date().toLocaleTimeString(),
          icon:<LogoutIcon />,
          route:"/"
        },
        {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },

          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          {
            notificationId:0,
            content:"Notification",
            time:new Date().toLocaleTimeString(),
            icon:<LogoutIcon />,
            route:"/"
          },
          

      ]

const notificationMenuId = "primary-search-account-menu";
  
return (
<Menu
    className={classes.profileMenu}
    anchorEl={props.notificationMenuAnchor}
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
    
    open={props.isNotificationMenuOpen}
    onClose={props.handleNotificationMenuClose}
    TransitionComponent={Zoom}

    PaperProps={{
      style: {
        maxHeight: 48 * 10,
        width: '40ch',
        padding:10
      },
    }}
  >
    {notificationDetails.map(({ notificationId, content, time, icon, route }) => {
        return (
          <>
          <Link to={route} style={{ textDecoration: "none", color: "black" }}>
          <ListItem button key={notificationId}>
              <ListItemText primary={content} />
          </ListItem>
          </Link>
          <Divider />
          </>
        );
      })}
    </Menu>
    );
}
const useStyles = makeStyles((theme)=>({
 profileMenu: {
      marginTop: "1rem",
     
    },
    
}));

export default Notifications;