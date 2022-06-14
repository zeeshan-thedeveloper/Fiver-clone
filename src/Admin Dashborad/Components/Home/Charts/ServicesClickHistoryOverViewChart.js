import React,{useEffect, useState} from 'react';
import CanvasJSReact from '../../../../Canvas Assets/canvasjs.react';
import produce from 'immer';
import { selectAllServiceOverViewChartData } from '../Redux compoents/Selectors';
import { loadServiceOverViewChartData } from '../Redux compoents/Thunks';
import { useSelector,useDispatch } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import { selectAll } from '../Redux compoents/Selectors';
import { Headings } from '../../Support/Headings';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 //https://canvasjs.com/react-charts/animated-chart/ : Soruce


function ServicesClickHistoryOverViewChart(props) {
	// console.log("GM:"+props.graphMode)
	const [selectedPeriod,setSelectedPeriod]=useState(true);
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
				{ label: "Mobile App Developement",  y: 0  },
				{ label: "Wev App Developement", y: 0  },
				{ label: "Web App Developement", y: 0  },
				{ label: "Mobile Game App Developement",  y: 0  },
				{ label: "Desktop Game App development",  y: 0  },
			]
		}
		]
	});

	const dispatch = useDispatch();
	const {isLoading_LoadServiceOverViewChartData} = useSelector(selectAll);
	const dataPointsResponse = useSelector(selectAllServiceOverViewChartData);

	useEffect(()=>{
		//loading data into graph
		
			handelDataPointsLoad(dataPointsResponse);
		
	},[isLoading_LoadServiceOverViewChartData,dataPointsResponse])
	useEffect(()=>{
		//When history opt changes.
		dispatch(loadServiceOverViewChartData({selectedPeriod})); 
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
			(isLoading_LoadServiceOverViewChartData) ? (
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

export default ServicesClickHistoryOverViewChart;
