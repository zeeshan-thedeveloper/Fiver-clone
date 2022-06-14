import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import {lightBorder} from  '../../../../Theme/borders'
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import { Headings } from '../../Support/Headings';
import { MultiLineTextFields } from '../../Support/TextFields';
import colors from '../../../../Theme/colors';
import { SimpleTextFields } from '../../Support/TextFields';
function AcceptAndStartOrder(props) {
    const [deliveryDate,setDeliveryDate]=useState(props.selectedOrder.orderDeliveryDate);
    const [deliveryTime,setDeliveryTime]=useState(props.selectedOrder.orderDeliveryTime);
    const [finalPrice,setFinalPrice]=useState(props.selectedOrder.orderEstimatedPrice);
    const [noteToClient,setNoteToClient]=useState();

    const handelStartOrder = ()=>{
        alert("Call the api to start order....");
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={{padding:'1rem'}}>
                    <div style={{border:lightBorder,paddingLeft:'0.5rem'}}>
                        <Headings text={"Order"} fontSize={25} fontWeight={'bold'}/>
                        <Headings text={`Order ID : ${props.selectedOrder.orderId}`} fontSize={15} fontWeight={'bold'}/>
                        <Headings text={`Client User Name : ${props.selectedOrder.userName}`} fontSize={15} fontWeight={'bold'}/>
                        <Headings text={`Catagory : ${props.selectedOrder.selectedService}`} fontSize={15} fontWeight={'bold'}/>
                        <Headings text={`Sub Catagory : ${props.selectedOrder.selectedSubService}`} fontSize={15} fontWeight={'bold'}/>
                        <Headings text={`Date and time of placement : ${props.selectedOrder.orderPlacementDate} @ ${props.selectedOrder.orderPlacementTime} `} fontSize={15} fontWeight={'bold'}/>
                        <Headings text={`Client Estimated Price : ${props.selectedOrder.orderEstimatedPrice}`} fontSize={15} fontWeight={'bold'}/>
                        
                    </div>
                </Grid>
                <Grid item xs={3} style={{padding:'1rem',backgroundColor:'',border:lightBorder}}>
                    <div>
                        <div style={{display:'block'}}>
                        <SimpleTextFields 
                                    fontSize={15} 
                                    fontWeight={'bold'}
                                    label={"Delivey Date : DD-MM-YYYY"} 
                                    value={deliveryDate} 
                                    setValue={setDeliveryDate}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'10rem'}
                                    height={10}
                                    />
                        </div>
                        <div style={{display:'block',marginTop:'1rem'}}>
                        <SimpleTextFields 
                                    fontSize={15} 
                                    fontWeight={'bold'}
                                    label={"Delivey Time : HH-MIN AM/PM"} 
                                    value={deliveryTime} 
                                    setValue={setDeliveryTime}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'10rem'}
                                    height={10}
                                    />
                        </div>
                        <div style={{marginTop:'1rem'}}>
                        <SimpleTextFields 
                                    fontSize={15} 
                                    fontWeight={'bold'}
                                    label={"Final Price"} 
                                    value={finalPrice} 
                                    setValue={setFinalPrice}
                                    labelFontColor={"#a39f93"}
                                    labelFontWeight={'bold'}
                                    labelFontSize={13}
                                    width={'10rem'}
                                    height={10}
                                    />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{padding:'1rem',border:lightBorder}}>
                    <MultiLineTextFields 
                                fontSize={15} 
                                fontWeight={'bold'}
                                label={"Note to client"} 
                                value={noteToClient} 
                                setValue={setNoteToClient}
                                labelFontColor={"#a39f93"}
                                labelFontWeight={'bold'}
                                rows={4}
                                width={'10rem'}  
                                
                                />
                    <div style={{textAlign:'center',marginTop:'2rem'}}>

                    <RoundButton
                                      title={"Start"}
                                      width={100}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={handelStartOrder}
                                     />
                    </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default AcceptAndStartOrder;