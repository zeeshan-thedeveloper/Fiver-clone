import React from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import useWindowDimensions from '../../useWindowDimensions';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { height } from '@mui/system';
import {Button} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function FileMessageHolder(props) {
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
                <ImageList sx={{ width:width*0.33, height:height*0.3 }} cols={4} rowHeight={height*0.1}>
                {props.message.messageFiles.map((item) => (
                  <ImageListItem key={item.videoUrl}>
                   <div style={{textAlign:'center',cursor:'pointer'}}>
                       <div>
                           
                              { (item.fileType==='zip') && <div>
                                   <img height={height*0.05} width={width*0.03} src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-zip-user-interface-wanicon-lineal-color-wanicon.png"/>
                               </div>
                              }  
                              {
                               (item.fileType==='txt') && <div>
                               <img height={height*0.05} width={width*0.03} src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-text-file-shopping-and-commerce-flatarticons-blue-flatarticons.png"/>
                                </div>
                              } 
                               {
                               (item.fileType==='docx' || item.fileType==='doc') && <div>
                               <img height={height*0.05} width={width*0.03} src="https://img.icons8.com/color/48/000000/word.png"/>
                                </div>
                              } 
                               {
                               (item.fileType==='java') && <div>
                               <img height={height*0.05} width={width*0.03} src="https://img.icons8.com/color/48/000000/java-files.png"/>
                                </div>
                              } 
                              {
                               (item.fileType==='js') && <div>
                               <img height={height*0.05} width={width*0.03} src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                                </div>
                              } 
                              
                       </div>
                       <div style={{marginTop:'0.4rem'}}>
                           <Headings text={item.fileTitle} fontSize={12} fontWeight={'bold'}/>
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

export default FileMessageHolder;