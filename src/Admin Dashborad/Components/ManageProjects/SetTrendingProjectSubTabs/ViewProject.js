import { Grid } from '@material-ui/core';
import React from 'react';
import { Headings } from '../../Support/Headings';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
// https://www.npmjs.com/package/react-responsive-carousel
function ViewProject(props) {
    return (
        // projectTitle:"Project 2",
        // projectDesc:"Project desc",
        // projectService:"Web App",
        // projectSubService:"React Js",
        // projectEstimatedPrice:70,
        // projectPublishDate:"30-8-2021",
        // projectThumbNail:"https://www.d
        // listOfImage:[{}]
        // clientSideViewUrl:""
        
        <div style={{marginTop:'2rem',paddingLeft:'1rem'}}>
            
            <Grid container>
                <Grid item xs={7}>
                      <div>
                       <Headings text={`Title : ${props.projectData.projectTitle}`} fontSize={30} fontWeight={'bold'}/>
                      </div>
                  <div style={{marginLeft:'1rem'}}>
                  <div>
                       <Headings text={`Catagory : ${props.projectData.projectService}`} fontSize={17} fontWeight={''}/>
                  </div>
                  <div>
                      <Headings text={`Sub catagory : ${props.projectData.projectSubService}`} fontSize={17} fontWeight={''}/>
                  </div>
                  <div>
                      <Headings text={`Price : ${props.projectData.projectEstimatedPrice}`} fontSize={17} fontWeight={''}/>
                  </div>
                  <div>
                      <Headings text={`Publish date : ${props.projectData.projectPublishDate}`} fontSize={17} fontWeight={''}/>
                  </div>
                  <div>   
                 <Headings text={`Description:`} fontSize={25} fontWeight={'bold'}/>
                    </div>
                    <div style={{marginLeft:'2rem'}}>
                        <Headings text={`${props.projectData.projectDesc}`} fontSize={17} fontWeight={''}/>    
                    </div>
                  </div>

                </Grid>
                <Grid item xs={5}>
                    <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={true}
                    showIndicators={false}
                    >
                    
                      {props.projectData.listOfImage.map((item,index)=>{
                          return (
                              <div>
                                  <img  src={item.imageUri}/>
                              </div>
                          )
                      })}
                    
                    </Carousel>
                    <div style={{marginTop:'2rem',textAlign:'center'}}>
                                    <RoundButton
                                      title={"Open client view"}
                                      width={200}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        window.open(props.projectData.clientSideViewUrl, "_blank")
                                      }}
                                     />
                    </div>

                </Grid>
            </Grid>

           

           
        </div>
    );
}

export default ViewProject;