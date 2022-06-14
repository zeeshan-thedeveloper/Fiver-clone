import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card,CardHeader,CardContent,CardActionArea } from '@material-ui/core';
import Dropdown from './Dropdown';
function CustomCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <h1>Put component here</h1>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
      
      <CardContent>
        <h1>Content</h1>
      </CardContent>
      
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
}));
  
export default CustomCard;