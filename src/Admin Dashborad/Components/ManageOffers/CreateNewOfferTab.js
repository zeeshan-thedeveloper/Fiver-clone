import React,{useState} from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import { SidebarForPageChanging } from './CreateNewOfferSubComponents/SidebarForPageChanging';
import BasicInfoForm from './CreateNewOfferSubComponents/BasicInfoForm';
import Media from './CreateNewOfferSubComponents/Media';
import Preview from './CreateNewOfferSubComponents/Preview';
import Publish from './CreateNewOfferSubComponents/Publish';
import {lightBorder} from '../../../Theme/borders'
import { WraningAlert } from '../Support/Alerts';

function CreateNewOfferTab(props) {
  const classes = useStyles();
  const [isLockClosed,setIsLockClosed]=useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  
  const [currentPanel,setCurrentPanel]=useState(<BasicInfoForm setIsLockClosed={setIsLockClosed}/>);
  
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
          setCurrentPanel(<Preview/>)
          break;
        case 3:
          setCurrentPanel(<Publish/>)
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

export default CreateNewOfferTab;