import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { Headings } from '../../Support/Headings';
import GetAppIcon from '@material-ui/icons/GetApp';

function VideoAttachmentHolder(props) {
    return (
        <div style={{padding:'2rem',position:'relative'}}>
        <Card
        style={{height:'8rem'}}
        >
            <CardContent>
                <Headings text={props.attachment.Title}/>
                <div style={{textAlign:'center'}}>
                <img src="https://img.icons8.com/nolan/96/video.png"/> </div>
                <div style={{position:'absolute',top:'2rem',right:'2rem',cursor:'pointer'}}>
                    <div style={{display:'inline-block'}} onClick={()=>{
                        alert("File will get download")
                    }}>
                        <GetAppIcon/>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
    );
}

export default VideoAttachmentHolder;