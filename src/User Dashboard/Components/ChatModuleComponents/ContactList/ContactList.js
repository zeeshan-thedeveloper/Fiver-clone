import { Grid, alpha,makeStyles,InputBase } from '@material-ui/core';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Headingfonts} from '../../../../Theme//fonts'
import colors,{ColorGradient} from '../../../../Theme/colors'
import SearchIcon from '@material-ui/icons/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTools } from '@fortawesome/free-solid-svg-icons';
import { dimensions } from '../DesktopChatModule';
import Media from '../Media/Media';
function ContactList(props) {

    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                {/* Top Search bar and settings */}
                <Grid container>
                   
                    <Grid item xs={2} >
                        {/* Avatar */}
                        <Avatar alt="Z" src={"\src\Images\profiles.jpg"} className={classes.large} />
                    </Grid>
                    <Grid item xs={7} >
                        {/*  */}
                        <div className={classes.chatListTitle}>Admin</div>
                    </Grid>
                    <Grid item xs={2} >
                        {/*  */}
                        <div className={classes.contactListSettingBtn}>
                               <FontAwesomeIcon icon={faTools} size="lg"/>
                        </div>
                    </Grid>
                    {/* <Grid item xs={2}  >
                        <div className={classes.contactListEditBtn}>
                               <FontAwesomeIcon icon={faEdit} size="lg"/>
                        </div>
                    </Grid>
                    */}
                   
                </Grid>

                <Grid item xs={12}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                   </div>
                     <InputBase
                       placeholder="Search…"
                       classes={{
                         root: classes.inputRoot,
                         input: classes.inputInput,
                       }}
                       inputProps={{ 'aria-label': 'search' }}
                     />
                      </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.contactsContainer}>
                        {/* <ContactsContainer handelContactClick={props.handelContactClick}/> */}
                        <Media/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{
      boxShadow: "1px 0px 2px #9E9E9E"
    },
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop:"10%",
        marginLeft:'10%'
      },
      chatListTitle:{
       font:Headingfonts.extraSmall ,
       marginTop:'12%',
       marginLeft:'10%'  
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
        marginTop:"4%",
        borderRadius:20,
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      contactListSettingBtn:{
        width: theme.spacing(6),
        height: theme.spacing(5),
        borderRadius:20,
        backgroundColor:"#e4ecf2",
        textAlign:'center',
        paddingTop:'20%',
        marginTop:"15%",
        marginLeft:'11%'
      },

      contactListEditBtn:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        borderRadius:20,
        backgroundColor:"#e4ecf2    ",
        textAlign:'center',
        paddingTop:'20%',
        marginTop:"15%",
        marginLeft:"5%",
        marginLeft:'11%'
      },
      contactsContainer:{
          overflow:'auto',
          marginTop:10,
          height:dimensions.contactListHeight
      }
}))
export default ContactList;
