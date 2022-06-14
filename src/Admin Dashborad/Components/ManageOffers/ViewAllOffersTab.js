import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../Theme/borders';
import { Headings } from '../Support/Headings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListOfAllOffers from './AllOffersSubComponents/ListOfAllOffers';
import { useDispatch } from 'react-redux';
import { loadDataOfListOfAllOffers } from './Redux Components/Thunks';
import ViewOffer from './AllOffersSubComponents/ViewOffer';
function ViewAllOffersTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedOffer,setselectedOffer]=useState();
    const [isViewProjectOpen,setIsViewProjectOpen]=useState(false);
    const handelOptionSelection = (selectedProject)=>{
        setselectedOffer(selectedProject);
        handeScreenSwitch();
    }

    const handeScreenSwitch = ()=>{
        setIsViewProjectOpen(!isViewProjectOpen);
    }
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadDataOfListOfAllOffers());
    },[])
    return (
        <div className={classes.container}>
            <div>
                    {
                        (isViewProjectOpen===true) ? (
                            
                            <div >
                                <div onClick={handeScreenSwitch} style={{cursor:'pointer'}}>
                                    <ArrowBackIosIcon/>
                                </div>
                                <div style={{marginTop:'1rem'}}>
                                    <ViewOffer selectedOffer={selectedOffer}/>
                                </div>
                            </div>
                        ):(
                            <div style={{marginTop:'1rem'}}>
                                <ListOfAllOffers showMenueSelectionOpt={false}  handelOptionSelection={handelOptionSelection}/>
                            </div>
                        )
                        
                    }
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    topNav:{
       
    }
}))
export default ViewAllOffersTab;