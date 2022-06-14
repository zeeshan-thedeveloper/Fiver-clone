//ReactJS
import React, { useState, useEffect } from "react";

//Material-ui core
import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Fade,
  Backdrop,
  Modal,
} from "@material-ui/core";

//material ui styles
import { makeStyles } from "@material-ui/core/styles";

//icons

//theme and styles

//custom components
import { PostRequestModal } from "../PostRequestModal";
//resources

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
import {
  fetchBalance,
  fetchPurchaseHistory,
} from "../../Redux/slices/balanceInfoSlice";

//selectors
import {
  selectBalance,
  selectIsBalanceLoading,
  selectHasBalanceError,
  selectPurchaseHistory,
  selectIsPurchaseHistoryLoading,
  selectHasPurchaseHistoryError,
} from "../../Redux/slices/balanceInfoSlice";

//action creators

//Custom components
import {lightBorder} from "../../../Theme/borders"

export const AccountSettingsBalance = (props) => {


  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Account Balance</Typography>
      </Box>
      <BalanceContainer />
    </div>
  );
};

function BalanceContainer() {
  return (
    <>
      <CurrentBalance />
      <PurchaseHistory />
    </>
  );
}

const currentBalanceStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border:lightBorder
  },
  cardContent: {
    flex: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}));

const CurrentBalance = () => {
  const classes = currentBalanceStyles();

  //Redux store: operations
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const isLoadingBalance = useSelector(selectIsBalanceLoading);
  const encounteredErrorInBalance = useSelector(selectHasBalanceError);

  useEffect(() => {
    dispatch(fetchPurchaseHistory());
    dispatch(fetchBalance("email or id of user"));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} elevation={0}>
        <CardHeader
          title={<Typography variant="h4">Current Balance</Typography>}
        />
        <Divider />
        <CardContent>
          <Box display="flex">
            <Box ml={2} className={classes.cardContent}>
              <h3>Available for purchase</h3>
            </Box>
            <Box>
              {isLoadingBalance ? (
                <h4>Loading...</h4>
              ) : (
                <Typography variant="h3">${balance}</Typography>
              )}
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          <CardHeader
            action={
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Make a purchase
              </Button>
            }
          />
        </CardContent>
      </Card>

      <Modal
        aria-labelledby="postRequestModal"
        aria-describedby="postRequestForm"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box mt={-4}>
              <PostRequestModal id="warningModal" handleClose={handleClose} />
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

const purchaseHistoryStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
    border:lightBorder
  },
  cardContent: {
    flex: 1,
  },
}));

const PurchaseHistory = () => {
  const classes = purchaseHistoryStyles();

  const [duration, setDuration] = useState(0);

  function handleHistoryClick(duration) {
    setDuration(duration);
  }

  function renderHistory() {
    if (duration == 1) {
      return <OneMonthHistory />;
    } else if (duration == 3) {
      return <ThreeMonthHistory />;
    } else if (duration == 12) {
      return <TwelveMonthHistory />;
    } else if (duration == 0) {
      return <AllTimeHistory />;
    }
  }

  function handleHistoryPrint() {
    window.print();
  }
  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Purchase History</Typography>}
        action={
          <Box mt={2} display="flex">
            <Box ml={0.5}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleHistoryClick(1)}
              >
                This Month
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleHistoryClick(3)}
              >
                Last 3 Months
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleHistoryClick(12)}
              >
                Last 1 year
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleHistoryClick(0)}
              >
                All time
              </Button>
            </Box>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box>{renderHistory}</Box>
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button
              variant="contained"
              color="primary"
              onClick={handleHistoryPrint}
            >
              Print History
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const headerOptions = ["Purchased Service", "Date", "Cost Paid"];
const currentMonth = new Date().getMonth() + 1;

const OneMonthHistory = () => {
  const thisMonthPurchaseHistory = useSelector(selectPurchaseHistory);
  const isLoading = useSelector(selectIsPurchaseHistoryLoading);
  const encounteredError = useSelector(selectHasPurchaseHistoryError);

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    setPurchaseHistory(
      thisMonthPurchaseHistory.filter(
        (order) => order.purchaseMonth == currentMonth
      )
    );
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerOptions.map((item) => {
            return (
              <TableCell>
                <Typography>
                  <strong>{item}</strong>
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {purchaseHistory.map((item) => {
          return (
            <TableRow>
              <TableCell>
                <Typography>{item.purchaseTitle}</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {item.purchaseDay}/{item.purchaseMonth}/{item.purchaseYear}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{item.costPaid}</Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

const ThreeMonthHistory = () => {
  const allTimePurchaseHistory = useSelector(selectPurchaseHistory);
  const isLoading = useSelector(selectIsPurchaseHistoryLoading);
  const encounteredError = useSelector(selectHasPurchaseHistoryError);

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    setPurchaseHistory(
      allTimePurchaseHistory.filter(
        (order) =>
          order.purchaseMonth == currentMonth ||
          order.purchaseMonth == currentMonth - 1 ||
          order.purchaseMonth == currentMonth - 2
      )
    );
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerOptions.map((item) => {
            return (
              <TableCell>
                <Typography>
                  <strong>{item}</strong>
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          purchaseHistory.map((item) => {
            return (
              <TableRow>
                <TableCell>
                  <Typography>{item.purchaseTitle}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {item.purchaseDay}/{item.purchaseMonth}/{item.purchaseYear}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.costPaid}</Typography>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

const TwelveMonthHistory = () => {
  const allTimePurchaseHistory = useSelector(selectPurchaseHistory);
  const isLoading = useSelector(selectIsPurchaseHistoryLoading);
  const encounteredError = useSelector(selectHasPurchaseHistoryError);

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    setPurchaseHistory(
      allTimePurchaseHistory.filter((order) => {
        const o = order.purchaseMonth;
        const c = currentMonth;
        if (
          o == c ||
          o == c - 1 ||
          o == c - 2 ||
          o == c - 3 ||
          o == c - 4 ||
          o == c - 5 ||
          o == c - 6 ||
          o == c - 7 ||
          o == c - 8 ||
          o == c - 9 ||
          o == c - 10 ||
          o == c - 11 ||
          o == c - 12
        ) {
          return order;
        }
      })
    );
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerOptions.map((item) => {
            return (
              <TableCell>
                <Typography>
                  <strong>{item}</strong>
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          purchaseHistory.map((item) => {
            return (
              <TableRow>
                <TableCell>
                  <Typography>{item.purchaseTitle}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {item.purchaseDay}/{item.purchaseMonth}/{item.purchaseYear}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.costPaid}</Typography>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

const AllTimeHistory = () => {
  const allTimePurchaseHistory = useSelector(selectPurchaseHistory);
  const isLoading = useSelector(selectIsPurchaseHistoryLoading);
  const encounteredError = useSelector(selectHasPurchaseHistoryError);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerOptions.map((item) => {
            return (
              <TableCell>
                <Typography>
                  <strong>{item}</strong>
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          allTimePurchaseHistory.map((item) => {
            return (
              <TableRow>
                <TableCell>
                  <Typography>{item.purchaseTitle}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {item.purchaseDay}/{item.purchaseMonth}/{item.purchaseYear}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.costPaid}</Typography>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};
