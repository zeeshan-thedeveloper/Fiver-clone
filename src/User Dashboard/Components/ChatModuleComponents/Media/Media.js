import { Grid, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import { Headingfonts } from '../../../../Theme/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile,faImage,faLink } from '@fortawesome/free-solid-svg-icons';
function Media(props) {
    const classes=useStyles();
    const [mediaContent,setMediaContent]=useState("Images");
    return (
        <div>
            <div className={classes.mediaTitle}>
                Media 
            </div>
            {/* <div className={classes.profileImageConainer}>
                <Avatar alt="Z" src={"\src\Images\profiles.jpg"} className={classes.large} />
            </div>
            <div className={classes.nameContainer}>
                Zeeshan
            </div>
            <div className={classes.emailContainer}>
                zeeshanahedd0010@gmail.com
            </div>
            <div className={classes.phoneContainer}>
                03053206339
            </div>
            <div className={classes.sinceContainer}>
                Pakistan
            </div> */}
            <div className={classes.media}>
                <Grid container>
                    <Grid item xs={4} className={classes.tabItem} onClick={()=>{setMediaContent("Images")}}>
                        {/* Images */}
                        <FontAwesomeIcon icon={faImage} size="lg"/>
                        <p className={classes.tabText}>Images</p>
                    </Grid>
                    <Grid item xs={4} className={classes.tabItem} onClick={()=>{setMediaContent("Files")}}>
                        {/* File */}
                        <FontAwesomeIcon icon={faFile} size="lg"/>
                        <p className={classes.tabText}>Files</p>
                    </Grid>
                    <Grid item xs={4} className={classes.tabItem} onClick={()=>{setMediaContent("Links")}}>
                        {/* Links */}
                        <FontAwesomeIcon icon={faLink} size="lg"/>
                        <p className={classes.tabText}>Links</p>
                    </Grid>
                    
                </Grid>
            </div>
            <div>
                {/* Media content */}
                {mediaContent}
            </div>
            
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    large:{
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginTop:"10   %",
        marginLeft:'30%'
      },
      profileImageConainer:{
        //   backgroundColor:"blue"
        marginTop:'10%'
      },
      nameContainer:{
        textAlign:'center',
        fontSize:20
      },
      emailContainer:{
        textAlign:'center',
        fontSize:15
      },
      phoneContainer:{
        textAlign:'center',
        fontSize:15
      },
      sinceContainer:{
        textAlign:'center',
        fontSize:15
      }
      ,
      media:{
        marginTop:'5%'
      },
      tabItem:{
        boxShadow: "1px 0px 1px #9E9E9E",
        height:50,
        textAlign:'center',
        paddingTop:'2%',
        cursor:"pointer"
      },
      tabText:{
          marginTop:-1,
          fontSize:13       
      },
      mediaTitle:{
        font:Headingfonts.extraSmall,
        marginLeft:'0.5rem'
      }
     
}))

export default Media;