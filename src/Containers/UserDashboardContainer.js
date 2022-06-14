import React, { useState } from "react";
//Material-UI
import { Grid, Box, Hidden, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//Component imports

import { Menubar } from "../User Dashboard/Components/Menubar";
import { Footer } from "../User Dashboard/Components/Footer";
import MobileFooter from "../User Dashboard/Components/MobileFooter";

import { UserProfileCard } from "../User Dashboard/Components/UserProfileCard";
import { PostRequestCard } from "../User Dashboard/Components/PostRequestCard";
import { LinkedAccounts } from "../User Dashboard/Components/LinkedAccounts";
import { OngoingOrders } from "../User Dashboard/Components/OngoingOrders";
import { TrendingServices } from "../User Dashboard/Components/TrendingServices";
import { RecentlyViewedServices } from "../User Dashboard/Components/RecentlyViewedServices";
import { RecentlyViewedProjects } from "../User Dashboard/Components/RecentlyViewedProjects";

//CSS
import "../User Dashboard/Components/Styles/FooterStyles.css";
import "../User Dashboard/Components/Styles/MenubarStyles.css";
import "../User Dashboard/Components/Styles/UserDashboardStyles.css";
import "../User Dashboard/Components/Styles/TrendingServicesStyles.css";
import "../User Dashboard/Color/Colors.css";

import { UserProfileCardForMobile } from "../User Dashboard/Components/UserProfileCardForMobile";
import { AccountSettingsSidebar } from "../User Dashboard/Components/AccountSettingsSidebar";
import { AccountSettingsPersonalInfo } from "../User Dashboard/Components/AccountSettings/AccountSettingsPersonalInfo";
import { AccountSettingsPaymentMethods } from "../User Dashboard/Components/AccountSettings/AccountSettingsPaymentMethods";
import { AccountSettingsSecurity } from "../User Dashboard/Components/AccountSettings/AccountSettingsSecurity";
import { AccountSettingsNotifications } from "../User Dashboard/Components/AccountSettings/AccountSettingsNotifications";
import { AccountSettingsBalance } from "../User Dashboard/Components/AccountSettings/AccountSettingsBalance";
import { AccountSettingsCriticalSection } from "../User Dashboard/Components/AccountSettings/AccountSettingsCriticalSection";

import { Orders } from "../User Dashboard/Components/Orders";

import { ChatModule } from "../User Dashboard/Components/ChatModule";
import { ViewOrder } from "../User Dashboard/Components/ViewOrder";
import { PostRequestFromMobile } from "../User Dashboard/Components/PostRequestFromMobile";
import { PreviousPost } from "../User Dashboard/Components/PreviousPost";
import { ViewPostDetails } from "../User Dashboard/Components/ViewPostDetails";

import Scroll from "./Scroll";
export const UserDashboardContainer = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <DashboardHome />
      <FooterComponent />
    </Scroll>
  );
};

export const UserDashboardSettings = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <SettingsContainer />
      <FooterComponent />
    </Scroll>
  );
};

export const UserDashboardOrders = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <OrdersContainer />
      <FooterComponent />
    </Scroll>
  );
};

export const UserDashboardChat = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <Scroll>
      <DashboardMenu />
      <ChatContainer />
      {isDesktopOrLaptopOrTabletScreen ? <FooterComponent /> : ""}
    </Scroll>
  );
};

export const UserDashboardViewOrder = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <ViewOrderContainer />
      <FooterComponent />
    </Scroll>
  );
};

export const PostRequestFromMobileUserDashboard = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <PostRequestFromMobileContainer />
      <FooterComponent />
    </Scroll>
  );
};

export const UserDashboardShowPreviousPosts = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <PreviousPostContainer />
      <FooterComponent />
    </Scroll>
  );
};

export const UserDashboardViewPostDetails = () => {
  return (
    <Scroll>
      <DashboardMenu />
      <ViewPostDetailsContainer />
      <FooterComponent />
    </Scroll>
  );
};

const DashboardMenu = () => {
  return (
    <Grid container>
      <Grid item xs={4} sm={12} md={12}>
        <Menubar />
      </Grid>
    </Grid>
  );
};

const DashboardHome = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={1} xl={2}></Grid>
        {/* Hide profile card, linked accounts and post request options on mobile screen */}
        <Hidden only={["xs"]}>
          <Grid item sm={3} md={3} lg={2} xl={2}>
            <Box>
              <UserProfileCard />
            </Box>
            <Box mt={5}>
              <PostRequestCard />
            </Box>
            <Box mt={5}>
              <LinkedAccounts />
            </Box>
          </Grid>
        </Hidden>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Box mt={-8} mb={5}>
              <UserProfileCardForMobile />
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Hidden>

        <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
          <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
            <OngoingOrders />
          </Box>
          <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} mt={4} p={0.5}>
            <TrendingServices />
          </Box>
          <Box
            ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0}
            mt={4}
            p={0.5}
          >
            <Box>
            <RecentlyViewedServices />
            </Box>
            <Box mt={4}>
            <RecentlyViewedProjects />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const SettingsContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  const [step, setStep] = useState(0);
  function setCurrentStep(stepNumber) {
    setStep(stepNumber);
  }

  function renderStep() {
    if (step == 0) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsPersonalInfo />
        </Box>
      );
    } else if (step == 1) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsPaymentMethods />
        </Box>
      );
    } else if (step == 2) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsSecurity />
        </Box>
      );
    } else if (step == 3) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsNotifications />
        </Box>
      );
    } else if (step == 4) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsBalance />
        </Box>
      );
    } else if (step == 5) {
      return (
        <Box ml={isDesktopOrLaptopOrTabletScreen ? 8 : 0} p={0.5}>
          <AccountSettingsCriticalSection />
        </Box>
      );
    }
  }

  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={1} xl={2}></Grid>
        {/* Hide profile card, linked accounts and post request options on mobile screen */}
        <Hidden only={["xs"]}>
          <Grid item sm={3} md={3} lg={2} xl={2}>
            <Box>
              <AccountSettingsSidebar currentStep={setCurrentStep} />
            </Box>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
          <Box>{renderStep}</Box>
        </Grid>{" "}
        <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};

const OrdersContainer = () => {
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <Box>
            <Orders />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};

const ChatContainer = () => {
  return (
    <div>
      <Grid container>
        {/* <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <Box> */}
          <ChatModule />
          {/* </Box> */}
        </Grid>
        {/* <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid> */}
      </Grid>
    </div>
  );
};

const ViewOrderContainer = () => {
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <Box>
            <ViewOrder />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};

const PreviousPostContainer = () => {
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <Box>
            <PreviousPost />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};
const PostRequestFromMobileContainer = () => {
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <Box>
            <PostRequestFromMobile />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};

export const ViewPostDetailsContainer = () => {
  return (
    <div className="bodySection1">
      <Grid container>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
          <Box>
            <ViewPostDetails />
          </Box>
        </Grid>
        <Grid item xs={0} sm={1} md={1} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
};
const FooterComponent = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <Grid container style={{ marginTop: "5%" }} spacing={0}>
        <Grid item md={12} xs={12} sm={12}>
          {isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
        </Grid>
      </Grid>
    </div>
  );
};
