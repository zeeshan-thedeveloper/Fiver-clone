
import React, { useState } from 'react';
import {Grid,Divider,ImageList,ImageListItem, makeStyles} from '@material-ui/core'
import { Headings } from '../../Support/Headings';
import { MultiLineTextFields } from '../../Support/TextFields';
import colors from '../../../../Theme/colors';
import {lightBorder} from '../../../../Theme/borders';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import CustomPhotoUploader from '../../Support/CustomPhotoUploader';
import ImageHolder from './ImageHolder'
import produce from 'immer';
function DeliverOrder(props) {
    const classes = useStyles();
    const [message,setMessage]=useState();
    const [selectedImage,setSelectedImage]=useState(null);
    const [listOfSelectedImages,setListOfSelectedImages]=useState([]);
    const [selectedFile,setSelectedFile]=useState(null);

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

    const handeDeliverButton=()=>{
        alert("Call the thunk api which will deliver the order.")
    }
 
    return (
        <div >
            <Headings text={"Delivery"}fontSize={25} fontWeight={'bold'}/>
            <Grid container style={{textAlign:'center'}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} style={{border:lightBorder,padding:'1rem'}}>
                    <div>
                    <MultiLineTextFields 
                                fontSize={15} 
                                fontWeight={'bold'}
                                label={"Message"} 
                                value={message} 
                                setValue={setMessage}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={3}
                                width={'33rem'}  
                                />
                    </div>
                    <div style={{border:lightBorder,marginTop:'1rem'}}>
                            
                                        <div>
                                            <div style={{marginLeft:'0rem',marginTop:'0.5rem',position:'relative'}}>
                                                    <div style={{marginLeft:'0.5rem'}}>
                                                     <Headings text={"Files"} fontSize={25} fontWeight={'bold'}/>
                                                    
                                                   
                                                        <div>
                                                        <div style={{position:'absolute',top:0,right:-25}}>
                                                        <CustomPhotoUploader setSelectedFile={setSelectedFile} selectedImage={selectedImage} setSelectedImage={handelSelectImagesForGallary}/>
                                                        </div>
                                                        <div style={{position:'absolute',top:'0.5rem',right:'5rem'}}>
                                                            <Headings text={"Upload"} fontSize={20} fontWeight={''}/>
                                                        </div>
                                                        </div>
                                                        
                                                    

                                                                                                        </div>
                                                    <Divider/> 
                                            </div>
                                            <ImageList rowHeight={165} className={classes.imageList} cols={3}>
                                              {listOfSelectedImages.map((item) => (
                                                <ImageListItem key={item.key_index} cols={item.cols || 1}>
                                                  {/* <img src={item.img} alt={item.title} /> */}
                                                  <ImageHolder data={item} fileContent={selectedFile} handelDeleteImagesFromGallary={handelDeleteImagesFromGallary} isEditingEnabled={false}/>
                                                </ImageListItem>
                                              ))}
                                            </ImageList>
                                        </div>
                                   
                                
                            </div>

                            <div style={{marginTop:'1rem'}}>
                            <RoundButton
                                      title={"Deliver"}
                                      width={100}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={handeDeliverButton}
                                     />
                            </div>
                </Grid>
                <Grid item xs={2}></Grid>
                
            </Grid>
        </div>
    );
}
const useStyles=makeStyles((theme)=>({
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
}))
export default DeliverOrder;