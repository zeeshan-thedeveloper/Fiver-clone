import React from 'react';
import { AppBar,Container,Typography,Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './Styles/StyleSheet.css'

function ServiceDetailsFooter(props) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Gistia
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
}

const useStyles = makeStyles((theme) => ({
  footer:{
    bottom:0,
    width:'100%',
    backgroundColor:"#011c38"
  }
   }));
export default ServiceDetailsFooter;