import React, { useState } from 'react';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Headings } from '../Support/Headings';
import OrderOverViewChart from './Charts/OrderOverViewChart';
import Dropdown from '../Support/Dropdown';
import GroupedRadioButtons from '../Support/GroupedRadioButtons'
import ServicesClickHistoryOverViewChart from './Charts/ServicesClickHistoryOverViewChart';

function MEGAControllsCotnainer(props) {
    const classes=useStyles();
    const [selecteHistoryValue,setSelecteHistoryValue]=useState();
    const [selectGraphMode,setSelectGraphMode]=useState('column')
    const [allTimeRating,setAllTimeRating]=useState(0)
    const [allTimeRatingValue,setAllTimeRatingValue]=useState(4);
    const [fiveStar,setFiveStar]=useState(90);
    const [fourStar,setFourStar]=useState(43);
    const [threeStar,setThreeStar]=useState(10);
    const [twoStar,setTwoStar]=useState(3);
    const [oneStar,setOneStar]=useState(23);
    const [fiveStarTimes,setFiveStarTimes]=useState(0);
    const [fourStarTimes,setFourStarTimes]=useState(0);
    const [threeStarTimes,setThreeStarTimes]=useState(0);
    const [twoStarTimes,setTwoStarTimes]=useState(0);
    const [oneStarTimes,setOneStarTimes]=useState(0);

    const [communicationWithSeller,setCommunicationWithSeller]=useState(3);
    const [serviceAsDescribed,setServiceAsDescribed]=useState(3);
    const [buyAgainAndRecommended,setBuyAgainAndRecommended]=useState(4);
    
    const [communicationWithSellerTimes,setCommunicationWithSellerTimes]=useState(3);
    const [serviceAsDescribedTimes,setServiceAsDescribedTimes]=useState(3);
    const [buyAgainAndRecommendedTimes,setBuyAgainAndRecommendedTimes]=useState(4);
    
    const [ratedOrdersPerc,setRatedOrdersPerc]=useState(39);

    const listOfOptions_ForDropDown=[
        {
            optionTitle:"Last Year",
            optionValue:0
        },
        {
            optionTitle:"Last Month",
            optionValue:1
        },
        {
            optionTitle:"Last Week",
            optionValue:2
        },
        {
            optionTitle:"Last Day",
            optionValue:3
        },
        {
            optionTitle:"Last Hour",
            optionValue:4
        },
        
    ]
    const listOfOptions_RadioBoxes = [
        {
            optionLabel:"Line",
            optionValue:"line",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Spline Area",
            optionValue:"splineArea",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Doughnut",
            optionValue:"doughnut",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Bar",
            optionValue:"bar",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Pie",
            optionValue:"pie",
            radioBtnColor:'secondary'
        },
        
        {
            optionLabel:"Column bar",
            optionValue:"column",
            radioBtnColor:'secondary'
        },
        
     
        
    ]
//    label={""}
//    value : mustBeHook
//    setValue: func of hook     

    return (
        <Card className={classes.root}>
        <CardHeader
          action={
            <div>
                <div className={classes.overViewHeadingTitle}>
                    <Headings text={"MEGA Controler"} fontSize={25} fontWeight={'bold'}/>
                </div>
                {/* <div className={classes.radioBoxOptionsContainer}>
                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectGraphMode} setValue={setSelectGraphMode}/>
                </div>
                <div className={classes.dropDownOptContainer}>
                    <Dropdown listOfOptions={listOfOptions_ForDropDown} label={"History"} value={selecteHistoryValue} setValue={setSelecteHistoryValue} />
                </div> */}
                
            </div>
          }
        
        />
        
        <CardContent>
          {/* <h1>Content</h1> */}
          <h1>This will contain options like TURN OFF THE WEB SITE AND SHOW SOME MESSAGE or TURN DOWN ANY FEATURE.</h1>
        </CardContent>
        
      </Card>
    );
}

const useStyles=makeStyles((theme)=>({
    root:{
        width:'100%',
        position:'relative'
    },
    overViewHeadingTitle:{
        // backgroundColor:'blue',
        position:'absolute',
        left:'1rem',
        top:'1rem'
    },
    radioBoxOptionsContainer:{
        // backgroundColor:'blue',
        position:'absolute',
        right:'10rem',
        top:'1.5rem'
    },
    dropDownOptContainer:{
        // backgroundColor:'green',
        position:'absolute',
        right:'0rem',
        top:'1rem'
    },
    chartContainer:{
        paddingTop:'4rem'
    },
    //
}))

export default MEGAControllsCotnainer;