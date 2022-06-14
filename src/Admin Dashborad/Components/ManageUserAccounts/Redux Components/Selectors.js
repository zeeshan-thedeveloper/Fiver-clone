export const  selectAll = (state)=>{
    return state.userAccountManagerPanel;
}
export const  selectListOfActiveUserAccounts = (state)=>{
    return state.userAccountManagerPanel.listOfActiveUserAccounts;
}
export const  selectListOfBlockedUserAccounts = (state)=>{
    return state.userAccountManagerPanel.listOfBlockedUserAccounts;
}
export const  selectListOfOders = (state)=>{
    return state.userAccountManagerPanel.listOfOrders;
}
export const  selectListOfOffers = (state)=>{
    return state.userAccountManagerPanel.listOfOffers;
}
export const  selectfNumberOfAccountsWithRespectToStatusChart  = (state)=>{
    return state.userAccountManagerPanel.numberOfAccountsWithRespectToStatusChartData;
}


