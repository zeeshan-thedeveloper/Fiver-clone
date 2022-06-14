//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormLabel,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

//Material-UI styles
import { makeStyles } from "@material-ui/core/styles";

//Material-UI icons

//Styles and theme

//Resources

//react-redux
import { useDispatch, useSelector } from "react-redux";

//Thunks
import {
  fetchMobileNotificationSettings,
  fetchDesktopNotificationSettings,
  fetchEmailNotificationSettings,
  updateMobileNotificationSettings,
  updateDesktopNotificationSettings,
  updateEmailNotificationSettings,
} from "../../Redux/slices/notificationInfoSlice";

//selectors;
import {
  selectMobileNotifications,
  selectDesktopNotifications,
  selectEmailNotifications,
  selectIsLoadingMobileNotifications,
  selectIsLoadingDesktopNotifications,
  selectIsLoadingEmailNotifications,
  selectHasErrorMobileNotifications,
  selectHasErrorDesktopNotifications,
  selectHasErrorEmailNotifications,

  //updation selectors
  selectHasUpdatedMobileNotifications,
  selectHasUpdatedDesktopNotifications,
  selectHasUpdatedEmailNotifications,
  
  selectHasErrorUpdatingMobileNotifications,
  selectHasErrorUpdatingDesktopNotifications,
  selectHasErrorUpdatingEmailNotifications,

  selectIsUpdatingMobileNotifications,
  selectIsUpdatingDesktopNotifications,
  selectIsUpdatingEmailNotifications
} from "../../Redux/slices/notificationInfoSlice";
import { lightBorder } from "../../../Theme/borders";

export const AccountSettingsNotifications = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Notifications Settings</Typography>
      </Box>
      <NotificationsSettingsContainer />
    </div>
  );
};

function NotificationsSettingsContainer() {
  return (
    <>
      <MobileNotifications />
      <DesktopNotifications />
      <EmailNotifications />
    </>
  );
}

const mobileNotificationsStyles = makeStyles((theme) => ({
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

const MobileNotifications = () => {
  const classes = mobileNotificationsStyles();

  //Redux store: operations
  const dispatch = useDispatch();
  const notifications = useSelector(selectMobileNotifications);
  const isLoading = useSelector(selectIsLoadingMobileNotifications);
  const encounteredError = useSelector(selectHasErrorMobileNotifications);

  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    dispatch(fetchMobileNotificationSettings("email or id of user"));
  }, [dispatch]);

  useEffect(() => {
    setNotificationsData(notifications);
  }, [notifications]);
  
  function handleNotificationChange(index) {
    setNotificationsData((prev) => {
      let previousNotfs = [...prev];
      let modifiedNotf = { ...previousNotfs[index] };
      modifiedNotf.permission = !modifiedNotf.permission;
      previousNotfs[index] = modifiedNotf;
      return previousNotfs;
    });
  }

  function handleUpdateNotifications(){
    dispatch(updateMobileNotificationSettings(notificationsData))
  }
  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Set Mobile Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Notification for</h4>
        {isLoading ? (
          <h4>Loading settings .... </h4>
        ) : (
          notificationsData.map((notf, index) => {
            return (
              <Box>
                <Checkbox
                  value={index}
                  color="primary"
                  checked={notf.permission}
                  onChange={() => handleNotificationChange(index)}
                ></Checkbox>
                <FormLabel>{notf.content}</FormLabel>
              </Box>
            );
          })
        )}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateNotifications}
            >
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const desktopNotificationsStyles = makeStyles((theme) => ({
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
  formControl: {
    width: "50%",
    padding: "2rem",
  },
}));

const DesktopNotifications = () => {
  const classes = desktopNotificationsStyles();

  //Redux store: operations
  const dispatch = useDispatch();
  const notifications = useSelector(selectDesktopNotifications);
  const isLoading = useSelector(selectIsLoadingDesktopNotifications);
  const encounteredError = useSelector(selectHasErrorDesktopNotifications);

  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    dispatch(fetchDesktopNotificationSettings("email or id of user"));
  }, [dispatch]);

  useEffect(() => {
    setNotificationsData(notifications);
  }, [notifications]);
  
  function handleNotificationChange(index) {
    setNotificationsData((prev) => {
      let previousNotfs = [...prev];
      let modifiedNotf = { ...previousNotfs[index] };
      modifiedNotf.permission = !modifiedNotf.permission;
      previousNotfs[index] = modifiedNotf;
      return previousNotfs;
    });
  }

  function handleUpdateNotifications(){
    dispatch(updateDesktopNotificationSettings(notificationsData))
  }

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Set Desktop Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Desktop Notifications for</h4>
        {isLoading ? (
          <h4>Loading settings ...</h4>
        ) : (
          notifications.map((notf, index) => {
            return (
              <Box>
                <Checkbox
                  value={index}
                  color="primary"
                  checked={notf.permission}
                  onChange={() => handleNotificationChange(index)}
                ></Checkbox>
                <FormLabel>{notf.content}</FormLabel>
              </Box>
            );
          })
        )}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary"
            onClick={handleUpdateNotifications}
            >
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const emailNotificationsStyles = makeStyles((theme) => ({
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
  formControl: {
    width: "50%",
    padding: "2rem",
  },
}));

const EmailNotifications = () => {
  const classes = emailNotificationsStyles();

  //Redux store: operations
  const dispatch = useDispatch();
  const notifications = useSelector(selectEmailNotifications);
  const isLoading = useSelector(selectIsLoadingEmailNotifications);
  const encounteredError = useSelector(selectHasErrorEmailNotifications);

  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    dispatch(fetchEmailNotificationSettings("email or id of user"));
  }, [dispatch]);

  useEffect(() => {
    setNotificationsData(notifications);
  }, [notifications]);
  
  function handleNotificationChange(index) {
    setNotificationsData((prev) => {
      let previousNotfs = [...prev];
      let modifiedNotf = { ...previousNotfs[index] };
      modifiedNotf.permission = !modifiedNotf.permission;
      previousNotfs[index] = modifiedNotf;
      return previousNotfs;
    });
  }

  function handleUpdateNotifications(){
    dispatch(updateEmailNotificationSettings(notificationsData))
  }

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader
        title={<Typography variant="h4">Set Email Notifications</Typography>}
      />
      <Divider />
      <CardContent>
        <h4>Receive Emails for</h4>
        {isLoading ? (
          <h4>Loading settings ... </h4>
        ) : (
          notifications.map((notf, index) => {
            return (
              <Box>
                <Checkbox
                  value={index}
                  color="primary"
                  checked={notf.permission}
                  onChange={() => handleNotificationChange(index)}
                ></Checkbox>
                <FormLabel>{notf.content}</FormLabel>
              </Box>
            );
          })
        )}
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary"
            onClick={handleUpdateNotifications}
            >
              Update
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};
