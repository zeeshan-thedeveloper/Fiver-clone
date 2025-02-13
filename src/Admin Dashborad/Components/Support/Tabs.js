import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { fontFamily } from '../../../Theme/fonts';

function Custom_Tabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit"
        style={{border: '1px solid #e8eaed',borderRadius:'0%'}}
        elevation={0}
        >
          <Tabs value={value} onChange={handleChange}  aria-label="simple tabs example"
          classes={{
            scroller:classes.tabElementStyle
          }}
          >
            <Tab label="Item One" className={classes.tabElementStyle} {...a11yProps(0)} />
            <Tab label="Item Two" className={classes.tabElementStyle} {...a11yProps(1)} />
            <Tab label="Item Three" className={classes.tabElementStyle} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    );
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme)=>({
 root: {
       
    },
 tabElementStyle:{
     fontFamily:fontFamily.fontFamily_1,
     textDecorationColor:'black',
     color:'black',
     fontWeight:'bold',
     fontSize:'1rem',
     textTransform:'capitalize'
 }
}))

export default Custom_Tabs;