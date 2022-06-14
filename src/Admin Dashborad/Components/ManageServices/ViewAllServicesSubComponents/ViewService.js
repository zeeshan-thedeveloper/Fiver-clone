import { Grid } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { Headings } from '../../Support/Headings';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { lightBorder } from '../../../../Theme/borders';
import AddNewServiceTab from '../AddNewServiceTab'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { ArrowBackIos } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Link } from '@material-ui/core';
import { 
    updateTempServiceDataHolderBasicInfo,
    updateTempServiceDataHolderPackagesPremium,
    updateTempServiceDataHolderPackagesStandard, 
    updateTempServiceDataHolderPackagesBasic,   
    updateTempServiceDataHolderMedia,
    updateIsBeingUsedInEditor
 } from '../Redux Components/ServiceManagerSlice';
// https://www.npmjs.com/package/react-responsive-carousel
function ViewService(props) {
    const [isEditorOpen,setIsEditorOpen]=useState(false);
    
    const [isVisible, setisVisible] = useState({
        visible: true,
        invisible: true,
      });
    const [switchLabel,setSwitchLabel]=useState((isVisible.visible===true) ? 'Visible' : 'Invisible');
    const handelVisiblitySwitchChangeEvent = (event) => {
        if(isVisible.invisible===true)
        {
            setSwitchLabel('Invisible') 
            //Dispatch the setVisiblityOfServiceThunk 
            alert("Dispatch the setVisiblityOfServiceThunk ") 
        }
        else
        {
            setSwitchLabel("Visible");
            //Dispatch the setVisiblityOfServiceThunk 
            alert("Dispatch the setVisiblityOfServiceThunk ")  
           
        }
        setisVisible({ ...isVisible, [event.target.name]: event.target.checked });
      };
    const dispatch = useDispatch();
    useEffect(()=>{
        //update the tempservicedataholder so that we may update the service..
        const payload_basicInfo ={
            serviceTitle:props.serviceData.serviceTitle,
            serviceDesc:props.serviceData.serviceDesc,
            listOfSubServices:props.serviceData.listOfSubServices,
            listOfKeyWords:props.serviceData.listOfKeyWords,
            isEditingEnabled:true
        }
        const payload_media = {
            thumbnailImageUri: props.serviceData.thumbnailImageUri,
            listOfImages: props.serviceData.listOfImages,
            isEditingEnabled: true
        }
        const basic_payload = {
            packageDescription:props.serviceData.packages[0].packageDescription,
            packagePrice:props.serviceData.packages[0].packagePrice,
            listOfFeatures:props.serviceData.packages[0].listOfFeatures,
        }
        const standard_payload = {
             packageDescription:props.serviceData.packages[1].packageDescription,
            packagePrice:props.serviceData.packages[1].packagePrice,
            listOfFeatures:props.serviceData.packages[1].listOfFeatures,
        }        
        const premium_payload = {
            packageDescription:props.serviceData.packages[2].packageDescription,
            packagePrice:props.serviceData.packages[2].packagePrice,
            listOfFeatures:props.serviceData.packages[2].listOfFeatures,
        }
        dispatch(updateTempServiceDataHolderPackagesBasic(basic_payload));
        dispatch(updateTempServiceDataHolderPackagesPremium(premium_payload));
        dispatch(updateTempServiceDataHolderPackagesStandard(standard_payload));
        dispatch(updateTempServiceDataHolderMedia(payload_media));
        dispatch(updateTempServiceDataHolderBasicInfo(payload_basicInfo));
        
    },[]);

    const handelPanelSwitcher=()=>{
        setIsEditorOpen(!isEditorOpen);
    }
    return (
        
        <div>
            {
                (isEditorOpen===false) ? (
                    <div>
        <div style={{marginTop:'2rem'}}>
            
            <Grid container>
                <Grid item xs={7}>
                      <div>
                       <Headings text={`Title : ${props.serviceData.serviceTitle}`} fontSize={30} fontWeight={'bold'}/>
                      </div>
                  <div style={{marginLeft:'1rem'}}>
                  <div>
                      <Headings text={`Publish date : ${props.serviceData.servicePublishDate}`} fontSize={17} fontWeight={''}/>
                  </div>
                  <div>
                      <Headings text={`Last update date : ${props.serviceData.serviceLastUpdateDate}`} fontSize={17} fontWeight={''}/>
                  </div>
                  
                    <div>     
                        <Headings text={`Description:`} fontSize={25} fontWeight={'bold'}/>
                    </div>
                    <div style={{marginLeft:'2rem'}}>
                        <Headings text={`${props.serviceData.serviceDesc}`} fontSize={17} fontWeight={''}/>    
                    </div>

                    <div>   
                        <div>
                        <Headings text={`Sub services:`} fontSize={25} fontWeight={'bold'}/>
                        </div>  
                        <div style={{marginLeft:'2rem'}}>
                            {
                            props.serviceData.listOfSubServices.map((item)=>{
                                return <div style={{display:'inline-block'}}>
                                    <Headings  text={`${item.subServiceTitle}, `}/>
                                </div>
                            })
                            }
                        </div>
                    </div>

                    <div>   
                        <div>
                        <Headings text={`Search keywords:`} fontSize={25} fontWeight={'bold'}/>
                        </div>  
                        <div style={{marginLeft:'2rem'}}>
                            {
                            props.serviceData.listOfKeyWords.map((item)=>{
                                return <div style={{display:'inline-block'}}>
                                    <Headings  text={`${item.keyWordText}, `}/>
                                </div>
                            })
                            }
                        </div>
                    </div>

                    <div>   
                        <div>
                        <Headings text={`Related projects`} fontSize={25} fontWeight={'bold'}/>
                        </div>  
                        <div style={{marginLeft:'2rem'}}>
                            {
                            props.serviceData.listOfRelatedProjects.map((item)=>{
                                return <div style={{display:'block'}}>
                                    <Link
                                      component="button"
                                      variant="body2"
                                      onClick={() => {
                                        window.open(item.projectUrl, "_blank")
                                      }}
                                    >
                                     {item.projectTitle}
                                    </Link>
                                </div>
                            })
                            }
                        </div>
                    </div>
                    <div>   
                        <div>
                        <Headings text={`Service Rating:`} fontSize={25} fontWeight={'bold'}/>
                        </div>  
                        <div style={{marginLeft:'2rem'}}>
                           <Headings text={`${props.serviceData.serviceRatings}`}/>
                        </div>
                    </div>
                    <div>     
                        <Headings text={`Basic Package:`} fontSize={25} fontWeight={'bold'}/>
                    </div>
                    <div style={{marginLeft:'2rem'}}>
                        <div>
                            <Headings text={`Package desc:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                <Headings text={`${props.serviceData.packages[0].packageDescription} `}/>
                            </div>
                            <Headings text={`Package price: ${props.serviceData.packages[0].packagePrice}`}/>
                          
                            <Headings text={`Features:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                {
                                    props.serviceData.packages[0].listOfFeatures.map((item)=>{
                                        return <div style={{marginTop:'0.51em'}}>
                                           
                                            <div style={{display:'inline'}}>
                                                <CheckCircleOutlineIcon/>
                                            </div>
                                            <div style={{display:'inline',marginBottom:'1rem'}}>
                                                {item.featureTitle}
                                            </div>
                                            
                                        </div>
                                    })
                                }
                            </div>

                            
                        </div>
                    
                    
                    </div>

                    <div>     
                        <Headings text={`Standard Package:`} fontSize={25} fontWeight={'bold'}/>
                    </div>
                    <div style={{marginLeft:'2rem'}}>
                        <div>
                            <Headings text={`Package desc:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                <Headings text={`${props.serviceData.packages[1].packageDescription} `}/>
                            </div>
                            <Headings text={`Package price: ${props.serviceData.packages[1].packagePrice}`}/>
                          
                            <Headings text={`Features:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                {
                                    props.serviceData.packages[1].listOfFeatures.map((item)=>{
                                        return <div style={{marginTop:'0.51em'}}>
                                           
                                            <div style={{display:'inline'}}>
                                                <CheckCircleOutlineIcon/>
                                            </div>
                                            <div style={{display:'inline',marginBottom:'1rem'}}>
                                                {item.featureTitle}
                                            </div>
                                            
                                        </div>
                                    })
                                }
                            </div>

                            
                        </div>
                    
                    
                    </div>

                    <div>     
                        <Headings text={`Premium Package:`} fontSize={25} fontWeight={'bold'}/>
                    </div>
                    <div style={{marginLeft:'2rem'}}>
                        <div>
                            <Headings text={`Package desc:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                <Headings text={`${props.serviceData.packages[2].packageDescription} `}/>
                            </div>
                            <Headings text={`Package price: ${props.serviceData.packages[2].packagePrice}`}/>
                          
                            <Headings text={`Features:`}/>
                            <div style={{marginLeft:'1rem'}}>
                                {
                                    props.serviceData.packages[2].listOfFeatures.map((item)=>{
                                        return <div style={{marginTop:'0.51em'}}>
                                           
                                            <div style={{display:'inline'}}>
                                                <CheckCircleOutlineIcon/>
                                            </div>
                                            <div style={{display:'inline',marginBottom:'1rem'}}>
                                                {item.featureTitle}
                                            </div>
                                            
                                        </div>
                                    })
                                }
                            </div>

                            
                        </div>
                    
                    
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
                    
                      {props.serviceData.listOfImages.map((item,index)=>{
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
                                        window.open(props.serviceData.clientSideViewUrl, "_blank")
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
                    <div style={{marginTop:'1rem',textAlign:'center'}}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isVisible.invisible}
                          onChange={handelVisiblitySwitchChangeEvent}
                          name="invisible"
                          color="primary"
                        />
                      }
                      label={switchLabel}
                    />
                    </div>   
                    <div style={{marginTop:'1rem',textAlign:'center'}}>
                                    <RoundButton
                                      title={"Delete"}
                                      width={200}
                                      color={colors.white}
                                      bgColor={colors.secondary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        //dispatch a thunk to delete it.
                                        alert("dispatch a thunk to delete it")
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
                            <AddNewServiceTab/>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ViewService;