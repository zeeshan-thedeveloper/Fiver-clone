//ReactJS
import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

//Material-UI core
import {
  AppBar,
  Tabs,
  Tab,
  Badge,
  Hidden,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fade,
} from "@material-ui/core";

//Material-UI
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

//Styles and theme

import "./Styles/Orders.css";
//Icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

//Resources

//Redux

import { useDispatch, useSelector } from "react-redux";
//action creators

//selectors

import {
  selectAllOrders,
  selectAreAllOrdersLoading,
  selectHasError,
} from "../Redux/slices/allOrdersSlice";
//thunks

import { fetchAllOrders } from "../Redux/slices/allOrdersSlice";
import { lightBorder } from "../../Theme/borders";

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
    border: lightBorder,
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

export const Orders = () => {
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
      <AppBar position="static" color="default" elevation={0}>
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
            return (
              <Tab
                label={
                  <>
                    <Hidden only={["xs"]}>
                      <StyledBadge color="primary" badgeContent={tab.tabBadge}>
                        <Box>
                          <Typography>{tab.tabTitle}</Typography>
                        </Box>
                      </StyledBadge>
                    </Hidden>
                    <Hidden only={["sm", "md", "lg", "xl"]}>
                      <Typography>{tab.tabTitle}</Typography>
                    </Hidden>
                  </>
                }
                {...a11yProps(0)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OrdersTable tabTitle="Newest Orders" status="newest" />
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <OrdersTable tabTitle="Active Orders" status="active" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <OrdersTable tabTitle="Late Orders" status="late" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <OrdersTable tabTitle="Delivered Orders" status="delivered" />
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
          <OrdersTable tabTitle="Completed Orders" status="completed" />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <OrdersTable tabTitle="Cancelled Orders" status="cancelled" />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#011C38",
    color: "#fff",
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({}))(TableRow);

const tableStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const OrdersTable = (props) => {
  //Fetch respective orders from store when clicked on particular tab

  const dispatch = useDispatch();

  const allOrders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectAreAllOrdersLoading);
  const encounteredError = useSelector(selectHasError);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(
      //pass an object, telling which orders to load: in this case load all
      fetchAllOrders({
        active: true,
        completed: true,
        cancelled: true,
        all: true,
        late: true,
        newest: true,
        delivered: true,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    setOrders(allOrders);
  }, [allOrders]);

  function checkStatus() {
    if (status == "newest") {
      if (!isLoading) {
        return orders.filter((order) => order.status == "newest");
      } else {
        return orders;
      }
    } else if (status == "active")
      if (!isLoading) {
        return orders.filter((order) => order.status == "active");
      } else {
        return orders;
      }
    else if (status == "late")
      if (!isLoading) {
        return orders.filter((order) => order.status == "late");
      } else {
        return orders;
      }
    else if (status == "delivered")
      if (!isLoading) {
        return orders.filter((order) => order.status == "delivered");
      } else {
        return orders;
      }
    else if (status == "completed")
      if (!isLoading) {
        return orders.filter((order) => order.status == "completed");
      } else {
        return orders;
      }
    else if (status == "cancelled")
      if (!isLoading) {
        return orders.filter((order) => order.status == "cancelled");
      } else {
        return orders;
      }
  }

  const classes = tableStyles();

  const status = props.status;
  const title = props.tabTitle;

  return (
    <Box mt={-3}>
      <h4>{title}</h4>

      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller</StyledTableCell>
              <StyledTableCell align="right">Service/Project</StyledTableCell>
              <StyledTableCell align="right">Due On</StyledTableCell>
              {status == "delivered" ||
              status == "completed" ||
              status == "late" ? (
                <StyledTableCell align="right">Delivered On</StyledTableCell>
              ) : (
                ""
              )}
              <StyledTableCell align="right">Total Price</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">More</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <h1>Loading data</h1>
            ) : (
              checkStatus().map((order) => (
                <StyledTableRow key={order.orderId}>
                  <StyledTableCell component="th" scope="row">
                    {order.seller}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order.service_project_title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{order.dueOn}</StyledTableCell>
                  {status == "delivered" ||
                  status == "completed" ||
                  status == "late" ? (
                    <StyledTableCell align="right">
                      {order.deliveredOn}
                    </StyledTableCell>
                  ) : (
                    ""
                  )}
                  <StyledTableCell align="right">
                    ${order.totalPrice}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order.status}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <OrderOptionsMenu orderId={order.orderId} />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

function OrderOptionsMenu(props) {
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    setOrderId(props.orderId);
  }, [props]);

  const options = [
    {
      optionTitle: "View Order",
      route: "/vieworder",
    },

    {
      optionTitle: "Contact Seller",
      route: "/messaging",
    },
  ];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        TransitionComponent={Fade}
      >
        {options.map(({ optionTitle, route }) => {
          return (
            <Link
              to={{
                pathname: route,
                state: {
                  orderId: orderId,
                },
              }}
              className="linkStyle"
            >
              <MenuItem key={optionTitle}>{optionTitle}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </div>
  );
}
