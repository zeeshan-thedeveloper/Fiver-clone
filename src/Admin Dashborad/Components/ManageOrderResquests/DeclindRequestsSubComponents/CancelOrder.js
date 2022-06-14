import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Headings } from '../../Support/Headings';
import { MultiLineTextFields } from '../../Support/TextFields';
import colors from '../../../../Theme/colors';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
function CancelOrder(props) {
    const [reasonOfCancel,setReasonOfCancel]=useState();
    const [noteToClient,setNoteToClient]=useState();
    const handelRejectBtnEvent = ()=>{
        alert("Call the thunk to reject request...");
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={8} style={{backgroundColor:''}}>
                <div style={{display:'inline-block'}}>
                    <Headings text={"Request cancelation "} fontSize={25} fontWeight={'bold'}/>
                </div>
                <div style={{display:'inline-block',marginLeft:'1rem'}}>
                    <Headings text={`Request ID : ${props.selectedRequest.requestId}`} fontSize={20} fontWeight={''}/>
                </div>
                
                <div style={{marginTop:'1rem'}}>
                <MultiLineTextFields 
                                fontSize={20} 
                                fontWeight={'bold'}
                                label={"Reason to cancel"} 
                                value={reasonOfCancel} 
                                setValue={setReasonOfCancel}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={10}
                                width={'35rem'}  
                                
                                />
                </div>
                </Grid>
                <Grid item xs={4}>
                <div style={{marginTop:'3.3rem'}}>
                <MultiLineTextFields 
                                fontSize={20} 
                                fontWeight={'bold'}
                                label={"Note to client"} 
                                value={noteToClient} 
                                setValue={setNoteToClient}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={5}
                                width={'15rem'}  
                                
                                />
                </div>
                <div style={{textAlign:'center',marginTop:'2rem'}}>
                <RoundButton
                      title={"Reject"}
                      width={150}
                      color={colors.white}
                      bgColor={colors.secondary}
                      margin={"0% 0% 0%  0%"}
                      handleClick={handelRejectBtnEvent}
                     />
                </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default CancelOrder;