import { configureStore } from "@reduxjs/toolkit";
import latestProjectsReducer from "../Home/Components/Slices/HomePageSlices/LatestProjectSlice";
import allServicesReducer from "../Home/Components/Slices/HomePageSlices/ServicesSlices";
import latestReviewsReducer from "../Home/Components/Slices/HomePageSlices/UserReviewsSlice";
import loginDetialsReducer from "../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";
import {
  LATESTPROJECTS,
  ALLSERVICES,
  LATESTREVIEWS,
  SEARCHBYCATEGORY,
  TRENDINGTECHNOLOGIES,
} from "../Home/Components/Slices/HomePageSlices/HomePageConstants";
import {
  LOGININDETAILS,
  REGISTERDETAILS,
  RESETPASSWORD,
} from "../Home/Components/Slices/AuthenticationPageSlices/AuthenticationPageConstants";
import {
  TEAMDETAIL,
  CONTACTFORMDETAILS,
} from "../Home/Components/Slices/AboutPageSlices/AboutPageConstant";
import teamDetailReducer from "../Home/Components/Slices/AboutPageSlices/OurTeamSlices";
import searchbyCategoryReducer from "../Home/Components/Slices/HomePageSlices/SearchCardSlice";
import contactFormDetaildReducer from "../Home/Components/Slices/AboutPageSlices/ContactUsGlobalFormSlice";
import registerDetailsReducer from "../Home/Components/Slices/AuthenticationPageSlices/RegisterDetailsSlice";
import resetPasswordReducer from "../Home/Components/Slices/AuthenticationPageSlices/ResetPasswordSlice";
import { SUBSERVICES } from "../Home/Components/Slices/SubServicesPageSlices/SubServiceConstants";
import subServicesReducer from "../Home/Components/Slices/SubServicesPageSlices/SubServiceSlice";
import trendingTechnologiesReducer from "../Home/Components/Slices/HomePageSlices/TrendingTechnologiesSlice";
import { homeReducer } from "../Admin Dashborad/Components/Home/Redux compoents/HomePanelSlice";
import { projectManagerReducer } from "../Admin Dashborad/Components/ManageProjects/Redux Components/ProjectManagerSlice";
import { serviceManagerReducer } from "../Admin Dashborad/Components/ManageServices/Redux Components/ServiceManagerSlice";
import {ordersManagerReducer} from '../Admin Dashborad/Components/ManageOrders/Redux Components/OrderManagerSlice';
import { requestManagerReducer } from "../Admin Dashborad/Components/ManageOrderResquests/Redux Components/RequestManagerSlice";
import { userAccountManagerReducer } from "../Admin Dashborad/Components/ManageUserAccounts/Redux Components/UserAccountsManagerSlice";
import { reviewsManagerReducer } from "../Admin Dashborad/Components/ManageReviews/Redux Components/ReviewsManagerSlice";
import { offersManagerReducer } from "../Admin Dashborad/Components/ManageOffers/Redux Components/offersManagerSlice";

import userProfileReducer from "../Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";

import recentlyViewedProjectsReducer from "../User Dashboard/Redux/slices/recentlyViewedProjectsSlice";
import recentlyViewedServicesReducer from "../User Dashboard/Redux/slices/recentlyViewedServicesSlice";
import viewOrderReducer from "../User Dashboard/Redux/slices/viewOrderSlice";
import allOrdersReducer from "../User Dashboard/Redux/slices/allOrdersSlice";
import trendingServicesReducer from "../User Dashboard/Redux/slices/trendingServicesSlice";
import personalInfoReducer from "../User Dashboard/Redux/slices/personalInfoSlice";
import balanceInfoReducer from "../User Dashboard/Redux/slices/balanceInfoSlice";
import notificationInfoReducer from "../User Dashboard/Redux/slices/notificationInfoSlice";
import paymentInfoReducer from "../User Dashboard/Redux/slices/paymentInfoSlice";
import securityInfoSlice from "../User Dashboard/Redux/slices/securityInfoSlice";
import dashboardNotificationsReducer from "../User Dashboard/Redux/slices/dashboardNotificationsSlice";
import criticalSectionReducer from "../User Dashboard/Redux/slices/criticalSectionSlice"

import previousPostFiltersReducer from "../User Dashboard/Redux/slices/previousPostsFilterSlice"
import previousPostsReducer from "../User Dashboard/Redux/slices/previousPostsSlice"
import viewPostReducer from "../User Dashboard/Redux/slices/viewPostSlice"
export default configureStore({
  reducer: {
    [LATESTPROJECTS]: latestProjectsReducer,
    [ALLSERVICES]: allServicesReducer,
    [LATESTREVIEWS]: latestReviewsReducer,
    [LOGININDETAILS]: loginDetialsReducer,
    [TEAMDETAIL]: teamDetailReducer,
    [SEARCHBYCATEGORY]: searchbyCategoryReducer,
    [CONTACTFORMDETAILS]: contactFormDetaildReducer,
    [REGISTERDETAILS]: registerDetailsReducer,
    [SUBSERVICES]: subServicesReducer,
    [TRENDINGTECHNOLOGIES]: trendingTechnologiesReducer,
    [RESETPASSWORD]: resetPasswordReducer,
    //---------------------------------
    homePanel:homeReducer,
    projectManagerPanel:projectManagerReducer,
    serviceManagerPanel:serviceManagerReducer,
    ordersManagerPanel:ordersManagerReducer,
    requestsManagerPanel:requestManagerReducer,
    userAccountManagerPanel:userAccountManagerReducer,
    reviewsManagerPanel:reviewsManagerReducer,
    offersManagerPanel:offersManagerReducer,
    loginDetails: userProfileReducer,
    recentProjects: recentlyViewedProjectsReducer,
    recentServices: recentlyViewedServicesReducer,
    viewOrder: viewOrderReducer,
    allOrders: allOrdersReducer,
    trendingServices: trendingServicesReducer,
    dashboardNotifications:dashboardNotificationsReducer,
//----------------------------------------
    personalInfo: personalInfoReducer,
    balanceInfo: balanceInfoReducer,
    notificationInfo: notificationInfoReducer,
    paymentInfo: paymentInfoReducer,
    securityInfo: securityInfoSlice,
    criticalInfo:criticalSectionReducer,
    previousPostFilters:previousPostFiltersReducer,
    previousPosts:previousPostsReducer,
    viewPost:viewPostReducer,
  },
});
