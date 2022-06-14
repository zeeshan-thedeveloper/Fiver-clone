//ReactJS
import React, {useState} from 'react';

//Material-UI core

import Pagination from '@material-ui/lab/Pagination';
import { useMediaQuery, Box } from '@material-ui/core';
//Material-UI style

//Icons

//Styles and theme

//Custom components

//Resources

export const PostPagination=()=> {
  
    const[page, setPage]=useState(1)
    
    function handlePageChange(event, value){
        setPage(value)
    }
    const isItXS = useMediaQuery("(max-width: 599px)");

    return (
        <Box display="flex" flexDirection={isItXS?"":"row-reverse"} p={isItXS?0:1} m={isItXS?0:1}>
        <Box p={isItXS?0:1}>
        <Pagination count={4} showFirstButton showLastButton defaultPage={1} onChange={handlePageChange}/>
        </Box>
        </Box>
    );
  }