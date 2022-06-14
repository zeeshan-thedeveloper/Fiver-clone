import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Divider,Grid,Avatar} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './Styles/StyleSheet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons'
function ReviewHolder(props) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div>
                {/* Profile image - rating start - rating number */}
                <div className="ReviewerImageHolder">
                    {/* Image */}
                    <Avatar alt="Remy Sharp" src="/Icons/outline_done_black_24dp.png" />
                </div>
                <div className="ReviewerNameFonts">
                    {/* Name */}
                    <div>Zeeshan Ahmed</div>
                </div>
                <div className="ReviewerRatingContainer">
                    <Rating name="size-small" defaultValue={2} size="small" />
                </div>
                <div className="ReviewerNumberContainer">
                    {/* Rating number */}
                    (5)
                </div>
            </div>
            <div className={classes.rNameAndFlagContainer}>
                {/* Country flag and name */}
                <div className="ReviewerCountryFlagContainer">
                    <FontAwesomeIcon size="sm" icon={faFlag} />
                </div>
                <div className="ReviewerCountryNameContainer">
                   <h6> Pakistan</h6>
                </div>
            </div>
            <div className={classes.reviewerCommentContainer}>
                <div className="ReviewerCommentFonts">
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu
                </div>
            </div>
            <div className={classes.numberOfDaysAfterPublishContainer}>
                {/* Published # days agon */}
                <div className="NumberOfDaysAfterPublishFonts">
                    Published 1 month ago
                </div>
            </div>
            <div className={classes.wasItHelpFullOrNotContainer}>
                {/* Was helpfull or not */}
                <div className="Thumb">
                {/* Thumbs up */}
                <FontAwesomeIcon size="sm" icon={faThumbsUp} />
                </div>
                <div className="ThumbFonts">
                    {/* Help full */}
                    <h6>helpfull</h6>
                </div>
                <div className="Thumb">
                {/* Thumbs up */}
                <FontAwesomeIcon size="sm" icon={faThumbsDown} />
                </div>
                <div className="ThumbFonts">
                    {/* Help full */}
                    <h6>Not helpfull</h6>
                </div>
            </div>
            <div className={classes.cNameAndFlagContainer}>
                {/* Company logo and name */}
                <div className="CompanyLogo">
                    {/* Image */}
                    <Avatar alt="Remy Sharp" src="/Icons/outline_done_black_24dp.png" />
                </div>
                <div className="CompanyNamefont">
                    {/* Name */}
                    <div>CodeinDNA.com</div>
                </div>
            </div>
            <div className={classes.companyCommentContainer}>
                <div className="CompanyCommentFonts">
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu
                </div>
            </div>
            <div className={classes.companyNumberOfDaysAfterPublishContainer}>
                {/* Published # days agon */}
                <div className="CompanyNumberOfDaysAfterPublishFonts">
                    Published 1 month ago
                </div>
            </div>
        </div>   
    );

}

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop:'1%'
    },
    rNameAndFlagContainer:{
        marginTop:-30,
        marginLeft:'7%',
    },
    reviewerCommentContainer:{

    },
    numberOfDaysAfterPublishContainer:{

    },
    wasItHelpFullOrNotContainer:{
        paddingLeft:'7%',
        marginTop:-10
    }
    ,
    cNameAndFlagContainer:{
        paddingLeft:"10%"
    },
    companyNumberOfDaysAfterPublishContainer:{

    }
   }));
export default ReviewHolder;