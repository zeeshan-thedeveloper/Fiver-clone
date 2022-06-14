import React,{useEffect, useState} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import { SidebarForPageChanging } from './AddNewServiceSubComp/SidebarForPageChanging';

import BasicInfoForm from './AddNewServiceSubComp/BasicInfoForm';
import Media from './AddNewServiceSubComp/Media';
import Preview from './AddNewServiceSubComp/Preview';
import Publish from './AddNewServiceSubComp/Publish';

import {lightBorder} from '../../../Theme/borders'
import { WraningAlert } from '../Support/Alerts';
import Packages from './AddNewServiceSubComp/Packages';
import { useDispatch } from 'react-redux';
import { updateIsBeingUsedInEditor } from './Redux Components/ServiceManagerSlice';
function AddNewServiceTab(props) {

  const classes = useStyles();
  const [isLockClosed,setIsLockClosed]=useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentPanel,setCurrentPanel]=useState(<BasicInfoForm setIsLockClosed={setIsLockClosed}/>);
  
  const dispatch = useDispatch();

  
  const setCurrentStepNumber = (value)=>{
  
      switch (value) {
        case 0:
          setIsLockClosed(false);
          setCurrentPanel(<BasicInfoForm setIsLockClosed={setIsLockClosed}/>)
          break;
        case 1:
          setIsLockClosed(false);
          setCurrentPanel(<Media setIsLockClosed={setIsLockClosed}/>)
          break;
        case 2:
          setIsLockClosed(false);
          setCurrentPanel(<Packages setIsLockClosed={setIsLockClosed}/>)
          break;
        case 3:
          setIsLockClosed(false);
          setCurrentPanel(<Preview setIsLockClosed={setIsLockClosed}/>)
          break;
        case 4:
          
          setCurrentPanel(<Publish setIsLockClosed={setIsLockClosed}/>)
          break;  
        default:
          setCurrentPanel(<h1>Please set a existing panel</h1>)
          break;
      }
   
    
    
  }

  
  const handleModelOpen = () => {
     setIsModelOpen(true);
   };
 
  const handleModelClose = () => {
     setIsModelOpen(false);
   };
  return (
    <div>
        <Grid container>
            <Grid item xs={3} className={classes.sideBarContainer}>
                <SidebarForPageChanging handleModelClose={handleModelClose} handleModelOpen={handleModelOpen} isLockClosed={isLockClosed} setCurrentStepNumber={setCurrentStepNumber}/>
            </Grid>
            <Grid item xs={9} className={classes.formasAndOtherStuffContainer}>
                {currentPanel}
                <WraningAlert text={"Please hit the lock before switching to other panel"} open={isModelOpen} handleOpen={handleModelOpen} handleClose={handleModelClose} />
            </Grid>
        </Grid>    
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
    sideBarContainer:{
      // backgroundColor:"green"
    },
    formasAndOtherStuffContainer:{
      // backgroundColor:'blue'
      // borderLeft:lightBorder
    }
}));

export default AddNewServiceTab;