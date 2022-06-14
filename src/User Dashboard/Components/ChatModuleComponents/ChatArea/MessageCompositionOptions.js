
import { Grid, makeStyles,InputBase } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faPaperclip,faGift,faImage,faThumbsUp,faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MessageCompositionOptions(props) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={1} style={{marginLeft:0}}>
                    {/* Gif icon */}
                </Grid>
                
                <Grid item xs={1}>
                    {/* File icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faPaperclip} className={classes.icon}/>
                    </div>
                </Grid>
                
                <Grid item xs={1}>
                    {/* Media icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faImage} className={classes.icon}/>
                    </div>
                </Grid>
                
                <Grid item xs={4}>
                    {/* Message box */}
                  
                    <div className={classes.search}>
                    
                     <InputBase
                       placeholder="Type your message"
                       classes={{
                         root: classes.inputRoot,
                         input: classes.inputInput,
                       }}
                       inputProps={{ 'aria-label': 'search' }}
                     />
                    
                    
                    </div>
                    
                </Grid>
                <Grid item xs={1}>
                    {/* Like icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faPaperPlane} className={classes.icon}/>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    {/* Like icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faThumbsUp} className={classes.icon}/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    {/* Like icon */}
                    <div className={classes.makeOffer}>
                        <p className={classes.makeOfferText}>
                            Make Offer
                        </p>
                    </div>
                </Grid>
                
                
            </Grid>
        </div>
    );
}
const useStyles=makeStyles((theme)=>({
    container:{
        // backgroundColor:"blue",
        height:60,
        boxShadow: "1px 0px 1px #9E9E9E"
    },
    iconContinaer:{
        // backgroundColor:"green"
    //     boxShadow: "1px 1px 3px #9E9E9E",
        textAlign:'center',
        height:60,
        width: theme.spacing(6),
        height: theme.spacing(6),
        borderRadius:10,
        marginTop:'7%',
      
    },
    makeOffer:{
        // backgroundColor:"green"
        boxShadow: "1px 1px 3px #9E9E9E",
        textAlign:'center',
       
       
        width: theme.spacing(15),
        height: theme.spacing(6),
        borderRadius:10,
        marginTop:'-4%',
      
    },
    makeOfferText:{
       paddingTop:'8%',
       fontWeight:'bold'
    },
    icon:{
        marginTop:14
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#e4ecf2",
        '&:hover': {
          backgroundColor: "#e4ecf2",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        marginTop:"3%",
        // borderRadius:0,
        boxShadow: "1px 1px 3px #9E9E9E",
      },
     
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '30ch',
        },
      },
}))
export default MessageCompositionOptions;