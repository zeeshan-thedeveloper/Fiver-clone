import { Grid } from '@material-ui/core';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { height } from '@mui/system';
import useWindowDimensions from '../../useWindowDimensions';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import { Card,CardContent,Divider } from '@material-ui/core';
function OfferMessageHolder(props) {
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

                 <Card
                   elevation={0}
                   style={{border:lightBorder}}
                   >
                       <CardContent>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Headings text={`${props.message.offerServiceTitle}`} fontSize={15} fontWeight={'bold'}/>
                                </Grid>
                                <Grid item xs={2} style={{textAlign:'right'}}>
                                    <Headings text={`${props.message.offerPrice}`} fontSize={15} fontWeight={'bold'}/>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Headings text={props.message.offerDesc} fontSize={14} fontWeight={''}/>
                            <Divider/>
                            <div>
                                {
                                    props.message.offerFeature.map((message,index)=>{
                                        return <div style={{display:"inline-block",marginLeft:'0.5rem'}}>
                                            <div style={{display:'inline-block'}}>
                                            <img height={20} width={20} src="https://img.icons8.com/fluency/48/000000/checked-2.png"/>
                                            </div>
                                            <div style={{display:'inline-block'}}>
                                                <Headings text={`  ${message.feature}`} fontWeight={'bold'} />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <Divider/>
                            <div style={{textAlign:'center',marginTop:"0.5rem"}}>
                                <div style={{border:lightBorder,width:width*0.1,height:height*0.06,marginLeft:width*0.085 ,paddingTop:'0.6rem'}}>
                                   <Headings text={`Offer Satus ${props.message.offerStatus}`} fontWeight={'bold'} fontSize={14}/>
                                </div>
                            </div>
                       </CardContent>
                   </Card>
                   </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default OfferMessageHolder;