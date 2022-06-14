import { Button, Grid} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import ChatArea from './ChatArea/ChatArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPhone,faVideo} from '@fortawesome/free-solid-svg-icons';
import { Headingfonts } from '../../../Theme/fonts';


export const dimensions = {
  drawerWidth : 300,
  contactListHeight:460,
  chatListHeight:455,
  marginLeft_Container:0,
  marginRight_Container:0,
  marginTop_Container:0,
  drawerTop:130,
}

function DesktopChatHistoryModule(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      // setOpen(!open);
    };
    
    const handelContactClick = (event,selectedContctId)=>{
     alert("Contact id:"+selectedContctId)
    }
    return (
       
    <Grid container className={classes.container}>
        
        <Grid item xs={12} className={classes.chatContainer}>
                    {/* Chat */}
                     <div>
                      {/* Chat area and drawer */}
                      <ChatArea open={open}/>
                     </div>
        </Grid>
    </Grid>
      
    );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:'100%',
        // background:'green',
        width:'100%',
        marginTop:'0.7rem'
    },
    contactListContainer:{
        // backgroundColor:"blue"
    },
    chatContainer:{
        // backgroundColor:"white"
    },
      chatAreaHeaderContainer:{

      },
      contactHading:{
       
        boxShadow: "1px 1px 1px #9E9E9E",
        height:83 ,
        cursor:'pointer',
        // backgroundColor:"blue",
        marginTop:'-1.8%'
      },
      large:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginTop:"4%",
        marginLeft:'10%'
      },
      contactName:{
      
        marginTop:'0.5%',
        fontSize:25,
        font:Headingfonts.large
      },
      lastSeenCotainer:{
        fontSize:12
      },
      contactHeadingContentContainer:{
   
        marginTop:"2%"
      },
      phoneIconContainer:{
        // backgroundColor:"green",
        marginTop:"20%"
      }
}))
export default DesktopChatHistoryModule;