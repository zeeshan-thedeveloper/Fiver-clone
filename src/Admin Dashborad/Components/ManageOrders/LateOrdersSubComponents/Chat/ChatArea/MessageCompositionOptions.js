
import { Grid, makeStyles,InputBase } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faPaperclip,faGift,faImage,faThumbsUp,faArrowRight } from '@fortawesome/free-solid-svg-icons';

function MessageCompositionOptions(props) {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <Grid container>
                
                
                <Grid item xs={1} >
                    {/* File icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faPaperclip} size="lg" className={classes.icon}/>
                    </div>
                </Grid>
                
                <Grid item xs={1}>
                    {/* Media icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faImage} size="lg" className={classes.icon}/>
                    </div>
                </Grid>
                
                <Grid item xs={5}>
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
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" className={classes.icon}/>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    {/* Like icon */}
                    <div className={classes.iconContinaer}>
                        <FontAwesomeIcon icon={faThumbsUp} size="lg" className={classes.icon}/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    {/* Like icon */}
                    <div className={classes.makeOffer}>
                        <p className={classes.makeOfferText}>
                            Post request
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
        // boxShadow: "1px 0px 1px #9E9E9E"
    },
    iconContinaer:{
       
        
        width:'100%',
        height: '100%',
        borderRadius:10,
        marginTop:'auto',
        marginBottom:"auto",
        textAlign:'center'
    },
    makeOffer:{
        // backgroundColor:"green"
       
       
       
        width: '100%',
        height: '100%',
        // backgroundColor:'blue',
        marginTop:'3%',
        textAlign:'center'
    },
    makeOfferText:{

    boxShadow: "1px 1px 3px #9E9E9E",
    margin:'auto',
    width: '90%',
    height: '90%',
    borderRadius:10,
    marginTop:'0%',
          paddingTop:'3%',
       fontWeight:'bold'
    },
    icon:{
        marginTop:14
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#f5ffff",
        '&:hover': {
          backgroundColor: "#f5ffff",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        marginTop:"2%",
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