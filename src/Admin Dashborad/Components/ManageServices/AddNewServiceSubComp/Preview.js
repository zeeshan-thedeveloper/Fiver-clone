import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import BasicInfoForm from './BasicInfoForm';
import Media from './Media';
import Packages from './Packages';
function Preview(props) {
    useEffect(()=>{
        // console.log(store.getState())
    })
    return (
        <div>
            <div style={{marginTop:'1rem'}}>
                <BasicInfoForm setIsLockClosed={props.setIsLockClosed}/>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Divider/>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Media setIsLockClosed={props.setIsLockClosed}/>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Packages setIsLockClosed={props.setIsLockClosed}/>
            </div>
            
        </div>
    );
}

export default Preview;