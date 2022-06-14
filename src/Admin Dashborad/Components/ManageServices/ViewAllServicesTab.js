import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../Theme/borders';
import { Headings } from '../Support/Headings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import ListOfAllServices from './ViewAllServicesSubComponents/ListOfAllServices';
import { useDispatch } from 'react-redux';
import { loadListOfServices } from './Redux Components/Thunks';
import ViewService from './ViewAllServicesSubComponents/ViewService';
import { selectIsBeingUsedInEditor } from './Redux Components/Selectors';

function ViewAllServicesTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedServiceKeyHook,setselectedServiceKeyHook]=useState();
    const [isViewServiceOpen,setisViewServiceOpen]=useState(false);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadListOfServices());
        // dispatch(selectIsBeingUsedInEditor(true));
    },[])
 
    const handelOptionSelection = (selectedService)=>{
        
        setselectedServiceKeyHook(selectedService);
        handeScreenSwitch();
    }
    const handeScreenSwitch = ()=>{
        setisViewServiceOpen(!isViewServiceOpen);
    }
    
    return (
        <div className={classes.container}>
            <div>
                    {
                        (isViewServiceOpen===true) ? (
                            
                            <div >
                                <div onClick={handeScreenSwitch} style={{cursor:'pointer'}}>
                                    <ArrowBackIosIcon/>
                                </div>
                                <div style={{marginTop:'1rem'}}>
                                    <ViewService serviceData={selectedServiceKeyHook}/>
                                    {/* <ViewProject projectData={selectedServiceKeyHook}/> */}
                                </div>
                            </div>
                        ):(
                            <div style={{marginTop:'1rem'}}>
                                <ListOfAllServices showMenueSelectionOpt={false}  handelOptionSelection={handelOptionSelection}/>
                            </div>
                        )
                        
                    }
            </div>
        </div>
    );
    
    // const classes = useStyles();
    // const [screenSwitcher,setScreenSwitcher]=useState(true);
    // const [selectedProjectKeyHook,setSelectedProjectKeyHook]=useState(0);
    // const projectsList = [
    //     {
    //         projectTitle:"Service Heading",
    //         projectKey:0,
    //         cols:1,
    //         img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
    //     }, 
    //     {
    //         projectTitle:"Service Heading",
    //         projectKey:1,
    //         cols:1,
    //         img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
    //     },
    //     {
    //         projectTitle:"Service Heading",
    //         projectKey:2,
    //         cols:1,
    //         img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
    //     },
    //     {
    //         projectTitle:"Service Heading",
    //         projectKey:3,
    //         cols:1,
    //         img:"https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
    //     },
        
    // ]
    // const handelOptionSelection = (event,selectedOption,selectedProjectKey)=>{
    //     // alert("here"+selectedOption+" - "+selectedProjectKey)
    //     if(selectedOption===0)
    //     {

    //         setSelectedProjectKeyHook(selectedProjectKey)
    //         setScreenSwitcher(false)
           
    //     }
    // }
    // const handelBackToListOfProjectBtnClick = (event)=>{
    //     setScreenSwitcher(true)
    // }
    // return (
    //     <div className={classes.container}>
    //         <div className={classes.topNav}>
    //                 {/* Here make a nav bar like for back option etc. */}

    //         </div>
    //         <div className={classes.listOfProjects}>
    //                 {/* Load the component which will render the list of projects */}
    //                 {(screenSwitcher) ? <ListOfAllServices projectsList={projectsList} handelOptionSelection={handelOptionSelection}/> :  <ServicesEditor handelBackToListOfProjectBtnClick={handelBackToListOfProjectBtnClick} projectTitle={projectsList[selectedProjectKeyHook].projectTitle}/>}
    //         </div>
    //     </div>
    // );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    topNav:{
       
    }
}))
export default ViewAllServicesTab;