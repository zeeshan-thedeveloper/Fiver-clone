import { makeStyles } from '@material-ui/core';
import React from 'react';
import MessageHolderForMobile from './MessageHolderForMobile';
import { dimensions } from '../MobileChatHistoryModule';

const useStyles = makeStyles((theme)=>({
    container:{
        height:'calc(100%)',
        overflow:'auto',
        paddingLeft:10
    },
}))

// isImage : Keep true if need to show image file in chat
// isLeft : keet true if it is recieved message in case of media not text message
// side={'right'} keep this if it is recieved message in case of text message.

function ChatListForMobile(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <MessageHolderForMobile
            avatar={''}
            messages={[
              'Hi Jenny, How r u today?',
              'Did you train yesterday',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
            ]}
            
          />
          <MessageHolderForMobile
            side={'right'}
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
          <MessageHolderForMobile avatar={''} messages={['hey']} />
          <MessageHolderForMobile avatar={''}  side={'right'} isFile={true} files={[{fileName:"Threading.java",fileLink:'temp'}]}/>
          <MessageHolderForMobile
            side={'right'}
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
        <MessageHolderForMobile avatar={''} isLeft={true} isImage={true} images={[{imageTitle:"SampleIamge.jpg",imageLink:"etmp"}]}/>
        <MessageHolderForMobile
           
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
        </div>
    );
}

export default ChatListForMobile;
