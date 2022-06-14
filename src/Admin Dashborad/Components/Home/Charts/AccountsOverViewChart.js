import React,{useEffect, useState} from 'react';
import CanvasJSReact from '../../../../Canvas Assets/canvasjs.react';
import produce from 'immer';
import { useSelector,useDispatch } from 'react-redux';
import { selectAll, selectAllAccountsOverViewChartData } from '../Redux compoents/Selectors';
import { loadAccountsOverViewChartData } from '../Redux compoents/Thunks';
import { Headings } from '../../Support/Headings';
import Skeleton from '@material-ui/lab/Skeleton';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 //https://canvasjs.com/react-charts/animated-chart/ : Soruce

function AccountsOverViewChart(props) {
	// console.log("GM:"+props.graphMode)
	const [selectedPeriod,setSelectedPeriod]=useState();
	const [options,setOptions]=useState({
		title: {	
		},
		backgroundColor: "transparent",
		animationEnabled: true,
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type:"bar",
			dataPoints: [
				{ label: "Verified/Active Accounts",  y: 0  },
				{ label: "Pending Accounts", y: 0  },
				{ label: "Blocked", y: 0 },
			]
		}
		]
	});

	const dispatch = useDispatch();
	const {isLoading_LoadAccountsOverViewChartData} = useSelector(selectAll);
	const dataPointsResponse = useSelector(selectAllAccountsOverViewChartData);

	useEffect(()=>{
		//loading data into graph
			handelDataPointsLoad(dataPointsResponse);
		
	},[isLoading_LoadAccountsOverViewChartData,dataPointsResponse])
	useEffect(()=>{
		//When history opt changes.
		dispatch(loadAccountsOverViewChartData({selectedPeriod})); 
	},[selectedPeriod]);



	useEffect(()=>{
		// When graph mode changes
		setOptions(produce(options,draft=>{
			draft.data[0].type=props.graphMode
		}))
		
	},[props.graphMode])

	useEffect(()=>{
		switch(props.selecteHistoryValue)
		{
			case 0:
				// Last year
				console.log("year")
				setSelectedPeriod("year")
			break;

			case 1:
				// Last month
				console.log("Month")
				setSelectedPeriod("month")
			break;

			case 2:
				// Last week
				selectedPeriod("lastWeek")
			break;

			case 3:
				// Last dayconsole.log("here")
				setSelectedPeriod("lastDay")
			break;

			default:

				break;
		}
		
	},[props.selecteHistoryValue])

	const handelDataPointsLoad = (listOfPoints)=>{
		console.log("data points for order over view");
		console.log(listOfPoints);
		
		setOptions(produce(options,draft=>{
			
			listOfPoints.map((item,index)=>{
				draft.data[0].dataPoints[index].label=item.label;
				draft.data[0].dataPoints[index].y=item.y;
			});

			return draft
		}));
	}

	return (
		<div>
			{
				(isLoading_LoadAccountsOverViewChartData) ? (
					<div style={{height:'25rem',marginTop:''}}>
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <div style={{textAlign:'center'}}>
							 <Headings text={"Please wait.. loading data..!!"} fontSize={30} fontWeight={'bold'}/>
						 </div>
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
						 <Skeleton />
					</div>
				):(
					<CanvasJSChart options = {options}/>
				)
			}
		</div>
		);
}

export default AccountsOverViewChart;
