export const  selectAll = (state)=>{
    return state.requestsManagerPanel;
}

export const  selectListOfNewOrderRequests = (state)=>{
    return state.requestsManagerPanel.listOfNewOrderRequests;
}

export const  selectListOfDeclinedOrderRequests = (state)=>{
    return state.requestsManagerPanel.listOfDeclinedOrderRequests;
}
