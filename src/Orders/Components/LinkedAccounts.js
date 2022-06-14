
import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import Github from '@material-ui/icons/GitHub';

import { Button, Container, Typography, Box, IconButton } from "@material-ui/core";
import { Face, LinkedIn } from "@material-ui/icons";

export const LinkedAccounts = () => {
  return (
    <div style={{ padding: "3px", textAlign: "center" }}>
      <Typography variant="p" align="center">
Linked Accounts
      </Typography>
      <Box m={1} pt={3}>
    
      <IconButton color="primary">
      <LinkedIn fontSize="large"/>
       </IconButton> 

       <IconButton color="primary">
      <Github fontSize="large"/>
       </IconButton> 

       <IconButton color="primary">
      <Facebook  fontSize="large"/>
       </IconButton> 
      </Box>
    </div>
  );
};
