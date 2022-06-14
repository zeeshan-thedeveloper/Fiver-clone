
import { Grid, makeStyles,InputBase,Button } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faPaperclip,faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { Headingfonts } from '../../../../Theme/fonts';

function MessageCompositionOptionsForMobile(props) {
    const classes=useStyles();
    return (
        <div >
            <Grid container className={classes.container}>
              <Grid item xs={1}>
                {/* Icon */}
                    <div className={classes.iconContainer}>
                        <FontAwesomeIcon icon={faPaperclip} className={classes.icon} size="lg"/>
                    </div>
              </Grid> 
              <Grid item xs={6}>
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
                    <div className={classes.iconContainer}>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" className={classes.icon}/>
                    </div>
              </Grid>
              <Grid item xs={3} >
                    {/* Like icon */}
                    <div className={classes.makeOffer}>
                     <p className={classes.makeOfferText}> Create Offer</p> 
                    </div>
              </Grid>
              <Grid item xs={1}>
                    {/* Like icon */}
                    <div className={classes.iconContainerMoreOpt}>
                        <FontAwesomeIcon icon={faEllipsisV} size="lg" className={classes.icon}/>
                    </div>
              </Grid>
              
            </Grid>
        </div>
    );
}
const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor:"#f2fcfb",
        height:'3rem',
        boxShadow: "1px 0px 1px #9E9E9E"
    },
   
    makeOffer:{
        // backgroundColor:"green"
        boxShadow: "1px 1px 3px #9E9E9E",
        textAlign:'center',
        width:'4rem',
        height:'2rem',
        borderRadius:10,
        marginLeft:'1rem',
        
    },
    makeOfferText:{
       paddingTop:'0.6rem',
       font:Headingfonts.small
    },
    icon:{
        marginTop:14
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#fafafa",
        '&:hover': {
          backgroundColor: "#fafafa",
        },
        marginRight: theme.spacing(2),
        marginLeft:'0.5rem',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        marginTop:"3%",
        borderRadius:15,
        boxShadow: "1px 0px 3px #9E9E9E",
      },
     
      inputRoot: {
        // color: 'inherit',
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

      iconContainer:{
          marginLeft:'0.7rem',
          textAlign:'center'
      },
      iconContainerMoreOpt:{
        marginLeft:'0.7rem',
        textAlign:'left'
      }
}))
export default MessageCompositionOptionsForMobile;