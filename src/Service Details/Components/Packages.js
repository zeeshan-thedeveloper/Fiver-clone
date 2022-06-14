import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import { Button } from '@material-ui/core';
import './Styles/StyleSheet.css'
function Packages(props) {
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery('(min-width: 960px)');
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <div>
            <Grid container className={classes.mainOuterContainer}>
                <Grid item ld={12} md={12} sm={12} xs={12}>
                    {/* Heading */}
                    <Grid container>
                       <Grid item  ld={12} md={12} sm={12} xs={12}>
                            {/* Tabs */}
                            <Box
                              boxShadow={4}
                              bgcolor="background.paper"
                              m={1}
                              p={1}
                              style={{ width: (isDesktopOrLaptopOrTabletScreen) ? '100%' : '93%', height: '27rem' }}
                            >
                            <div className={classes.ourPackagesTitle}><h3>Our packages</h3></div>
                            <div className={classes.root}>
                                  <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}                            
                                    aria-label="Vertical tabs example"
                                    className={classes.tabs}
                                  >
                                    <Tab label="Basic" {...a11yProps(0)} />
                                    <Tab label="Standard" {...a11yProps(1)} />
                                    <Tab label="Premium" {...a11yProps(2)} />
      
                                  </Tabs>

                                  <TabPanel value={value} index={0} className={classes.TabPanel}>
                                    Item One
                                  </TabPanel>
                                  <TabPanel value={value} index={1} className={classes.TabPanel}>
                                    Two
                                  </TabPanel>
                                  <TabPanel value={value} index={2} className={classes.TabPanel}>
                                    Item Three
                                  </TabPanel>
      
                                </div>
                                <div className={classes.contactContainer}>
                                <Button
                                   variant="contained"
                                   color="primary"
                                   className={classes.button}
                                //    endIcon={<Icon>send</Icon>}
                                 >
                                    Contact  
                                 </Button>  

                                </div>   
                            </Box>
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

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
  

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '20rem',
      },
      tabs: {
        borderRight: `2px solid ${theme.palette.divider}`,
        borderTop: `2px solid ${theme.palette.divider}`,
        borderBottom: `2px solid ${theme.palette.divider}`,
         
        paddingTop:'10%'
      },
      TabPanel:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            borderTop: `2px solid ${theme.palette.divider}`,
            borderBottom: `2px solid ${theme.palette.divider}`,
         
            width:'80%'  
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            borderTop: `2px solid ${theme.palette.divider}`,
            borderBottom: `2px solid ${theme.palette.divider}`,
         
            width:'80%'
        },  
       
      },
    mainInnerContainer:{
        
         // Set according to screen
         ['@media (min-width: 960px)']
         :
         { // eslint-disable-line no-useless-computed-key
                height:450,
                width:400,
                // Set accrding to screen
                borderColor:'black'
         },
         ['@media (max-width: 600px)']
         :
         { // eslint-disable-line no-useless-computed-key
            height:450,
            width:400,

            // Set accrding to screen
            backgroundColor:"blue"
         },
    },
    mainOuterContainer:{
       
        // Set according to screen
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'9%',
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            marginTop:'5%',
        },
    },
    ourPackagesTitle:{
        paddingLeft:'2%',
        paddingTop:'2%'
    },
    basicPackageContainer:{

        boxShadow:1,
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            height:360,
            width:365,
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
    },
    standardPackageContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
        
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
    },
    premiumPackageContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
           
        },
    },
    contactContainer:{
        ['@media (min-width: 960px)']
        :
        { // eslint-disable-line no-useless-computed-key
            
        },
        ['@media (max-width: 600px)']
        :
        { // eslint-disable-line no-useless-computed-key
           
        },
    },
    contactContainer:{
        width:'100%',
        marginTop:'2%'
        
    },
    button: {
        marginLeft: theme.spacing(13),
        width:'50%'
      },

  }));
export default Packages;