import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {lightBorder} from '../../../../Theme/borders'
import { RoundedTextFields, SimpleTextFields,MultiLineTextFields } from '../../Support/TextFields';
import produce from 'immer'; 
import CustomChipsList from '../../Support/CustomChipsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectTempServiceDataHolderBasicInfo } from '../Redux Components/Selectors';
import { updateTempServiceDataHolderBasicInfo } from '../Redux Components/ServiceManagerSlice';

function BasicInfoForm(props) {
    const [isEditingEnabled,setIsEditingEnabled]=useState(false);
    //Data hooks
    const [serviceTitle,setServiceTitle]=useState();
    const [serviceDesc,setServiceDesc]=useState();
    const [keyWordText,setKeyWordText]=useState();
    const [keyWordText_ForSubService,setKeyWordText_ForSubService]=useState();
    
    const [listOfOptions_ForChipList_OfSearchKeyWords, setlistOfOptions_ForChipList_OfSearchKeyWords]=useState([]);
    const [listOfOptions_ForChipList_OfSubServices, setlistOfOptions_ForChipList_OfSubServices]=useState([]);
    
    const dispatch = useDispatch();
    const basicInfo_FromStore = useSelector(selectTempServiceDataHolderBasicInfo);
    useEffect(()=>{
        //load data into hooks from store.
        setServiceTitle(basicInfo_FromStore.serviceTitle);
        setServiceDesc(basicInfo_FromStore.serviceDesc);
        // setlistOfOptions_ForChipList_OfSearchKeyWords(basicInfo_FromStore.listOfKeyWords);
        setlistOfOptions_ForChipList_OfSubServices(basicInfo_FromStore.listOfSubServices);
        
        setIsEditingEnabled(basicInfo_FromStore.isEditingEnabled);

        const tempArrayForSearchKeyWords = [];
        basicInfo_FromStore.listOfKeyWords.map((item,index)=>{
            tempArrayForSearchKeyWords.push({key:index,label:item.keyWordText})
            return item
        })
        setlistOfOptions_ForChipList_OfSearchKeyWords(tempArrayForSearchKeyWords);

        const tempArrayForSubServices = [];
        basicInfo_FromStore.listOfSubServices.map((item,index)=>{
            tempArrayForSubServices.push({key:index,label:item.subServiceTitle})
            return item
        })
        setlistOfOptions_ForChipList_OfSubServices(tempArrayForSubServices);
       
    
    },[basicInfo_FromStore]);
    
    const handelEditAndSaveChanges = ()=>{
        if(!isEditingEnabled)
        {

            props.setIsLockClosed(true);  
            // Updating data in redux store..
            const payload ={
                serviceTitle:serviceTitle,
                serviceDesc:serviceDesc,
                listOfSubServices:listOfOptions_ForChipList_OfSubServices,
                listOfKeyWords:listOfOptions_ForChipList_OfSearchKeyWords,
                isEditingEnabled:true
            }
            dispatch(updateTempServiceDataHolderBasicInfo(payload));
        }
        else
        {
            props.setIsLockClosed(false)
        }
        setIsEditingEnabled((prev)=>{
            return !(prev)
        });
    }

    const handelInsertItemInChipList_ForKeyWords=()=>{
       const key_index = listOfOptions_ForChipList_OfSearchKeyWords.length;
       if(keyWordText.length!=0)
       {
           setlistOfOptions_ForChipList_OfSearchKeyWords(produce(listOfOptions_ForChipList_OfSearchKeyWords,draft=>{
               draft.push({key:key_index,label:keyWordText});    
           }));
       }
       else
       {
           alert("Cant add empty text as key word")
       }
    }
    const handelInsertItemInChipList_ForSubServices=()=>{
        const key_index = listOfOptions_ForChipList_OfSubServices.length;
        if(keyWordText_ForSubService.length!=0)
        {
            setlistOfOptions_ForChipList_OfSubServices(produce(listOfOptions_ForChipList_OfSubServices,draft=>{
                draft.push({key:key_index,label:keyWordText_ForSubService});    
            }));
        }
        else
        {
            alert("Cant add empty text as key word")
        }
     }

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
            
            <div style={{position:'absolute',top:'0.5rem',left:'0.5rem'}}>
                <Headings  text={"Basic information"} fontSize={35}/>
            </div>
            <Divider/>

            <CardContent>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div>
                        {
                        (isEditingEnabled) ? (
                        <SimpleTextFields 
                        fontSize={20} 
                        fontWeight={'bold'}
                        label={" Service Title"} 
                        width={'40rem'}
                        height={15}
                        value={serviceTitle} 
                        setValue={setServiceTitle}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
                        disabled
                        />
                            ):(
                                <SimpleTextFields 
                                fontSize={20} 
                                fontWeight={'bold'}
                                label={" Service Title"} 
                                width={'40rem'}
                                height={15}
                                value={serviceTitle} 
                                setValue={setServiceTitle}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                labelFontSize={13}
                                />        
                            )
                        }    
                        
                        </div>

                        <div style={{marginTop:"1rem"}}>
                        {
                            (isEditingEnabled) ? (
                                <MultiLineTextFields 
                                fontSize={20} 
                                fontWeight={'bold'}
                                label={"Description"} 
                                value={serviceDesc} 
                                setValue={setServiceDesc}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={10}
                                width={'40rem'}  
                                disabled  
                                />
                            ) : (
                                <MultiLineTextFields 
                                fontSize={20} 
                                fontWeight={'bold'}
                                label={"Description"} 
                                value={serviceDesc} 
                                setValue={setServiceDesc}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={10}
                                width={'40rem'}  
                             
                                />
                            )
                        }
                        </div>
                        
                        <div style={{marginTop:'1rem'}}>

                           <div style={{display:'inline-block',marginLeft:'0.5rem'}}>
                               {
                                   (isEditingEnabled) ? <div style={{display:'none'}}></div>:
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={"Search key words"} 
                                    width={'35rem'}
                                    height={15}
                                    value={keyWordText} 
                                    setValue={setKeyWordText}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    />
                                   
                               }
                           </div>
                           <div style={{display:'inline-block',position:'relative'}}>
                            <div style={{position:'absolute',top:-10,left:10}}>
                                {
                                    (isEditingEnabled) ? <div style={{display:'none'}}></div> :(
                                        <RoundButton
                                            color={colors.white}
                                            width={"40%"}
                                            bgColor={colors.primary}
                                            title={"Add"}
                                            margin={"0% 0% 0% 0%"}
                                            handleClick={handelInsertItemInChipList_ForKeyWords}
                                         /> 
                                    )
                                }
                            </div>

                           </div>
                           
                        </div>
                        <div>

                        {
                            (isEditingEnabled) ? (
                        <div style={{border:lightBorder,marginTop:'1rem',position:'relative'}}>
                            {
                                (listOfOptions_ForChipList_OfSearchKeyWords.length!=0) &&
                                <div>
                                        <div style={{marginLeft:'0.5rem',marginBottom:'1rem'}}>
                                            <Headings text={"Key words"} fontSize={20} fontWeight={''}/>
                                        </div>
                                        
                                        <CustomChipsList canDelete={false} value={listOfOptions_ForChipList_OfSearchKeyWords} setValue={setlistOfOptions_ForChipList_OfSearchKeyWords}/>
                                </div>   
                            }
                            
                        </div>
                            ) : (
                        <div style={{border:lightBorder,marginTop:'1rem',position:'relative'}}>
                            {
                                (listOfOptions_ForChipList_OfSearchKeyWords.length!=0) &&
                                <div>
                                        <div style={{marginLeft:'0.5rem',marginBottom:'1rem'}}>
                                            <Headings text={"Key words"} fontSize={20} fontWeight={''}/>
                                        </div>
                                        <div style={{position:'absolute',top:2,right:0}}>
                                        <RoundButton
                                        color={colors.white}
                                        bgColor={colors.secondary}
                                        title={"Clear"}
                                        width="30%"
                                        margin={"0% 0% 0% 0%"}
                                        handleClick={()=>{setlistOfOptions_ForChipList_OfSearchKeyWords([])}}
                                        /> 
                                        </div>
                                        <CustomChipsList  value={listOfOptions_ForChipList_OfSearchKeyWords} setValue={setlistOfOptions_ForChipList_OfSearchKeyWords}/>
                                </div>   
                            }
                            
                        </div>
                            )
                        }
                        </div>



                        <div style={{marginTop:'1rem'}}>

                           <div style={{display:'inline-block',marginLeft:'0.5rem'}}>
                               {
                                   (isEditingEnabled) ? <div style={{display:'none'}}></div>:
                                    <SimpleTextFields 
                                    fontSize={20} 
                                    fontWeight={'bold'}
                                    label={"Sub Services"} 
                                    width={'35rem'}
                                    height={15}
                                    value={keyWordText_ForSubService} 
                                    setValue={setKeyWordText_ForSubService}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    />
                                   
                               }
                           </div>
                           <div style={{display:'inline-block',position:'relative'}}>
                            <div style={{position:'absolute',top:-10,left:10}}>
                                {
                                    (isEditingEnabled) ? <div style={{display:'none'}}></div> :(
                                        <RoundButton
                                            color={colors.white}
                                            width={"40%"}
                                            bgColor={colors.primary}
                                            title={"Add"}
                                            margin={"0% 0% 0% 0%"}
                                            handleClick={handelInsertItemInChipList_ForSubServices}
                                         /> 
                                    )
                                }
                            </div>

                           </div>
                           
                        </div>
                        <div>

                        {
                            (isEditingEnabled) ? (
                        <div style={{border:lightBorder,marginTop:'1rem',position:'relative'}}>
                            {
                                (listOfOptions_ForChipList_OfSubServices.length!=0) &&
                                <div>
                                        <div style={{marginLeft:'0.5rem',marginBottom:'1rem'}}>
                                            <Headings text={"Sub Services"} fontSize={20} fontWeight={''}/>
                                        </div>
                                        
                                        <CustomChipsList canDelete={false} value={listOfOptions_ForChipList_OfSubServices} setValue={setlistOfOptions_ForChipList_OfSubServices}/>
                                </div>   
                            }
                            
                        </div>
                            ) : (
                        <div style={{border:lightBorder,marginTop:'1rem',position:'relative'}}>
                            {
                                (listOfOptions_ForChipList_OfSubServices.length!=0) &&
                                <div>
                                        <div style={{marginLeft:'0.5rem',marginBottom:'1rem'}}>
                                            <Headings text={"Sub Services"} fontSize={20} fontWeight={''}/>
                                        </div>
                                        <div style={{position:'absolute',top:2,right:0}}>
                                        <RoundButton
                                        color={colors.white}
                                        bgColor={colors.secondary}
                                        title={"Clear"}
                                        width="30%"
                                        margin={"0% 0% 0% 0%"}
                                        handleClick={()=>{setlistOfOptions_ForChipList_OfSubServices([])}}
                                        /> 
                                        </div>
                                        <CustomChipsList  value={listOfOptions_ForChipList_OfSubServices} setValue={setlistOfOptions_ForChipList_OfSubServices}/>
                                </div>   
                            }
                            
                        </div>
                            )
                        }
                        </div>

                        
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </CardContent>

        </Card>
        </div>
    );
}

export default BasicInfoForm;