import React, { useEffect, useState } from 'react';
import { 
        makeStyles,Grid,Card,CardContent,Accordion,AccordionSummary,
        AccordionDetails,Typography,FormControl,FormLabel,FormGroup,
        FormControlLabel,FormHelperText,Checkbox,Box,TextField,Slider
    } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Headings } from '../Support/Headings';
import { lightBorder } from '../../../Theme/borders';
import { ScrollView } from "@cantonjs/react-scroll-view";
import produce from 'immer';
import GroupedRadioButtons from '../Support/GroupedRadioButtons';
import { RoundButton } from '../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../Theme/colors';
import DateTimePicker from 'react-datetime-picker';
import { SimpleTextFields } from '../Support/TextFields';
import CustomChipsList from '../Support/CustomChipsList';

//https://www.npmjs.com/package/@cantonjs/react-scroll-view

//Update second element of filter object.


function Filters(props) {
    const classes=useStyles();
    const filterBy_titlesFonts=18;
    // This will be filled from API data
    const filterBy_titles={
        filter_by_title_1:"By Sub-Service",
        filter_by_title_2:"By Catagory",
        filter_by_title_3:"By Rating",
        filter_by_title_4:"By Delivery Date",
        filter_by_title_5:"By Price Range",   
    }
    const filterBy_titles_type={
        filter_by_title_1_type:"selectedSubService",
        filter_by_title_2_type:"selectedService",
        filter_by_title_3_type:"projectRatingStars",
        filter_by_title_4_type:"orderDeliveryDate",
        filter_by_title_5_type:"orderEstimatedPrice",
    }
    // This will be filled from API data
    const [filter_by_title_1_Options,setFilter_by_title_1_Options]=useState([
        {
            OptionLabel:"Java",
            OptionValue:"Java",
            optionIndex:"0",
            isCheked:false
        },
        {
            OptionLabel:"React Js",
            OptionValue:"React Js",
            optionIndex:"1",
            isCheked:false
        },
        {
            OptionLabel:"React Native",
            OptionValue:"React Native",
            optionIndex:"2",
            isCheked:false
        },
        {
            OptionLabel:"C#",
            OptionValue:"C#",
            optionIndex:"3",
            isCheked:false
        },
        {
            OptionLabel:"C++",
            OptionValue:"C++",
            optionIndex:"4",
            isCheked:false
        },
        {
            OptionLabel:"Andriod",
            OptionValue:"Andriod",
            optionIndex:"5",
            isCheked:false
        },
        

    ]);

    const handel_filter_by_title_1_Change=(e)=>{
       const selectedOpt=parseInt(e.target.name);
       setFilter_by_title_1_Options(produce(filter_by_title_1_Options,draft=>{
           draft[selectedOpt].isCheked= !(draft[selectedOpt].isCheked)
       }));
       console.log("Here")
       if(!filter_by_title_1_Options[selectedOpt].isCheked)
       addElementInFilterList(filter_by_title_1_Options[selectedOpt].OptionValue,filterBy_titles_type.filter_by_title_1_type,filterBy_titles.filter_by_title_1+": "+filter_by_title_1_Options[selectedOpt].OptionLabel)       
    }

    const [selectedOptOfFilter_by_title_2,setSelectedOptOfFilter_by_title_2]=useState();
    // This will be filled from API data
    const [listOfOptions_filter_by_title_2_RadioBoxes,setListOfOptions_filter_by_title_2_RadioBoxes] =useState([
        {
            optionLabel:"Desktop App",
            optionValue:"Desktop App",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Mobile App",
            optionValue:"Mobile App",
            radioBtnColor:'primary'
        },
        {
            optionLabel:"Desktop Game",
            optionValue:"Desktop Game",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Mobile Game",
            optionValue:"Mobile Game",
            radioBtnColor:'secondary'
        },
        {
            optionLabel:"Chating App",
            optionValue:"Chating App",
            radioBtnColor:'secondary'
        },
        
    ]);

    useEffect(()=>{
        if(selectedOptOfFilter_by_title_2!=undefined)
        addElementInFilterList(selectedOptOfFilter_by_title_2,filterBy_titles_type.filter_by_title_2_type,filterBy_titles.filter_by_title_2+" : "+selectedOptOfFilter_by_title_2);
    },[selectedOptOfFilter_by_title_2])
    // For rating.
    const [ratingValue,setRatingValue]=useState(0)
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };

    const hand_Apply_Rating = (e)=>{
        addElementInFilterList(ratingValue,filterBy_titles_type.filter_by_title_3_type,filterBy_titles.filter_by_title_3+" : Stars selected : "+ratingValue);
    }

    const [selectedDate, setSelectedDate] = useState(new Date());  
    const hand_Apply_Date = (e)=>{
        // dd-mm-yy
        // const tempDate =  `${selectedDate.getDay()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`
        const tempDate="30-8-2021";
        console.log(tempDate)
        addElementInFilterList(tempDate,filterBy_titles_type.filter_by_title_4_type,filterBy_titles.filter_by_title_4+" : "+selectedDate)
    }
    
    //Price range
    const [priceMinRange,setPriceMinRange]=useState(0);
    const [priceMaxRange,setPriceMaxRange]=useState(0);
    const [rangeValue, setRangeValue] = React.useState([priceMinRange, priceMaxRange]);
    const handel_RangeSetter = (event, newValue) => {
        setPriceMinRange(newValue[0]);
        setPriceMaxRange(newValue[1]);
        setRangeValue(newValue);
    };
    function valuetext(value) {
        return `${value} $`;
    }

    const hand_PriceRange_Apply = (e)=>{
        addElementInFilterList(rangeValue[0]+","+rangeValue[1],filterBy_titles_type.filter_by_title_5_type,filterBy_titles.filter_by_title_5+": Min value :"+priceMinRange+" : Max value :"+priceMaxRange);
    }

   
    // This will be sent from some where elese. like from props.

    const addElementInFilterList=(elementValue,filterValueType,filterValueLabel)=>{
        const keyValue = props.listOfOptions_ForChipList.length;
        props.setListOfOptions_ForChipList(produce(props.listOfOptions_ForChipList,draft=>{
            draft.push({ key:keyValue,type:filterValueType,data:elementValue, label:filterValueLabel})
        }));
    }

    return (

        <Grid container >
        <Grid item xs={12}>
          <Card
            elevation={0}
            style={{borderTop:lightBorder,borderLeft:lightBorder,borderRight:lightBorder,borderBottom:lightBorder}}
          >
            <CardContent>
                <Headings text={"Filters"} fontSize={25} fontWeight={"bold"}/>
                <Grid container>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                            <Headings text={filterBy_titles.filter_by_title_1} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails>
                            <FormControl component="fieldset" >
                            <ScrollView style={{ height: '25vh',}}
                            >
                                <FormGroup
                                    row={true}
                                >
                                    {filter_by_title_1_Options.map((item,index)=>{
                                        return(
                                            <FormControlLabel
                                            
                                            control={<Checkbox checked={item.isCheked} key={"filter_1_"+index} onChange={(e)=>{
                                                handel_filter_by_title_1_Change(e);
                                            }} name={item.optionIndex} />}
                                            label={item.OptionLabel}
                                            /> 
                                        )
                                    })}
                                </FormGroup>
                                </ScrollView>  
                              </FormControl>

                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                               <Headings text={filterBy_titles.filter_by_title_2} fontSize={filterBy_titlesFonts}/>
                            </AccordionSummary>
                           <AccordionDetails>
                            <ScrollView style={{ height: '25vh',}}
                            >
                                <GroupedRadioButtons listOfOptions={listOfOptions_filter_by_title_2_RadioBoxes} value={selectedOptOfFilter_by_title_2} setValue={setSelectedOptOfFilter_by_title_2}/>
                            </ScrollView>
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                     <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                               <Headings text={filterBy_titles.filter_by_title_5} fontSize={filterBy_titlesFonts}/>
                            </AccordionSummary>
                           <AccordionDetails>
                            <ScrollView style={{ height: '25vh',}}
                            >
                                <div>
                                    <Headings text={"Set price range"} fontSize={15}/>
                                    <div style={{marginTop:'0.5rem'}}>
                                    <SimpleTextFields 
                                    fontSize={10} 
                                    fontWeight={'bold'}
                                    label={"Min"} 
                                    value={priceMinRange} 
                                    setValue={setPriceMinRange}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'100%'}
                                    height={1}
                                    />
                                    </div>
                                    <div style={{marginTop:'0.5rem'}}>
                                    <SimpleTextFields 
                                    fontSize={10} 
                                    fontWeight={'bold'}
                                    label={"Max"} 
                                    value={priceMaxRange} 
                                    setValue={setPriceMaxRange}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'100%'}
                                    height={1}
                                    />
                                    </div>
                                    <div style={{paddingLeft:'1rem',paddingRight:'1rem'}}>
                                    <Slider
                                          value={rangeValue}
                                          onChange={handel_RangeSetter}
                                          valueLabelDisplay="auto"
                                          aria-labelledby="range-slider"
                                          getAriaValueText={valuetext}
                                          className={classes.root}
                                    />
                                    </div>
                                    <div style={{textAlign:'center',marginTop:'0.2rem'}}>
                                     <RoundButton
                                      title={"Apply"}
                                      width={40}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={hand_PriceRange_Apply}
                                     />
                                    </div>
                                </div>
                            </ScrollView>
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                    {/* <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            style={{borderRight:lightBorder}}
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >

                           <Headings text={filterBy_titles.filter_by_title_3} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails>
                           <ScrollView style={{ height: '25vh',}}>
                           <div >
                                <div>
                                    <Headings text={`Select Rating`} fontSize={18} fontWeight={''}/>
                                </div>
                                <div  style={{display:'inline-block',position:"absolute",marginLeft:'1rem',marginTop:'1rem'}}>
                                   <Rating
                                        name="hover-feedback"
                                        value={ratingValue}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                          setRatingValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                          setHover(newHover);
                                        }}
                                    />
                                </div>
                                <div  style={{display:'inline-block',marginLeft:'8rem'}}>
                                     {ratingValue !== null && <Box ml={2}>{labels[hover !== -1 ? hover : ratingValue]}</Box>}
                                </div>
                                <div style={{textAlign:'center',marginTop:'3rem'}}>
                                    <Headings text={"Value : "+ratingValue} fontSize={20}  fontWeight={'bold'}/>
                                </div>
                                <div style={{textAlign:'center',marginTop:'1.5rem'}}>
                                   <RoundButton
                                      title={"Apply"}
                                      width={40}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={hand_Apply_Rating}
                                    />
                                </div>
                            </div>
                            </ScrollView>             
                           </AccordionDetails>
                         </Accordion>
                    </Grid> */}
                    <Grid item xs={3} className={classes.accordionCotnainer}>
                        <Accordion
                            elevation={0}
                            
                        >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                                <Headings text={filterBy_titles.filter_by_title_4} fontSize={filterBy_titlesFonts}/>
                           </AccordionSummary>
                           <AccordionDetails style={{backgroundColor:'',width:450}}>
                                <ScrollView style={{ height: '27vh',}}>
                                 <Headings text={"Set date and time"} fontSize={18}/>   
                                <form style={{marginTop:'0.5rem'}} noValidate>
                                   <DateTimePicker
                                        onChange={setSelectedDate}
                                        value={selectedDate}
                                        calendarIcon={null}
                                        isCalendarOpen={false}
                                        isClockOpen={false}
                                    />     
                                 </form>
                                 <div style={{textAlign:'center',marginTop:'1.5rem'}}>

                                        <div style={{width:190}}>
                                            <Headings text={selectedDate+""} fontWeight={'bold'}/>
                                        </div>
                                        
                                        {/* <Headings text={` Time : ${selectedDate.getHours()}: ${selectedDate.getMinutes()}:${selectedDate.getSeconds()}`} fontSize={18} fontWeight={'bold'}/> */}
                                        <RoundButton
                                          title={"Apply"}
                                          width={40}
                                          color={colors.white}
                                          bgColor={colors.primary}
                                          margin={"0% 0% 0%  0%"}
                                          handleClick={hand_Apply_Date}
                                    />
                                 </div>

                                </ScrollView>
                           </AccordionDetails>
                         </Accordion>
                    </Grid>
                </Grid>
               {(props.listOfOptions_ForChipList.length!=0) &&(   
                <Accordion
                        elevation={0}
                        defaultExpanded={true}
                >
                           <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                           >
                               <Headings text={"Applied filters"} fontSize={20} fontWeight={'bold'}/>
                               <div style={{position:'absolute',right:50}}>
                               <RoundButton
                                          title={"Clear All"}
                                          width={150}
                                          color={colors.white}
                                          bgColor={colors.secondary}
                                          margin={"0% 0% 0%  0%"}
                                          handleClick={()=>{
                                                props.setListOfOptions_ForChipList([]);
                                          }}
                                    />
                               </div>
                            </AccordionSummary>
                           <AccordionDetails>
                                <CustomChipsList value={props.listOfOptions_ForChipList} setValue={props.setListOfOptions_ForChipList}/>
                           </AccordionDetails>
                </Accordion>                            
               ) }

            </CardContent> 
          </Card>
        </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme)=>({
  
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    
      },
    accordionCotnainer:{
        padding:'0.5rem'
    },
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 150,
      }, 
}))


export default Filters;