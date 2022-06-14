import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../Theme/borders';
import { Headings } from '../Support/Headings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListOfDeliveredOrders from './DeliveredOrdersSubComponents/ListOfDeliveredOrders'
import { useDispatch } from 'react-redux';
import { loadListOfDeliveredOrders } from './Redux Components/Thunks';
import ViewOrder from './DeliveredOrdersSubComponents/ViewOrder';
function ShowDeliveredOrdersTab(props) {
    const classes = useStyles();
    const [screenSwitcher,setScreenSwitcher]=useState(true);
    const [selectedOrder,setselectedOrder]=useState();
    const [isViewProjectOpen,setIsViewProjectOpen]=useState(false);
    const handelOptionSelection = (selectedProject)=>{
        setselectedOrder(selectedProject);
        handeScreenSwitch();
    }
    const handeScreenSwitch = ()=>{
        setIsViewProjectOpen(!isViewProjectOpen);
    }
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadListOfDeliveredOrders());
    },[])
    return (
        <div className={classes.container}>
            <div>
                    {
                        (isViewProjectOpen===true) ? (
                            
                            <div >
                                <div onClick={handeScreenSwitch} style={{cursor:'pointer'}}>
                                    <ArrowBackIosIcon/>
                                </div>
                                <div style={{marginTop:'1rem'}}>
                                    <ViewOrder selectedOrder={selectedOrder}/>
                                </div>
                            </div>
                        ):(
                            <div style={{marginTop:'1rem'}}>
                                <ListOfDeliveredOrders showMenueSelectionOpt={false}  handelOptionSelection={handelOptionSelection}/>
                            </div>
                        )
                        
                    }
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    topNav:{
       
    }
}))
export default ShowDeliveredOrdersTab;