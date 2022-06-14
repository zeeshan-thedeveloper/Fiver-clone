import { Card, CardContent, Grid,Divider } from '@material-ui/core';
import React from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import useWindowDimensions from '../../useWindowDimensions';
import Avatar from '@mui/material/Avatar';
import { fontWeight } from '@mui/system';
function About(props) {
    const {height,width}=useWindowDimensions();
    return (
        <div>
            <Card 
            elevation={0}
            style={{border:lightBorder,height:height*0.58}}
            >
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <div>
                                {/* Past orders */}
                                <Headings text={"Orders"} fontWeight={'bold'} fontSize={15}/>
                                <Headings text={` Past Orders (${props.contact.contactNumberPastOrders})`}/>
                            </div>
                            <Divider/>
                            <div>
                                {/* Avout */}
                                <Grid container>
                                    <Grid item xs={12} style={{textAlign:'center'}}>
                                        {/* Profile */}
                                        <div style={{marginLeft:width*0.055,marginTop:height*0.04}}>
                                        <Avatar
                                                   alt={props.contact.contactUserName}
                                                   src={props.contact.contactThumbnail}
                                                   sx={{ width: 86, height: 86 }}
                                         />
                                        </div>
                                        <div>
                                            <Headings text={`${props.contact.contactUserName}`} fontWeight={'bold'}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {/* From */}
                                        <Headings text={`From `} fontWeight={'bold'}/>
                                    </Grid>
                                    <Grid item xs={6} style={{textAlign:'right'}}>
                                        {/* Contry */}
                                        <Headings text={`${props.contact.contactCountry} `} fontWeight={'bold'}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <div>
                                          {props.contact.contactLangauge.map((lang,index)=>{
                                              return <div>
                                                  <div>
                                                     <Headings text= {lang.languge} fontWeight={'bold'}/>
                                                  </div>
                                              </div>
                                          })}
                                      </div>
                                    </Grid>
                                    <Grid item xs={6} style={{textAlign:'right'}}>
                                      <div>
                                          {props.contact.contactLangauge.map((lang,index)=>{
                                              return <div>
                                                  <div>
                                                     <Headings text= {lang.level} fontWeight={'bold'}/>
                                                  </div>
                                              </div>
                                          })}
                                      </div>
                                    </Grid>
                                    
                                </Grid>
                            </div>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default About;