import React,{useState} from 'react';
import { Grid,makeStyles,AppBar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {lightBorder} from '../../../Theme/borders'
import { WraningAlert } from '../Support/Alerts';
import { SidebarForPageChanging } from './SetTrendingProjectSubTabs/SidebarForPageChanging';
import CurrentlyVisibleProjects from './SetTrendingProjectSubTabs/CurrentlyVisibleProjects';
import SetAndUpdateProjectsLists from './SetTrendingProjectSubTabs/SetAndUpdateProjectsLists';
import Publish from './SetTrendingProjectSubTabs/Publish'
function SetTredingProjectTab(props) {
  const classes = useStyles();
  const [isLockClosed,setIsLockClosed]=useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  
  const [currentPanel,setCurrentPanel]=useState(<CurrentlyVisibleProjects setIsLockClosed={setIsLockClosed}/>);
  
  const setCurrentStepNumber = (value)=>{
      
      switch (value) {
        case 0:
          setCurrentPanel(<CurrentlyVisibleProjects setIsLockClosed={setIsLockClosed}/>)
          break;
        case 1:
          setIsLockClosed(false);
          setCurrentPanel(<SetAndUpdateProjectsLists setIsLockClosed={setIsLockClosed}/>)
          break;
        case 2:
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
            <Grid item xs={3}>
              
                <SidebarForPageChanging handleModelClose={handleModelClose} handleModelOpen={handleModelOpen} isLockClosed={isLockClosed} setCurrentStepNumber={setCurrentStepNumber}/>
            </Grid>
            <Grid item xs={9}>
                {currentPanel}
                <WraningAlert text={"Please hit the lock before switching to other panel"} open={isModelOpen} handleOpen={handleModelOpen} handleClose={handleModelClose} />
            </Grid>
        </Grid>    
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
   
 }));
export default SetTredingProjectTab;