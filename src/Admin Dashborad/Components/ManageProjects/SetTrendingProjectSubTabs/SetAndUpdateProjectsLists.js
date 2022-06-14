import { Card, CardContent, CardHeader, Divider,Grid,Icon,ImageList,ImageListItem } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {lightBorder} from '../../../../Theme/borders'
import { RoundedTextFields, SimpleTextFields,MultiLineTextFields } from '../../Support/TextFields';
import produce from 'immer';
import { ArrowBackIos, CloudUpload } from '@material-ui/icons';
import ProjectSelectionr from './ProjectSelectionr';
import ListOfAllProjects from '../ViewAllProjectsSubComponents/ListOfAllProjects';
import CachedIcon from '@material-ui/icons/Cached';
import ImageHolder from './ImageHolder';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import { useSelector,useDispatch } from 'react-redux';

import { selectAll, selectListOfDynamicProjectsList, selectListOfStaticProjects } from '../Redux Components/Selectors';
import { loadDataOfListOfDynamicProjects, loadDataOfListOfStaticProjects } from '../Redux Components/Thunks';
import { addProjectInDynamicListOfProjects, removeProjectByIdFromDynamicListOfProjects, updateByIdListOfStaticProjects } from '../Redux Components/ProjectManagerSlice';
function SetAndUpdateProjectsLists(props) {
    const classes = useStyles();
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    const [isDataLoadedFromRedux,setIsDataLoadedFromRedux]=useState(false);
    const [listOfStaticProjects,setlistOfStaticProjects]=useState([])
    const [selectedProjectIndex,setSelectedProjectIndex]=useState(0);
    const [isProjectSelectorForStaticProjectsListOpen,setIsProjectSelectorForStaticProjectsListOpen]=useState(false)
    const [isProjectSelectorForDynamicProjectsListOpen,setIsProjectSelectorForDynamicProjectsListOpen]=useState(false)
    const [lastDataUpdateTimeAndDate,setLastUpdateTimeAndDate]=useState(null);
    const [lastChoosedDisplayMode,setLastChoosedDisplayMode]=useState(null);
    const [refresher,setRefresher]=useState(true);
    const [listOfSelectedItems,setlistOfSelectedItems]=useState([]);
    
    const listOfStaticProjects_FromStore = useSelector(selectListOfStaticProjects);
    const listOfDynamicProjectsList_FromStore = useSelector(selectListOfDynamicProjectsList);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadDataOfListOfStaticProjects()); 
        dispatch(loadDataOfListOfDynamicProjects());
    },[])

    // useEffect(()=>{

        
    //     // setLastUpdateTimeAndDate(store.getState().ProjectsStore.ListOfStaticProjects.lastUpdateDateAndTime);
    //     // setLastChoosedDisplayMode(store.getState().ProjectsStore.ListOfStaticProjects.lastChoosedDisplayMode);
    //     // We need to generate a special array for loadig into list .. for dynamic list
      
    // },[listOfStaticProjects_FromStore])

    useEffect(()=>{
        setlistOfStaticProjects(listOfStaticProjects_FromStore);
    
    },[listOfStaticProjects_FromStore]);

    useEffect(()=>{
       var tempList=[]
       listOfDynamicProjectsList_FromStore.forEach((item,index) => {
           tempList.push({key:index,imageUri:item.projectThumbNail,seletedItem:item,col:1});
       });
       setlistOfSelectedItems(tempList);
      
    },[listOfDynamicProjectsList_FromStore])

    useEffect(()=>{
         setlistOfStaticProjects(listOfStaticProjects_FromStore);
    },[refresher]);

    const handelEditAndSaveChanges = ()=>{
        if(!isEditingEnabled){
            alert("Call the thunx for updating the data to API.")
            props.setIsLockClosed(true);   
        }
        setIsEditingEnabled((prev)=>{
            return !(prev)
        });
    }
    
    const handePageSwitchFotSataticProjectsSelector = ()=>{
        setIsProjectSelectorForStaticProjectsListOpen(!isProjectSelectorForStaticProjectsListOpen);
    }
    const handePageSwitchFotDynamicProjectsSelector = ()=>{
        setIsProjectSelectorForDynamicProjectsListOpen(!isProjectSelectorForDynamicProjectsListOpen);
    }
    const handelSelectItemsForList=(selectedItem)=>{
        dispatch(addProjectInDynamicListOfProjects(selectedItem));
        handePageSwitchFotDynamicProjectsSelector();
    }

    const handelDeleteOfSelectItemsForList = (item,index)=>{
        dispatch(removeProjectByIdFromDynamicListOfProjects({selectedProject:item.seletedItem,index}));
    }

    const handeSelectOption=()=>{}

    const handelOptionSelection = (selectedValue) =>{
        console.log(selectedValue);
        switch (selectedProjectIndex) {
            case 0:
                dispatch(updateByIdListOfStaticProjects({selectedProject:selectedValue,index:0}))
                handePageSwitchFotSataticProjectsSelector();
                break;
            case 1:
                dispatch(updateByIdListOfStaticProjects({selectedProject:selectedValue,index:1}))
                handePageSwitchFotSataticProjectsSelector();
                break;
            case 2:
                dispatch(updateByIdListOfStaticProjects({selectedProject:selectedValue,index:2}))
                handePageSwitchFotSataticProjectsSelector();

                break;
            case 3:
                dispatch(updateByIdListOfStaticProjects({selectedProject:selectedValue,index:3}))
                handePageSwitchFotSataticProjectsSelector();
                break;
                        
            default:
                break;
        }

        
        
    }
   
    console.log(listOfStaticProjects)
    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder}}
        >
            <CardHeader
            action={
            <div style={{cursor:'pointer'}} >
                {(isEditingEnabled) ? <div onClick={handelEditAndSaveChanges}><LockIcon color="secondary" fontSize="larg"/> </div> : <div onClick={handelEditAndSaveChanges}> <LockOpenIcon color="primary"/> </div>}
            </div>
            }
            
            />
            
            <div style={{position:'absolute',top:'0.5rem',left:'0.5rem'}}>
                    <Headings  text={"Set/Update"} fontSize={35} fontWeight={'bold'}/>
                </div>

            <Divider/>

            <CardContent>
               
                {
                
                (listOfStaticProjects.length!=0) ? (
                        
                <div>
                <div>
                     <Headings  text={"Projects for Static Display Mode"} fontSize={30}/>
                </div>    
                {
                    
                    
                    <div>
                        {
                            (isProjectSelectorForStaticProjectsListOpen===true) ? (
                                <div>
                            <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                            <Grid item={12} style={{padding:'0.5rem',height:'40%'}}>
                                <div style={{border:lightBorder,padding:'0.5rem',width:'2.2rem',textAlign:'center',borderRadius:'15%',cursor:'pointer'}}
                                    onClick={handePageSwitchFotSataticProjectsSelector}
                                >    
                                    <ArrowBackIos/>
                                </div>
                                <div style={{marginTop:'1rem'}}>
                                    <ListOfAllProjects showMenueSelectionOpt={true} handeSelectOption={handeSelectOption} handelOptionSelection={handelOptionSelection}/>
                                </div>
                  
                            </Grid>
                        </Grid>
                                </div>
                            ):(
                                <div>
                                    
                <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                    <Grid container>
                        <Grid item xs={12} style={{textAlign:'right'}}>
                            <div style={{cursor:'pointer'}} onClick={()=>{setRefresher(!refresher)}}>
                                <CachedIcon color="primary"/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                    
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(0)
                                    handePageSwitchFotSataticProjectsSelector();
                                }}
                            >
                                {(listOfStaticProjects[0].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:250,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"1"} fontSize={18} />
                                           
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[0].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[0].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[0].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                                
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(1)
                                     handePageSwitchFotSataticProjectsSelector();
                                 }}
                            >
                                {(listOfStaticProjects[1].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:250,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"2"} fontSize={18} />
                                          
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[1].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[1].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[1].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container style={{marginTop:'1rem'}}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                 style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                 onClick={()=>{
                                     setSelectedProjectIndex(2)
                                     handePageSwitchFotSataticProjectsSelector();
                                 }}
                            >
                               {(listOfStaticProjects[2].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:250,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"3"} fontSize={18} />
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[2].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[2].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[2].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}
                                style={{border:lightBorder,padding:'0.5rem',cursor:'pointer'}}
                                onClick={()=>{
                                    setSelectedProjectIndex(3)
                                    handePageSwitchFotSataticProjectsSelector();
                                }}
                            >
                               {(listOfStaticProjects[3].projectTitle===null) ? (
                                    <div>
                                    <div style={{border:lightBorder,height:250,textAlign:'center'}}>
                                        <div style={{marginTop:'3rem'}}>
                                           <Headings text={"Select Project"} fontSize={18} />
                                           <Headings text={"4"} fontSize={18} />
                                          
                                        </div>
                                        <div style={{marginTop:'3rem'}}>
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    </div>
                                ) : (
                                        <div>
                                            <Headings text={`Title : ${listOfStaticProjects[3].projectTitle}`} fontSize={15}/>
                                            <Headings text={`Catagory : ${listOfStaticProjects[3].projectService}`} fontSize={15}/>
                                            <div style={{border:lightBorder}}>
                                                <img width="100%" height={200} src={listOfStaticProjects[3].projectThumbNail} />
                                            </div>
                                        </div>
                                )}
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>      
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                                </div>
                            )   
                        }
                    </div>
                }
                </div>
                    ):(
                        <div>
                            <Headings  text={"Loading List of Static projects"} fontSize={30}/>
                            <Skeleton />
						    <Skeleton />
                        </div>
                    )
                }

                <Divider/>
                {
                    (listOfSelectedItems.length===0) ? (
                        <div>
                        <Headings  text={"Loading List of Dynamic projects..."} fontSize={30}/>
                        <Skeleton />
                        <Skeleton />
                    </div>
                    ):(
                        <div>
                            <div >
                                <Headings  text={"Projects for Dynamic Display Mode"} fontSize={30}/>
                            </div>
                            
            
                            {/* Dynamic project */}
                            
                            {
                                (isProjectSelectorForDynamicProjectsListOpen===true) ? (
                                    <div>
                                        <Grid container style={{marginTop:"1rem",border:lightBorder,padding:'0.5rem'}}>
                                        <Grid item={12} style={{padding:'0.5rem',height:'40%'}}>
                                            <div style={{border:lightBorder,padding:'0.5rem',width:'2.2rem',textAlign:'center',borderRadius:'15%',cursor:'pointer'}}
                                                onClick={handePageSwitchFotSataticProjectsSelector}
                                            >    
                                                <ArrowBackIos/>
                                            </div>
                                            <div style={{marginTop:'1rem'}}>
                                                <ListOfAllProjects showMenueSelectionOpt={true} handeSelectOption={handelOptionSelection} handelOptionSelection={handelSelectItemsForList}/>
                                            </div>
                              
                                        </Grid>
                                    </Grid>
                                    </div>
                                ):(
                                    <div>
                                        <Grid container>
                                                    <Grid item xs={2}></Grid>
                                                    <Grid item xs={8}  style={{border:lightBorder,height:'35rem',marginTop:'1rem'}}>
                                                    <div>
                                                        {
                                                            (listOfSelectedItems.length!=0) ? (
                                                                <div>
                                                                    <div style={{marginLeft:'0rem',marginTop:'0.5rem',position:'relative'}}>
                                                                            <div style={{marginLeft:'0.5rem'}}>
                                                                             <Headings text={"List of projects"} fontSize={25} fontWeight={'bold'}/>
                                                                            
                                                                            {
                                                                                (isEditingEnabled) ? 
                                                                                <div style={{position:'absolute',top:'0rem',right:'1rem'}}>
                                                                                    <Headings text={"Unlock for edit"} fontSize={20} fontWeight={''}/>
                                                                                </div> 
                                                                                : (
                                                                                <div>
                                                                                <div style={{position:'absolute',top:0,right:2,cursor:'pointer'}} onClick={handePageSwitchFotDynamicProjectsSelector}>
                                                                                    {/* <CustomPhotoUploader selectedImage={selectedImage} setSelectedImage={handelSelectItemsForList}/> */}
                                                                                    <ImageSearchIcon color="primary"/>
                                                                                </div>
                                                                                <div style={{position:'absolute',top:'0.2rem',right:'2rem'}} >
                                                                                    <Headings text={"Select project"} fontSize={20} fontWeight={''}/>
                                                                                </div>
                                                                                </div>
                                                                                )
                                                                            }
                        
                                                                            </div>
                                                                            <Divider/> 
                                                                    </div>
                                                                    <ImageList rowHeight={250} className={classes.imageList} cols={3}>
                                                                      {listOfSelectedItems.map((item,index) => (
                                                                        <ImageListItem key={item.imageUri} cols={item.cols || 1}>
                                                                          {/* <img src={item.img} alt={item.title} /> */}
                                                                          <ImageHolder data={item} index={index} handelDeleteImagesFromGallary={handelDeleteOfSelectItemsForList} isEditingEnabled={isEditingEnabled}/>
                                                                        </ImageListItem>
                                                                      ))}
                                                                    </ImageList>
                                                                </div>
                                                            ):(
                                                                <div style={{marginTop:'25%',textAlign:'center'}}>
                                                                <div style={{marginTop:"10%",}}>
                                                                    <Headings text={"Projects list"} fontSize={25} fontWeight={'bold'}/>
                                                                </div>
                                                                <div style={{position:'relative'}}>
                                                                    {
                                                                        (isEditingEnabled) ? (
                                                                            <div style={{}}>
                                                                                <Headings text={"Unlock for editing"} fontSize={18}/>
                                                                            </div>
                                                                        ):(
                                                                            <div onClick={handePageSwitchFotDynamicProjectsSelector} style={{cursor:'pointer'}}>
                                                                                <Headings text={"Selecte project"} fontSize={18}/>                
                                                                            </div>
                                                                            // <CustomPhotoUploader selectedImage={selectedImage} setSelectedImage={handelSelectItemsForList}/>
                                                                        )
                                                                    }
                                                                    
                                                                </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    </Grid>
                                                    <Grid item xs={2}></Grid>
                                                </Grid>
                                            
                                    </div>
                                )
                            }
                        </div>
                    )

                }                


                
                <Divider/>

            </CardContent>

            

        </Card>
    </div>
    );
}
const useStyles = makeStyles((theme)=>({
    imageList: {
      width:'100%',
      height:'32rem',
      marginTop:'0.5rem'
    }
}))
export default SetAndUpdateProjectsLists;