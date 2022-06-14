import { Grid } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { Headings } from '../../Support/Headings';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { lightBorder } from '../../../../Theme/borders';
import AddNewProjectTab from '../AddNewProjectTab';
import { ArrowBackIos } from '@material-ui/icons';
// https://www.npmjs.com/package/react-responsive-carousel
function ViewProject(props) {
    const [isEditorOpen,setIsEditorOpen]=useState(false);
    useEffect(()=>{
        // const data = {
        //     projectTitle:props.projectData.projectTitle,
        //     projectDesc:props.projectData.projectDesc,
        //     projectService:props.projectData.projectService,
        //     projectSubService:props.projectData.projectSubService,
        //     projectEstimatedPrice:props.projectData.projectEstimatedPrice,
        //     projectPublishDate:props.projectData.projectPublishDate,
        //     clientSideViewUrl:props.projectData.clientSideViewUrl,
        //     listOfKeyWords:props.projectData.listOfKeyWords,
        //     isEditingEnabled:true
        // }
        // store.dispatch(actions.update_baic_info_ADD_NEW_PROJECTS(data));
        // store.dispatch(actions.update_media_ADD_NEW_PROJECTS(props.projectData.projectThumbNail,props.projectData.listOfImage,true));
    },[]);

    const handelPanelSwitcher=()=>{
        setIsEditorOpen(!isEditorOpen);
    }
    return (
        // projectTitle:"Project 2",
        // projectDesc:"Project desc",
        // projectService:"Web App",
        // projectSubService:"React Js",
        // projectEstimatedPrice:70,
        // projectPublishDate:"30-8-2021",
        // projectThumbNail:"https://www.d
        // listOfImage:[]
        // clientSideViewUrl:""
        // listOfKeyWords:[]
        <div>
            {
                (isEditorOpen===false) ? (
                    <div>
        <div style={{marginTop:'2rem'}}>
            
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
                    <div style={{marginTop:'1rem',textAlign:'center'}}>
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
                    <div style={{marginTop:'1rem',textAlign:'center'}}>
                                    <RoundButton
                                      title={"Open in Editor"}
                                      width={150}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        handelPanelSwitcher();
                                      }}
                                    />
                    </div>            
                </Grid>
            </Grid>

            </div>
                    </div>
                ):(
                    <div >
                        <div onClick={handelPanelSwitcher} style={{paddingLeft:'1rem',cursor:'pointer'}}>
                            <ArrowBackIos color="primary"/>
                        </div>
                        <div style={{border:lightBorder,paddingTop:'1rem',paddingRight:'1rem',paddingBottom:'1rem'}}>
                            <AddNewProjectTab/>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ViewProject;