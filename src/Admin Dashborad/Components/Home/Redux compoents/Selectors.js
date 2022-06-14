export const selectAll = ((state)=>{
    return state.homePanel;
})
export const  selectEarnings = ((state)=>{
    return state.homePanel.earnings
})
export const  selectAvgSellingPrice = ((state)=>{
    return state.homePanel.avgSellingPrice
})
export const  selectOrdersCompleted = ((state)=>{
    return state.homePanel.ordersCompleted
})
export const  selectOnlineUsers = ((state)=>{
    return state.homePanel.onlineUsers
})
export const  selectOnlineTeamMembers = ((state)=>{
    return state.homePanel.onlineTeamMembers
})
export const  selectEarnedInThisMonth = ((state)=>{
    return state.homePanel.earnedInThisMonth
})
export const  selectAllOrdersOverViewChartData = ((state)=>{
    return state.homePanel.ordersOverViewChartData
})
export const  selectAllAccountsOverViewChartData = ((state)=>{
    return state.homePanel.accountsOverViewChartData
})
export const  selectAllServiceOverViewChartData = ((state)=>{
    return state.homePanel.serviceOverViewChartData
})

export const  selectByIdOrdersOverViewChartData =(args)=>(state)=>{
    return state.homePanel.ordersOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}
export const  selectByIdAccountsOverViewChartData =(args)=>(state)=>{
    return state.homePanel.accountsOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}
export const  selectByIdServiceOverViewChartData =(args)=>(state)=>{
    return state.homePanel.serviceOverViewChartData.filter((item)=>{
        if(item.id===args.id)
        {
            return item
        }
    })
}

export const selectRatings = (state)=>{
    return state.homePanel.ratings
}
export const selectRatedOrdersPercentage =(state)=>{
    return state.homePanel.ratedOrdersPercentage
}
