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

function UserAccountDataHolderForList({showMenueSelectionOpt,...props}) {
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
        title={props.data.firstName}
        subheader={props.data.email}
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
              <Grid item xs={12}>
                {/* Profile */}
                  <div style={{marginLeft:'6.5rem'}}>
                       <Avatar alt={props.data.firstName} src={props.data.profileImage}  style={{height:100,width:100}} />
                  </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} style={{marginTop:'1rem'}}> 
                    {/* Name */}
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Name : ${props.data.firstName} ${props.data.lastName} `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`User Name : ${props.data.userName}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Last Seen : ${props.data.lastSeen} `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Last login : ${props.data.lastLoginDate}`} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Total Spent Ammount : ${props.data.totalAmmountSpent}`} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Countary : ${props.data.countary}`} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Since  : ${props.data.accountCreationDate}`} fontSize={18} fontWeight={'bold'} />
                    </div>
                    
                  </Grid>
                 </Grid>
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

export default UserAccountDataHolderForList;