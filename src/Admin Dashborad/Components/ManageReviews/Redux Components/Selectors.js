export const selectAll = (state)=>{
    return state.reviewsManagerPanel
}
export const selectListOfNewReviews = (state)=>{
    return state.reviewsManagerPanel.listOfNewReviews;
}
export const selectListOfPublishedReviews = (state)=>{
    return state.reviewsManagerPanel.listOfPublishedReviews;
}
export const selectListOfDiscardedReviews = (state)=>{
    return state.reviewsManagerPanel.listOfDiscardedReviews;
}


