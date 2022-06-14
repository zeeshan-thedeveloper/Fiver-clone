//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Box,
  Button,
  Grid,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

//Material-UI styles
import { deepOrange, green } from "@material-ui/core/colors";
import ClockIcon from "@material-ui/icons/Timer";

//Icons

//Styles and Theme
import "./Styles/OngoingOrders.css";

//Router
import { Link } from "react-router-dom";

//Resources
import { Headingfonts, TextFonts } from "../../Theme/fonts";

//Redux
import { useDispatch, useSelector } from "react-redux";

//action Creators

//Thunks
import { fetchAllOrders } from "../Redux/slices/allOrdersSlice";
//Selectors
import {
  selectAllOrders,
  selectAreAllOrdersLoading,
  selectHasError,
} from "../Redux/slices/allOrdersSlice";
import ListSkeleton from "../../CustomComponents/UI/Skelton/ListSkeleton";

//custom components
import { lightBorder } from "../../Theme/borders";

const ongoingOrderStyles = makeStyles({
  container: {
    flex: 1,
  },
  heading: {
    font: TextFonts.large,
  },
  headingPane: {
    border: lightBorder,
  },
});

export const OngoingOrders = () => {
  const classes = ongoingOrderStyles();

  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectAreAllOrdersLoading);
  const encounteredError = useSelector(selectHasError);

  //Now from orders, get active, cancelled and completed orders by checking their status
  useEffect(() => {
    dispatch(
      fetchAllOrders({
        active: true,
        completed: true,
        cancelled: true,
        all: false,
        late: false,
        newest: false,
        delivered: false,
      })
    ); //dispatch thunk with status of order or simply bring all orders for this user
  }, [dispatch]);

  //Get these numbers from API
  const [activeOrders, setActiveOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);
  const [activePrice, setActivePrice] = useState(0);
  const [completedPrice, setCompletedPrice] = useState(0);
  const [cancelledPrice, setCancelledPrice] = useState(0);

  useEffect(() => {
    let activePrice = 0;
    let completedPrice = 0;
    let cancelledPrice = 0;

    const active = orders.filter((order) => {
      if (order.status == "active") {
        activePrice += order.totalPrice;
        return order;
      }
    });
    const completed = orders.filter((order) => {
      if (order.status == "completed") {
        completedPrice += order.totalPrice;
        return order;
      }
    });
    const cancelled = orders.filter((order) => {
      if (order.status == "cancelled") {
        cancelledPrice += order.totalPrice;
        return order;
      }
    });

    setActiveOrders(active.length);
    setCompletedOrders(completed.length);
    setCancelledOrders(cancelled.length);
    setActivePrice(activePrice);
    setCompletedPrice(completedPrice);
    setCancelledPrice(cancelledPrice);
  }, [orders]);

  const [option, setOption] = useState(0);
  function setOptionHandler(e) {
    setOption(e.target.value);
  }

  function renderSelectedOption() {
    if (option == 0) {
      return <ActiveOrderCard />;
    } else if (option == 1) {
      return <CompletedOrderCard />;
    } else if (option == 2) {
      return <CancelledOrderCard />;
    }
  }

  function renderHeading() {
    if (option == 0) {
      return `Active Orders -${activeOrders}(${activePrice})`;
    } else if (option == 1) {
      return `Completed Orders -${completedOrders}(${completedPrice})`;
    } else if (option == 2) {
      return `Cancelled Orders -${cancelledOrders}(${cancelledPrice})`;
    }
  }
  return (
    <div>
      <Box display="flex" className={classes.headingPane}>
        <Box ml={2} className={classes.container}>
          <h3>{renderHeading()}</h3>
        </Box>
        <Box p={2}>
          <select style={{ padding: "4px" }} onChange={setOptionHandler}>
            <option value={0}>Active Orders ({activeOrders})</option>
            <option value={1}>Completed Orders ({completedOrders})</option>
            <option value={2}>Cancelled Orders ({cancelledOrders})</option>
          </select>
        </Box>
      </Box>
      <Box>
        {isLoading ? <ListSkeleton height={5} /> : renderSelectedOption}
      </Box>
    </div>
  );
};

const activeOrderCardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    border: lightBorder,
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
  statLabel: {
    fontSize: 8,
    color: theme.palette.grey[500],
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  statValue: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  boxStyle: {
    textAlign: "center",
  },
  serviceImageStyle: {
    width: "5rem",
    height: "5rem",
    borderRadius: "2px",
  },
  gridStyle: {
    flex: 1,
  },
  ongoingOrderButton: {
    fontSize: 8,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
}));

const ActiveOrderCard = () => {
  const classes = activeOrderCardStyles();

  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectAreAllOrdersLoading);
  const encounteredError = useSelector(selectHasError);

  const [activeOrders, setActiveOrders] = useState([]);
  useEffect(() => {
    setActiveOrders(orders.filter((order) => order.status == "active"));
  }, [orders]);

  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      {isLoading ? (
        <h5>Loading Orders ... </h5>
      ) : (
        activeOrders.map((order) => {
          return (
            <Grid container>
              <Grid item lg={2} xs={2}>
                <Box flex={"auto"}>
                  <Avatar
                    className={classes.serviceImageStyle}
                    variant="square"
                    src={order.service_project_thumbnail}
                    onClick={() => {
                      alert("Go to this service");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Grid>
              <Grid item lg={2} xs={3}>
                <Box
                  flex={"auto"}
                  className={classes.boxStyle}
                  ml={isItMobile ? 4 : 0}
                >
                  <p className={classes.statLabel}>Project Price</p>
                  <p className={classes.statValue}>${order.totalPrice}</p>
                </Box>
              </Grid>

              <Grid item lg={2} className={classes.gridStyle}>
                <Box flex={"auto"} className={classes.boxStyle}>
                  <p className={classes.statLabel}>Due in</p>
                  <p className={classes.statValue}>
                    <ClockIcon className={classes.statValue}></ClockIcon>{" "}
                    {order.dueOn}
                  </p>
                </Box>
              </Grid>

              <Grid item lg={3}></Grid>
              <Grid item lg={3}>
                <Box flex={"auto"} className={classes.boxStyle}>
                  <Link to="/messaging" className="linkStyle">
                    <Button
                      variant="outlined"
                      className={classes.ongoingOrderButton}
                      fullWidth
                    >
                      Contact Seller
                    </Button>
                  </Link>
                </Box>
                <Box flex={"auto"} className={classes.boxStyle} mt={1}>
                  <Link
                    to={{
                      pathname: "/vieworder",
                      state: { orderId: order.orderId },
                    }}
                    className="linkStyle"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.ongoingOrderButton}
                      fullWidth
                    >
                      View Order
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          );
        })
      )}
    </Box>
  );
};
  
