//Material-UI
import { Grid, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//Component imports
import { Menubar } from "../Orders/Components/Menubar";
import { Footer } from "../Orders/Components/Footer";
import MobileFooter from "../Orders/Components/MobileFooter";

//Routes
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//CSS
import "../Orders/Components/Styles/FooterStyles.css";
import "../Orders/Components/Styles/MenubarStyles.css";

import "../Orders/Color/Colors.css";
import { Avatar } from "react-lorem-ipsum";
import { OrdersTab } from "../Orders/Components/OrdersTab";

export const OrdersContainer = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <Grid container>
        <Grid item xs={4} sm={12} md={12}>
          <Menubar />
        </Grid>
      </Grid>

      <div className="bodySection1">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={2}></Grid>

          <Grid item xs={10} sm={10} md={10} lg={8} xl={8}>
            <Box>
              <OrdersTab />
            </Box>
          </Grid>
        </Grid>
      </div>

      {/* Footer Section */}
      <div>
        <Grid container style={{ marginTop: "5%" }} spacing={0}>
          <Grid item md={12} xs={12} sm={12}>
            {isDesktopOrLaptopOrTabletScreen ? <Footer /> : <MobileFooter />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
