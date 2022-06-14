import { Grid } from '@material-ui/core';
import React from 'react';
import useWindowDimensions from './useWindowDimensions'
import MessageCompositionOptionsForMobile from './ChatArea/MessageCompositionOptionsForMobile';
import ChatListForMobile from './ChatArea/ChatListForMobile';

export const dimensions = {
    chatListHeight:'32em',
    marginLeft_Container:0,
    marginRight_Container:0,
    marginTop_Container:0,
  }
function MobileChatModule(props) {
    const {height,width} = useWindowDimensions();
    return (
        <div style={{position:'relative'}}>
            <Grid container>
                <Grid item xs={12} style={{height:height-50}}>
                    <ChatListForMobile/>
                </Grid>
                <Grid item xs={12}  style={{width:'100%',position:'fixed',bottom:0}}>
                    <MessageCompositionOptionsForMobile/>
                </Grid>
            </Grid>
        </div>
    );
}

export default MobileChatModule;