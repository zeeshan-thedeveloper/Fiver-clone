import { makeStyles } from "@material-ui/core"
import React from 'react';
import { Headingfonts,TextFonts } from "../../../Theme/fonts";

/**
 * -> text
 * -> fontSize
 * -> fontWeight
 */

function Headings({fontSize,fontWeight,text    }) {
    const classes=useStyles();
    return (
        <div className={classes.textStyle} style={{fontSize:fontSize,fontWeight:fontWeight}}>{text}</div>
    );
}

const useStyles = makeStyles((theme)=>({
    textStyle:{
        fontFamily:'Jura , sans-serif'
    }
}));

export {Headings};
