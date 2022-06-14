import { makeStyles } from '@material-ui/core';
import React from 'react';

function Searchbar(props) {
    const classes=useStyles();
    return (
        <div  className={classes.container}>
            <h1>This is common search bar</h1>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    }
}))

export default Searchbar;