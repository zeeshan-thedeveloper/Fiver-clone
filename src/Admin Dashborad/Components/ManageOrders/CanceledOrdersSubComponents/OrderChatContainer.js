import React from 'react';
import { Divider } from '@material-ui/core'
import DesktopChatHistoryModule from '../UnCompleteOrdersSubComponents/Chat/DesktopChatHistoryModule'
import MessageCompositionOptions from './Chat/ChatArea/MessageCompositionOptions';
import { Headings } from '../../Support/Headings';
function OrderChatContainer(props) {
    return (
        <div style={{marginTop:'1rem'}}>
            <div>
                <Headings text={"Chat history"} fontSize={25} fontWeight={'bold'}/>
            </div>
            <Divider/>
            <DesktopChatHistoryModule/>
            
        </div>
    );
}

export default OrderChatContainer;