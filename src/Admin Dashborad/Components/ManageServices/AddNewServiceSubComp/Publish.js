import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import {lightBorder} from '../../../../Theme/borders'
import { useDispatch, useSelector } from 'react-redux';
import { addProjectToDatabase } from '../Redux Components/Thunks';
import { selectIsBeingUsedInEditor } from '../Redux Components/Selectors';
function Publish(props) {
    const dispatch = useDispatch();
    const [btnLabel,setBtnLabel]=useState();
    const isBeingUsedInEditor = useSelector(selectIsBeingUsedInEditor);
    const handelPublishOnWebSite=()=>{
        
        alert("Just call the api to add this in database")
        dispatch(addProjectToDatabase());
    }
    useEffect(()=>{
     
        if(isBeingUsedInEditor===true)
        {
            setBtnLabel("Update the Service");
            //update
        }
        else
        {
            setBtnLabel("Publish on website")
            //publish
        }
    },[])
    
    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder,height:'10rem'}}
        >
            <CardContent>
            <div style={{position:'absolute',top:'0rem',left:'0.5rem'}}>
                <Headings  text={"Publish"} fontSize={35}/>
            </div>
            <div  style={{position:'absolute',top:'5rem',left:'0.5rem'}}>
            <RoundButton
                title={btnLabel}
                width={200}
                color={colors.white}
                bgColor={colors.primary}
                margin={"0% 0% 0%  150%"}
                handleClick={handelPublishOnWebSite}
                />
            </div>
            </CardContent>

        </Card>
        </div>
    );
}

export default Publish;