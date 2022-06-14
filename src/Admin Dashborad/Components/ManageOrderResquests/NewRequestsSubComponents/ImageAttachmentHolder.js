import { Card, CardContent,Grid} from '@material-ui/core';
import React from 'react';
import { Headings } from '../../Support/Headings';
import GetAppIcon from '@material-ui/icons/GetApp';
function ImageAttachmentHolder(props) {
    return (
        <div style={{padding:'2rem',position:'relative'}}>
            <Card
            style={{height:'3rem'}}
            elevation={4}
            >
                 <CardContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Headings text={props.attachment.Title}/>
                        </Grid>
                        <Grid item xs={4}>
                    <div style={{position:'absolute',top:'3rem',right:'2.5rem',cursor:'pointer'}} onClick={()=>{
                        alert("File will get download")
                    }}>
                        <div style={{display:'inline-block'}}>
                            <GetAppIcon/>
                        </div>
                    </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default ImageAttachmentHolder;