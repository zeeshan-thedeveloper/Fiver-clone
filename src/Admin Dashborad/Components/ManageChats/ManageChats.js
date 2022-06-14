import { Button, colors, Grid} from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPhone,faVideo} from '@fortawesome/free-solid-svg-icons';
import useWindowDimension from '../useWindowDimensions'
import { lightBorder } from '../../../Theme/borders';
import ContactListTop from './SubComponents/ContactListTop';
import ChatListTop from './SubComponents/ChatListTop';
import ContactList from './SubComponents/ContactList';
import ChatList from './SubComponents/ChatList';
import MessageCompositor from './SubComponents/MessageCompositor';
import About from './SubComponents/About';

const contactInfo=  {
  contactId:'1',
  contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
  contactLastSeen:'5 min ago',
  contactUserName:'zeeshan_ahedm',
  contactLocalTime:"Sep 19, 1:56 PM",
  contactNumberPastOrders:5,
  contactCountry:"Pakistan",
  contactLangauge:[
    {
      langugeId:"1",
      languge:"English",
      level:"Basic"
    },
    {
      langugeId:"2",
      languge:"Urdu",
      level:"Fluent"
    },
    {
      langugeId:"1",
      languge:"Sindhi",
      level:"Mother Tounge"
    },
    
  ]
}

function ManageChats(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {height,width}=useWindowDimension();
    
    const handleDrawerOpen = () => {
      setOpen(!open);
    };
    
    const handelContactClick = (event,selectedContctId)=>{
     alert("Contact id:"+selectedContctId)
    }
    return (
        <div style={{paddingLeft:'5rem',paddingRight:'5rem',paddingTop:'4rem',paddingBottom:'3rem',backgroundColor:'#faf2fa'}}>
          <Grid container>
            <Grid item xs={3} style={{backgroundColor:''}}>
              <div style={{height:height*0.68}}>
                <div style={{backgroundColor:'white',paddingTop:'0.9rem',width:'100%',height:height*0.1,border:lightBorder}}>
                  <ContactListTop/>
                </div>
                <div>
                  <ContactList/>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} style={{backgroundColor:''}}>
              <div style={{height:height*0.68}}>
                <div style={{backgroundColor:'white',width:'100%',height:height*0.1,border:lightBorder}}>
                 <ChatListTop contact={contactInfo}/>
                </div>
                <div > 
                  <ChatList/>
                </div>
                <div style={{backgroundColor:'blue',height:height*0.1}}>
                    <MessageCompositor/>
                </div>
              </div>
            </Grid>
            <Grid item xs={3} style={{backgroundColor:''}}>
              <div style={{height:height*0.68}}>
                <div style={{backgroundColor:'white',width:'100%',height:height*0.1,border:lightBorder}}>

                </div>
                <div>
                  <About contact={contactInfo}/>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    
}))
export default ManageChats;