import React,{useEffect, useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Grid,Card,CardHeader,CardContent,Divider,ImageList,ImageListItem,makeStyles } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {lightBorder} from '../../../../Theme/borders'
import produce from 'immer';
import CustomPhotoUploader from '../../Support/CustomPhotoUploader'
import { Check, Close } from '@material-ui/icons';
import ScrollView from '@cantonjs/react-scroll-view/lib/components/ScrollView';
import ImageHolder from './ImageHolder';
import { useDispatch, useSelector } from 'react-redux';
import { selectTempServiceDataHolderMedia } from '../Redux Components/Selectors';
import { updateTempServiceDataHolderMedia } from '../Redux Components/ServiceManagerSlice';
function Media(props) {
    const classes = useStyles();

    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    const [selectedFile,setSelectedFile]=useState();
  
    //Data hooks
    const [thumbnailImage,setThumbnailImage]=useState(null);
    const [selectedImage,setSelectedImage]=useState(null);
    const [listOfSelectedImages,setListOfSelectedImages]=useState([]);

    const dispatch = useDispatch();
    const media_FromStore = useSelector(selectTempServiceDataHolderMedia);

    useEffect(()=>{
       
        //Load data from store into hooks
        setThumbnailImage(media_FromStore.thumbnailImageUri);
        setListOfSelectedImages(media_FromStore.listOfImages);
        setIsEditingEnabled(media_FromStore.isEditingEnabled);
        
    },[media_FromStore])

    const handelEditAndSaveChanges = ()=>{
        if(!isEditingEnabled)
        {
            props.setIsLockClosed(true)
            const payload = {
                thumbnailImageUri: thumbnailImage,
                listOfImages:listOfSelectedImages,
                isEditingEnabled: true
            }
            dispatch(updateTempServiceDataHolderMedia(payload));
        }
        else
        {
            props.setIsLockClosed(false)
        }

        setIsEditingEnabled(!isEditingEnabled);
    }
    const handelSelectImagesForGallary=(value)=>{
        const key_index = listOfSelectedImages.length;
        setListOfSelectedImages(produce(listOfSelectedImages,draf=>{
            draf.push({key:key_index,imageUri:value,col:1});
        }))
    }
    const handelDeleteImagesFromGallary = (item)=>{
        setListOfSelectedImages(listOfSelectedImages.filter((e)=>{
            if(item.key!=e.key)
            return e
        }))
        
    }

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
                <Headings  text={"Media"} fontSize={35}/>
            </div>
            <Divider/>

            <CardContent>
                    {/* Single image called thumbnail */}
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8} style={{border:lightBorder,height:'20rem',textAlign:'center'}}>
                            <div>
                            {
                                (thumbnailImage!=null) ? (
                                    <div>
                                        <div style={{position:'relative'}}>
                                            <Headings text={"Thumbnail"} fontSize={20} fontWeight={'bold'}/>
                                            {
                                                (isEditingEnabled) ? (
                                                <div style={{position:'absolute',top:0,right:0}} >
                                                    <Check color="primary"/>
                                                </div>
                                                ): (
                                                <div style={{position:'absolute',top:0,right:0,cursor:'pointer'}} onClick={()=>{setThumbnailImage(null)}}>
                                                    <Close color="error"/>
                                                </div>
                                                )
                                            }
                                            
                                        </div>
                                        <img width="100%" height="290" src={thumbnailImage}/>
                                        
                                    </div>
                                ):(
                                    <div style={{marginTop:'25%',}}>
                                        <div style={{marginTop:"10%"}}>
                                            <Headings text={"Thumbnail"} fontSize={25} fontWeight={'bold'}/>
                                        </div>
                                        {
                                            (isEditingEnabled) ? (
                                                <div>
                                                    <Headings text={"Unlock for new upload"} fontSize={18} fontWeight={'bold'}/>
                                                </div>
                                            ) : (
                                                <CustomPhotoUploader setSelectedFile={setSelectedFile} selectedImage={thumbnailImage} setSelectedImage={setThumbnailImage}/>
                                            )
                                        }
                                        {/* <LibraryAddIcon color="primary" style={{fontSize:50}}/> */}
                                    </div>
                                )
                            }
                            </div>
                            
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid container>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={8}  style={{border:lightBorder,height:'20rem',marginTop:'1rem'}}>
                            <div>
                                {
                                    (listOfSelectedImages.length!=0) ? (
                                        <div>
                                            <div style={{marginLeft:'0rem',marginTop:'0.5rem',position:'relative'}}>
                                                    <div style={{marginLeft:'0.5rem'}}>
                                                     <Headings text={"Gallary"} fontSize={25} fontWeight={'bold'}/>
                                                    
                                                    {
                                                        (isEditingEnabled) ? 
                                                        <div style={{position:'absolute',top:'0rem',right:'1rem'}}>
                                                            <Headings text={"Unlock for edit"} fontSize={20} fontWeight={''}/>
                                                        </div> 
                                                        : (
                                                        <div>
                                                        <div style={{position:'absolute',top:0,right:-40}}>
                                                        <CustomPhotoUploader setSelectedFile={setSelectedFile} selectedImage={selectedImage} setSelectedImage={handelSelectImagesForGallary}/>
                                                        </div>
                                                        <div style={{position:'absolute',top:'0.5rem',right:'4rem'}}>
                                                            <Headings text={"Upload"} fontSize={20} fontWeight={''}/>
                                                        </div>
                                                        </div>
                                                        )
                                                    }

                                                                                                        </div>
                                                    <Divider/> 
                                            </div>
                                            <ImageList rowHeight={165} className={classes.imageList} cols={3}>
                                              {listOfSelectedImages.map((item) => (
                                                <ImageListItem key={item.imageUri} cols={item.cols || 1}>
                                                  {/* <img src={item.img} alt={item.title} /> */}
                                                  <ImageHolder data={item} handelDeleteImagesFromGallary={handelDeleteImagesFromGallary} isEditingEnabled={isEditingEnabled}/>
                                                </ImageListItem>
                                              ))}
                                            </ImageList>
                                        </div>
                                    ):(
                                        <div style={{marginTop:'25%',textAlign:'center'}}>
                                        <div style={{marginTop:"10%",}}>
                                            <Headings text={"Gallary"} fontSize={25} fontWeight={'bold'}/>
                                        </div>
                                        <div style={{position:'relative'}}>
                                            {
                                                (isEditingEnabled) ? (
                                                    <div style={{}}>
                                                        <Headings text={"Unlock for editing"} fontSize={18}/>
                                                    </div>
                                                ):(
                                                    <CustomPhotoUploader setSelectedFile={setSelectedFile} selectedImage={selectedImage} setSelectedImage={handelSelectImagesForGallary}/>
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
                    </Grid>
            </CardContent>

        </Card>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width:'100%',
      height:'16rem',
      marginTop:'0.5rem'
    },
  }));

export default Media;