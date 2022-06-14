import React from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import useWindowDimensions from '../../useWindowDimensions';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { height } from '@mui/system';
import {Button} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function ImageMessageHolder(props) {
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
                <ImageList sx={{ width:width*0.33, height:height*0.3 }} cols={3} rowHeight={height*0.3}>
                {props.message.messageImages.map((item) => (
                  <ImageListItem key={item.imageUrl}>
                   
                    <div style={{height:height*0.1,width:width*0.1,border:lightBorder}}>
                    <div style={{marginTop:'1rem',textAlign:'center'}}>
                    <Headings text={item.imageTitle}/>
                    </div>
                    <div style={{marginTop:'1rem'}}>
                    <img 
                        src={item.imageUrl}
                        alt={item.imageTitle}
                        height={height*0.15}
                        width={width*0.1}
                     />
                    </div>
                    <div style={{marginTop:'0.2rem',textAlign:'center',border:lightBorder,paddingBottom:'0.5rem',cursor:'pointer'}}>
                        <div style={{display:'inline-block'}}>
                            <Headings text={"Download"}/>                            
                        </div>
                        <div style={{display:'inline-block'}}>
                            <ArrowDownwardIcon fontSize="small"/>                        
                        </div>
                    </div>
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
                    
                    </div>
                </Grid>
            </Grid>
            
            
        </div>
    );
}

export default ImageMessageHolder;