import React from 'react';
import { makeStyles } from '@material-ui/core';

function CustomCard_Style_2(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common CustomCard_Style_2</h1>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    }
}))


export default CustomCard_Style_2;