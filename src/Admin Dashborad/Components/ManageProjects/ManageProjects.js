import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../useWindowDimensions';
import { fontFamily } from '../../../Theme/fonts';
import { Headings } from '../Support/Headings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
    Card,CardHeader,CardContent,CardActionArea,Typography,Tab,Tabs,makeStyles,Grid,AppBar,Box
  } 
  from '@material-ui/core';
import { stringCollection } from '../Strings/StringCollection';
import AddNewProjectTab from './AddNewProjectTab'
import SetTreadnigProjectTab from './SetTredingProjectTab'
import ViewAllProjectsTab from './ViewAllProjectsTab'

import { lightBorder } from '../../../Theme/borders';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAll, selectListOfProjects } from './Redux Components/Selectors';
import { loadDataOfLastChoosedDisplayMode, loadDataOfLastDataUpdateTime, loadDataOfLastUpdateDateAndTime, loadDataOfListOfDraftProjects, loadDataOfListOfDynamicProjects, loadDataOfListOfProjects, loadDataOfListOfStaticProjects } from './Redux Components/Thunks';

function ManageProjects(props) {
    const classes =useStyles();
    const [value, setValue] = React.useState(0);
    const {height,width} = useWindowDimensions();
    const tabIconHeight=30;
    const tabIconWidth=30;

    const dispatch = useDispatch();
    useEffect(()=>{
        //load all data for one time.
        dispatch(loadDataOfListOfProjects());
    },[])
    

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
       <Grid container >
         <Grid item xs={1}></Grid>
         <Grid item xs={10}>
           <Grid container>
             
              <Grid item lg={12} xs={12}>
                <Card className={classes.tabBarAndFilersContainer}>
                  <CardContent>
                    <Headings text={stringCollection.ManageProjects.ProjectManagerTitle} fontSize={30} fontWeight={'bolder'}/>
                    <AppBar position="static" color="inherit"
                      style={{border: '1px solid #e8eaed',borderRadius:'0%',marginTop:'1rem'}}
                      elevation={0}
                     >
                        <Tabs
                           value={value}
                           onChange={handleChange}
                           indicatorColor="primary"
                           textColor="primary"
                           variant="scrollable"
                           scrollButtons="auto"
                           aria-label="scrollable auto tabs example"
                        >
                          <Tab className={classes.tabElementStyle}  label={stringCollection.ManageProjects.ShowAllTabText} {...a11yProps(0)} />
                          <Tab className={classes.tabElementStyle}  label={stringCollection.ManageProjects.AddNewProjectTabText} {...a11yProps(1)} />
                          <Tab className={classes.tabElementStyle}  label={stringCollection.ManageProjects.SetTreadnigProjectTabText} {...a11yProps(2)} />
                        </Tabs>

                     </AppBar>
                  </CardContent>
                </Card>

                <Card className={classes.tabPanelContainer}>
                    <CardContent>
                              
                              <Grid container>
                                
                                  <Grid xs={12}>
                                       <TabPanel value={value} index={0}>
                                          <ViewAllProjectsTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={1}>
                                         <AddNewProjectTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={2}>
                                         <SetTreadnigProjectTab/>  
                                       </TabPanel>
                                  </Grid>
                                  
                                  
                              </Grid>
                              

                    </CardContent>
                </Card>    
              
                </Grid>
               
           </Grid>
         </Grid>
         <Grid item xs={1}></Grid>
       </Grid>
      
    );
}

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height:460,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        paddingTop:'7%'
      },
      titleBar:{
        // marginTop:50
      },
      tabElementStyle:{
        fontFamily:fontFamily.fontFamily_1,
        textDecorationColor:'black',
        color:'black',
        fontWeight:'bold',
        fontSize:'1rem',
        textTransform:'capitalize'
      },
      tabBarAndFilersContainer:{
        marginTop:'2rem'
      },
      tabPanelContainer:{
        marginTop:'0rem'
      }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
export default ManageProjects;

