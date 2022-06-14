import React from 'react';
import { makeStyles } from '@material-ui/core';
function Menuebar(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common Menuebar [3 dots]</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))

export default Menuebar;