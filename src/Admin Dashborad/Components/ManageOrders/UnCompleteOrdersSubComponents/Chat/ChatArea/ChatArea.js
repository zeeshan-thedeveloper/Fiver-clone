import React from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChatList from './ChatList';
import MessageCompositionOptions from './MessageCompositionOptions';
import { dimensions } from '../DesktopChatHistoryModule';
import useWindowDimensions from '../useWindowDimensions';

const drawerWidth = 300;

function ChatArea(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {height,width}=useWindowDimensions();  

    return (
        <Grid container>
            <Grid item xs={12}>
                {/* Heading */}
                <div className={classes.root}>
                   <main
                     className={clsx(classes.content, {
                       [classes.contentShift]: props.open,
                     })}
                   >
                    <div className={classes.drawerHeader} />

                    {/* <div className={classes.chatAreaContainer}>
                       
                    </div> */}
                    {/* <div className={classes.messageCompositionOptionsContainer}>
                       
                    </div> */} 
                     <ChatList/>
                     {/* <MessageCompositionOptions/> */}
                   </main>
                  
                 
                   </div>
            </Grid>

        </Grid>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    root: {
      display: 'flex',
      width: `calc(100% - 290px)`,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      height: `calc(100% - ${dimensions.drawerTop}px)`,
      top: dimensions.drawerTop
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 0),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1, 
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    drawerContentContainer:{

    },
    chatAreaContainer:{
     
    },
    messageCompositionOptionsContainer:{
    
    }
}))
export default ChatArea;