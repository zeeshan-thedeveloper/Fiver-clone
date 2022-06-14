import React, { useState } from 'react';
import {Grid} from '@material-ui/core'
import {Headings} from '../../Support/Headings'
import {lightBorder} from '../../../../Theme/borders'
import Link from '@mui/material/Link';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import {SimpleTextFields} from '../../Support/TextFields'
function ViewReview(props) {
  const [reasonOfDiscard,setReasonOfDiscard]=useState();
    return (
        <div>
            <Grid item xs={12} style={{border:lightBorder,padding:'1rem'}}>
                            <Grid container>
                                <Grid item xs={5} style={{backgroundColor:''}}>
                                    {/* Order id and  buyer and date */}
                                    <Headings text={`Review ID: ${props.selectedReview.reviewId}`} fontSize={25} fontWeight={'bold'}/>
                                    <Grid container>
                                        <Grid item xs={2} style={{backgroundColor:''}}>
                                            {/* Buyer name */}
                                            <Headings text={`Buyer:`} fontSize={15} fontWeight={'bold'}/>            
                                        </Grid>
                                        <Grid item xs={6} style={{marginLeft:'0.4rem'}}>
                                            {/* Buyer name */}
                                            <Link
                                              component="button"
                                              variant="body2"
                                              onClick={() => {
                                                // console.info("I'm a button.");
                                                alert("Open profile")
                                              }}
                                            >
                                              {
                                                  <Headings text={`${props.selectedReview.reviewClientUserName} (View History) |`} fontSize={16} fontWeight={'bold'}/>
                                              }
                                            </Link>            
                                        </Grid>
                                        
                                       
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* View service */}
                                    <Headings text={`${props.selectedReview.reviewTargetService}`} fontSize={25} fontWeight={'bold'}/>
                                    <Headings text={`${props.selectedReview.reviewTargetSubService}`} fontSize={15} fontWeight={'bold'}/>
                                
                                </Grid> 
                                <Grid item xs={4} style={{textAlign:'right'}}>
                                    {/* Price and order type. */}
                                    <Headings text={`Rating ${props.selectedReview.reviewRatingScore} stars`} fontSize={25} fontWeight={'bold'}/>
                                </Grid>
                            </Grid>
            <Grid container>                
            <Grid item xs={8} style={{marginTop:'1rem'}}>
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={`ID : ${props.selectedReview.reviewId}  `} fontSize={17} fontWeight={'bold'}/>
                </div>
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={`Name : ${props.selectedReview.reviewClientFirstName}  ${props.selectedReview.reviewClientLastName}`} fontSize={17} fontWeight={'bold'}/>
                </div>
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={`Email : ${props.selectedReview.reviewClientEmail}  `} fontSize={17} fontWeight={'bold'}/>
                </div>
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={`Country : ${props.selectedReview.reviewClientCountary}  `} fontSize={17} fontWeight={'bold'}/>
                </div>
           
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={` Placement Date and time : ${props.selectedReview.reviewPlacementDate} @  ${props.selectedReview.reviewPlacementTime}`} fontSize={17} fontWeight={'bold'}/>
                </div>
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={` Publish Date and time : ${props.selectedReview.reviewPublishmentDate} @  ${props.selectedReview.reviewPublishmentTime}`} fontSize={17} fontWeight={'bold'}/>
                </div>
                
                <div style={{borderBottom:lightBorder}}>
                  <Headings text={`Review: ${props.selectedReview.reviewComment}`} fontSize={17} fontWeight={'bold'}/>
                </div>
                <div style={{marginTop:'1rem'}}>
                    <div style={{display:'inline',}}>
                    <SimpleTextFields 
                                    fontSize={15} 
                                    fontWeight={'bold'}
                                    label={"Reason"} 
                                    value={reasonOfDiscard} 
                                    setValue={setReasonOfDiscard}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'40rem'}
                                    height={10}
                                    />
                    </div>
                    <div style={{marginTop:'1rem'}}>
                    <RoundButton
                                      title={"Discard"}
                                      width={100}
                                      color={colors.white}
                                      bgColor={colors.secondary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        alert("Discard")
                                    }}
                                     />
                    </div>
                </div>
           </Grid>
           <Grid item xs={4}>
               <div style={{textAlign:'center'}}>
                   <img height={200} width={200} src={props.selectedReview.reviewClientImage}/>
               </div>
           </Grid>
           </Grid>
                           
    </Grid>
        </div>
    );
} 

export default ViewReview;