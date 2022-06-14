import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../Theme/borders';
import { Headings } from '../Support/Headings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListOfDiscardedReview from './DiscardedReviewsSubComponents/ListOfDiscardedReview'
import { useDispatch } from 'react-redux';
import { loadListOfPublishedReviews } from './Redux Components/Thunks';
import ViewReview from './DiscardedReviewsSubComponents/ViewReview';
function DiscardedReviewsTab(props) {
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
        dispatch(loadListOfPublishedReviews());
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
                                <ListOfDiscardedReview showMenueSelectionOpt={false}  handelOptionSelection={handelOptionSelection}/>
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
export default DiscardedReviewsTab;