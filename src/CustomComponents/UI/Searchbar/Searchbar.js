import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { makeStyles } from '@material-ui/core';
import { lightBorder } from '../../../Theme/borders';

const useStyles=makeStyles((theme)=>({
    
    input:{
        fontFamily:"verdana",
        fontSize:"24px",
        color:"blue"
    }
}))
  
export default function Searchbar(props) {

    const width=props.width?props.width:350;
    const height=props.height?props.height:35;
    const opacity=props.opacity?props.opacity:0.9;
    const borderRadius=props.borderRadius?props.borderRadius:"2px";
    const fontFamily=props.fontfamily?props.fontfamily:"Verdana";
    const fontSize=props.fontSize?props.fontSize:"14px";
    const color=props.color?props.color:"black";
    const backgroundColor=props.backgroundColor?props.backgroundColor:"#fff";
    const iconColor=props.iconColor?props.iconColor:"#000";

  return (
    <Paper
      component="form"      
      sx={{ p: '0px 2px', display: 'flex',alignItems: 'center', backgroundColor:backgroundColor, width: width, borderRadius:borderRadius, height:height, opacity:opacity, border:lightBorder, boxShadow:0 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color:color, fontFamily:fontFamily, fontSize:fontSize }}
        placeholder={props.placeholder}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color:iconColor}}/>
      </IconButton>
    </Paper>
  );
}