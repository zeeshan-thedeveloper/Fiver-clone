import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../Theme/borders';
import { Headings } from '../Support/Headings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListOfNewReview from './NewReviewsSubComponents/ListOfNewReview'
import { useDispatch } from 'react-redux';
import { loadListOfNewReviews } from './Redux Components/Thunks';
import ViewReview from './NewReviewsSubComponents/ViewReview';
function NewReviewsTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedReview,setselectedReview]=useState();
    const [isViewProjectOpen,setIsViewProjectOpen]=useState(false);
    const handelOptionSelection = (selectedProject)=>{
        setselectedReview(selectedProject);
        handeScreenSwitch();
    }
    const handeScreenSwitch = ()=>{
        setIsViewProjectOpen(!isViewProjectOpen);
    }
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadListOfNewReviews());
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
                                    <ViewReview selectedReview={selectedReview}/>
                                </div>
                            </div>
                        ):(
                            <div style={{marginTop:'1rem'}}>
                                <ListOfNewReview showMenueSelectionOpt={false}  handelOptionSelection={handelOptionSelection}/>
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
export default NewReviewsTab;