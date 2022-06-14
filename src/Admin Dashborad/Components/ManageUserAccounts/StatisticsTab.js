import {Grid} from '@material-ui/core';
import React from 'react';
import NumberOfAccountsWithRespectToStatusContainer from './Statistics/NumberOfAccountsWithRespectToStatusContainer'
function StatisticsTab(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <NumberOfAccountsWithRespectToStatusContainer/>
                </Grid>
            </Grid>
        </div>
    );
}

export default StatisticsTab;