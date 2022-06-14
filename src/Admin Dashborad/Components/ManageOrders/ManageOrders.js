import React,{useState} from 'react';
import { AppBar } from '@material-ui/core';
import {Box,Tab,Tabs,Typography, makeStyles,Grid,Card,CardContent} from '@material-ui/core';
import PropTypes from 'prop-types';
import { fontFamily } from '../../../Theme/fonts';
import { stringCollection } from '../Strings/StringCollection';
import { Headings } from '../Support/Headings';

import ShowCanceledOrdersTab from './ShowCanceledOrdersTab';
import ShowCompleteOrdersTab from './ShowCompleteOrdersTab';
import ShowDeliveredOrdersTab from './ShowDeliveredOrdersTab';
import ShowUnCompleteOrdersTab from './ShowUnCompleteOrdersTab';
import ShowLatedOrdersTab from './ShowLatedOrdersTab'
import ShowInRevisionOrdersTab from './ShowInRevisionOrdersTab';
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
                 <Headings text={stringCollection.ManageOrders.OrdersManagerTitle} fontSize={30} fontWeight={'bolder'}/>
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
                          <Tab className={classes.tabElementStyle} label={stringCollection.ManageOrders.ShowUnCompleteOrdersTabText} {...a11yProps(0)} />
                          <Tab className={classes.tabElementStyle} label={stringCollection.ManageOrders.ShowCompleteOrdersTabText} {...a11yProps(1)} />
                          <Tab className={classes.tabElementStyle} label={stringCollection.ManageOrders.ShowCanceledOrdersTabText} {...a11yProps(2)} />
                          <Tab className={classes.tabElementStyle} label={"Delivered"} {...a11yProps(3)} />
                          <Tab className={classes.tabElementStyle} label={"Late"} {...a11yProps(4)} />
                          <Tab className={classes.tabElementStyle} label={"In-Revision"} {...a11yProps(5)} />
                                       
                        </Tabs>
                        </AppBar>
                  </CardContent>
                </Card>

                             
                              
                             
                  <Card className={classes.tabPanelContainer}>
                    <CardContent>
                              
                              <Grid container>
                                
                                  <Grid xs={12}>
                                      
                                        <TabPanel value={value} index={0}>
                                         <ShowUnCompleteOrdersTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={1}>
                                         <ShowCompleteOrdersTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={2}>
                                         <ShowCanceledOrdersTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={3}>
                                         <ShowDeliveredOrdersTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={4}>
                                         <ShowLatedOrdersTab/>
                                       </TabPanel>
                                       <TabPanel value={value} index={5}>
                                         <ShowInRevisionOrdersTab/>
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

