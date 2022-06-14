import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {lightBorder} from '../../../../Theme/borders'
import { SimpleTextFields } from '../../Support/TextFields';
import ScrollView from '@cantonjs/react-scroll-view/lib/components/ScrollView';
import GroupedRadioButtons from '../../Support/GroupedRadioButtons';
import CustomChipsList from '../../Support/CustomChipsList';
import produce from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import { selectisEditingForPakcagePanel, selectTempServiceDataHolderPackagesBasic, selectTempServiceDataHolderPackagesPremium, selectTempServiceDataHolderPackagesStandard } from '../Redux Components/Selectors';
import { updateIsEditingFlagOfBasicInfoForm, updateTempServiceDataHolderPackagesBasic, updateTempServiceDataHolderPackagesPremium, updateTempServiceDataHolderPackagesStandard } from '../Redux Components/ServiceManagerSlice';
function Packages(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    const [selectedFeature_FromList_Basic,setSelectedFeature_FromList_Basic]=useState();
    const [selectedFeature_FromList_Standard,setSelectedFeature_FromList_Standard]=useState();
    const [selectedFeature_FromList_Premium,setSelectedFeature_FromList_Premium]=useState();
    const [listOfOptions_ForChipList_Basic, setListOfOptions_ForChipList_Basic]=useState([]);
    const [listOfOptions_ForChipList_Standard, setListOfOptions_ForChipList_Standard]=useState([]);
    const [listOfOptions_ForChipList_Premium, setListOfOptions_ForChipList_Premium]=useState([]);
    const [desc_Basic,setDesc_Basic]=useState();
    const [desc_Standard,setDesc_Standard]=useState();
    const [desc_Premium,setDesc_Premium]=useState();
    const [price_Basic,setPrice_Basic]=useState();
    const [price_Standard,setPrice_Standard]=useState();
    const [price_Premium,setPrice_Premium]=useState();
    
    const dispatch = useDispatch();
    const basicInfo_FromStore = useSelector(selectTempServiceDataHolderPackagesBasic);
    const standard_FromStore = useSelector(selectTempServiceDataHolderPackagesStandard);
    const premium_FromStoe = useSelector(selectTempServiceDataHolderPackagesPremium);
    const is_EditingEnable_FromStore = useSelector(selectisEditingForPakcagePanel);

    useEffect(()=>{
        setIsEditingEnabled(is_EditingEnable_FromStore.isEditingEnabled);
    },[is_EditingEnable_FromStore]);
    useEffect(()=>{
        // Loading data from store.
        setDesc_Basic(basicInfo_FromStore.packageDescription);
        setDesc_Standard(standard_FromStore.packageDescription);
        setDesc_Premium(premium_FromStoe.packageDescription);
        

        setPrice_Basic(basicInfo_FromStore.packagePrice);
        setPrice_Standard(standard_FromStore.packagePrice);
        setPrice_Premium(premium_FromStoe.packagePrice);
        
        const tempArray_for_basic=[];
        basicInfo_FromStore.listOfFeatures.forEach((element,index) => {
            tempArray_for_basic.push({key:index,label:element.featureTitle})
        });

        setListOfOptions_ForChipList_Basic(tempArray_for_basic);

        const tempArray_for_standard=[];
        basicInfo_FromStore.listOfFeatures.forEach((element,index) => {
             tempArray_for_standard.push({key:index,label:element.featureTitle})
        });

        setListOfOptions_ForChipList_Standard(tempArray_for_standard);

        const tempArray_for_premium=[];
        basicInfo_FromStore.listOfFeatures.forEach((element,index) => {
             tempArray_for_premium.push({key:index,label:element.featureTitle})
        });

        setListOfOptions_ForChipList_Premium(tempArray_for_premium);

     
    },[basicInfo_FromStore,standard_FromStore,premium_FromStoe])

    const handelEditAndSaveChanges = ()=>{
        if(!isEditingEnabled)
        {
            const basic_payload = {
                        packageDescription:desc_Basic,
                        packagePrice:price_Basic,
                        listOfFeatures:listOfOptions_ForChipList_Basic,
                    }
            const standard_payload = {
                packageDescription:desc_Standard,
                packagePrice:price_Standard,
                listOfFeatures:listOfOptions_ForChipList_Standard,
            }        
            const premium_payload = {
                packageDescription:desc_Premium,
                packagePrice:price_Premium,
                listOfFeatures:listOfOptions_ForChipList_Premium,  
            }

            dispatch(updateTempServiceDataHolderPackagesBasic(basic_payload));
            dispatch(updateTempServiceDataHolderPackagesPremium(premium_payload));
            dispatch(updateTempServiceDataHolderPackagesStandard(standard_payload));
            dispatch(updateIsEditingFlagOfBasicInfoForm(true));

            props.setIsLockClosed(true);  
        }
        else
        {
            props.setIsLockClosed(false)
        }
        setIsEditingEnabled(!isEditingEnabled);
    }
    const handelInsertItemInChipList_Basic=()=>{
        const key_index = listOfOptions_ForChipList_Basic.length;
        if(selectedFeature_FromList_Basic.length!=0)
        {
            setListOfOptions_ForChipList_Basic(produce(listOfOptions_ForChipList_Basic,draft=>{
                draft.push({key:key_index,label:selectedFeature_FromList_Basic});    
            }))
        }
        else
        {
            alert("Cant add empty text as key word")
        }
     }
     const handelInsertItemInChipList_Standard=()=>{
        const key_index = listOfOptions_ForChipList_Standard.length;
        if(selectedFeature_FromList_Standard.length!=0)
        {
            setListOfOptions_ForChipList_Standard(produce(listOfOptions_ForChipList_Standard,draft=>{
                draft.push({key:key_index,label:selectedFeature_FromList_Standard});    
            }))
        }
        else
        {
            alert("Cant add empty text as key word")
        }
     }
     const handelInsertItemInChipList_Premium=()=>{
        const key_index = listOfOptions_ForChipList_Premium.length;
        if(selectedFeature_FromList_Premium.length!=0)
        {
            setListOfOptions_ForChipList_Premium(produce(listOfOptions_ForChipList_Premium,draft=>{
                draft.push({key:key_index,label:selectedFeature_FromList_Premium});    
            }))
        }
        else
        {
            alert("Cant add empty text as key word")
        }
     }
    const listOfOptions_RadioBoxes = [
        {
            optionLabel:"Feature 1",
            optionValue:"Feature 1",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 2",
            optionValue:"Feature 2",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 3",
            optionValue:"Feature 3",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 4",
            optionValue:"Feature 4",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 5",
            optionValue:"Feature 5",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 6",
            optionValue:"Feature 6",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 7",
            optionValue:"Feature 7",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 8",
            optionValue:"Feature 8",
            radioBtnColor:'default'
        },
        
        {
            optionLabel:"Feature 9",
            optionValue:"Feature 9",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 10",
            optionValue:"Feature 10",
            radioBtnColor:'default'
        },
        {
            optionLabel:"Feature 11",
            optionValue:"Feature 11",
            radioBtnColor:'default'
        },   
    ]

    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder}}
        >
            <CardHeader
            action={
            <div style={{cursor:'pointer'}} >
                {(isEditingEnabled) ? <div onClick={handelEditAndSaveChanges}><LockIcon color="secondary" fontSize="larg"/> </div> : <div onClick={handelEditAndSaveChanges}> <LockOpenIcon color="primary"/> </div>}
            </div>
            }
            
            />
            
            
            <Divider/>

            <CardContent>
                 {/* Basic package start */}
                <div>
                    <Headings  text={"Basic package"} fontSize={35}/>
                </div>
                <div style={{marginTop:'1rem',paddingBottom:'1rem'}}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{backgroundColor:''}}>
                        {
                            (isEditingEnabled) ? (
                                <div>
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={" Package description"} 
                                    width={'40rem'}
                                    height={15}
                                    value={desc_Basic} 
                                    setValue={setDesc_Basic}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    disabled
                                    />
                                </div>
                            ):(
                                <div>
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={" Package description"} 
                                    width={'40rem'}
                                    height={15}
                                    value={desc_Basic} 
                                    setValue={setDesc_Basic}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    
                                    />
                                </div>
                            )
                        }


                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{marginTop:'1rem'}}>
                            {
                                (isEditingEnabled) ? (
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={"Price"} 
                                        width={'40rem'}
                                        height={15}
                                        value={price_Basic} 
                                        setValue={setPrice_Basic}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        disabled
                                        />
                                    </div>
                                ):(
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={"Price"} 
                                        width={'40rem'}
                                        height={15}
                                        value={price_Basic} 
                                        setValue={setPrice_Basic}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                    
                                        />
                                    </div>
                                )
                            }

                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>

                        <Grid item xs={5} style={{marginTop:'1rem'}}>
                            <Grid container>
                                <Grid item xs={8} style={{backgroundColor:'',padding:'0.5rem'}}>
                                <SimpleTextFields 
                                     fontSize={20} 
                                     fontWeight={'bold'}
                                     label={"Feature"} 
                                     width={'10rem'}
                                     height={15}
                                     value={selectedFeature_FromList_Basic} 
                                     setValue={setSelectedFeature_FromList_Basic}
                                     labelFontColor={"#a39f93"}
                                     labelFontWeight={'bold'}
                                     labelFontSize={13}
                                      />
                                </Grid>
                                <Grid item xs={4}>
                                    {
                                        (isEditingEnabled) ? (
                                            <div>

                                            </div>
                                        ):(
                                            <div>
                                                <RoundButton
                                                    title={"Add"}
                                                    width={50}
                                                    color={colors.white}
                                                    bgColor={colors.primary}
                                                    margin={"15% 0% 0%  5%"}
                                                    handleClick={handelInsertItemInChipList_Basic}
                                                 />
                                            </div>
                                        )
                                    }
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10} style={{border:lightBorder,paddingLeft:'1rem',paddingRight:'1rem',paddingTop:'1rem'}}>
                                    <ScrollView
                                        style={{height:200}}
                                        
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div>

                                                </div>
                                            ):(
                                                <div>
                                                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectedFeature_FromList_Basic} setValue={setSelectedFeature_FromList_Basic}/>
                                                </div>
                                            )
                                        }
                                    </ScrollView>
                                </Grid>
                                <Grid item xs={1}></Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={5} style={{marginTop:'1rem',border:lightBorder}}>
                            <Grid container>
                                <Grid item xs={12} style={{marginTop:'1rem',marginLeft:'1rem',paddingBottom:'1rem'}}>
                                    <Headings text={"Selected Features"} fontSize={20}/>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10}>
                                    <ScrollView
                                        style={{height:200}}
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div>
                                                    <CustomChipsList canDelete={false} value={listOfOptions_ForChipList_Basic} setValue={setListOfOptions_ForChipList_Basic}/>             
                                                </div>
                                            ):(
                                                <div>
                                                    <CustomChipsList  value={listOfOptions_ForChipList_Basic} setValue={setListOfOptions_ForChipList_Basic}/>
                                                </div>
                                            )
                                        }

                                    </ScrollView>
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                    
                </div>
                
                {/* Basic package end */}
                <Divider/>
                 {/* Standard package start */}

                 <div>
                    <Headings  text={"Standard package"} fontSize={35}/>
                </div>
                <div style={{marginTop:'1rem',paddingBottom:'1rem'}}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{backgroundColor:''}}>
                            {
                                (isEditingEnabled) ? (
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={" Package description"} 
                                        width={'40rem'}
                                        height={15}
                                        value={desc_Standard} 
                                        setValue={setDesc_Standard}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        disabled
                                        />
                                    </div>
                                ):(
                                    <div>

                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={" Package description"} 
                                        width={'40rem'}
                                        height={15}
                                        value={desc_Standard} 
                                        setValue={setDesc_Standard}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        
                                        />
                                    </div>
                                )
                            }

                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{marginTop:'1rem'}}>
                        {
                            (isEditingEnabled) ? (
                                <div>
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={"Price"} 
                                    width={'40rem'}
                                    height={15}
                                    value={price_Standard} 
                                    setValue={setPrice_Standard}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    disabled
                                    />
                                </div>
                            ):(
                                <div>
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={"Price"} 
                                    width={'40rem'}
                                    height={15}
                                    value={price_Standard} 
                                    setValue={setPrice_Standard}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    
                                    />
                                </div>
                            )
                        }

                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>

                        <Grid item xs={5} style={{marginTop:'1rem'}}>
                            <Grid container>
                                <Grid item xs={8} style={{backgroundColor:'',padding:'0.5rem'}}>

                                <SimpleTextFields 
                                     fontSize={20} 
                                     fontWeight={'bold'}
                                     label={"Feature"} 
                                     width={'10rem'}
                                     height={15}
                                     value={selectedFeature_FromList_Standard} 
                                     setValue={setSelectedFeature_FromList_Standard}
                                     labelFontColor={"#a39f93"}
                                     labelFontWeight={'bold'}
                                     labelFontSize={13}
                                      />
                                </Grid>
                                <Grid item xs={4}>
                                    {
                                        (isEditingEnabled) ? (
                                            <div>

                                            </div>
                                        ):(
                                            <div>
                                                <RoundButton
                                                    title={"Add"}
                                                    width={50}
                                                    color={colors.white}
                                                    bgColor={colors.primary}
                                                    margin={"15% 0% 0%  5%"}
                                                    handleClick={handelInsertItemInChipList_Standard}
                                                 />
                                            </div>
                                        )
                                    }
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10} style={{border:lightBorder,paddingLeft:'1rem',paddingRight:'1rem',paddingTop:'1rem'}}>
                                    <ScrollView
                                        style={{height:200}}   
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div></div>
                                            ):(
                                                <div>
                                                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectedFeature_FromList_Standard} setValue={setSelectedFeature_FromList_Standard}/>
                                                </div>
                                            )
                                        }
                                    </ScrollView>
                                </Grid>
                                <Grid item xs={1}></Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={5} style={{marginTop:'1rem',border:lightBorder}}>
                            <Grid container>
                                <Grid item xs={12} style={{marginTop:'1rem',marginLeft:'1rem',paddingBottom:'1rem'}}>
                                    <Headings text={"Selected Features"} fontSize={20}/>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10}>
                                    <ScrollView
                                        style={{height:200}}
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div>
                                                     <CustomChipsList canDelete={false}  value={listOfOptions_ForChipList_Standard} setValue={setListOfOptions_ForChipList_Standard}/>
                                                </div>
                                            ):(
                                                <div>
                                                    <CustomChipsList  value={listOfOptions_ForChipList_Standard} setValue={setListOfOptions_ForChipList_Standard}/>
                                                </div>
                                            )
                                        }
                                    </ScrollView>
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                    
                </div>

                 {/* Standard package end */}
                <Divider/>
                 {/* Premium package start */}

                 <div>
                    <Headings  text={"Premium package"} fontSize={35}/>
                </div>
                <div style={{marginTop:'1rem',paddingBottom:'1rem'}}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{backgroundColor:''}}>
                            {
                                (isEditingEnabled) ? (
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={" Package description"} 
                                        width={'40rem'}
                                        height={15}
                                        value={desc_Premium} 
                                        setValue={setDesc_Premium}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        disabled
                                        /> 
                                    </div>
                                ):(
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={" Package description"} 
                                        width={'40rem'}
                                        height={15}
                                        value={desc_Premium} 
                                        setValue={setDesc_Premium}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        
                                        />

                                    </div>
                                )
                            }

                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>
                        <Grid item xs={10} style={{marginTop:'1rem'}}>
                            {
                                (isEditingEnabled) ? (
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={"Price"} 
                                        width={'40rem'}
                                        height={15}
                                        value={price_Premium} 
                                        setValue={setPrice_Premium}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        disabled
                                        />
                                    </div>
                                ):(
                                    <div>
                                        <SimpleTextFields 
                                        fontSize={20} 
                                        fontWeight={'bold'}
                                        label={"Price"} 
                                        width={'40rem'}
                                        height={15}
                                        value={price_Premium} 
                                        setValue={setPrice_Premium}
                                        labelFontColor={"#a39f93"}
                                        labelFontWeight={'bold'}
                                        labelFontSize={13}
                                        
                                        />

                                    </div>
                                )
                            }

                        </Grid>
                        

                        <Grid item xs={1}></Grid>


                        <Grid item xs={1}></Grid>

                        <Grid item xs={5} style={{marginTop:'1rem'}}>
                            <Grid container>
                                <Grid item xs={8} style={{backgroundColor:'',padding:'0.5rem'}}>
                                <SimpleTextFields 
                                     fontSize={20} 
                                     fontWeight={'bold'}
                                     label={"Feature"} 
                                     width={'10rem'}
                                     height={15}
                                     value={selectedFeature_FromList_Premium} 
                                     setValue={setSelectedFeature_FromList_Premium}
                                     labelFontColor={"#a39f93"}
                                     labelFontWeight={'bold'}
                                     labelFontSize={13}
                                      />
                                </Grid>
                                <Grid item xs={4}>
                                    {
                                        (isEditingEnabled) ? (
                                            <div>

                                            </div>
                                        ):(
                                            <div>
                                                <RoundButton
                                                    title={"Add"}
                                                    width={50}
                                                    color={colors.white}
                                                    bgColor={colors.primary}
                                                    margin={"15% 0% 0%  5%"}
                                                    handleClick={handelInsertItemInChipList_Premium}
                                                 />
                                            </div>
                                        )
                                    }
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10} style={{border:lightBorder,paddingLeft:'1rem',paddingRight:'1rem',paddingTop:'1rem'}}>
                                    <ScrollView
                                        style={{height:200}}
                                        
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div></div>
                                            ):(
                                                <div>
                                                    <GroupedRadioButtons listOfOptions={listOfOptions_RadioBoxes} value={selectedFeature_FromList_Premium} setValue={setSelectedFeature_FromList_Premium}/>
                                                </div>
                                            )
                                        }
                                    </ScrollView>
                                </Grid>
                                <Grid item xs={1}></Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={5} style={{marginTop:'1rem',border:lightBorder}}>
                            <Grid container>
                                <Grid item xs={12} style={{marginTop:'1rem',marginLeft:'1rem',paddingBottom:'1rem'}}>
                                    <Headings text={"Selected Features"} fontSize={20}/>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10}>
                                    <ScrollView
                                        style={{height:200}}
                                    >
                                        {
                                            (isEditingEnabled) ? (
                                                <div>
                                                    <CustomChipsList canDelete={false} value={listOfOptions_ForChipList_Premium} setValue={setListOfOptions_ForChipList_Premium}/>
                                                </div>
                                            ):(
                                                <div>
                                                    <CustomChipsList  value={listOfOptions_ForChipList_Premium} setValue={setListOfOptions_ForChipList_Premium}/>
                                                </div>
                                            )
                                        }
                                         </ScrollView>
                                               
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>
                    
                </div>
                {/* Premium package end */}
              
                
            </CardContent>
        </Card>
    </div>
    );
}

export default Packages;