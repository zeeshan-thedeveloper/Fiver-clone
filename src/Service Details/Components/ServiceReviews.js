import React from 'react';
import {Divider,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Styles/StyleSheet.css'
import Rating from '@material-ui/lab/Rating';
import ReviewsList from './ReviewsList';
function ServiceReviews(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.ratingHeaderContainer}>
                <div className="RatingHeading">
                    Rating :
                </div>
                <div className="RatingStartsContainer">
                     <Rating name="size-medium" defaultValue={2} />(23)
                </div>

            </div>

            <Divider /> 
            <div className={classes.reviewContainer}>
                <ReviewsList/>
            </div>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container:{
     paddingBottom:"3%"
    },
    ratingHeaderContainer:{
        paddingBottom:'4%'
    },
    reviewContainer:{
        
    }
   }));
export default ServiceReviews;