import { Grid ,Divider} from '@material-ui/core';
import { height } from '@mui/system';
import React from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import useWindowDimensions from '../../useWindowDimensions';

function StartOfChat(props) {
    const {height,width}=useWindowDimensions();
    return (
        <div style={{paddingBottom:'0.5rem'}}>
            <Grid container>
                <Grid item xs={12}>
                    <div style={{height:height*0.07}}>
                     
                    </div>
                </Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <div style={{display:'inline-block'}}>
                        <div style={{border:lightBorder,width:width*0.1}}></div>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <Headings text={"we have your back"}/>
                    </div>
                    <div style={{display:'inline-block'}}>
                        <div style={{border:lightBorder,width:width*0.1}}></div>
                    </div>
                    
                </Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Headings text={`For added safety and your protection, keep payments and communications within Fiverr. Learn more`} fontSize={10} fontWeight={'bold'}/>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default StartOfChat;