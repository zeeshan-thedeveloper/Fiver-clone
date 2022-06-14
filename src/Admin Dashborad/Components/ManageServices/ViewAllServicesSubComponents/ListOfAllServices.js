import React, { useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { ImageList,ImageListItem} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { selectAll, selectListOfServices } from '../Redux Components/Selectors';
import ServiceHolder from './ServiceHolder';
import { Headings } from '../../Support/Headings';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector,useDispatch } from 'react-redux';
function ListOfAllServices({showMenueSelectionOpt=false,...props}) {
    const classes =useStyles();
    const [list,setList]=useState([]);
    const [listOfServices,setlistOfServices]=useState([]);
    const [numberOfPage,setNumberOfPage]=useState();
    const [currentOpenPage,setCurrentOpenPage]=useState(0);
  
    const [startIndexOfPage,setStartIndexOfPage]=useState(0);
    const [endIndexOfPage,setEndIndexOfPage]=useState(9);

    const listOdServices_FromStore = useSelector(selectListOfServices); //this will be updated and will cause auto render as soon as sotre get updated.
    const {isLoading_LoadListOfServices} = useSelector(selectAll);

    useEffect(()=>{
        //setting up list of projects in project's rneder list.
       setlistOfServices(listOdServices_FromStore);
       setNumberOfPage(Math.ceil((listOdServices_FromStore.length/9)))
    },[listOdServices_FromStore]);

    useEffect(()=>{
       updateList(startIndexOfPage,(listOfServices.length>=endIndexOfPage) ? endIndexOfPage : listOfServices.length);
    },[listOfServices,endIndexOfPage]);
    const updateList = (startIndex,endIndex)=>{
        setList(listOfServices.map((item,index)=>{
            if(((index)>=startIndex)&&((index)<endIndex))
            {
                return(      
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <ServiceHolder  cols={item.cols} showMenueSelectionOpt={showMenueSelectionOpt} handelOptionSelection={props.handelOptionSelection}  data={item}/>
                    </ImageListItem>
                    )   
            }
        }));
    }

    const handelPageChange = (event,pageNumber)=>{

        setCurrentOpenPage((prev)=>{
            if(currentOpenPage<prev)
            {
                setStartIndexOfPage((prevSI)=>{
                    return prevSI+9;
                })
                setEndIndexOfPage((prevSE)=>{
                    return prevSE+9;
                }); 
                return (prev)
            }
            else
            {
                setStartIndexOfPage((prevSI)=>{
                    return prevSI-9;
                })
                setEndIndexOfPage((prevSE)=>{
                    return prevSE-9;
                })
                return (prev)
            }
           
        })

    }

    return (
        <div>
            <div>
                                        
                        {
                            (isLoading_LoadListOfServices===true) ? (
                                <div>
                                    <Skeleton />
                                    <Skeleton />
                                    <div style={{marginTop:"1%",paddingBottom:'1%'}}><Headings text={"Fetching services.."} fontSize={30}/> </div>
                                    <Skeleton />
                                    <Skeleton />
                                   
                                </div>
                               
                            ) : (
                        <div>
                                <div style={{marginTop:"1%",paddingBottom:'1%'}}> <Headings text={"All Services"} fontSize={30}/> </div>
                       <ImageList rowHeight={350} className={classes.imageList} cols={3}>
                            {list}
                       </ImageList>
                       </div>
                        )
                            
                        }                    
                                            
                   <div>
                    <Pagination onChange={(e)=>{
                        setCurrentOpenPage(parseInt(e.target.outerText));
                        handelPageChange(e);
                    }} count={numberOfPage} variant="outlined" shape="rounded" />
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    container:{

    },
    projectHolderContainer:{
        border:'1px solid #f7f2f7'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: '100%',
        marginTop:"1%"
      },
}))

export default ListOfAllServices;