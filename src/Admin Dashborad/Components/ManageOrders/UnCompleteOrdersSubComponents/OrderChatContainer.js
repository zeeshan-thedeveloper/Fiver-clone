import React from 'react';
import { Divider } from '@material-ui/core'
import DesktopChatHistoryModule from '../UnCompleteOrdersSubComponents/Chat/DesktopChatHistoryModule'
import MessageCompositionOptions from './Chat/ChatArea/MessageCompositionOptions';
function OrderChatContainer(props) {
    return (
        <div style={{marginTop:'1rem'}}>
            <Divider/>
            <DesktopChatHistoryModule/>
            <Divider/>
            <MessageCompositionOptions/>
        </div>
    );
}

export default OrderChatContainer;