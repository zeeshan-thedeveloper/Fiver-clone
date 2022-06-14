import { Grid } from '@material-ui/core';
import React from 'react';
import { Headings } from '../../Support/Headings';

function ChatListTop(props) {
    return (
        <div>
           <Grid container>
              <Grid item xs={1} style={{paddingLeft:'1rem',paddingTop:'1rem'}}>
                        <img height={20} width={20} src="https://img.icons8.com/ultraviolet/40/000000/dna-helix.png"/>
               </Grid>
               <Grid item xs={11} style={{paddingTop:'0.7rem'}}>
                   <Headings text={props.contact.contactUserName} fontWeight={'bold'} fontSize={18}/>
               </Grid>
           </Grid>
           <Grid container>
               <Grid item xs={12}>
               <div style={{marginLeft:'1rem',display:'inline-block'}}>
                   <Headings text={`Last seen :${props.contact.contactLastSeen} |`}  fontSize={12}/>
               </div>
               <div style={{display:'inline-block'}}>
                   <Headings text={`Local Time :${props.contact.contactLocalTime}`}  fontSize={12}/>
               </div>
             
               </Grid>
               
           </Grid>
        </div>
    );
}

export default ChatListTop;