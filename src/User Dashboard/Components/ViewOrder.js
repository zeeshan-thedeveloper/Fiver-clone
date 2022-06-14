//ReactJS
import React, {useState, useEffect} from "react";

//Material-UI core
import {
  Box,
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  Zoom,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
  useMediaQuery,
} from "@material-ui/core";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { LoremIpsum } from "react-lorem-ipsum";
//Material-UI styles
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Routing
import { useLocation, Link } from "react-router-dom";

//Styles and theme
import "./Styles/ViewOrder.css";
//Icons
import CheckedIcon from "@material-ui/icons/CheckCircle"
import { ProjectChatModule } from "./ProjectChatModule";
import MessageCompositionOptions from "./ChatHistory/ChatArea/MessageCompositionOptions";
import MessageCompositionOptionsForMobile from './ChatHistory/ChatArea/MessageCompositionOptionsForMobile'

//Resources


//Redux
import {useDispatch, useSelector} from "react-redux"
//Action creators


//selectors
import {selectOrder,
  selectIsOrderLoading,
  selectHasOrderError} from "../Redux/slices/viewOrderSlice"
//thunks
import {fetchOrderDetails} from "../Redux/slices/viewOrderSlice"

//Custom components
import { lightBorder } from "../../Theme/borders";

import { Breadcrumbs } from "@mui/material";
export const ViewOrder = (props) => {

  return (
    <div>
      <OrderDetails />
    </div>
  );
};

const orderDetailsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem", 
    border:lightBorder,
  },orderChatContainer:{
    maxWidth: "100%",
    marginTop: "2rem",
  },
  cardContent: {
    flex: 1,
  },
  stepperForMobile:{
    marginLeft:"-30px"
  },
  orderCardHeader:{
    backgroundColor:'#fff'
  }
}));

const OrderDetails = () => {

  const classes = orderDetailsStyles();
  const[projectCost, setProjectCost]=useState(4115)
  
  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  
  const dispatch=useDispatch()
  const location=useLocation()

  const orderDetails=useSelector(selectOrder)
  const isLoading=useSelector(selectIsOrderLoading)
  const encounteredError=useSelector(selectHasOrderError)

  const[order, setOrder]=useState({})

  useEffect(() => {
    dispatch(fetchOrderDetails(location.state.orderId));
  }, [dispatch]);

  useEffect(()=>{
    setOrder(orderDetails)
  },[orderDetails])
  
  return (
    <div>
        <Box display="flex">
        <Box flex={1}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link  to="/userdashboard">
              Dashboard
            </Link>
            <Link  to="vieworder">
              View Order
            </Link>
          </Breadcrumbs>
        </Box>
        <Box>
        </Box>
      </Box>
      {
        isLoading?<h5>Loading data</h5>:
      
    <Card className={classes.root} elevation={0}>
      <CardHeader
        className={classes.orderCardHeader}
        title={<div className={isItSmallOrExtraSmall?classes.stepperForMobile:classes.stepperForPC}>
                <OrderSteps className={classes.stepperStyle}/>
              </div>
          }
        action={
          <Box mt={4}>
            <Tooltip
              title={
                <Typography>
                  Codeindna team is working on this order.
                </Typography>
              }
              TransitionComponent={Zoom}
              placement="bottom"
              arrow
            >
              <h4 style={{ backgroundColor: "lightblue", padding: isItSmallOrExtraSmall?"0px":"2px"}}>
                {order.status}
              </h4>
            </Tooltip>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box display="flex">
          <Box ml={isItSmallOrExtraSmall?0:2}>
            <h3>Order {order.orderId}</h3>
          </Box>
          <Box ml={isItSmallOrExtraSmall?0:4}>
            <Link to="/messaging" className="linkStyleCustomized">
              <h3>View Service </h3>
            </Link>
          </Box>
          <Box ml={isItSmallOrExtraSmall?0:4} className={classes.cardContent}>
            <h3>{order.date}</h3>
          </Box>
          <Box>
            <h3>${order.totalPrice}</h3>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <cardContent>
        <Box ml={2} p={2}>
          <LoremIpsum />
        </Box>
      </cardContent>

      <Divider />
      <cardContent>
        <Box p={2}>
          <PackageAndProjectDetails/>
        </Box>
        <Box display="flex">
        <Box className={classes.cardContent} />
        <Box mr={2}>
        <h3>Total: ${order.totalPrice}</h3>
        </Box>
        </Box>
      </cardContent>
    </Card>
    }    
    <Card className={classes.orderChatContainer} elevation={2}>
      <CardHeader
        title={<Typography>
                Order Chat
              </Typography>
        }
        
      />
      <Divider />
        <CardContent>
          <ProjectChatModule />
        </CardContent>
        <Divider />
        <CardContent>
          {(isDesktopOrLaptopOrTabletScreen) ? <MessageCompositionOptions/> : <MessageCompositionOptionsForMobile/>}
        </CardContent>  
      </Card>
    </div>
  );
};

const stepperStyles=makeStyles(()=>({
  orderCardHeader:{
    backgroundColor:'#fff'
  }
}))
const OrderSteps = () => {
  
  const classes=stepperStyles()

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      stepid: 1,
      stepTitle: "You Submitted Requirements",
      stepToolTip:
        "Step1: You submitted the requirements to Codeindna at August 17, 2021",
    },
    {
      stepid: 2,
      stepTitle: "Codeindna accepted Order",
      stepToolTip:
        "Step2: Codeindna accepted and understood your requirements. They startworking on your project.",
    },
    {
      stepid: 3,
      stepTitle: "Order Delivered to you",
      stepToolTip:
        "Step3: Codeindna Delivered you the order. You left the feedback and paid them.",
    },
  ];

  const isItSmallOrExtraSmall = useMediaQuery("(max-width: 960px)");
    return (
    <Stepper alternativeLabel={isItSmallOrExtraSmall} activeStep={activeStep} className={classes.orderCardHeader}>
      {steps.map(({ stepid, stepTitle, stepToolTip }) => {
        return (
          <Tooltip
            title={<Typography>{stepToolTip}</Typography>}
            TransitionComponent={Zoom}
            placement="bottom"
            arrow
          >
            <Step key={stepid}>
              <StepLabel>{stepTitle}</StepLabel>
            </Step>
          </Tooltip>
        );
      })}
    </Stepper>
  );
};


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#011C38',
    color: '#fff',
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const tableStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  cellData:{
    fontWeight:"bold"
  }
});

const PackageAndProjectDetails = () => {
  const classes = tableStyles();

  const orderDetails=useSelector(selectOrder)
  const isLoading=useSelector(selectIsOrderLoading)
  
  const[order, setOrder]=useState()
  
  useEffect(()=>{
    setOrder(orderDetails)
  },[orderDetails])

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              isLoading || !order?<h5>Loading package details ... </h5>:
            
              <TableRow key={order.service_project_title} className="tableRow">
                <StyledTableCell component="th" scope="row">
                  {order.service_project_title}
                  {order.packageOffers.map((offer)=>{
                    return(
                      <Box mt={1} ml={2} display="flex">
                        <Box>
                          <CheckedIcon color="primary"/>
                        </Box>
                        <Box ml={0.5} mt={0.4}>
                        <span>{offer}</span>
                        </Box>
                      </Box>
                    )
                    })}
                </StyledTableCell>
                
                <StyledTableCell align="right" className={classes.cellData}>{order.quantity}</StyledTableCell>
                <StyledTableCell align="right" className={classes.cellData}>{order.durationDays}</StyledTableCell>
                <StyledTableCell align="right" className={classes.cellData}>${order.totalPrice}</StyledTableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
