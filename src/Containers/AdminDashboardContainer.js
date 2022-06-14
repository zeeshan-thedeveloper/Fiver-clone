
//Reat
import React, { useState } from 'react';

//  Material UI
import clsx from 'clsx';
import { 
    makeStyles,useTheme,alpha,
} from '@material-ui/core/styles';

import { 
    Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,
    ListItemIcon,ListItemText,InputBase,MenuItem,Badge,Menu, Grid,Avatar,Zoom,ListItemAvatar
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import LogoutIcon from "@material-ui/icons/ExitToApp";

//Components

import { stringCollection } from '../Admin Dashborad/Components/Strings/StringCollection';
import ManageChats from '../Admin Dashborad/Components/ManageChats/ManageChats';
import ManageMasterDatabase from '../Admin Dashborad/Components/ManageMasterDatabase/ManageMasterDatabase';
import ManageOrders from '../Admin Dashborad/Components/ManageOrders/ManageOrders';
import ManageProjects from '../Admin Dashborad/Components/ManageProjects/ManageProjects';
import ManageReviews from '../Admin Dashborad/Components/ManageReviews/ManageReviews';
import ManageServices from '../Admin Dashborad/Components/ManageServices/ManageServices';
import ManageTeams from '../Admin Dashborad/Components/ManageTeams/ManageTeams';
import ManageTransactions from '../Admin Dashborad/Components/ManageTransactions/ManageTransactions';
import ManageUserAccounts from '../Admin Dashborad/Components/ManageUserAccounts/ManageUserAccounts';
import ManageUserPermissions from '../Admin Dashborad/Components/ManageUserPermisions/ManageUserPermissions';
import Home from '../Admin Dashborad/Components/Home/Home';
import ManageOrderRequests from '../Admin Dashborad/Components/ManageOrderResquests/ManageOrderRequests';
import ManageOffers from '../Admin Dashborad/Components/ManageOffers/ManageOffers';
import LogedInAdminProfile from '../Admin Dashborad/Components/ManageAdminProfile/LogedInAdminProfile';
import { Headings } from '../Admin Dashborad/Components/Support/Headings';
import OnlineAdmins from '../Admin Dashborad/Components/Support/OnlineAdmins';
import AdminProfile from '../Admin Dashborad/Components/ManageAdminProfile/AdminProfile'
import Notifications from '../Admin Dashborad/Components/ManageAdminProfile/Notifications';
const drawerWidth = 250;
const drawerIconHeight = 25;
const drawerIconWidth = 25;
const drawerFontSize='1rem';
const drawerFontWeight='bold';
const adminNameFontSize='1.4rem';


export default function AdminDashboardContainer() {

  // Data hooks and vairables
  const [profileUrl,setProfileUrl]=useState('https://firebasestorage.googleapis.com/v0/b/user-accounts-7cdc4.appspot.com/o/zeeshan.jpeg?alt=media&token=2b357d32-39c7-4369-88ad-c8b06599a9f9');
  const [adminName,setAdminName]=useState('Zeeshan');
  const [currentPageId,setCurrentPageId]=useState(10);

  const allScreens = [<ManageChats/>,<ManageMasterDatabase/>,<ManageOrders/>,
    <ManageProjects/>,<ManageReviews/>,<ManageServices/>,
    <ManageTeams/>,<ManageTransactions/>,<ManageUserAccounts/>,
    <ManageUserPermissions/>,<Home/>,<ManageOffers/>,<LogedInAdminProfile/>,<AdminProfile/>,<ManageOrderRequests/>];

const [currentOpenedScreen,setCurrentOpenedScreen]=useState(allScreens[10]);

/**
* 0 : ManageChats
* 1 : ManageMasterDatabase
* 2 : ManageOrders
* 3 : ManageProjects
* 4 : ManageReviews
* 5 : ManageServices
* 6 : ManageTeams
* 7 : ManageTransactions
* 8 : ManageUserAccounts
* 9 : ManageUserPermissions
* 10 : Home
* 11 : ManageOffers
* 12 : LogedInAdminProfile
* 13 : AdminProfile
* 14 : ManagerOrderRequests
*/

const handelManageOptionClickEvent = (event,index) =>
{
  setCurrentPageId(index);
  setCurrentOpenedScreen(allScreens[index]);
}

  // UI-Hooks
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {setAnchorEl(event.currentTarget);};
  const handleDrawerOpen = () => {setOpen(true);};
  const handleDrawerClose = () => {setOpen(false);};
  const handleMenuClose = () => {setAnchorEl(null);};

  const [notificationMenuAnchor, setNotificationMenuAnchor] = React.useState(null);
  const isNotificationMenuOpen = Boolean(notificationMenuAnchor);
  //Notification Menu
  const   handleNotificationMenuOpen = (event) => {
    setNotificationMenuAnchor(event.currentTarget);
  };

  const   handleNotificationMenuClose = () => {
    setNotificationMenuAnchor(null);
  };

  //Notification Menu options/items
  
const profileMenuOptions = [
    {
      optionTitle: "Settings",
      optionIcon: <SettingsIcon />,
      route: "/",
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
          src={profileUrl}
          onClick={() => {
            alert("Display Full Image of User");
          }}
          style={{ cursor: "pointer" }}
        />
      </ListItemAvatar>
      <ListItemText
        className={classes.profileMenuInfo}
        primary={<Typography variant="h6">{adminName}</Typography>}
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


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: "#011c38" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
                {stringCollection.AdminDashboardContainer.NavBarTitle}
          </Typography>
          
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleNotificationMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
             
            </IconButton>
             <Avatar
              className={classes.avatar}
              src={profileUrl}
              onClick={handleProfileMenuOpen}
              style={{ cursor: "pointer" }}
            />
          </div>
           
        </Toolbar>
      </AppBar>
      {renderMenu}     
      {<Notifications notificationMenuAnchor={notificationMenuAnchor} isNotificationMenuOpen={isNotificationMenuOpen} handleNotificationMenuClose={handleNotificationMenuClose}/>}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          
        }}
      >
        <div>
            {/* Top of drawer */}
         <Grid container>
           <Grid item xs={1}></Grid>

           <Grid item xs={9} style={{textAlign:'center',height:'9rem',display: (open) ? '' : 'none'}}>
             <div style={{height:'6rem',width:'6rem',margin:'auto',marginTop:'4%'}} >
                  <Avatar alt="zeeshan" src={profileUrl} style={{width:'100%',height:'100%',cursor:'pointer'}} onClick={()=>{handelManageOptionClickEvent(this,12)}}/>
             </div>
             <div style={{height:'2rem',width:'6rem',margin:'auto',marginTop:'2%'}}>
                  <Headings text={adminName} fontSize={adminNameFontSize} fontWeight={'bold'} style={{margin:'auto'}} />
             </div>
             <div style={{height:'2rem',width:'6rem',position:'absolute',top:'5rem',right:'1rem'}}>
                  <OnlineAdmins handelManageOptionClickEvent={handelManageOptionClickEvent}/>
             </div>
            </Grid>
           <Grid item xs={2} style={{display: (open) ? '' : 'none'}}>
                 <IconButton onClick={handleDrawerClose}>
                     {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                 </IconButton>
           </Grid>
           
         </Grid>
          
        </div>
        <List>
              <ListItem 
              button 
              onClick={()=>{handelManageOptionClickEvent(this,10)}}
              selected={(10===currentPageId) ? true : false}
              classes={{ selected: classes.active }}>
              
                  <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/50/000000/home.png"/> </ListItemIcon>
                  <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.HomeOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
              </ListItem>
        </List>
        <Divider />
        <List>
              <ListItem button onClick={()=>{handelManageOptionClickEvent(this,3)}}
              selected={(3===currentPageId) ? true : false}
              classes={{ selected: classes.active }}
              >
                  <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/50/000000/project.png"/> </ListItemIcon>
                  <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageProjectsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
              </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,5)}} 
            selected={(5===currentPageId) ? true : false}
            classes={{ selected: classes.active }}
            >
              <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/100/000000/service.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageServicesOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,14)}}
            selected={(7===currentPageId) ? true : false}
            classes={{ selected: classes.active }}>
              <ListItemIcon> <img width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-order-online-shopping-itim2101-fill-itim2101.png"/>    </ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageOrderRequests} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,2)}}
            selected={(2===currentPageId) ? true : false}
            classes={{ selected: classes.active }}
            >
              <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/50/000000/todo-list.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageOrdersOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
         
            </ListItem>
        </List>       

        <Divider />
        <List>

            <ListItem 
              button
              onClick={()=>{handelManageOptionClickEvent(this,8)}}
              selected={(8===currentPageId) ? true : false}
              classes={{ selected: classes.active }}
              >
              <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-glyphs/30/000000/user-folder.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageUserAccountsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
            </ListItem>

        </List>
        <Divider />

        {/* <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,9)}}
            selected={(9===currentPageId) ? true : false}
              classes={{ selected: classes.active }}>
              <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight}  src="https://img.icons8.com/ios-filled/50/000000/user-rights.png"/></ListItemIcon>
              <ListItemText primary={stringCollection.AdminDashboardContainer.ManageUserPermissionsOption} />
            </ListItem>
        </List>
        <Divider /> */}
        
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,4)}}
            selected={(4===currentPageId) ? true : false}
            classes={{ selected: classes.active }}>
              <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight}  src="https://img.icons8.com/ios-filled/50/000000/customer-insight.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageReviewsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
         
            </ListItem>
        </List>

        <Divider />
      
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,11)}}
            selected={(11===currentPageId) ? true : false}
            classes={{ selected: classes.active }}
            >
              <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/pastel-glyph/50/000000/price-tag.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageOffersOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
         
            </ListItem>
        </List>
        <Divider />
       
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,0)}}
            selected={(0===currentPageId) ? true : false}
            classes={{ selected: classes.active }}
            >
              <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight}  src="https://img.icons8.com/ios-filled/50/000000/chat--v2.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageChatsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
         
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,7)}}
            selected={(7===currentPageId) ? true : false}
            classes={{ selected: classes.active }}>
              <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight}  src="https://img.icons8.com/ios-filled/50/000000/payment-history.png"/></ListItemIcon>
              <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageTransactionsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
            </ListItem>
        </List>
        <Divider />
          {/* <List>
              <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,6)}}>
                <ListItemIcon><img  width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/50/000000/army-star.png"/></ListItemIcon>
                <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageTeamsOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
          
              </ListItem>
          </List><Divider />
          <List>
              <ListItem button  onClick={()=>{handelManageOptionClickEvent(this,1)}}>
                <ListItemIcon><img width={drawerIconWidth} height={drawerIconHeight} src="https://img.icons8.com/ios-filled/50/000000/cloud-storage.png"/></ListItemIcon>
                <ListItemText primary={<Headings text={stringCollection.AdminDashboardContainer.ManageMasterDatabaseOption} fontSize={drawerFontSize} fontWeight={drawerFontWeight}/>} /> 
          
              </ListItem>
          </List> */}
      </Drawer>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {currentOpenedScreen}
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    avatar: {
      marginTop: "0.5rem",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX:'hidden'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      paddingTop:'7%',
      
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 0),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      marginTop:'5%'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    grow: {
      flexGrow: 1,
    },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    profileMenu: {
      marginTop: "1rem",
    },
    active: {
      backgroundColor: "red"
    }
  }));
  
  