//ReactJS
import React, {useState, useEffect} from "react";

//Material-ui core
import { Box, Button, Divider, Typography, Card,CardHeader, CardContent } from "@material-ui/core";

//material-ui styles
import { makeStyles } from "@material-ui/core/styles";


//icons
import IconButton from "@material-ui/core/IconButton";
import Jazzcash from "@material-ui/icons/MoneyOffRounded"
import Easypaisa from "@material-ui/icons/DriveEtaSharp"
import UnionTransfer from "@material-ui/icons/LocalParkingSharp"

//theme and styles


//custom components

//Resources
import profilePic from "../../Resources/nadir.jpg";

//Redux
import {useDispatch, useSelector} from "react-redux"
//Action creators

//selectors
import {
  selectPaymentlInfo,
  selectIsPaymentInfoLoading,
  selectHasPaymentInfoError
} from "../../Redux/slices/paymentInfoSlice"
//thunks
import {fetchPaymentInfoDetails} from "../../Redux/slices/paymentInfoSlice"
import { lightBorder } from "../../../Theme/borders";

export const AccountSettingsPaymentMethods = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Payment Methods</Typography>
      </Box>
      <PaymentMethodsContainer />
    </div>
  );
};

function PaymentMethodsContainer() {
  return (
    <>
      <AttachedMethods />
      <AvailableMethods />
    </>
  );
}

const attachedMethodsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border:lightBorder
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
}));

const AttachedMethods = () => {


  const classes = attachedMethodsStyles();
  

  const dispatch=useDispatch()
  const paymentInfo=useSelector(selectPaymentlInfo)
  const isLoading=useSelector(selectIsPaymentInfoLoading)
  const encounteredError=useSelector(selectHasPaymentInfoError)


useEffect(() => {
  dispatch(fetchPaymentInfoDetails("Give user id here who is logged in"));
}, [dispatch]);

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Already Attached</Typography>}
      />
      <Divider />
      <CardContent>
        <IconButton color="primary">
          <Easypaisa fontSize="large" />
        </IconButton>

        <IconButton color="default">
          <Jazzcash fontSize="large" />
        </IconButton>

      </CardContent>
      <Divider />
      <CardContent>
      <CardHeader
        action={
            <Button variant="contained" color="primary">Remove</Button>
        }
      />
        </CardContent>
    </Card>
  );
};

const availableMethodsStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border:lightBorder

  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  formControl:{
      width:"50%",
      padding:"2rem"
  }
}));

const AvailableMethods = () => {
  const classes = availableMethodsStyles();


  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Available for you</Typography>}
      />
      <Divider />
      <CardContent>
        <IconButton color="primary">
          <Jazzcash fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <Easypaisa fontSize="large" />
        </IconButton>

        <IconButton color="primary">
          <UnionTransfer fontSize="large" />
        </IconButton>
      </CardContent>
      <Divider />
      <CardContent>
      <CardHeader
        action={
            <Button variant="contained" color="primary">Add </Button>
        }
      />
        </CardContent>
    </Card>
  );
};