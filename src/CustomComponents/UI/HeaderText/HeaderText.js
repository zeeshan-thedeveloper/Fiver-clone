import { Typography } from "@mui/material";
import React from "react";

export default function HeaderText(props) {
  const text = props.text;
  const variant=props.variant?props.variant:'h5';
  const fontFamily=props.fontfamily?props.fontfamily:"Verdana";
  const fontSize=props.fontSize?props.fontSize:"14px";
  const color=props.color?props.color:"black";

  
  return <Typography variant={variant} sx={{
    fontFamily:fontFamily, fontSize:fontSize, color:color,
  }}>{text}</Typography>;
}
