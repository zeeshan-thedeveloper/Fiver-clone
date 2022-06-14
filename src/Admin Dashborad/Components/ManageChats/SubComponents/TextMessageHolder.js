import { Grid } from '@material-ui/core';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { height } from '@mui/system';
import useWindowDimensions from '../../useWindowDimensions';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
function TextMessageHolder(props) {
    const {height,width}=useWindowDimensions();
    return (
        <div>
            <Grid container style={{minHeight:height*0.13}}>
                <Grid item xs={1} style={{paddingTop:'0.7rem'}}>
                    {/* thumbnail */}
                    <Avatar
                              alt={props.message.messageCreatorName}
                              src={props.message.messageCreatorThumbnail}
                              sx={{ width: 36, height: 36 }}
                    />
                </Grid>
                <Grid item xs={10} style={{marginTop:'0.7rem',marginLeft:width*0.008}}>
                    {/* Name and message */}
                    <div style={{display:'inline-block'}}>
                            <Headings text={props.message.messageCreatorName} fontWeight={'bold'}/>
                    </div>
                    <div style={{display:'inline-block',marginLeft:'0.2rem'}}>
                            <Headings text={props.message.messageCreationTimeAndDate} fontSize={12} fontWeight={''}/>
                    </div>  
                    <div>
                            <Headings text={props.message.messageContent}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default TextMessageHolder;