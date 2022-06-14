import { Card, CardContent, Grid } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import useWindowDimensions from '../../useWindowDimensions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function ContactHolder(props) {
    const {height,width}=useWindowDimensions();
    const [lastMessage,setLastMessage]=useState("");
    useEffect(()=>{
        const msg = props.contact.contactLastMessage;
        const msgLength=props.contact.contactLastMessage.length
        const endIndex = (msgLength>17) ? 17 : msgLength;
        
        setLastMessage(msg.slice(0,endIndex));
    },[])
    return (
      <Card
        elevation={0}
        style={{border:lightBorder,height:height*0.12}}
      >
          <CardContent>
              <Grid container>
                  
                  <Grid item xs={12}>
                      <Grid container>
                          <Grid item xs={3}>
                            {/* Avatar */}
                            <Avatar
                              alt={props.contact.contactName}
                              src={props.contact.contactThumbnail}
                              sx={{ width: 46, height: 46 }}
                            />
                          </Grid>
                          <Grid item xs={6} style={{paddingTop:'0.2rem'}}>
                              {/* Name etx. */}
                              <div>
                                  <Headings text={props.contact.contactName} fontSize={16} fontWeight={'bold'}/>
                                  <Headings text={`${lastMessage}...`} fontSize={12} fontWeight={''}/>
                                                                  
                              </div>
                          </Grid>
                          <Grid item xs={2}>
                              {/* extra */}
                              <Headings text={props.contact.contactLastMessageTime} fontSize={12}/>
                          </Grid>
                          <Grid item xs={1}>
                                <FavoriteBorderIcon fontSize="small"/>
                                {/* Change on add to fav.. */}
                          </Grid>
                      </Grid>
                  </Grid>
                  
              </Grid>
          </CardContent>
      </Card>
    );
}

export default ContactHolder;