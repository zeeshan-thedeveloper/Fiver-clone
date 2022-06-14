import { Card, CardContent } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React,{useEffect, useState} from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';

function ImageHolder(props) {
    const [file,setFile]=useState({name:''});
    useEffect(()=>{
        setFile(props.fileContent);
    },[])
    return (
        <Card
            style={{border:lightBorder,margin:'0.3rem'}}
        >
            <CardContent style={{position:'relative'}}>
                <div style={{marginTop:'0.5rem'}}>
                    <Headings text={`${file.name}`}/>
                </div>
                <div style={{marginTop:'0.5rem',textAlign:'center'}}>
                    {/* <img src={imageUri} width="100%" height={100}/> */}
                    <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-file-creativity-and-design-justicon-lineal-color-justicon-3.png"/>
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