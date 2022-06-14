import { makeStyles } from '@material-ui/core';
import React from 'react';
import MessageHolder from './MessageHolder';
import { dimensions } from '../DesktopChatModule';
const useStyles = makeStyles((theme)=>({
    container:{
        height:dimensions.chatListHeight,
        overflow:'auto',
        paddingLeft:10
    },
}))

// isImage : Keep true if need to show image file in chat
// isLeft : keet true if it is recieved message in case of media not text message
// side={'right'} keep this if it is recieved message in case of text message.

function ChatList(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <MessageHolder
            avatar={''}
            messages={[
              'Hi Jenny, How r u today?',
              'Did you train yesterday',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
            ]}
            
          />
          <MessageHolder
            side={'right'}
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
          <MessageHolder avatar={''} messages={['hey']} />
          <MessageHolder avatar={''}  side={'right'} isFile={true} files={[{fileName:"Threading.java",fileLink:'temp'}]}/>
          <MessageHolder
            side={'right'}
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
        <MessageHolder avatar={''} isLeft={true} isImage={true} images={[{imageTitle:"SampleIamge.jpg",imageLink:"etmp"}]}/>
        <MessageHolder
           
            messages={[
              "Great! What's about you?",
              'Of course I did. Speaking of which check this out',
            ]}
          />
        </div>
    );
}

export default ChatList;
