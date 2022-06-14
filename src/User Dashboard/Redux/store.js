import { configureStore } from "@reduxjs/toolkit";

//Reducers

//Brought from loginform of Homepage
import userProfileReducer from "../../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";

import recentlyViewedProjectsReducer from "./slices/recentlyViewedProjectsSlice";
import recentlyViewedServicesReducer from "./slices/recentlyViewedServicesSlice";
import viewOrderReducer from "./slices/viewOrderSlice";
import allOrdersReducer from "./slices/allOrdersSlice";
import trendingServicesReducer from "./slices/trendingServicesSlice";
import personalInfoReducer from "./slices/personalInfoSlice";
import balanceInfoReducer from "./slices/balanceInfoSlice";
import notificationInfoReducer from "./slices/notificationInfoSlice";
import paymentInfoReducer from "./slices/paymentInfoSlice";
import securityInfoSlice from "./slices/securityInfoSlice";
import dashboardNotificationsReducer from "./slices/dashboardNotificationsSlice";
import criticalSectionReducer from "./slices/criticalSectionSlice"

import previousPostFiltersReducer from "./slices/previousPostsFilterSlice"
import previousPostsReducer from "./slices/previousPostsSlice"
import viewPostReducer from "./slices/viewPostSlice"

//From Nageeta's work
import latestProjectsReducer from "../../Home/Components/Slices/HomePageSlices/LatestProjectSlice";
import allServicesReducer from "../../Home/Components/Slices/HomePageSlices/ServicesSlices";
import latestReviewsReducer from "../../Home/Components/Slices/HomePageSlices/UserReviewsSlice";
import loginDetialsReducer from "../../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";

import {
  LATESTPROJECTS,
  ALLSERVICES,
  LATESTREVIEWS,
  SEARCHBYCATEGORY,
} from "../../Home/Components/Slices/HomePageSlices/HomePageConstants";
import {
  LOGININDETAILS,
  REGISTERDETAILS,
} from "../../Home/Components/Slices/AuthenticationPageSlices/AuthenticationPageConstants";
import {
  TEAMDETAIL,
  CONTACTFORMDETAILS,
} from "../../Home/Components/Slices/AboutPageSlices/AboutPageConstant";
import teamDetailReducer from "../../Home/Components/Slices/AboutPageSlices/OurTeamSlices";
import searchbyCategoryReducer from "../../Home/Components/Slices/HomePageSlices/SearchCardSlice";
import contactFormDetaildReducer from "../../Home/Components/Slices/AboutPageSlices/ContactUsGlobalFormSlice";
import registerDetailsReducer from "../../Home/Components/Slices/AuthenticationPageSlices/RegisterDetailsSlice";


const store = configureStore({
  reducer: {
    //temporarily replace userProfileKey with loginDetails
    loginDetails: userProfileReducer,
    recentProjects: recentlyViewedProjectsReducer,
    recentServices: recentlyViewedServicesReducer,
    viewOrder: viewOrderReducer,
    allOrders: allOrdersReducer,
    trendingServices: trendingServicesReducer,
    dashboardNotifications:dashboardNotificationsReducer,

    personalInfo: personalInfoReducer,
    balanceInfo: balanceInfoReducer,
    notificationInfo: notificationInfoReducer,
    paymentInfo: paymentInfoReducer,
    securityInfo: securityInfoSlice,
    criticalInfo:criticalSectionReducer,
    previousPostFilters:previousPostFiltersReducer,
    previousPosts:previousPostsReducer,
    viewPost:viewPostReducer,

    [LATESTPROJECTS]: latestProjectsReducer,
    [ALLSERVICES]: allServicesReducer,
    [LATESTREVIEWS]: latestReviewsReducer,
    [LOGININDETAILS]: loginDetialsReducer,
    [TEAMDETAIL]: teamDetailReducer,
    [SEARCHBYCATEGORY]: searchbyCategoryReducer,
    [CONTACTFORMDETAILS]: contactFormDetaildReducer,
    [REGISTERDETAILS]: registerDetailsReducer,
  },
});

export default store;
