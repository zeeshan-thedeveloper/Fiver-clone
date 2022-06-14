import React,{useState} from 'react';
import { AppBar } from '@material-ui/core';
import {Box,Tab,Tabs,Typography, makeStyles,Grid,Card,CardContent} from '@material-ui/core';
import PropTypes from 'prop-types';
import { fontFamily } from '../../../Theme/fonts';
import { stringCollection } from '../Strings/StringCollection';
import { Headings } from '../Support/Headings';

import ActiveAccountsTab from './ActiveAccountsTab';
import BlockedAccountsTab from './BlockedAccountsTab';
import StatisticsTab from './StatisticsTab';


function ManageOrders(props) {
  const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const tabIconHeight=30;
    const tabIconWidth=30;
  
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
                 <Headings text={"Client Accounts Manager"} fontSize={30} fontWeight={'bolder'}/>
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
     
                          {/* <Tab label={stringCollection.ManageOrders.DeliverOrderTabText} {...a11yProps(0)} /> */}
                          <Tab className={classes.tabElementStyle} label={"Active Accounts"} {...a11yProps(0)} />
                          <Tab className={classes.tabElementStyle} label={"Blocke Accounts"} {...a11yProps(1)} />
                          <Tab className={classes.tabElementStyle} label={"Statistics"} {...a11yProps(2)} />
                             
                        </Tabs>
                        </AppBar>
                  </CardContent>
                </Card>

                             
                              
                             
                  <Card className={classes.tabPanelContainer}>
                    <CardContent>
                              
                              <Grid container>
                                
                                  <Grid xs={12}>
                                      
                                        <TabPanel value={value} index={0}>
                                         <ActiveAccountsTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={1}>
                                         <BlockedAccountsTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={2}>
                                         <StatisticsTab/>
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
export default ManageOrders;

