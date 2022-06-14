import { Card, CardContent } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React,{useEffect, useState} from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';

function ImageHolder(props) {
    const [imageUri,setImageUri]=useState(null);
    const [index,setIndex]=useState()
    useEffect(()=>{
        setImageUri(props.data.imageUri);
        setIndex(props.index);
    },[])
    return (
        <Card
            style={{border:lightBorder,margin:'0.3rem'}}
        >
            <CardContent style={{position:'relative'}}>
                <Headings text={`Title: ${props.data.seletedItem.projectTitle}`} fontSize={17} />
                <Headings text={`Catagory: ${props.data.seletedItem.projectService}`} fontSize={15} />
                <div style={{marginTop:'0.5rem'}}>
                    <img src={imageUri} width="100%" height={100}/>
                </div>
                <div style={{position:'absolute',top:0,right:0}}>
                    {
                       (props.isEditingEnabled) ? (
                            <Check/>
                       ):(
                           <div style={{cursor:'pointer'}} onClick={()=>{
                            props.handelDeleteImagesFromGallary(props.data,index);
                            }}>
                            <Close/>
                        </div>   
                       ) 
                    }
                    
                </div>
            </CardContent>
        </Card>
    );
}

export default ImageHolder;