import React from 'react';
import { makeStyles } from '@material-ui/core';

function ChipList(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common  ChipList</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))

export default ChipList;