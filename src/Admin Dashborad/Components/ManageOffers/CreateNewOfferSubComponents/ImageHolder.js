import { Card, CardContent } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React,{useEffect, useState} from 'react';
import { lightBorder } from '../../../../Theme/borders';

function ImageHolder(props) {
    const [imageUri,setImageUri]=useState(null);
    useEffect(()=>{
        setImageUri(props.data.imageUri);
    },[])
    return (
        <Card
            style={{border:lightBorder,margin:'0.3rem'}}
        >
            <CardContent style={{position:'relative'}}>
                <div style={{marginTop:'0.5rem'}}>
                    <img src={imageUri} width="100%" height={100}/>
                </div>
                <div style={{position:'absolute',top:0,right:0}}>
                    {
                       (props.isEditingEnabled) ? (
                            <Check/>
                       ):(
                           <div style={{cursor:'pointer'}} onClick={()=>{
                            props.handelDeleteImagesFromGallary(props.data)
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