const CompletedOrderCard = () => {
  const classes = activeOrderCardStyles();

  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectAreAllOrdersLoading);
  const encounteredError = useSelector(selectHasError);

  const [completedOrders, setCompletedOrders] = useState([]);
  useEffect(() => {
    setCompletedOrders(orders.filter((order) => order.status == "completed"));
  }, [orders]);

  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      {isLoading ? (
        <h5>Loading orders ...</h5>
      ) : (
        completedOrders.map((order) => {
          return (
            <Grid container>
              <Grid item lg={2} xs={2}>
                <Box flex={"auto"}>
                  <Avatar
                    className={classes.serviceImageStyle}
                    variant="square"
                    src={order.service_project_thumbnail}
                    onClick={() => {
                      alert("Go to this service");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Grid>

              <Grid item lg={2} xs={2}>
                <Box
                  flex={"auto"}
                  className={classes.boxStyle}
                  ml={isItMobile ? 4 : 0}
                >
                  <p className={classes.statLabel}>Project Price</p>
                  <p className={classes.statValue}>${order.totalPrice}</p>
                </Box>
              </Grid>

              <Grid item lg={2} xs={2} className={classes.gridStyle}>
                <Box flex={"auto"} className={classes.boxStyle}>
                  <p className={classes.statLabel}>Due on</p>
                  <p className={classes.statValue}>
                    <ClockIcon className={classes.statValue}></ClockIcon>
                    {order.dueOn}
                  </p>
                </Box>
              </Grid>

              <Grid item lg={2} xs={3} className={classes.gridStyle}>
                <Box flex={"auto"} className={classes.boxStyle}>
                  <p className={classes.statLabel}>Delivered on</p>
                  <p className={classes.statValue}>
                    <ClockIcon className={classes.statValue}></ClockIcon>
                    {order.deliveredOn}
                  </p>
                </Box>
              </Grid>
              <Grid item lg={1}></Grid>
              <Grid item lg={3}>
                <Box flex={"auto"} className={classes.boxStyle}>
                  <Link to="/messaging" className="linkStyle">
                    <Button
                      variant="outlined"
                      className={classes.ongoingOrderButton}
                      fullWidth
                    >
                      Contact Seller
                    </Button>
                  </Link>
                </Box>
                <Box flex={"auto"} className={classes.boxStyle} mt={1}>
                  <Link
                    to={{
                      pathname: "/viewOrder",
                      state: { orderId: order.orderId },
                    }}
                    className="linkStyle"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.ongoingOrderButton}
                      fullWidth
                    >
                      View Order
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          );
        })
      )}
    </Box>
  );
};


const CancelledOrderCard = () => {
  const classes = activeOrderCardStyles();

  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectAreAllOrdersLoading);
  const encounteredError = useSelector(selectHasError);

  const [cancelledOrders, setCancelledOrders] = useState([]);
  useEffect(() => {
    setCancelledOrders(orders.filter((order) => order.status == "cancelled"));
  }, [orders]);


  const isItMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box className={classes.root} p={0.5} mt={2}>
      {
        isLoading?<h5>Loading orders ...</h5>:
        cancelledOrders.map(order=>{
          return      <Grid container>
        <Grid item lg={2} xs={2}>
          <Box flex={"auto"}>
            <Avatar
              className={classes.serviceImageStyle}
              variant="square"
              src={order.service_project_thumbnail}
              onClick={() => {
                alert("Go to this service");
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Grid>

        <Grid item lg={2} xs={2}>
          <Box
            flex={"auto"}
            className={classes.boxStyle}
            ml={isItMobile ? 4 : 0}
          >
            <p className={classes.statLabel}>Project Price</p>
            <p className={classes.statValue}>${order.totalPrice}</p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={2} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Due on</p>
            <p className={classes.statValue}>
              <ClockIcon className={classes.statValue}></ClockIcon>{order.dueOn}
            </p>
          </Box>
        </Grid>

        <Grid item lg={2} xs={3} className={classes.gridStyle}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <p className={classes.statLabel}>Delivered on</p>
            <p className={classes.statValue} style={{ color: "red" }}>
              <ClockIcon className={classes.statValue}></ClockIcon>{order.deliveredOn}
            </p>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
          <Box flex={"auto"} className={classes.boxStyle}>
            <Link to="/messaging" className="linkStyle">
              <Button
                variant="outlined"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                Contact Seller
              </Button>
            </Link>
          </Box>
          <Box flex={"auto"} className={classes.boxStyle} mt={1}>
            <Link to={{
              pathname:'/vieworder',
              state:{orderId:order.orderId}
            }} className="linkStyle">
              <Button
                variant="contained"
                color="primary"
                className={classes.ongoingOrderButton}
                fullWidth
              >
                View Order
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
              })}
    </Box>
  );
};
