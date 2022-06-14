//React
import React from "react";

//Material-UI

import cx from "clsx";
import { Card, CardContent, Box, IconButton } from "@material-ui/core";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { makeStyles } from "@material-ui/core/styles";

//Material-UI Icons
import Facebook from "@material-ui/icons/Facebook";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";


//Custom components
import {lightBorder} from "../../Theme/borders"

export const LinkedAccounts = () => {
  return <LinkedAccountsCard />;
};

const useStyles = makeStyles((theme) => ({
  card: {
    // borderRadius: 12,
    border:lightBorder,
    textAlign: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
}));

const LinkedAccountsCard = React.memo(function ProfileCard() {
  const classes = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(classes.card, /*shadowStyles.root*/)} elevation={0}>
      <CardContent>
        <p className={classes.statValue}>Linked Accounts</p>
        <Box margin="auto" pt={3} mt={3}>
          {/* <IconButton color="primary"> */}
            <LinkedIn fontSize="large" color="primary" />
          {/* </IconButton> */}

          {/* <IconButton color="primary"> */}
            <Github fontSize="large" color="primary"/>
          {/* </IconButton> */}

          {/* <IconButton color="primary"> */}
            <Facebook fontSize="large" color="primary"/>
          {/* </IconButton> */}
        </Box>
      </CardContent>
    </Card>
  );
});
