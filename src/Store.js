import { configureStore } from "@reduxjs/toolkit";
import latestProjectsReducer from "./Home/Components/Slices/HomePageSlices/LatestProjectSlice";
import allServicesReducer from "./Home/Components/Slices/HomePageSlices/ServicesSlices";
import latestReviewsReducer from "./Home/Components/Slices/HomePageSlices/UserReviewsSlice";
import loginDetialsReducer from "./Home/Components/Slices/AuthenticationPageSlices/LoginFormSlice";
import {
  LATESTPROJECTS,
  ALLSERVICES,
  LATESTREVIEWS,
  SEARCHBYCATEGORY,
  TRENDINGTECHNOLOGIES,
} from "./Home/Components/Slices/HomePageSlices/HomePageConstants";
import {
  LOGININDETAILS,
  REGISTERDETAILS,
  RESETPASSWORD,
} from "./Home/Components/Slices/AuthenticationPageSlices/AuthenticationPageConstants";
import {
  TEAMDETAIL,
  CONTACTFORMDETAILS,
} from "./Home/Components/Slices/AboutPageSlices/AboutPageConstant";
import teamDetailReducer from "./Home/Components/Slices/AboutPageSlices/OurTeamSlices";
import searchbyCategoryReducer from "./Home/Components/Slices/HomePageSlices/SearchCardSlice";
import contactFormDetaildReducer from "./Home/Components/Slices/AboutPageSlices/ContactUsGlobalFormSlice";
import registerDetailsReducer from "./Home/Components/Slices/AuthenticationPageSlices/RegisterDetailsSlice";
import resetPasswordReducer from "./Home/Components/Slices/AuthenticationPageSlices/ResetPasswordSlice";
import { SUBSERVICES } from "./Home/Components/Slices/SubServicesPageSlices/SubServiceConstants";
import subServicesReducer from "./Home/Components/Slices/SubServicesPageSlices/SubServiceSlice";
import trendingTechnologiesReducer from "./Home/Components/Slices/HomePageSlices/TrendingTechnologiesSlice";

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
  },
});
