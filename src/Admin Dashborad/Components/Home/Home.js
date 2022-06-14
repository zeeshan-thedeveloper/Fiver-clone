import { Grid, makeStyles } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { Headings } from '../Support/Headings';
import { lightBorder } from '../../../Theme/borders';
import ColumnChart from './Charts/OrderOverViewChart';
import OrderOverViewContainer from './OrderOverViewContainer';
import AccountsOverViewContainer from './AccountsOverViewContainer';
import ServicesClickHistoryOverViewContainer from './ServicesClickHistoryOverViewContainer';
import RatingsCounterContainer from './RatingsCounterContainer'
import MEGAControllsCotnainer from './MEGAControllsCotnainer';
import SummuryBarContainer from './SummuryBarContainer';
import { selectAll } from './Redux compoents/Selectors';
import { useSelector,useDispatch } from 'react-redux';
import { 
        loadAccountsOverViewChartData, loadOrdersOverViewChartData, 
        loadRatedOrdersPercentageData, loadRatingsData, loadServiceOverViewChartData,
        loadSummuryData } from './Redux compoents/Thunks';
function Home(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const sliceState = useSelector(selectAll);
    useEffect(()=>{
        //Calling all apis of to update slice.
        dispatch(loadAccountsOverViewChartData({selectedPeriod:"default"}));
        dispatch(loadOrdersOverViewChartData({selectedPeriod:"default"}));
        dispatch(loadServiceOverViewChartData({selectedPeriod:"default"}));
        dispatch(loadSummuryData());
        dispatch(loadRatedOrdersPercentageData());
        dispatch(loadRatingsData());
        
        console.log("Home slice state")
        console.log(sliceState);
    },[])
    return (
        <div>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                  <SummuryBarContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <OrderOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <AccountsOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <ServicesClickHistoryOverViewContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <RatingsCounterContainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
           <Grid container>
               <Grid item xs={1}></Grid>
               <Grid item xs={10} style={{paddingTop:'4rem'}}>
                   <MEGAControllsCotnainer/>
               </Grid>
               <Grid item xs={1}></Grid>
           </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    summuryDivContainer:{
        borderRight:lightBorder,
        height:'8rem',
        textAlign:'center',
        paddingTop:'2rem'
    }
}))
export default Home;