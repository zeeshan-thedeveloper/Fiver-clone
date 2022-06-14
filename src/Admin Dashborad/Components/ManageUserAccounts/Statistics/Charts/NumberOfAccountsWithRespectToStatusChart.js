import React,{useEffect, useState} from 'react';
import CanvasJSReact from '../../../../../Canvas Assets/canvasjs.react';
import produce from 'immer';
import { useSelector,useDispatch } from 'react-redux';
import {selectAll,selectfNumberOfAccountsWithRespectToStatusChart} from '../../Redux Components/Selectors'
import { loadListOfNumberOfAccountsWithRespectToStatusChart } from '../../Redux Components/Thunks';
import { Headings } from '../../../Support/Headings';
import Skeleton from '@material-ui/lab/Skeleton';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 //https://canvasjs.com/react-charts/animated-chart/ : Soruce

function NumberOfAccountsWithRespectToStatusChart(props) {
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
				{ label: "Active Accounts",  y: 0  },
				{ label: "Blocked Accounts", y: 0  },
				{ label: "Complete Accounts", y: 0 },
				{ label: "In-Complete Accounts", y: 0 },
			]
		}
		]
	});

	const dispatch = useDispatch();
	const {isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart} = useSelector(selectAll);
	const dataPointsResponse = useSelector(selectfNumberOfAccountsWithRespectToStatusChart);

	useEffect(()=>{
		//loading data into graph
			handelDataPointsLoad(dataPointsResponse);
		
	},[isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart,dataPointsResponse])
	useEffect(()=>{
		//When history opt changes.
		dispatch(loadListOfNumberOfAccountsWithRespectToStatusChart({selectedPeriod})); 
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
				(isLoading_loadListOfNumberOfAccountsWithRespectToStatusChart) ? (
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

export default NumberOfAccountsWithRespectToStatusChart;
