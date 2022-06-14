import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import { Grid } from '@material-ui/core';
import { Headings } from '../Support/Headings';
import OrderOverViewChart from './Charts/OrderOverViewChart';
import Dropdown from '../Support/Dropdown';
import GroupedRadioButtons from '../Support/GroupedRadioButtons'

function OrderOverViewContainer(props) {
    const classes=useStyles();
    const [selecteHistoryValue,setSelecteHistoryValue]=useState();
    const [selectGraphMode,setSelectGraphMode]=useState('column')

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
                    <Headings text={"Order overview"} fontSize={25} fontWeight={'bold'}/>
                </div>
                <div className={classes.radioBoxOptionsContainer}>
                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectGraphMode} setValue={setSelectGraphMode}/>
                </div>
                <div className={classes.dropDownOptContainer}>
                    <Dropdown listOfOptions={listOfOptions_ForDropDown} label={"History"} value={selecteHistoryValue} setValue={setSelecteHistoryValue} />
                </div>
                
            </div>
          }
        //   title="Shrimp and Chorizo Paella"
        //   subheader="September 14, 2016"
        />
        
        <CardContent>
          {/* <h1>Content</h1> */}
          <div className={classes.chartContainer}>
                <OrderOverViewChart graphMode={selectGraphMode} selecteHistoryValue={selecteHistoryValue}/>
          </div>
          
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
        right:'1rem',
        top:'1rem'
    },
    chartContainer:{
        paddingTop:'4rem'
    }
}))
export default OrderOverViewContainer;