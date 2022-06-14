import { Card, CardContent, Grid } from '@material-ui/core';

import React, { useState } from 'react';
import { lightBorder } from '../../../../Theme/borders';
import {SimpleTextFields} from '../../Support/TextFields'
import useWindowDimensions from '../../useWindowDimensions';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import colors from '../../../../Theme/colors';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
function MessageCompositor(props) {
    const [messageTextToSend,setMessageTextToSend]=useState();
    const {height,width}=useWindowDimensions();
    return (
       <Card
        elevation={0}
        style={{height:height*0.15,borderRight:lightBorder}}
       >

           <CardContent>
               <Grid container>
                   <Grid item xs={12} style={{marginTop:'-0.7rem'}}>
                       
                   <SimpleTextFields 
                                    fontSize={14} 
                                    fontWeight={'bold'}
                                    label={"Message"} 
                                    value={messageTextToSend} 
                                    setValue={setMessageTextToSend}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={width*0.36}
                                    height={10}
                                    />
                   </Grid>
                   <Grid item xs={12} style={{marginTop:'0.5rem',paddingLeft:'0.5rem'}}>
                       <Grid container>
                           
                           <Grid item xs={1}>
                                <EmojiEmotionsIcon color="primary"/>
                           </Grid>
                           <Grid item xs={1}>
                                <AttachFileIcon color="primary"/>
                           </Grid>
                           <Grid item xs={4}>
                           <RoundButton
                                      title={"Create Offer"}
                                      width={140}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{alert("Create offer")}}
                                     />

                           </Grid>
                           <Grid item xs={5} style={{textAlign:'right'}}>
                           <RoundButton
                                      title={"Send"}
                                      width={10}
                                      color={colors.white}
                                      bgColor={colors.secondary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{alert("Send message")}}
                                     />
                           </Grid>
                       </Grid>
                   </Grid>
               </Grid>
           </CardContent>
       </Card>
    );
}

export default MessageCompositor;