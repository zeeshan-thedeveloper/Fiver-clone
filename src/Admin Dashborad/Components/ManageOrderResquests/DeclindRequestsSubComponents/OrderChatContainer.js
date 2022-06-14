import React from 'react';
import { Divider } from '@material-ui/core'
import DesktopChatHistoryModule from '../DeclindRequestsSubComponents/Chat/DesktopChatHistoryModule'
import MessageCompositionOptions from './Chat/ChatArea/MessageCompositionOptions';
function OrderChatContainer(props) {
    return (
        <div style={{marginTop:'1rem'}}>
            <Divider/>
            <DesktopChatHistoryModule/>
           
        </div>
    );
}

export default OrderChatContainer;