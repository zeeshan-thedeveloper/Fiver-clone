import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetailsContainer from "./ServiceDetailsContainer";
import HomeContainer from "./HomeContainer";
import {
  UserDashboardContainer,
  UserDashboardSettings,
  UserDashboardOrders,
  UserDashboardChat,
  UserDashboardViewOrder,
  PostRequestFromMobileUserDashboard,
  UserDashboardShowPreviousPosts,
  UserDashboardViewPostDetails
} from "./UserDashboardContainer";
import { SearchProjectsContainer } from "./SearchProjectsContainer";

import AdminDashboardContainer from './AdminDashboardContainer'
import SubServicesContainer from "./SubServicesContainer";
import AuthenticationContainer from "./AuthenticationContainer"

function Entrance(props) {

  return (

    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" exact>
          <HomeContainer />
        </Route>

        <Route exact path="/ServiceDetails">
          <ServiceDetailsContainer />
        </Route>

        <Route
          exact
          path="/searchProject"
          component={SearchProjectsContainer}
        />
        <Route exact path="/login" component={AuthenticationContainer} />
        <Route exact path="/userdashboard" component={UserDashboardContainer} />
        <Route exact path="/settings" component={UserDashboardSettings} />
        <Route exact path="/orders" component={UserDashboardOrders} />
        <Route exact path="/messaging" component={UserDashboardChat} />
        <Route exact path="/vieworder" component={UserDashboardViewOrder} />
        <Route exact path="/postrequest" component={PostRequestFromMobileUserDashboard} />
        <Route exact path="/previousposts" component={UserDashboardShowPreviousPosts} />
        <Route exact path="/viewpost" component={UserDashboardViewPostDetails} />    
        <Route exact path="/admin" component={AdminDashboardContainer} />
        <Route exact path="/services" component={SubServicesContainer} />

      </Switch>
    </Router>
  );
}

export default Entrance;