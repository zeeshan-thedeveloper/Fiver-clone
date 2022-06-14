import { applyMiddleware, createStore,compose } from "redux";
import { combineReducers } from "redux";
import { homeReducer } from "../Components/Home/Redux compoents/HomePanelSlice";
import { projectManagerReducer } from "../Components/ManageProjects/Redux Components/ProjectManagerSlice";
import { serviceManagerReducer } from "../Components/ManageServices/Redux Components/ServiceManagerSlice";
import {ordersManagerReducer} from '../Components/ManageOrders/Redux Components/OrderManagerSlice';
import { requestManagerReducer } from "../Components/ManageOrderResquests/Redux Components/RequestManagerSlice";
import { userAccountManagerReducer } from "../Components/ManageUserAccounts/Redux Components/UserAccountsManagerSlice";
import { reviewsManagerReducer } from "../Components/ManageReviews/Redux Components/ReviewsManagerSlice";
import { offersManagerReducer } from "../Components/ManageOffers/Redux Components/offersManagerSlice";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(preloadedState) {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(combineReducers({
                    homePanel:homeReducer,
                    projectManagerPanel:projectManagerReducer,
                    serviceManagerPanel:serviceManagerReducer,
                    ordersManagerPanel:ordersManagerReducer,
                    requestsManagerPanel:requestManagerReducer,
                    userAccountManagerPanel:userAccountManagerReducer,
                    reviewsManagerPanel:reviewsManagerReducer,
                    offersManagerPanel:offersManagerReducer,
                  }), preloadedState, composedEnhancers)
  return store
}
