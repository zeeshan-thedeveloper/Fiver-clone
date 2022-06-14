//React
import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

//Material-UI
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Badge, Hidden, Checkbox } from "@material-ui/core";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  scroller: {
    flexGrow: 0,
  },
}));

//Style the badge: Number of orders

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -12,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const OrdersTab = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //To generate the tabs dynamically
  const tabList = [
    {
        tabTitle: "Newest",
        tabBadge: "4",
      },
    {
      tabTitle: "Active",
      tabBadge: "12",
    },
    {
      tabTitle: "Late",
      tabBadge: "3",
    },
    {
      tabTitle: "Delivered",
      tabBadge: "0",
    },
    {
      tabTitle: "Completed",
      tabBadge: "27",
    },
    {
      tabTitle: "Cancelled",
      tabBadge: "4",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          classes={{ root: classes.root, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={"scrollable"}
          scrollButtons={"on"}
        >
            {/* Numbers Badge content is hidden on small screens */}
          {tabList.map((tab) => {
            return <Tab
              label={<>
              <Hidden only={["xs"]}>
                <StyledBadge color="primary" badgeContent={tab.tabBadge}>
                  <Box>
                    <Typography>{tab.tabTitle}</Typography>
                  </Box>
                </StyledBadge></Hidden>
                <Hidden only={["sm", "md", "lg", "xl"]}>
                <Typography>{tab.tabTitle}</Typography>
                </Hidden>
                </>
              }
              {...a11yProps(0)}
            />;
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TabContent tabTitle="Newest Orders" status="Newest"/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
        <TabContent tabTitle="Active Orders" status="Active"/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <TabContent tabTitle="Late Orders" status="Late"/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <TabContent tabTitle="Delivered Orders" status="Delivered"/>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
        <TabContent tabTitle="Completed Orders" status="Completed"/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <TabContent tabTitle="Cancelled Orders" status="Cancelled"/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};


const TabContent=(props)=>{

    return(
        <div>
            <Box mt={1} p={1}>
            <Typography variant="h4">
            {props.tabTitle}
            </Typography>
            </Box>
            <TabContentComponent />

        </div>
    )
}



const tabContentComponentStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabContentComponent=()=>{
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('wifi')}
            checked={checked.indexOf('wifi') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('bluetooth')}
            checked={checked.indexOf('bluetooth') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
