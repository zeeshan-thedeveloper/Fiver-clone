import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import BasicInfoForm from './BasicInfoForm';
import Media from './Media';
function Preview(props) {
    useEffect(()=>{
        // console.log(store.getState())
    })
    return (
        <div>
            <div style={{marginTop:'1rem'}}>
                <BasicInfoForm/>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Divider/>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Media/>
            </div>
        </div>
    );
}

export default Preview;