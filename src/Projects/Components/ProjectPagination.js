import Pagination from '@material-ui/lab/Pagination';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

export const ProjectPagination=()=> {
  
    const[page, setPage]=useState(1)
    
    function handlePageChange(event, value){
        setPage(value)
    }
    return (
        <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
        <Box p={1}>
        <Pagination count={4} showFirstButton showLastButton defaultPage={1} onChange={handlePageChange}/>
        </Box>
        </Box>
    );
  }