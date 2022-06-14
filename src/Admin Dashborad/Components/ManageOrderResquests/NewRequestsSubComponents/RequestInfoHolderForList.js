import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { DeleteSharp } from '@material-ui/icons';
import { UpdateRounded } from '@material-ui/icons';
import { EditOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { faFlag,faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'

import { lightBorder } from '../../../../Theme/borders';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headings } from '../../Support/Headings';
const ITEM_HEIGHT = 30;

function OrderInfoHolderForList({showMenueSelectionOpt,...props}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isChecked,setIsChecked] = useState(false);
    const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (opt) => {
    setAnchorEl(null);
    
  };

  const handelCheckBoxChange = () =>{
    setIsChecked(!isChecked);
  }

  const options = [
    'View'
  ];
  const optionsWhileSelection=[
    'Select'
  ]
  return (
    <Card className={classes.root}
        elevation={0}
         
    >
    <CardHeader
  action={
    <div>
    
      <div style={{position:'absolute',left:'0.5rem',top:'0.5rem'}}>
      <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-order-online-shopping-itim2101-lineal-color-itim2101.png"/></div>
      <IconButton aria-label="settings">
        <div>
        <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
      <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <div>
          {
            (showMenueSelectionOpt===true) ? (
              <div>
                 {optionsWhileSelection.map((option,index) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e)=>{
                    // handleClose(index)
                    props.handelOptionSelection(props.data)
                    setAnchorEl(null);
                    
                  }}>
                    {option}
                  </MenuItem>
                ))}
              </div>
            ) : (
              <div>
                {options.map((option,index) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e)=>{
                    // handleClose(index)
                    props.handelOptionSelection(props.data)
                    setAnchorEl(null);
                    
                  }}>
                    {option}
                  </MenuItem>
                ))}
              </div>
            )
          }
        </div>
        
      </Menu>
      </div>
      
      </IconButton>
     

      </div>

        }
        // title={props.data.selectedService}
        // subheader={props.data.selectedSubService}
      />

     
      <CardContent
       style={{cursor:'pointer'}}
       onClick={()=>{
        props.handelOptionSelection(props.data)
      }}
      
      >
        {/* Card content */}
        <div>
            <Grid container>
                <Grid item xs={12} style={{textAlign:'center',padding:'1rem',border:lightBorder}}>
                    <Headings text={`Client Name :  ${props.data.userName}`} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={6} style={{padding:'1rem',border:lightBorder}} >
                    <Headings text={`Request Id :  ${props.data.requestId}`} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={6} style={{padding:'1rem',border:lightBorder}} >
                   <Headings text={`Request Estimated Price :  ${props.data.requestEstimatedPrice}`} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={6} style={{padding:'1rem',border:lightBorder}} >
                    <Headings text={`Duration :  ${props.data.requestDuration}`} fontWeight={'bold'}/>
                </Grid>
                <Grid item xs={6} style={{padding:'1rem',border:lightBorder}} >      
                    <Headings text={`Placement Date :  ${props.data.requestPlacementDate}`} fontWeight={'bold'}/> 
                </Grid>
               
                <Grid item xs={12} style={{textAlign:'center',padding:'1rem',border:lightBorder}}>
                    <Headings text={`Catagory :  ${props.data.selectedService}`} fontWeight={'bold'}/>
                    <Headings text={`Prefered language :  ${props.data.selectedSubService}`} fontWeight={'bold'}/>
                </Grid>
            </Grid>
           
            
            
        </div>
      </CardContent> 
    </Card>
  );
}
const useStyles = makeStyles((theme)=>({
    container:{
        height:250
    },
    root: {
        maxWidth: 345,
        border:lightBorder,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginLeft:'2%',
        marginRight:'2%',
      },
     
}))

export default OrderInfoHolderForList;