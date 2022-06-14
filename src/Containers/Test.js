import React,{useState} from 'react';
import { Grid, makeStyles } from "@material-ui/core"
import { Headings } from '../Admin Dashborad/Components/Support/Headings';
import {SimpleTextFields,MultiLineTextFields, RoundedTextFields} from '../Admin Dashborad/Components/Support/TextFields'
import { RoundButton } from '../CustomComponents/UI/Buttons/RoundButton';
import colors from '../Theme/colors';

import Custom_Tabs from '../Admin Dashborad/Components/Support/Tabs';
import CustomCard from '../Admin Dashborad/Components/Support/CustomCard';
import Dropdown from '../Admin Dashborad/Components/Support/Dropdown';
import GroupedRadioButtons from '../Admin Dashborad/Components/Support/GroupedRadioButtons';
import { FilterOptions } from '../Projects/Components/FilterOptions';
import CustomChipsList from '../Admin Dashborad/Components/Support/CustomChipsList';
import FilterMotor from '../Admin Dashborad/Components/Support/FilterMotor';
import CustomPhotoUploader from '../Admin Dashborad/Components/Support/CustomPhotoUploader';
import { SidebarForPageChanging } from '../Admin Dashborad/Components/Support/SidebarForPageChanging';
function Test(props)  {
    const classes = useStyles();
    const [InputValue,setInputValue]=useState('');
    const [selectedValue,setSelectedValue]=useState(0);
    const [selectedImage,setSelectedImage]=useState()
    const [currentStep,setCurrentStep]=useState(0);
    console.log("InputValue :"+InputValue);
    console.log("selected value :"+selectedValue);
    const listOfOptions_ForDropDown=[
        {
            optionTitle:"Last Month",
            optionValue:0
        },
        {
            optionTitle:"Last Week",
            optionValue:1
        },
        {
            optionTitle:"Last Day",
            optionValue:2
        },
        {
            optionTitle:"Last Hour",
            optionValue:3
        },
        
    ]
    const listOfOptions_RadioBoxes = [
        {
            optionLabel:"Style 1",
            optionValue:"1",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Style 2",
            optionValue:"2",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Style 3",
            optionValue:"3",
            radioBtnColor:'secondary'
        },
     
        
    ]


    const [listOfOptions_ForChipList, setListOfOptions_ForChipList] = React.useState([
        { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
        { key: 1,type:"ByPrice",data:"40,100", label: 'Min 40 $ and Max 100$' },
        { key: 2,type:"ByPrice",data:"23,20", label: 'Min 23$ and Max 20$' },
        { key: 3,type:"ByDate",data:"Fri Aug 27 2021 20:22:44 GMT+0500 (Pakistan Standard Time)", label: 'Fri Aug 27 2021 20:22:44 GMT+0500 (Pakistan Standard Time)' },
        { key: 4,type:"ByRating",data:'2', label: '2 Stars' },
      ]);
    
       

    const setCurrentStepNumber = (value)=>{
        
    }
    
    console.log("Selected image");
    console.log(selectedImage);
    console.log("current step"+currentStep);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}  style={{paddingLeft:50}}>
                    <Headings text={"Heading"} fontSize={'1.5rem'} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"User Name"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />
                </Grid>
                
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <RoundedTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"User Name"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        />
                </Grid>
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <MultiLineTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Description"} 
                        value={InputValue} 
                        setValue={setInputValue}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        rows={10}
                        width={300}    
                        />
                </Grid> 
                
                <Grid item xs={12} style={{paddingLeft:50}}>     
                <RoundButton
                   color={colors.white}
                   bgColor={colors.primary}
                   title={"Ok"}
                   width="15%"
                   margin={"0% 0% 0% 0%"}
                />   
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <Custom_Tabs   />
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <CustomCard/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <Dropdown listOfOptions={listOfOptions_ForDropDown} label={"History"} value={selectedValue} setValue={setSelectedValue}/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <GroupedRadioButtons  listOfOptions={listOfOptions_RadioBoxes} value={selectedValue} setValue={setSelectedValue}/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <FilterOptions/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <CustomChipsList value={listOfOptions_ForChipList} setValue={setListOfOptions_ForChipList}/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <FilterMotor/>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                     <div style={{backgroundColor:""}}>
                            <CustomPhotoUploader selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                     </div>
                </Grid> 
                <Grid item xs={12} style={{paddingLeft:50}}>
                    <SidebarForPageChanging setCurrentStepNumber={setCurrentStepNumber}/>
                </Grid> 
            </Grid>
        </div>
    );
}


const useStyles = makeStyles((theme)=>({
   
}));

const tab1_comp = (props)=>{
    return(
        <div>
            <h1>custom tab 1</h1>
        </div>

    )
}

const tab2_comp = (props)=>{
    return(
        <div>
            <h1>custom tab 2</h1>
        </div>

    )
}

const tab3_comp = (props)=>{
    return(
        <div>
            <h1>custom tab 3</h1>
        </div>

    )
}

export default Test;