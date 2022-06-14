import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';
function OnlineAdmins(props) {
    const  classes = useStyles();
    return (
        
        <AvatarGroup max={2} 
            classes={{
                avatar:classes.avatar
            }}
        >
                <Avatar onClick={()=>{props.handelManageOptionClickEvent(this,13)}} alt="Nigeeta" src="https://firebasestorage.googleapis.com/v0/b/user-accounts-7cdc4.appspot.com/o/nigeeta.jpg?alt=media&token=3a50ae8f-3b11-4fd0-b2cf-a0b7007a494f" />
                <Avatar onClick={()=>{props.handelManageOptionClickEvent(this,13)}} alt="Nadir" src="https://firebasestorage.googleapis.com/v0/b/user-accounts-7cdc4.appspot.com/o/nadir.jpg?alt=media&token=33ed69fc-90e3-49da-a25c-86525f146cc3" />
        </AvatarGroup>
    );
}

const useStyles=makeStyles((theme)=>({
    avatar:{
        width:'1.5rem',
        height:'1.5rem',
        cursor:'pointer'
    }
}))
export default OnlineAdmins;