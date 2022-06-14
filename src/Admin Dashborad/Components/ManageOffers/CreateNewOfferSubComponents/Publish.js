import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import {lightBorder} from '../../../../Theme/borders'
import { useDispatch } from 'react-redux';
import { updateBasicInfoOfCreateNewOffer, updateMediaOfCreateNewOffer } from '../Redux Components/offersManagerSlice';
function Publish(props) {

    const dispatch = useDispatch();

    const handelPublishOnWebSite=()=>{
        alert("Just call the api to add this in database")
        const payload_basicInfo = {
            offerPunchLine:null,
                offerCreationDate:null,
                offerCreationTime:null,
                offerCatagory:null,
                offerSubCatagory:null,
                isEditingEnabled: false
        }
        const payload_media = {
            offerImage:null,
            isEditingEnabled: false
        }
        
        dispatch(updateBasicInfoOfCreateNewOffer(payload_basicInfo));
        dispatch(updateMediaOfCreateNewOffer(payload_media));
    }
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
                title={"Publish it on website"}
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