import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import {lightBorder} from '../../../../Theme/borders'
import GroupedRadioButtons from '../../Support/GroupedRadioButtons';
import { useSelector } from 'react-redux';
import { selectLastChoosedDisplayMode} from '../Redux Components/Selectors';
function Publish(props) {
    const handelPublishOnWebSite=()=>{
        alert("Just call the api to add this in database and seleced mode is  :"+selectedOptOfFilter_by_title_2)
    }

    const [selectedOptOfFilter_by_title_2,setSelectedOptOfFilter_by_title_2]=useState("Static Mode");
    const [listOfOptions_filter_by_title_2_RadioBoxes,setListOfOptions_filter_by_title_2_RadioBoxes] =useState([
        {
            optionLabel:"Static Mode",
            optionValue:"Static Mode",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Dynamic Mode",
            optionValue:"Dynamic Mode",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Random Mode",
            optionValue:"Random Mode",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Invisible Mode",
            optionValue:"Invisible Mode",
            radioBtnColor:'primary'
        },
        
        
    ]);

    const lastChoosedDisplayMode = useSelector(selectLastChoosedDisplayMode)

    useEffect(()=>{
        setSelectedOptOfFilter_by_title_2(lastChoosedDisplayMode);
    },[lastChoosedDisplayMode])

    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder,height:'20rem'}}
        >
            <CardContent>
            <div style={{position:'absolute',top:'0rem',left:'0.5rem'}}>
                <Headings  text={"Select/Change Display mode"} fontSize={35}/>
            </div>
            <div style={{position:'absolute',top:'8rem',left:'8rem'}}>
                <GroupedRadioButtons listOfOptions={listOfOptions_filter_by_title_2_RadioBoxes} value={selectedOptOfFilter_by_title_2} setValue={setSelectedOptOfFilter_by_title_2}/>
             </div>
            <div  style={{position:'absolute',top:'15rem',left:'0.5rem'}}>
            <RoundButton
                title={"Update mode"}
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