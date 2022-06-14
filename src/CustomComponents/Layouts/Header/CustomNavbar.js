import React from "react";
import TopNavbar from "./TopNavbar";
import NavbarTabs from "./NavbarTabs";
import {
  AppBar,
  Grid,
  Box,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
import colors from "../../../Theme/colors";

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
      currentSelectedTabIndex: 0,
      handelTabIndex: props.handelTabIndex.bind(props.handelTabIndex()),
      handelTabChangeEvent: this.handelTabChangeEvent.bind(this),
      progress: 0,
      componentsLoadingProgressId: "",
      isBarDisplay: "visible",
    };
  }

  handelTabChangeEvent = (event, indexSelected) => {
    this.state.handelTabIndex(event, indexSelected);
    this.setState({
      currentSelectedTabIndex: indexSelected,
    });
  };

  //--------------------------------------
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    const increamentPerSingleComponent =
      100 / this.props.isComponentsLoaded.length;
    console.log("loading array length is " + increamentPerSingleComponent);

    // for progrssbar
    const componentsLoadingProgress = setInterval(() => {
      let pro = this.state.progress + increamentPerSingleComponent;
      let absolutePro = Math.min(pro, 100);
      console.log(absolutePro);
      this.setState({ progress: absolutePro });
    }, [this.props.isComponentsLoaded]);

    this.setState({ componentsLoadingProgressId: componentsLoadingProgress });
  }
  //--------------------------------------

  componentDidUpdate() {
    if (this.state.progress === 100) {
      clearInterval(this.state.componentsLoadingProgressId);
      this.setState({ isBarDisplay: "none", progress: 101 });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <AppBar style={{ backgroundColor: "transparent" }}>
        <div className="navdiv">
          <div className={this.state.show ? "active" : "hidden"}>
            <TopNavbar
              navbarMenuOptions={this.props.navbarMenuOptions}
              isAvatar={this.props.isAvatar}
              navbarAvatar={this.props.navbarAvatar}
              isNavBarIconButtons={this.props.isNavBarIconButtons}
              navbarIconButtons={this.props.navbarIconButtons}
              drawerMenuOptions={this.props.drawerMenuOptions}
              darwerMenuExtraOptions={this.props.darwerMenuExtraOptions}
              drawerListItemAvatar={this.props.drawerListItemAvatar}
            />
            <Box sx={{ width: "100%" }} display={this.state.isBarDisplay}>
              <LinearProgress
                variant="determinate"
                value={this.state.progress}
                style={{
                  backgroundColor: colors.primary,
                }}
              />
            </Box>
            {this.props.isNavbarTabs && (
              <Grid container>
                <Grid item xs={12}>
                  <Box px={0}>
                    <NavbarTabs
                      handelTabChangeEvent={this.state.handelTabChangeEvent}
                      packageContainerStickyNess={
                        this.props.packageContainerStickyNess
                      }
                      navbarTabsOptions={this.props.navbarTabsOptions}
                    />
                  </Box>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </AppBar>
    );
  }
}
