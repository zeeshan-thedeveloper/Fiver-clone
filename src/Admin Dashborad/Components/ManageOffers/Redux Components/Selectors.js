export const selectAll=(state)=>{
    return state.offersManagerPanel;

}
export const selectListOfAllOffers=(state)=>{
    return state.offersManagerPanel.listOfAllOffers
}
export const selectBasicInfoOfCreateNewOffer=(state)=>{
    return state.offersManagerPanel.tempCreateNewOfferDataHolder.BasicInfo;
}
export const selectMediaInfoOfCreateNewOffer=(state)=>{
    return state.offersManagerPanel.tempCreateNewOfferDataHolder.Media;
}

