import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Grid } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
function ContactListTop(props) {
    return (
        <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
                {/* Drop down */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={1}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                      disableUnderline
                    >
                      <option value={1}>All conversation</option>
                      <option value={2}>Un read</option>
                      <option value={3}>Stared</option>
                      <option value={4}>Archived</option>
                      <option value={5}>Spam</option>
                      <option value={6}>Custom offers</option>
                      
                    </NativeSelect>
                  </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3} style={{textAlign:'right',paddingTop:'0.5rem'}}>
                {/* Search icon */}
                <SearchIcon/>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
}

export default ContactListTop;