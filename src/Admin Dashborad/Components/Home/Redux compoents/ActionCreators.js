export const  addOrdersOverViewChartData = (payload)=>{
    return {
        type:'homePanel/addOrdersOverViewChartData',
        payload
    }
},
export const  addAccountsOverViewChartData = (payload)=>{
    return {
        type:'homePanel/addAccountsOverViewChartData',
        payload
    }
},
export const  addServiceOverViewChartData = (payload)=>{
    return {
        type:'homePanel/addServiceOverViewChartData',
        payload
    }
},

export const updateOrdersOverViewChartData = (payload)=>{
    return {
        type:"homePanel/updateOrdersOverViewChartData",
        payload
    }
}
export const updateAccountsOverViewChartData = (payload)=>{
    return {
        type:"homePanel/updateAccountsOverViewChartData",
        payload
    }
}
export const updateServiceOverViewChartData = (payload)=>{
    return {
        type:"homePanel/updateServiceOverViewChartData",
        payload
    }
}

export const updateRatings = (payload)=>{
    return {
        type:'homePanel/updateRatings',
        payload
    }
}

export const updateRatedOrdersPercentage = (payload)=>{
    return {
        type:'homePanel/updateRatedOrdersPercentage',
        payload
    }
}
